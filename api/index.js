import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

const app = express()

dotenv.config()
// mongoose
//   .connect(process.env.MURL)
//   .then(() => console.log('DB connect'))
//   .catch((e) => console.log(e.message))

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.listen(3000, () => {
  console.log('server run on 3000')
})
