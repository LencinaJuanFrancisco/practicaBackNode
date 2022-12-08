const express = require('express');
const router = express.Router();
const UsersService = require('./../services/usersServices');

const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.finOne(id);
  res.status(200).json(rta);
});
router.post('/', (req, res) => {
  const data = req.body;
  const rta = service.create(data);
  res.status(200).json(rta);
});
router.patch('/:id',(req,res)=>{
  const {id}= req.params
  const body=req.body
  const rta = service.update(id,body)
  res.status(200).json(rta)
})
router.delete('/:id',(req,res)=>{
  const {id} = req.params
  const rta = service.delete(id)
  res.status(200).json({message:"deleted",rta})
})

module.exports = router;
