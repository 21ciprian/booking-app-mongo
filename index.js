import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

const app = express()
app.use(cookieParser())
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
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500
	const errorMessage = err.message || 'Something went wrong...'
	return res.status(errorStatus).json({ success: false, status: errorStatus, message: errorMessage, stack: err.stack })
})



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
