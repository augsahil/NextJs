import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js")
var jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method == "POST") {
        console.log(req.body);
        let user = await User.findOne({ email: req.body.email })
        const bytes = CryptoJS.AES.decrypt(user.password, 'secret123')
        let decryptPass = bytes.toString(CryptoJS.enc.Utf8)
        if (user) {

            if (req.body.email == user.email && req.body.password == decryptPass) { 
                var token = jwt.sign({ name: user.name, email: user.email }, 'jwtSecret', {expiresIn:"1d"})
                res.status(200).json({success: true, token});
            } else {
                res.status(400).json({ success: false })
            }
        } else {
            res.status(400).json({ fail: "no user found" })
        }

    } else {
        res.status(400).json({ error: "error! This method is not allowed." });
    }
};

export default connectDb(handler);