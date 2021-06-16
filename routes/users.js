const fs = require("fs");
const path = require("path");
const decompress = require("decompress");
let { eachDir } = require("../services/fsformat");
let fetch = require("node-fetch");
const { PassThrough } = require("stream");
const { genTestUserSig } = require("../services/debug/GenerateTestUserSig");
module.exports = (router) => {
  router.get("/user", async function (ctx, next) {
    ctx.set({ "Cache-Control": "max-age=10" });
    console.log(111);
    ctx.body = "胜多负少";
  });
  router.get("/trtc", async function (ctx, next) {
    const userId = ctx.query.user_id || "xll";
    const roomId = ctx.query.room_id || "10010";
    const obj = genTestUserSig(userId);
    ctx.body = {
      app_id: obj.sdkAppId,
      user_sig: obj.userSig,
      live_user_id: userId,
      room_id: roomId,
    };
  });
  router.get("/live", async function (ctx, next) {
    const liveUserId = ctx.query.liveUserId || "xll";
    const token = ctx.query.token || "10010";
    const obj = await fetch(
      `https://live-stage.nuwaclass.com/live/c/room/v1/preRoom?liveUserId=${liveUserId}&token=${token}`,
    ).then(res => res.json()).catch(err => {
      return err
    });
    console.log(obj);
    ctx.body = obj;
  });
};
fetch(
  "https://live-dev.nuwaclass.com/c/room/v1/preRoom?liveUserId=b0f8dd9553723cd80c07f73d3f863541",
  { headers: { token: "a6003085ec0048869a78c1769f9e2337" } }
)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
// 解压steam 上的 mods
async function unzipMods(src = "/Users/linxu/work/don't", tosrc = "/Users/linxu/work/don't/def") {
  console.log("解压开始");
  let list = eachDir({ src, level: 1 }).filter((o) => o.name.endsWith(".zip"));
  for (let item of list) {
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

// 此方法为深层次的对象合并，但不考虑深拷贝，只考虑对象 [object, Object]，
// 不考虑数组，函数，时间等引用类型，一个深层次的 Object.assign方法
// 主要用途是数据补全，给一个默认格式，然后可以默认补全后面的数据
// 保证数据的完整性
const assignObj = (function assignObj() {
  function isObject(val) {
    return Object.prototype.toString.call(val) === "[object Object]";
  }
  function fn(obj1, obj2) {
    if (!(isObject(obj1) && isObject(obj2))) {
      return obj1;
    }
    for (let k in obj2) {
      let val1 = obj1[k];
      let val2 = obj2[k];
      if (isObject(val1) && isObject(val2)) {
        obj1[k] = fn(val1, val2);
      } else {
        obj1[k] = typeof val2 === "object" ? JSON.parse(JSON.stringify(val2)) : val2;
      }
    }
    return obj1;
  }
  return function (item1, ...args) {
    if (!(args.length > 0)) {
      return item1;
    }
    return args.reduce((total, item) => {
      return fn(total, item);
    }, item1);
  };
})();

function abc(nums = [8, 8], target = 8) {
  let a = -1;
  let b = -1;
  for (let i = 0; i < nums.length; i++) {
    if (a === -1) {
      if (nums[i] === target) {
        a = i;
        b = i;
      }
    } else {
      if (nums[i] === target) {
        b = i;
      } else {
        break;
      }
    }
  }
  return [a, b];
}
// console.log(abc());
