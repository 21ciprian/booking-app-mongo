import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js'
import { verifyIsAdmin } from '../utils/verifyToken.js'

const router = express.Router()
router.post('/', verifyIsAdmin, createHotel)
router.put('/:id', verifyIsAdmin, updateHotel)
router.delete('/:id', verifyIsAdmin, deleteHotel)
router.get('/:id', getHotel)
router.get('/', getHotels)

export default router 