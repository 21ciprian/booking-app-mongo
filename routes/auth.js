import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello from auth.get')
})
router.get('/register', (req, res) => {
  res.send('hello from auth.get/register')
})
export default router