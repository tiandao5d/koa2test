const fs = require("fs");
const path = require("path");
const extract = require("extract-zip");
const decompress = require("decompress");
let { eachDir } = require("../services/fsformat");
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

// 解压steam 上的 mods
async function unzipMods(src = "/Users/linxu/work/don't", tosrc = "/Users/linxu/work/don't/def") {
  console.log("解压开始");
  let list = eachDir({ src, level: 1 }).filter((o) => o.name.endsWith(".zip"));
  for(let item of list){
    await fn(item.src, path.join(tosrc, getName(item.name)));
  }
  console.log("解压完成");
  function getName(name) {
    name = name.split(".")[0];
    let arr = name.split("_");
    arr.shift();
    let n = arr.join("_").trim();
    return n || name;
  }
  async function fn(source, target) {
    let arr = [];
    try {
    await decompress(source, target, {
      map(file) {
        arr.push(file.path);
        return file;
      },
    });
    } catch (err) {
      console.log(source, "这个路径到这个路径", target, "的解压出错了，错误信息如下");
      console.log(err);
    }
    if (arr.length === 1 && arr[0].endsWith(".zip")) {
      let nsrc = path.join(target, arr[0]);
      await fn(nsrc, target);
      fs.unlinkSync(nsrc);
    }
  }
}


