import express from 'express'
import Hotel from '../models/Hotel.js'

const router = express.Router()
router.post('/', async (req, res) => {
  const newHotel = new Hotel(req.body)
  try
  {
    const savedHotel = await newHotel.save()
    res.status(201).json(savedHotel)
  } catch (error)
  {
    res.status(500).json(error)
  }
})
router.put('/:id', async (req, res) => {
  try
  {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    // const savedHotel = await updatedHotel
    res.status(200).json(updatedHotel)
  } catch (error)
  {
    res.status(500).json(error)
  }
})

export default router