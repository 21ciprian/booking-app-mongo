import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'
import { verifyIsAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()
// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('You are authenticated')
// })
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('You are authenticated and you can delete your account')
// })
// router.get('/checkadmin/:id', verifyIsAdmin, (req, res, next) => {
//   res.send('You are authenticated and you can delete all accounts')
// })
router.put('/:id', verifyUser, updateUser)
router.delete('/:id', verifyUser, deleteUser)
router.get('/:id', verifyUser, getUser)
router.get('/', verifyIsAdmin, getUsers)

export default router