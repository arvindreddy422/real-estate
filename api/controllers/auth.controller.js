import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const auth = async (req, res, next) => {
  const { username, email, password } = req.body
  const hashPassword = bcryptjs.hashSync(password, 10)
  const newUser = new User({ username, email, password: hashPassword })
  try {
    await newUser.save()
    res.status(201).json({ msg: 'created user' })
  } catch (err) {
    next(err)
  }
}
