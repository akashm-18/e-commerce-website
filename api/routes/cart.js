const router = require('express').Router();
const { verifyToken , verifyTokenAndAdmin , verifyTokenAndAuthorization } = require('../routes/verifyToken')
const Cart = require('../modals/Cart')

// CREATE 
router.post('/' , verifyToken , async (req,res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})


// UPDATE CART
router.put('/:id' , verifyTokenAndAuthorization , async (req,res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id , {
            $set : req.body
        } , {new : true})
        res.status(200).json(updatedCart)   
    } catch (error) {
        res.status(500).json(error)
    }
})


// DELETE CART
router.delete('/:id' , verifyTokenAndAuthorization , async (req,res) => {
try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json("Cart Item deleted..")
} catch (error) {
    res.status(500).json(error)
}
})


// GET USER CART
router.get('/find/:userId' , verifyTokenAndAuthorization , async (req,res) => {
    try {
        const userCart = await Cart.findOne({ userId : req.params.userId })
        res.status(200).json(userCart)
    } catch (error) {
        res.status(500).json(error)
    }
})


// GET ALL CARTS 
router.get('/' , verifyTokenAndAdmin , async (req,res) => {
    try {
        const allCarts = await Cart.find()
        res.status(200).json(allCarts)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
