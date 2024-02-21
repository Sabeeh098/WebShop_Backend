const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
    parent_category: {
        type: String,
    },
    category_name:{
        type: String,
    },
    category_code:{
        type:String
    },
    description:{
        type:String
    }
},
{
    timestamps: true
})

const Subcategory = mongoose.model('Subcategory',subcategorySchema);


module.exports = Subcategory;