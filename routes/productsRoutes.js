import express from 'express';
import { getProductController,addProductController,updateProductController,deleteProductController } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/", getProductController);
productRouter.post("/addproducts", addProductController);
productRouter.put("/udpateproducts", updateProductController);
productRouter.post("/deleteproducts", deleteProductController);

export default productRouter;