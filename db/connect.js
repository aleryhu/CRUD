/** @format */

const mongoose = require('mongoose')    
const connectionString = 'mongodb://127.0. 0.1:27017/starter'
mongoose.set('strictQuery', true);
mongoose
	.connect(connectionString)
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch((error) => {
		console.log(error)
	})
