/** @format */

const getAllTasks = (req, res) => {
	res.send('all items from file')
}
const getTask = (req, res) => {
	res.send('get single Task')
}
const createTasks = (req, res) => {
	res.send('create Tasks')
}
const updateTasks = (req, res) => {
	res.send('update Tasks')
}
const deleteTasks = (req, res) => {
	res.send('delete Task')
}


module.exports = {
	getAllTasks,
  getTask,
  createTasks,
  updateTasks,
  deleteTasks
}
