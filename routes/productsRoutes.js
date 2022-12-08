const express = require('express')
var router = express.Router()
const ProductsServices = require('./../services/productsServices')


const service = new ProductsServices()

router.get('/',(req,res)=>{
  res.json( service.find())
 })
 router.get('/filter',(req,res)=>{
  res.send('soy un filter')
 })
 router.get('/:id',(req,res)=>{
  const {id}=req.params
  const product = service.finOne(id)
  res.status(200).json(product)
 })
 router.post('/',(req,res)=>{
  const body = req.body
  const newProduct= service.create(body)
  res.status(201).json({
    message: "created",
    data: newProduct
  })

 })

 router.patch('/:id',(req,res)=>{
  const {id}= req.params
  const body = req.body
const upDataProduct = service.updete(id,body)

  res.status(200).json({
    message: "updated",
    data: upDataProduct
  })
})
  router.delete('/:id',(req,res)=>{
    const {id} = req.params
    const rta= service.delete(id)
    res.json({
      message:"delete",
      rta
    })
  })


 module.exports = router
