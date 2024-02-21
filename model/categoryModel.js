const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category_name: {
        type: String,
    },
    category_code: {
        type: String,
    },
    description:{
        type: String,
    },

},
{
    timestamps: true
})

const Category = mongoose.model('Category',categorySchema);

module.exports = Category;