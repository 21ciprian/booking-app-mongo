import express from 'express'
import { createHotel, deleteHotel, updateHotel } from '../controllers/hotel.js'
import Hotel from '../models/Hotel.js'

const router = express.Router()
router.post('/', createHotel)
router.put('/:id', updateHotel)
router.delete('/:id', deleteHotel)
router.get('/:id', async (req, res) => {
  try
  {
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel)
  } catch (error)
  {
    res.status(500).json(error)
  }
})
router.get('/', async (req, res) => {
  try
  {
    const hotels = await Hotel.find()
    res.status(200).json(hotels)
  } catch (error)
  {
    res.status(500).json(error)
  }
})

export default router