const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

const userRoute = require('./routes/user.js')
const authRoute = require('./routes/auth.js')
const productRoute = require('./routes/product.js')
const cartRoute = require('./routes/cart.js')
const orderRoute = require('./routes/order.js')

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("db connected")
})
.catch((err) => console.log(err))

// Routes 
app.use('/api/users', userRoute)
app.use('/api/auth' , authRoute)
app.use('/api/products' , productRoute)
app.use('/api/carts' , cartRoute)
app.use('/api/orders' , orderRoute)


app.listen(port || 5000 , () => {
    console.log(`Server running on port ${port}`)
})