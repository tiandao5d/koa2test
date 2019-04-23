const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
module.exports =  (router) => {
  router.get('/aaa', async function (ctx, next) {
    // ctx.set('Content-Encoding', 'gzip');
    // ctx.body = fs.statSync(path.join(__dirname, '../public/123.html'));
    let s = path.join(__dirname, '../public/123.html');
    ctx.body = fs.createReadStream(s).pipe(zlib.createGzip())
  })
  router.get('/', async (ctx, next) => {
    ctx.state = {
      title: 'Koa2'
    }
    await ctx.render('index', ctx.state)
  })
}
