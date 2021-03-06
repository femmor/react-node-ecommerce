import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import config from "./config"

import userRoute from "./routes/userRoute"

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => console.log(error.reason))

import data from "./data"

const app = express();
app.use(bodyParser.json())

app.use("/api/users", userRoute)

// Get single product
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id
    const product = data.products.find(x => x._id === productId)
        if (product) {
            res.send(product)
        } else {
            res.status(404).send({msg: "Product not found!"})
        }
    
})

// Get all products
app.get("/api/products", (req, res) => {
    res.send(data.products)
})

app.listen(5000, () => {
    console.log("Your app is running on http://localhost/5000")
})