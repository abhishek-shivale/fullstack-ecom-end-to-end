import express from "express"
import { createProduct } from "../controllers/productController.js"


const productRouter = express.Router()

productRouter.route('/newproduct').post(createProduct)




export default productRouter