
require('dotenv').config();


const connectDB = require('./config/db');
connectDB();

const productRoutes = require('./routes/productRoutes')

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());


app.use('/api/products',productRoutes)


app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});


app.listen(PORT, () => {
    console.log(` Listening to the port: ${PORT}`);
});