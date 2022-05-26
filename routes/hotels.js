import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js'
import { verifyIsAdmin } from '../utils/verifyToken.js'

const router = express.Router()
router.post('/', verifyIsAdmin, createHotel)
router.put('/:id', verifyIsAdmin, updateHotel)
router.delete('/:id', verifyIsAdmin, deleteHotel)
router.get('/find/:id', getHotel)
router.get('/', getHotels)
router.get('/countbyCity', countByCity)
router.get('/countByType', countByType)

export default router 