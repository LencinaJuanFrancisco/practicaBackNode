const express = require('express')
const router = express.Router()

const { faker } = require('@faker-js/faker');

router.get('/',(req,res)=>{
  const users = []
  const {size}= req.query
  const limit = size || 10
  for (let index = 0; index < limit; index++) {
    users.push({
      userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email()
    })

  }
  res.json(users)
})


module.exports = router
