const open = require('open');
module.exports =  (router) => {
  router.get('/aaa', async function (ctx, next) {
    await open('http://localhost:8800');
  })
  router.get('/', async (ctx, next) => {
    ctx.state = {
      title: 'Koa2'
    }
    await ctx.render('index', ctx.state)
  })
}
