// 一个提示工具
// 2019-08-08
// 动画样式完全来自animate.css
// 也可以自定义动画样式

// 此处参考jQuery的方式引入
;(function( global, factory ) {
	'use strict';
	if ( typeof module === 'object' && typeof module.exports === 'object' ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( 'jQuery requires a window with a document' );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}
})(typeof window !== 'undefined' ? window : this, function ( global, noGlobal) {
	class xlToast {
		constructor() {
			let dOption = {
				conClass: 'ngui-toast',
				type: ['warning', 'error', 'success', 'info', 'normal'],
				ani: [
					['bounceIn', 'bounceOut'],
					['bounceInDown', 'bounceOutDown'],
					['bounceInLeft', 'bounceOutLeft'],
					['bounceInRight', 'bounceOutRight'],
					['bounceInUp', 'bounceOutUp'],
					['fadeIn', 'fadeOut'],
					['fadeInDown', 'fadeOutDown'],
					['fadeInDownBig', 'fadeOutDownBig'],
					['fadeInLeft', 'fadeOutLeft'],
					['fadeInLeftBig', 'fadeOutLeftBig'],
					['fadeInRight', 'fadeOutRight'],
					['fadeInRightBig', 'fadeOutRightBig'],
					['fadeInUp', 'fadeOutUp'],
					['fadeInUpBig', 'fadeOutUpBig'],
					['flipInX', 'flipOutX'],
					['flipInY', 'flipOutY'],
					['lightSpeedIn', 'lightSpeedOut'],
					['rotateIn', 'rotateOut'],
					['rotateInDownLeft', 'rotateOutDownLeft'],
					['rotateInDownRight', 'rotateOutDownRight'],
					['rotateInUpLeft', 'rotateOutUpLeft'],
					['rotateInUpRight', 'rotateOutUpRight'],
					['slideInUp', 'slideOutUp'],
					['slideInDown', 'slideOutDown'],
					['slideInLeft', 'slideOutLeft'],
					['slideInRight', 'slideOutRight'],
					['zoomIn', 'zoomOut'],
					['zoomInDown', 'zoomOutDown'],
					['zoomInLeft', 'zoomOutLeft'],
					['zoomInRight', 'zoomOutRight'],
					['zoomInUp', 'zoomOutUp'],
					['rollIn', 'rollOut']
				],
				toBox: document.body,
				timer: 3000,
				html: '啥也没有'
			};
			dOption.curType = 'normal';
			dOption.curAni = this.randomItem(dOption.ani);
			dOption.qConClass = '.' + dOption.conClass;
			this.dOption = dOption;
			this.hasAni = ('animation' in document.body.style)
			this.eles = [];
		}
		randomItem(arr) {
			let max = arr.length - 1;
			let min = 0;
			return arr[parseInt(Math.random() * (max - min + 1) + min)];
		}
		
		open(option = {}) {
			let dOption = Object.assign({}, this.dOption, option);
			let div = document.createElement('div');
			let hasAni = this.hasAni;
			let curAni = dOption.randomAni ? this.randomItem(dOption.ani) : dOption.curAni;
			let timer = dOption.timer;
			let curType = dOption.curType;
			let toBox = dOption.toBox;
			let showClass = dOption.conClass + '-show';
			let addClass = [curAni[0], 'animated', showClass];

			div.className = dOption.conClass;
			div.innerHTML = dOption.html;
			if (hasAni) {
				div.classList.add(...addClass);
				div.addEventListener('animationend', animationend);
			} else {
				outRemove();
			}
			div.addEventListener('click', () => {
				clearRemove(true);
			});
			div.addEventListener('mouseenter', () => {
				clearTimeout(dOption.outIndex);
			});
			div.addEventListener('mouseleave', () => {
				outRemove();
			});

			toBox.appendChild(div);

			function clearRemove () { // 清除计时，删除元素
				if ( arguments[0] === true ) {
					clearTimeout(dOption.outIndex);
				}
				if ( hasAni ) {
					div.classList.remove(...addClass);
					div.classList.add(curAni[1], 'animated');
				} else {
					toBox.removeChild(div);
				}
			}

			function animationend() { // 动画完成后执行
				if (div.classList.contains(showClass)) { // 显示动画完成
					outRemove();
				} else { // 删除动画完成
					toBox.removeChild(div);
				}
			}
			function outRemove () { // 计时器，指定时间后关闭
				return dOption.outIndex = setTimeout(() => {
					clearRemove();
				}, timer);
			}

		}
	}
	if ( !noGlobal ) {
		global.xlToast = xlToast;	
	}
	return xlToast;
})