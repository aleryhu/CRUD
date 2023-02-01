/** @format */
const express = require('express')
require('./db/connect')
const app = express()
const tasks = require('./router/tasks')
//  middleware
app.use(express.json())
// routes
app.get('/hello', (req, res) => {
	res.status(200).send('Home Page')
})

app.use('/api/v1/tasks', tasks)

const PORT = 3000
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`)
})
