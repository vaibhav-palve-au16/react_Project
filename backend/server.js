import express from "express";
import dotenv from "dotenv";
import colors from "colours";
import connectDB from "./config/db.js";
import products from "./data/products.js";
dotenv.config();
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("api is running .....");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
      .underline.bold
  )
);
