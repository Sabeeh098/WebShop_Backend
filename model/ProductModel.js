const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    sku: {
        type: String,
    },
    language: {
        type: String,
    },
    categories:{
        type: String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    images:{
        type:String,
    },
    tags:{
        type:String,
    },
    price:{
        type:Number,
    },
    weight:{
        type:Number,
    },
    tax_value:{
        type:String,
    },
    ean:{
        type:String,
    },
    supplier_ref:{
        type:String,
    },
    brand:{
        type:String,
    },
    size:{
        type:String,
    },
    size_mixed:{
        type:String,
    },
    colors:{
        type:String,
    },
    dog_jacket_type:{
        type:String,
    },
    supplier:{
        type:String,
    },
    dog_jacket_size:{
        type:String,
    },
   
},
{
    timestamps: true
})

const Products = mongoose.model('Products',productSchema);

module.exports = Products;