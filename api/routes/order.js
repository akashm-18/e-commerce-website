const router = require('express').Router();
const { verifyToken , verifyTokenAndAdmin , verifyTokenAndAuthorization } = require('../routes/verifyToken')
const Order = require('../modals/Order')

// CREATE ORDER
router.post('/' , verifyToken , async (req,res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})


// UPDATE ORDER
router.put('/:id' , verifyTokenAndAdmin , async (req,res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id , {
            $set : req.body
        } , {new : true})
        res.status(200).json(updatedOrder)   
    } catch (error) {
        res.status(500).json(error)
    }
})


// DELETE ORDER
router.delete('/:id' , verifyTokenAndAdmin , async (req,res) => {
try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json("Order Item deleted..")
} catch (error) {
    res.status(500).json(error)
}
})


// GET USER ORDER
router.get('/find/:userId' , verifyTokenAndAuthorization , async (req,res) => {
    try {
        const userOrder = await Order.find({ userId : req.params.userId })
        res.status(200).json(userOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})


// GET ALL ORDERS
router.get('/' , verifyTokenAndAdmin , async (req,res) => {
    try {
        const allOrders = await Order.find()
        res.status(200).json(allOrders)
    } catch (error) {
        res.status(500).json(error)
    }
})


// GET INCOME STATS
router.get('/income' , verifyTokenAndAdmin , async (req,res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
    try {
        const income = await Order.aggregate([
            { $match : { createdAt : { $gte : previousMonth } } } ,
            { $project : {
                month : { $month : "$createdAt" } ,
                sales : "$amount"
            }}, {
                $group : {
                    _id : "$month" ,
                    total : { $sum : "$sales" }
                }
            }
        ]);
        res.status(200).json(income )
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
