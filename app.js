const express = require('express')
const app = express()
const tasks = require('./router/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
//  middleware
app.use(express.json())
app.use('/api/v1/tasks', tasks)
// routes
app.get('/hello', (req, res) => {
	res.status(200).send('Test Page')
})

const port = process.env.PORT || 3000
const spinUp = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}...`)
		})
	} catch (error) {
		console.log(error)
	}
}
spinUp()
