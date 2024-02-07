import express from 'express'
import dotenv from 'dotenv'
import mongoConnect from './configs/database.js'
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';


dotenv.config({})
const app = express()

mongoConnect(process.env.MONGO_URI)
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1',userRouter)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is runing on Url: http://localhost:${port}`)
})