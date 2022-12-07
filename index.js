const express = require('express')
const routerApi = require('./routes')
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
  res.send('hola mundo')
})

routerApi(app)

app.listen(PORT,()=>{
  console.log('local host corriendo en PORT ',3000)
})
