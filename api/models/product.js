const { Schema, model } = require('mongoose');

const productSchema = Schema({
  name: String,
  price: Number,
});

module.exports = model('Product', productSchema);
