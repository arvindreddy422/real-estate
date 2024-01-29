import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose
  .connect(process.env.MURL)
  .then(() => console.log('DB connect'))
  .catch((e) => console.log(e.message))

const app = express()

app.listen(3000, () => {
  console.log('server run on 3000')
})

// mongodb+srv://imgofakr:<password>@mern-estate.dhimo9k.mongodb.net/?retryWrites=true&w=majority
