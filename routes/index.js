const productsRouters = require('./productsRoutes')
const usersRouters = require('./usersRoutes')
const categoriesRouters = require('./categoriesRoutes')
function routerApi (app){
  app.use('/products', productsRouters)
  app.use('/users',usersRouters)
  app.use('/categories',categoriesRouters)
}

module.exports = routerApi
