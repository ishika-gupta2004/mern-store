const User = require("../models/User");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// signup logic//

exports.signup = async (req, resp) => {
    try {
        const { name, email, password } = req.body
        const userExist = await User.findOne({ email })

        if (userExist) {
            return resp.status(400).json({ message: "User already exist" })
        }

        const hashedPassword = await bycrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword
        })
        await user.save()
        resp.json({ message: "SignUp Success" })


    } catch (err) {
        resp.status(500).json({ err: err.message })
    }
}

// login logic//
exports.login = async (req,resp) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        
        if(!user){
            return resp.status(400).json({message:"Invalid User"})
        }
        const isMatch = await bycrypt.compare(password,user.password)
        if(!isMatch){
            return resp.status(400).json({message:"Invalid Password"})
        }

        const token = jwt.sign(
            {userId:user._id},
            "secreatkey",
            {expiresIn:"1d"}
        )

        resp.json({token})

    }catch(err){
        resp.status(500).json({error:err.message})
    }
}