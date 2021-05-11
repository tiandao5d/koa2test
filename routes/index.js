const open = require("open");
const users = require("./users.js");
const fs = require("fs");
const path = require("path");
const test = require('../services/test')
test()
module.exports = (router) => {
  router.get("/abc", async (ctx, next) => {
    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 10000);
    });
    ctx.status = 500;
    ctx.body = { a: "你大爷" };
  });
  router.get("/aaa", async function (ctx, next) {
    await open("http://localhost:8800");
  });
  router.get("/", async (ctx, next) => {
    ctx.state = {
      title: "Koa2",
    };
    await ctx.render("index", ctx.state);
  });
  users(router);
};

function readDirFn(_url) {
  function fn(url) {
    let arr = fs.readdirSync(url);
    arr = arr.map((s) => {
      s = path.join(url, s);
      const stat = fs.statSync(s);
      if (stat.isDirectory()) {
        return fn(s);
      }
      return s;
    });
    return arr;
  }
  let arr = fn(_url);
  arr = arr.flat();
  return arr;
}

// console.log(aaa());
function aaa(pattern = "abba", s = "dog a a dog") {
  let a = s.split(" ");
  let o = {};
  let l = pattern.length;
  if(l !== a.length){
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    let k = '_' + pattern[i];
    if (!(o[k] || o[a[i]])) {
      o[k] = a[i];
      o[a[i]] = pattern[i];
    }
    a[i] = o[a[i]];
  }
  return a.join('') === pattern;
}
