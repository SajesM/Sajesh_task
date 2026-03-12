const taskRepo = require("./task.repository");

const createTask = async (taskData) => taskRepo.create(taskData);
const getAllTasks = async () => taskRepo.findAll();
const removeTaskById = async (id) => taskRepo.deleteById(id);
const updateTaskById = async (id, data) => taskRepo.updateById(id, data);

module.exports = { createTask, getAllTasks, removeTaskById, updateTaskById };