const router = require('koa-router')()
const controller = require('../controller/index')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

//example
/**
 * .post("/api/user",controller.user.register)
 */

module.exports = router
