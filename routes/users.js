let vd = require("./venueDict");
const fs = require("fs");
const path = require("path");
const open = require('open');
const stream = require("stream");
const config = require('../config')
function join(p) {
  return path.join(__dirname, p);
}

module.exports = (router) => {
  router.get("/user", async function (ctx, next) {
    ctx.set({ "Cache-Control": "max-age=10" });
    console.log(111);
    ctx.body = "胜多负少";
  });
  // router.post('/user', async function (ctx, next) {
  //   ctx.set('Cache-Control', 'max-age=10');
  //   // ctx.set('Pragma', 'no-cache');
  //   ctx.body = '胜多负少';
  // })
};

// nodejs 遍历文件夹
// const fs = require('fs');
// const path = require('path');
function eachDir(dirstr) {
  let arr = [];
  aa(dirstr);
  function aa(dirs) {
    let list = fs.readdirSync(dirs);
    list.forEach((s) => {
      s = path.join(dirs, s);
      let stat = fs.statSync(s);
      if (stat.isDirectory()) {
        // 文件夹
        aa(s);
      } else {
        arr.push(s);
      }
    });
  }
  return arr;
}


function copyFileDir(odir, ndir) {
  try {
    fs.rmdirSync(ndir, { recursive: true });
  } catch (err) {
    fs.mkdirSync(ndir);
  }
  let arr = [];
  try {
    arr = eachDir(odir);
  } catch (error) {
    arr = [];
  }

  arr = arr.map((s) => {
    return {
      old: s,
      to: s.replace(odir, ndir),
    };
  });
  arr.forEach((item) => {
    try {
      fs.copyFileSync(item.old, item.to);
    } catch (error) {
      fs.mkdirSync(path.parse(item.to).dir);
      fs.copyFileSync(item.old, item.to);
    }
  });
  if ( arr.some(o => o.to.includes('index.html')) ) {
    open(`http://localhost:${config.port}/apac/index.html`)
  }
}
