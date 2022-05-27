import Hotel from '../models/Hotel.js'
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)
  try
  {
    const savedHotel = await newHotel.save()
    res.status(201).json(savedHotel)
  } catch (error)
  {
    next(error)
  }
}
export const updateHotel = async (req, res, next) => {
  try
  {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updatedHotel)
  } catch (error)
  {
    next(error)
  }
}
export const deleteHotel = async (req, res, next) => {
  try
  {
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Hotel deleted' })
  } catch (error)
  {
    next(error)
  }
}
export const getHotel = async (req, res, next) => {
  try
  {
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel)
  } catch (error)
  {
    next(error)
  }
}
export const getHotels = async (req, res, next) => {
  try
  {
    const hotels = await Hotel.find(req.query).limit(req.query.limit)
    res.status(200).json(hotels)
  } catch (error)
  {
    next(error)
  }
}
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',')
  try
  {
    const citiesList = await Promise.all(cities.map(city => {
      return Hotel.countDocuments({ city: city })
    }))
    res.status(200).json(citiesList)
  } catch (error)
  {
    next(error)
  }
}
export const countByType = async (req, res, next) => {
  try
  {
    const hotelCount = await Hotel.countDocuments({ type: 'hotel' })
    const appartmentCount = await Hotel.countDocuments({ type: 'appartment' })
    const resortCount = await Hotel.countDocuments({ type: 'resort' })
    const villaCount = await Hotel.countDocuments({ type: 'villa' })
    const cabinCount = await Hotel.countDocuments({ type: 'cabin' })

    res.status(200).json([ { type: 'hotel', count: hotelCount },
    { type: 'appartment', count: appartmentCount },
    { type: 'resort', count: resortCount },
    { type: 'villa', count: villaCount },
    { type: 'cabin', count: cabinCount } ])
  } catch (error)
  {
    next(error)
  }
}