import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import { createError } from '../utils/error.js'
export const register = async (req, res, next) => {
  try
  {
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({
      username: req.body.username, email: req.body.email, password: hashPassword
    })
    await newUser.save()
    res.status(201).json('User has been created')
  } catch (error)
  {
    next(error)
  }
}
export const login = async (req, res, next) => {
  try
  {
    const user = await User.findOne({ username: req.body.username })
    if (!user) return next(createError(400, 'User not found'))

    const isCorrectPassword = await bcrypt.compare(req.body.password, user.password)
    if (!isCorrectPassword) return next(createError(400, 'Wrong username or password'))
    const { password, isAdmin, ...otherDetails } = user._doc
    res.status(200).json({
      ...otherDetails
    })
  } catch (error)
  {
    next(error)
  }
}