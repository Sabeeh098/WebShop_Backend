const Admin = require("../model/adminModel");
const {generateToken} = require("../middleware/auth")

const AdminLogin = async (req,res) => {
    try{
        const {email,password} = req.body;
        const admin = await Admin.findOne({email: email});
        if(!admin){
            return res.status(401).json('Email or Password is incorrect');
        }
        if (password !== admin.password){
            return res.status(401).json('Email or Password is incorrect')
        }

        const token = generateToken(admin._id,"admin");

        res.status(200).json({
            message: "Login Successful",
            name:admin?.name,
            permissions: admin?.permissions,
            role: admin?.role,
            token,
            id: admin._id,
        })
    } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Something Went Wrong" });
  }
}

module.exports = {
    AdminLogin,
}