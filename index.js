require('./config');
const products = require('./product');
const express = require('express');
const app = express();

app.get('/home/:key', async(req, res)=>{
  console.log(req.params.key)
  const data = await products.find({
    "$or":[
      {"Name":{$regex:req.params.key}},
      {"Program":{$regex:req.params.key}}
    ]
  })

  res.send(data);
  console.log(data)
})


app.listen(5000);