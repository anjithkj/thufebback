const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  Photo: {
   data :Buffer,
   contentType:String
  },
  Productname: String,
  Productprice: Number,
  Quantity: String,
  Description: String,
  Cid:{type:mongoose.Schema.Types.ObjectId,ref:'categories'},
  Status: {
    type: String,
    default: 'Active', // Set your default status
  },
  
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;