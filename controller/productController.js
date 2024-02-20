const Products = require("../model/ProductModel")

const AddProduct = async(req,res) => {
    
    const { sku,language,categories,title,description,images,tags,
        price,weight,tax_value,ean,supplier_ref,brand,size,size_mixed,colors,
        dog_jacket_size,dog_jacket_type,supplier}=req.body

    try {
        const productObj=new Products({
            sku,language,categories,title,description,images,tags,
            price,weight,tax_value,ean,supplier_ref,brand,size,size_mixed,colors,
            dog_jacket_size,dog_jacket_type,supplier
        })
         await productObj.save();
         res.status(200).json({
            message: "added Successful",
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
      }

}

module.exports = {
    AddProduct,
}