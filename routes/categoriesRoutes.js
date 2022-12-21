const express = require('express')
const router = express.Router()
const CategoryService = require('./../services/categoryService')
const service = new CategoryService()

router.get('/',(req,res)=>{

    const categories = service.find()

  res.json(categories)
})
router.get("/:id",(req,res)=>{
  const {id} = req.params
  const findOne = service.findOne(id)
  res.status(200).json(findOne)
})
router.post("/",(req,res)=>{
  const data = req.body
  const newCategory = service.create(data)
  return res.json({message:"Created", newCategory })
})
router.patch("/:id",(req,res)=>{
  const {id} = req.params
  console.log(id);
  const data = req.body

  const update = service.update(id,data)
  res.json({message:"UpDated",update})
})
router.delete('/:id',(req,res)=>{
  const {id} = req.params
  const rta = service.delete(id)
  res.json({message: `categoria con id ${rta} eliminado`})
})


module.exports = router
