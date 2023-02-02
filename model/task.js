/** @format */

const mongoose = require('mongoose')
const nodemon = require('nodemon')

const TaskSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
})

module.exports = mongoose.model('Task', TaskSchema)
