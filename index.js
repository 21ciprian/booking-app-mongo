import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 5050

app.get('/', (req, res) => {
	res.send('hey')
})
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO)
		console.log(`MongoDB Connected`)
	} catch (error) {
		console.log('Mongoose connection error: ', error)
	}
}
app.listen(PORT, () => {
	connect()
	console.log(`Server is running on port ${PORT}`)
})
