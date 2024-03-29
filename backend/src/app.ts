import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoConnect from './configs/database.js'
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import morgan from 'morgan'
import productRouter from './routes/productRouter.js'


dotenv.config({})
const app = express()
app.use(cors({
    credentials:true,
    origin:`http://localhost:5173`
}))

mongoConnect(process.env.MONGO_URI)
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use('/api/v1',userRouter)

app.use('/api/v1/product', productRouter)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is runing on Url: http://localhost:${port}`)
})