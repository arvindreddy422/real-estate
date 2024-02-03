import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

const app = express()

dotenv.config()
// mongoose
//   .connect(process.env.MURL)
//   .then(() => console.log('DB connect'))
//   .catch((e) => console.log(e.message))

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use((err, req, res, next) => {
  const statusCode = err.status || 500
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})

app.listen(3000, () => {
  console.log('server run on 3000')
})
