const express = require("express")
const port = 5000;

import data from "./data"

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products)
})

app.listen(port, () => {
    console.log("Your app is running on http://localhost/"+port)
})