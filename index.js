import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5050

app.get('/', (req, res) => {
	res.send('hey')
})
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
const connect = async () => {
	try
	{
		await mongoose.connect(process.env.MONGO)
		console.log(`MongoDB Connected`)
	} catch (error)
	{
		console.log('Mongoose connection error: ', error)
	}
}
app.listen(PORT, () => {
	connect()
	console.log(`Server is running on port ${PORT}`)
})
