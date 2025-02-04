const express = require ('express');
const mongoose = require ('mongoose');
const Product = require ('./models/Product.model.js');          
const productRoute = require ('./routes/product.route.js');
const app = express ();

//middleware
app.use (express.json ());
app.use (express.urlencoded ({ extended: false }));

//routes
app.use('/api/products', productRoute);

app.listen (3000, () => {
    console.log ('Server is running on port 3000')
});

app.get("/", (req, res) => {
    res.send ('Hello from node api server');
}); 



mongoose.connect("mongodb+srv://muhammadtauha12:puB8CEPOnDwJePm4@cluster0.brc12.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log ('Connected to database!');
})

.catch(() => {
    console.log ('Connection failed!');
});