const router = require('express').Router();
const User = require('../modals/User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Register 
router.post('/register' , async (req,res) => {
    const { username , email , password } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)

    const newUser = new User({
        username : username ,
        email : email ,
        password : hashedPassword
    })

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Login 
router.post('/login' , async (req,res) => {
    try{
    const { username } = req.body;
    const user = await User.findOne({username})
    if (!user) {
        res.status(401).json("Wrong credentials")
    }
    const passok = bcrypt.compareSync(req.body.password , user.password);
    if (!passok) {
        res.status(401).json("Password incorrect")
    }

    const accessToken = jwt.sign({
        id : user._id ,
        isAdmin : user.isAdmin,
    } , process.env.JWT_SECRET , { expiresIn : "3d" })

    const { password , ...others } = user._doc;
    res.status(200).json({...others , accessToken })
    }
    catch(err) {
        res.status(500).json(err)
    } 
    
})


module.exports = router;
