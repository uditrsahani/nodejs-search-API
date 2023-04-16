require('./config')
const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name:String,
  program:String,
  tuition:Number
})

module.exports = mongoose.model('products',productSchema);