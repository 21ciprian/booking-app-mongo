import express from 'express'
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js'
import { verifyIsAdmin } from '../utils/verifyToken.js'

const router = express.Router()
router.post('/:hotelId', verifyIsAdmin, createRoom)
router.put('/:id', verifyIsAdmin, updateRoom)
router.delete('/:hotelId/:id', verifyIsAdmin, deleteRoom)
router.get('/:id', getRoom)
router.get('/', getRooms)

export default router 