const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    sku:{
        type:String
    },
    product_name:{
        type:String
    },
    category:{
        type:String
    },
    sub_category:{
        type:String
    },
    brand:{
        type:String
    },
    unit:{
        type:String
    },
    minimum_qty:{
        type:Number
    },
    quantity:{
        type:Number
    },
    description:{
        type:String
    },
    tax:{
        type:String
    },
    discount_type:{
        type:Number
    },
    price:{
        type:Number
    },
    status:{
        type:String
    },
    images:{
        type:String
    }
    },
{
    timestamps: true
})

const Products = mongoose.model('Products',productSchema);

module.exports = Products;