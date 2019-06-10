let vd = require('./venueDict');

module.exports =  (router) => {
  router.get('/user', async function (ctx, next) {
    console.log(22)
    ctx.body = vd;
  })
}
