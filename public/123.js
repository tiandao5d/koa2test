var targetStoreLegendController = function($timeout, $scope, Util, ChainService, TargetStorePermissionsService, TargetStoreSHLRankingService, TargetStorePageService) {
    'ngInject';
    var that = this;
    that.save = save;
    let cclColorCls = null;
    let episodeColorCls = null;
    let baseColorCls = null;
    let editorPage = null;

    // 关于进入编辑界面，编辑界面显示问题
    class EditorPage {
        constructor (curEditing) {
            curEditing = curEditing || null;
            this.isEditing = false; // 是否进入编辑界面
            this.curEditing = curEditing; // 'lgl_sku', 'lgl_latest_episode', null
            this.oriProperty = curEditing; // 保存原数据
            this.isFold = false; // 可收起界面, false是展开状态，true为收起状态
        }
        toggleFold () {
            if ( this.isEditing === false ) { // 只有非编辑状态时，才可以操作界面展开隐藏
                this.isFold = !this.isFold;
            }
        }
        toggleEditing () {
            this.isEditing = !this.isEditing;
            if ( this.isEditing === true && this.isFold === true ) { // 编辑状态时，必须展开界面
                this.isFold = false;
            }
        }
        isItem ( item ) {
            return this.curEditing === item;
        }
        oriIsItem ( item ) {
            return this.oriProperty === item;
        }
        onSelect ( item ) {
            this.curEditing = item;
        }
    }

    function copyObjStr (o, oo) {
        o = o || {};
        let t = '';
        for ( let k in oo ) {
            t = typeof oo[k];
            if ( t === 'string' || t === 'number' ) {
                o[k] = oo[k];
            }
        }
        return o;
    }
    // 城市选择的权限，这里只是用于列出所有可用的episode
    class EpisodeColorCls {
        constructor () {
            this.allEpisodeCompany = []; // 存放所有有episode数据的公司
            this.selectEpisodeCompany = []; // 选中的公司数据列表
            this.listEpisodeCompany = []; // 列表可显示有episode数据的公司
            this.selectEpisode = []; // 已经选中的episode
            this.dColor = ''; // 记录默认颜色
            this.dColorObj = null; // 用于颜色选择对象
            this.oriSEpisode = null; // 记录默认选择的数据，原数据
            this.allActionsObj = null; // 记录所有权限数据
        }
        async init ( selectEpisode, dColor ) {
            this.dColor = dColor || Util.targetStoreColors[0];
            this.dColorObj = {
                color: this.dColor,
                isOpen: false
            }
            let sArr = [];
            let allActionsObj = await TargetStorePermissionsService.allActionsCls.get();
            this.allEpisodeCompany = allActionsObj.select && allActionsObj.select.shl_data;
            this.allEpisodeCompany = this.allEpisodeCompany.map(cyo => { // 复制并格式化
                let arr = cyo.episode.map(eeo => {
                    let o = Object.assign({}, eeo);
                    o.colorObj = { // 便于处理颜色问题
                        color: this.dColor,
                        isOpen: false
                    };
                    o = copyObjStr(o, cyo);
                    if ( selectEpisode ) { // 默认被选中状态
                        selectEpisode.some(soo => {
                            if ( soo.shl === o.shl && soo.company_id === o.company_id ) {
                                o.colorObj.color = soo.fill;
                                sArr.push(o);
                                return true;
                            }
                        })
                    }
                    return o;
                });
                let o = copyObjStr(null, cyo);
                o.episode = arr;
                return o;
            })
            this.selectEpisode = sArr;
            this.oriSEpisode = angular.copy(sArr);
            this.resetLSEpisode();
            if ( this.initAfter ) {
                this.initAfter();
            }
        }
        onColorToggle ( item ) { // 本是用来展开或关闭颜色选择器，暂时未用到
            if ( item === 'clear' ) { // 关闭所有
                this.selectEpisodeCompany.forEach(o => {
                    o.selectEpisode.forEach(oo => oo.colorObj.isOpen = false)
                });
            } else if ( item === 'all' ) { // 展开所有
                this.selectEpisodeCompany.forEach(o => {
                    o.selectEpisode.forEach(oo => oo.colorObj.isOpen = true)
                });
            } else {
                item.isOpen = !item.isOpen;
            }
        }
        emitChange () { // 事件触发，选中的数据改变时触发
            if ( this.onChange ) {
                this.onChange();
            }
        }
        onRemoveEpisode ( item ) { // 删除选中的episode
            let items = null;
            if ( item instanceof Array ) {
                items = item;
            } else {
                items = [item];
            }
            this.selectEpisode = this.selectEpisode.filter(o => !items.some(oo => {
                if ( oo.shl === o.shl ) {
                    oo.colorObj = { // 重置颜色数据
                        color: '',
                        isOpen: false
                    };
                    return true;
                }
            })); // 过滤出来items中没有的数据
            this.resetLSEpisode(); // 重置列表
            this.emitChange(); // 触发数据改变的事件
        }
        onSelectEpisode ( item ) { // 选中episode
            let items = null;
            if ( item instanceof Array ) {
                items = item;
            } else {
                items = [item];
            }
            items = items.filter(o => !this.selectEpisode.some(oo => (oo.shl === o.shl && oo.company_id === o.company_id))); // 先过滤出选中元素中没有的
            this.selectEpisode = this.selectEpisode.concat(items); // 将选中元素中没有的元素加入
            this.resetLSEpisode(); // 重置列表
            this.emitChange(); // 触发数据改变的事件
        }
        // 获取episode的legend的对象，用于提交
        getEpisodeVal () {
            let selectEpisode = this.selectEpisode.map(o => {
                return {
                    shape: 'circle',
                    fill: o.colorObj.color,
                    stroke: o.colorObj.color,
                    property_value: o.shl,
                    shl: o.shl,
                    desc: o.shl_desc,
                    company_id: o.company_id
                }
            });
            let dColorObj = {
                shape: 'circle',
                fill: this.dColorObj.color,
                stroke: this.dColorObj.color
            }
            let legend = angular.copy(that.legend);
            legend.type = 'CategorizedPoint';
            legend.property = 'lgl_latest_episode';
            legend.style.detail = {};
            legend.style.detail.default = dColorObj;
            legend.style.detail.list = selectEpisode;
            return legend;
        }
        // 重置选中的公司和列表公司
        resetLSEpisode () {
            let selectEpisodeCompany = [];
            let listEpisodeCompany = [];
            this.allEpisodeCompany.forEach(cyo => {
                if ( this.selectEpisode.some(iso => iso.company_id === cyo.company_id) ) { // 说明这个公司有被选中的episode
                    let listEpisode = [];
                    let selectEpisode = [];
                    cyo.episode.forEach(eeo => {
                        // 这家公司中被选中的episode
                        if ( this.selectEpisode.some(iso => (iso.shl === eeo.shl && iso.company_id === eeo.company_id)) ) { 
                            selectEpisode.push(eeo);
                        } else { // 这家公司中没有被选中的episode
                            listEpisode.push(eeo);
                        }
                    });
                    cyo.listEpisode = listEpisode;
                    cyo.selectEpisode = selectEpisode;
                    selectEpisodeCompany.push(cyo);
                    listEpisodeCompany.push(cyo);
                } else { // 说明这家公司没有被选中的episode，可以直接重置数据
                    cyo.listEpisode = cyo.episode;
                    cyo.selectEpisode = [];
                    listEpisodeCompany.push(cyo);
                }
            });
            // 过滤出非空
            selectEpisodeCompany = selectEpisodeCompany.filter(o => o.selectEpisode.length);
            listEpisodeCompany = listEpisodeCompany.filter(o => o.listEpisode.length);
            this.selectEpisodeCompany = selectEpisodeCompany;
            this.listEpisodeCompany = listEpisodeCompany;
        }
    }

    // ccl的颜色管理工具对象
    class CclColorCls {
        constructor () {
            this.kw = ''; // 用于ccl查询的关键字
            this.oriCcl = []; // 记录请求过来的ccl数据
            this.listCcl = []; // 记录用于列表的ccl数据，不包含选中的ccl数据
            this.selectCcl = []; // 选中的ccl数据
            this.oriSCcl = null; // 用于记录默认的ccl数据
        }
        // 初始化ccl颜色管理工具
        async init ( selectCcl, dColor ) {
            this.dColor = dColor || Util.targetStoreColors[0];
            this.dColorObj = {
                color: this.dColor,
                isOpen: false
            }
            let skus = selectCcl.map(o => o.lgl_sku);
            let items = await this.getCclBySkus(skus);
            items = items.map((o, i) => {
                o.colorObj.color = selectCcl[i].fill;
                let ccl = Object.assign({}, selectCcl[i], o);
                return ccl;
            })
            this.selectCcl = items;
            this.oriSCcl = angular.copy(items);
            return items;
        }

        async getCclBySkus ( skus ) { // 获取给定的sku的详情内容，一个数组为参数
            let items = await ChainService.getCclBySkus(skus);
            items = items.map(o => {
                let ccl = copyObjStr(null, o);
                ccl.colorObj = {
                    color: this.dColor,
                    isOpen: false
                }
                return ccl;
            })
            return items;
        }
        query () { // 用于ccl的搜索
            ChainService.getCcl(this.kw)
            .then(arr => {
                this.oriCcl = arr;
                this.resetListCcl();
            })
        }
        emitChange (item) { // 触发事件元素变化
            if ( this.onChange ) {
                this.onChange(item);
            }
        }
        getSkuVal () { // 获取ccl的legend的对象数据，用于数据提交
            let selectCcl = this.selectCcl.map(o => {
                return {
                    shape: 'circle',
                    fill: o.colorObj.color,
                    stroke: o.colorObj.color,
                    property_value: o.lgl_sku,
                    lgl_sku: o.lgl_sku,
                    desc: o.lgl_biz_name
                }
            });
            let dColorObj = {
                shape: 'circle',
                fill: this.dColorObj.color,
                stroke: this.dColorObj.color
            }
            let legend = angular.copy(that.legend);
            legend.type = 'CategorizedPoint';
            legend.property = 'lgl_sku';
            legend.style.detail = {};
            legend.style.detail.default = dColorObj;
            legend.style.detail.list = selectCcl;
            return legend;
        }
        onRemoveCcl ( item ) { // 删除选中的ccl
            let items = null;
            if ( item instanceof Array ) {
                items = item;
            } else {
                items = [item];
            }
            this.selectCcl = this.filterNotSelect(this.selectCcl, items); // 删除
            this.resetListCcl();
            this.emitChange(item);
        }
        onSelectCcl ( item ) { // 选中ccl
            let items = null;
            if ( item instanceof Array ) {
                items = item;
            } else {
                items = [item];
            }
            items = this.filterNotSelect(items);
            items = items.map(o => {
                if ( !o.colorObj ) {
                    o.colorObj = {
                        color: this.dColor,
                        isOpen: false
                    }
                }
                return o;
            })
            this.selectCcl = this.selectCcl.concat(items);
            this.resetListCcl();
            this.emitChange(item);
        }
        filterNotSelect ( items, selectCcl = this.selectCcl ) { // 第一参数过滤出第二参数中没有的数据
            return items.filter(o => !selectCcl.some(oo => oo.lgl_sku === o.lgl_sku));
        }
        resetListCcl () { // 重置新的列表ccl
            this.listCcl = this.filterNotSelect(this.oriCcl).slice(0, 50);
        }
    }

    // 用于默认颜色的操作处理
    class BaseColorCls {
        constructor () {
            this.dColor = ''; // 默认颜色
            this.colorObj = null; // 用于颜色选择
        }
        init ( dColor ) { // 初始化默认颜色类
            this.dColor = dColor || Util.targetStoreColors[0];
            this.colorObj = {
                color: this.dColor,
                isOpen: false
            }
        }
        getDVal () { // 获取默认颜色的legend对象数据
            let legend = angular.copy(that.legend);
            let dColorObj = {
                shape: 'circle',
                fill: this.colorObj.color,
                stroke: this.colorObj.color
            }
            legend.property = null;
            legend.style.cluster = dColorObj;
            legend.style.detail = dColorObj;
            legend.type = 'Point';
            return legend;
        }
    }

    function init () {
        let style = that.legend && that.legend.style;
        let legendList = (style && style.detail && style.cluster.list) || [];
        let dColor = (style && style.detail && style.cluster.default && style.cluster.default.fill);
        let cColor = (style && style.cluster && style.cluster.fill);
        let property = (that.legend && that.legend.property) || null;

        let eList = property === 'lgl_latest_episode' ? legendList : [];
        episodeColorCls = $scope.episodeColorCls = new EpisodeColorCls();
        episodeColorCls.init(eList, dColor);

        let cList = property === 'lgl_sku' ? legendList : [];
        cclColorCls = $scope.cclColorCls = new CclColorCls();
        cclColorCls.init(cList, dColor);

        baseColorCls = $scope.baseColorCls = new BaseColorCls();
        baseColorCls.init(cColor);

        editorPage = $scope.editorPage = new EditorPage(property);
    }
console.log(that.legend)
    function save(){
        let legend = null;
        if ( editorPage.isItem('lgl_sku') ) {
            legend = cclColorCls.getSkuVal();
        }else if ( editorPage.isItem('lgl_latest_episode') ) {
            legend = episodeColorCls.getEpisodeVal();
        }else if ( editorPage.isItem(null) ) {
            legend = baseColorCls.getDVal();
        }
        if(that.callBack){
            that.callBack(legend);
        }
        editorPage.isEditing = false;
        that.legend = legend;
        init();
    }
    init();
};

module.exports.fn = targetStoreLegendController;
module.exports.name = 'targetStoreLegendController';
