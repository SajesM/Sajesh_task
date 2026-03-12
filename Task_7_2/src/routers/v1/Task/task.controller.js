const taskService = require('./task.service');


const getTask = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const addTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (e) {
    res.status(400).json({ error: "Could not add task" });
  }
};

const removeTask = async (req, res) => {
  try {
    const deletedTask = await taskService.removeTaskById(req.params.id); 
    res.json({ message: "Task removed successfully", task: deletedTask });
  } catch (e) {
    res.status(404).json({ error: e.message || "Task not found" });
  }
};

module.exports = { getTask, addTask, removeTask };