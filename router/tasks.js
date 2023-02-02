/** @format */

const express = require('express')
const router = express.Router()
const {
	getAllTasks,
	getTask,
	updateTasks,
	deleteTasks,
	createTasks,
} = require('../controller/tasks')
router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks)

module.exports = router
