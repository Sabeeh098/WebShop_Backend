const express = require("express");
const cors = require("cors")
const bodyParse = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./database/database")
const adminRoutes = require("./routes/adminRoutes")
require("dotenv").config()
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cookieParser())

app.use("/",adminRoutes);

dbConnect()
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT,() => {
    console.log(`Server Started At ${PORT}`);
})