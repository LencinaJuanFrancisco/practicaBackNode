const express = require('express')

const productsRouters = require('./productsRoutes')
const usersRouters = require('./usersRoutes')
const categoriesRouters = require('./categoriesRoutes')

function routerApi (app){
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/products', productsRouters)
  router.use('/users',usersRouters)
  router.use('/categories',categoriesRouters)
}

module.exports = routerApi
