/** @format */
const Task = require('../model/task')
const getAllTasks = (req, res) => {
	res.send('Get all Tasks')
}
const getTask = (req, res) => {
	res.json({ id: req.params.id })
}
const createTasks = (req, res) => {
	console.log(req.body)
	res.status(201).json(req.body)
}
const updateTasks = (req, res) => {
	res.send('Update Tasks')
}
const deleteTasks = (req, res) => {
	res.send('Delete Task')
}

module.exports = {
	getAllTasks,
	getTask,
	createTasks,
	updateTasks,
	deleteTasks,
}
