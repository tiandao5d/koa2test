const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const open = require("open");
const server = require("http").createServer(app.callback());
const views = require("koa-views");
const co = require("co");
const convert = require("koa-convert");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const debug = require("debug")("koa2:server");
const path = require("path");
// var browserSync = require("browser-sync").create();

const config = require("./config");
const routes = require("./routes");

const port = process.env.PORT || config.port;

// error handler
onerror(app);

// middlewares
app
  .use(cors)
  .use(bodyparser())
  .use(json())
  .use(logger())
  .use(require("koa-static")(__dirname + "/public"))
  .use(require("koa-static")(__dirname + "/publicy"))
  .use(
    views(path.join(__dirname, "/views"), {
      options: { settings: { views: path.join(__dirname, "views") } },
      map: { njk: "nunjucks" },
      extension: "njk",
    })
  )
  .use(router.routes())
  .use(router.allowedMethods());

// 设置跨域响应头
async function cors(ctx, next) {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
}

routes(router);
app.on("error", function (err, ctx) {
  console.log(err);
  logger.error("server error", err, ctx);
});

// browserSync.init({
//   server: './public',
//   browser: 'chrome',
//   port: config.port
// });
// browserSync.watch('./public/123.html').on('change', browserSync.reload)
abc();
function abc() {
  var io = require("socket.io")(server, {
    cors: {
      origin: '*'
    }
  });
  var chat = io.of("/chat").on("connection", (socket) => {
    // 实时通讯视频聊天
    socket.on("vcall_rtcmsg", async (msg) => {
      console.log(msg)
      chat.emit("vcall_rtcmsg", msg);
    });
  });
}
module.exports = server.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
