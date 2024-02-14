import express from "express"
import { createProduct, searchProduct } from "../controllers/productController.js"


const productRouter = express.Router()

productRouter.route('/newproduct').post(createProduct)
productRouter.route('/search').post(searchProduct)



export default productRouter