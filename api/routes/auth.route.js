import express from 'express'
import { auth } from '../controllers/auth.controller.js'

const route = express.Router()

route.post('/signup', auth)

export default route
