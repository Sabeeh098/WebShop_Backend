const express = require("express");

const adminController = require("../controller/adminController");

adminRoutes.post('/login',adminController.AdminLogin)