const express = require("express")
const port = 5000;

import data from "./data"

const app = express();

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

app.listen(port, () => {
    console.log("Your app is running on http://localhost/"+port)
})