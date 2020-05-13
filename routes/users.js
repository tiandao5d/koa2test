let vd = require('./venueDict');
const fs = require('fs');
const path = require('path');
const stream = require('stream');
function join(p) {
  return path.join(__dirname, p);
}

module.exports = (router) => {
  router.get('/user', async function (ctx, next) {
    ctx.body = '胜多负少';
  })
}

// nodejs 遍历文件夹
// const fs = require('fs');
// const path = require('path');
function eachDir ( dirstr ) {
  let arr = [];
  aa(dirstr);
  function aa ( dirs ) {
    let list = fs.readdirSync(dirs);
    list.forEach(s => {
      s = path.join(dirs, s);
      let stat = fs.statSync(s);
      if ( stat.isDirectory() ) { // 文件夹
        aa(s);
      } else {
        arr.push(s);
      }
    })
  }
  return arr;
}
// yya('controllers', 'controller', 'controllers')
// yya('directives', 'directive', 'directives')
// yya('filters', 'filter', 'filters')
// yya('services', 'service', 'services')
// yya('utils', 'service', 'utils')
function yya (kw, k1, k2) {
  let src = `/Users/linxu/work/webpackleap/src/js/${kw}`;
  let arr = eachDir(src);
  let str = '';
  arr = arr.filter(s => s.includes('.js') && !s.includes('index.js'));
  str = arr.map(s => {
    return `require('${s.replace(src, '.')}')`;
  }).join(',\n');
  str = `import angular from 'angular';
const aModule = angular.module('app.${k2}', []);
let pall = [${str}];
pall.forEach(item => {
  if (item.fn && typeof item.fn === 'function') {
    aModule['${k1}'](item.name, item.fn);
  }
});
export default aModule;
`
  fs.writeFileSync(path.join(src, './index.js'), str);
}

// yyb('controllers', 'controller', 'controllers')
// yyb('directives', 'directive', 'directives')
// yyb('filters', 'filter', 'filters')
// yyb('services', 'service', 'services')
// yyb('utils', 'service', 'utils')
function yyb (kw, k1, k2) {
  let src = `/Users/linxu/work/webpackleap/src/js/${kw}`;
  let arr = eachDir(src);
  let str = '';
  let b = null;
  let nstr = '';
  arr = arr.filter(s => s.includes('.js') && !s.includes('index.js'));
  arr.some((s, i) => {
    str = fs.readFileSync(s).toString();
    nstr = str.replace(/import([^;]+)from(\s*)(['|"]+)[^;\n]+(['|"]+)/g, function(ys) {
      b = 111;
      ys = ys.replace('import', 'let').replace(/from[\s]+/g, '= require(');
      ys = ys + ')';
      return ys;
      }
    );
    if ( nstr !== str ) {
      fs.writeFileSync(s, nstr);
    }
    // if ( b === 111 ) {
    //   return true;
    // }
  });
}