const express = require("express");
require("dotenv/config");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./server/database/connection");

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// IMPORT ROUTES
const productsRoutes = require("./src/routes/products");

// LOAD ROOT ROUTES
app.use("/products", productsRoutes);

// MONGO_DB CONNECTION CALL
connectDB();

// PORT
app.listen(3000, () => {
  console.log("running on port 3000...");
});
