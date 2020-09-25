const Koa = require("koa");
const fs = require("fs");
const app = new Koa();
const open = require("open");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const path = require("path");
// var browserSync = require("browser-sync").create();

const config = require("./config");

// error handler
onerror(app);

// middlewares
app
  .use(bodyparser())
  .use(cors)
  .use(json())
  .use(logger())
  .use(require("koa-static")(__dirname + "/public"))
  .use(require("koa-static")(__dirname + "/publicy"));

// 设置跨域响应头
async function cors(ctx, next) {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
}

app.on("error", function (err, ctx) {
  console.log(err);
  logger.error("server error", err, ctx);
});

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
    fs.mkdirSync(ndir, { recursive: true });
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
      fs.mkdirSync(path.parse(item.to).dir, { recursive: true });
      fs.copyFileSync(item.old, item.to);
    }
  });
  if (arr.some((o) => o.to.includes("index.html"))) {
    open(`http://localhost:${config.port}/apac/index.html`);
  }
}

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
  copyFileDir(
    "/Users/linxu/work/leap4/dist",
    "/Users/linxu/work/koa2test/publicy/apac"
  );
});
