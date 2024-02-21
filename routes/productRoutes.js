const express = require("express");

const productController=require("../controller/productController")

const productRoutes=express()

productRoutes.post("/addcategory",productController.AddCatagory)

productRoutes.post("/addsubcategory",productController.AddSubcategory)

productRoutes.post("/addbrands",productController.AddBrand)

productRoutes.get("/getCategory",productController.GetCategory)

productRoutes.get("/getbrands",productController.GetBrands)

productRoutes.get("/getsubcategory",productController.GetSubCategory)




module.exports=productRoutes