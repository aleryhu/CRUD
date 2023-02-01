/** @format */
const express = require('express')
require('./db/connect')
const app = express()
const tasks = require('./router/tasks')
//  middleware

app.use(express.json())
// routes
app.get('/hello', (req, res) => {
	res.status(200).send('Test Page')
})

app.use('/api/v1/tasks', tasks)

const port = 3000
app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})
