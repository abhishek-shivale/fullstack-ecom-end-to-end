import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoConnect from './configs/database.js'
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import morgan from 'morgan'


dotenv.config({})
const app = express()
app.use(cors())

mongoConnect(process.env.MONGO_URI)
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use('/api/v1',userRouter)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is runing on Url: http://localhost:${port}`)
})