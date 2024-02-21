const Products = require("../model/ProductModel");
const Brands = require("../model/brandsModel");
const Category = require("../model/categoryModel");
const Subcategory = require("../model/subcategoryModel");

const AddProduct = async(req,res) => {
    
    const { sku,language,categories,title,description,images,tags,
        price,weight,tax_value,ean,supplier_ref,brand,size,size_mixed,colors,
        dog_jacket_size,dog_jacket_type,supplier }=req.body

    try {
        const productObj=new Products({
            sku,language,categories,title,description,images,tags,
            price,weight,tax_value,ean,supplier_ref,brand,size,size_mixed,colors,
            dog_jacket_size,dog_jacket_type,supplier
        })
         await productObj.save();
         res.status(200).json({
            message: "product added Successful",
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
      }

}

const AddCatagory=async(req,res)=>{
    const {category_name,category_code,description}=req.body
    try {
        const categoryObj=new Category({
            category_name,
            category_code,
            description
        })
         await categoryObj.save();
         res.status(200).json({
            message: "category added Successful",
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
    }
}


const AddBrand=async(req,res)=>{
    const {brands_name,description,product_Image}=req.body
    try {
        const brandsObj=new Brands({
            brands_name,description,product_Image
        })
         await brandsObj.save();
         res.status(200).json({
            message: "brand added Successful",
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
    }
}


const AddSubcategory=async(req,res)=>{
    const {parent_category,category_name,category_code,description}=req.body
    try {
        const subcategeryObj=new Subcategory({
            parent_category,category_name,category_code,description
        })
         await subcategeryObj.save();
         res.status(200).json({
            message: "subcategory added Successful",
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
    }
}


const GetProduct=async(req,res)=>{
    try {
        const products=await Products.find()
        res.status(200).json({
            message: "subcategory added Successful",
            data:products
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
    }
}

const GetCategory=async(req,res)=>{
    try {
        const categorys=await Category.find()
        res.status(200).json({
            message: "subcategory added Successful",
            data:categorys
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
    }
}


const GetSubCategory=async(req,res)=>{
    try {
        const subCategory=await Subcategory.find()
        res.status(200).json({
            message: "subcategory added Successful",
            data:subCategory
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
    }
}


const GetBrands=async(req,res)=>{
    try {
        const brands=await Brands.find()
        res.status(200).json({
            message: "subcategory added Successful",
            data:brands
        })
    } catch (error) {
        res.status(500).json({ errMsg: "Something Went Wrong" });
    }
}






module.exports = {
    AddProduct, AddCatagory , AddBrand ,AddSubcategory,GetBrands,GetCategory,GetProduct,GetSubCategory
}