import express from "express";
import expressAsyncHandler   from "express-async-handler";
import Product from "../models/productModels.js";
const router = express.Router();


//@desc Fetch all products
//@route GET  /api/products
//@access Public 
router.get("/", expressAsyncHandler(async(req, res) => {
    const products = await Product.find({ })
    res.json(products);
}));

//@desc Fetch single products
//@route GET  /api/product/:id
//@access Public 
router.get("/:id",expressAsyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)
  if(product){
    res.json(product);
    console.log(product);
  }else{
    res.status(404).json({ message : 'Product not Found'})
  }
}));

export default router;
