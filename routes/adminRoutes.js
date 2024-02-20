const express = require("express");

const adminController = require("../controller/adminController");

const adminRoutes=express()

adminRoutes.post('/login',adminController.AdminLogin)

module.exports=adminRoutes