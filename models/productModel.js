const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema ({
    
    title : String ,
    description : String,
    price : Number,
    category : String ,
    image : String 
});
const Products = mongoose.model('Products', productsSchema);
   
module.exports =  Products;