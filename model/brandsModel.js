const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    brands_name: {
        type: String,
    },
    description:{
        type: String,
    },
    // product_Image:{
    //     type:String
    // }
},
{
    timestamps: true
})

const Brands = mongoose.model('Brands',brandSchema);

module.exports = Brands;