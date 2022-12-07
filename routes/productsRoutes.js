const express = require('express')
var router = express.Router()
const { faker } = require('@faker-js/faker');

router.get('/',(req,res)=>{
  const products = []
  const {size} = req.query
  const limit = size || 100

    for (let index = 0; index < limit; index++) {
     products.push({
       name: faker.commerce.productName(),
       price: parseInt( faker.commerce.price(),10),
       image: faker.image.imageUrl()
     })
    }
  res.json(products)
 })
 router.get('/filter',(req,res)=>{
  res.send('soy un filter')
 })
 router.get('/:id',(req,res)=>{
  const {id}=req.params
  res.json({
    id
  })
 })
 router.post('/',(req,res)=>{
  const body = req.body
  res.json({
    message: "create",
    data: body
  })

 })

 router.patch('/:id',(req,res)=>{
  const {id}= req.params
  const body = req.body
  res.json({
    message: "update",
    id,
    data: body
  })
})
  router.delete('/:id',(req,res)=>{
    const {id} = req.params
    res.json({
      message:"delete",
      id
    })
  })


 module.exports = router
