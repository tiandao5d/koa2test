let vd = require("./venueDict");
const fs = require("fs");
const path = require("path");
const open = require("open");
const stream = require("stream");
const config = require("../config");
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
// 如果options只是一个路径地址的话，会直接遍历递归返回所有文件，不包括文件夹
// options.src 表示文件夹路径
// options.onlyFile 是否只需要返回文件路径列表，不需要文件夹路径列表
// options.level 循环层级必须大于0，不传，传0或传其他值表示一直递归
// 如果options只是个字符串的话，则相当于是 只传了 {src}
// const fs = require('fs');
// const path = require('path');
function eachDir(options) {
  if (typeof options === "string") {
    options = { src: options };
  }
  let { src: dirstr, onlyFile = true, level = 0 } = options;
  let arr = [];
  level = parseInt(level); // 最大层级
  level = level > 0 ? level : 0;
  aa(dirstr);
  function aa(dirs) {
    // 当前层级
    let dlevel =
      dirs
        .replace(dirstr, "")
        .split(/\/|\\/g)
        .filter((s) => s).length + 1;
    let list = fs.readdirSync(dirs);
    list.forEach((s) => {
      let o = { src: path.join(dirs, s), name: s, type: "file" };
      let stat = fs.statSync(o.src);
      if (stat.isDirectory()) {
        if (onlyFile === false) {
          o.type = "dir";
          arr.push(o);
        }
        if (level === 0 || level > dlevel) {
          // 文件夹
          aa(o.src);
        }
      } else {
        arr.push(o);
      }
    });
  }
  return arr;
}

// 将一个文件夹中的所有文件，遍历递归复制到另一个文件夹中
function copyFileDir(odir, ndir) {
  try {
    fs.rmdirSync(ndir, { recursive: true });
  } catch (err) {
    fs.mkdirSync(ndir, { recursive: true });
  }
  let arr = [];
  try {
    arr = eachDir(odir)
      .filter((o) => o.type === "file")
      .map((o) => o.src);
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
      fs.mkdirSync(path.parse(item.to).dir, { recursive: true });
      fs.copyFileSync(item.old, item.to);
    }
  });
  if (arr.some((o) => o.to.includes("index.html"))) {
    open(`http://localhost:${config.port}/apac/index.html`);
  }
}

// 覆盖文件夹内容，只会遍历第一层级
// 从一个文件夹中拿出数据放在另一个文件夹中
// 以源文件夹为基准，如果目标文件夹中存在第一级别存在同名则直接覆盖
// 如果目标文件夹第一层级中没有对应，则直接复制粘贴
function coverDirCon(odir = "/Users/linxu/work/don't/abc", tdir = "/Users/linxu/work/don't/def") {
  let olist = eachDir({ src: odir, onlyFile: false, level: 1 })
    .filter((o) => o.type === "dir")
    .map((o) => {
      o.tsrc = path.join(tdir, o.name);
      return o;
    });
  olist.forEach((o) => {
    copyFileDir(o.src, o.tsrc);
  });

  console.log(olist);
}
// coverDirCon();
