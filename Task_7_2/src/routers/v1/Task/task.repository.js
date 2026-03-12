const Task = require("./task.model");


const taskRepository = {

  create: async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
  },

  findAll: async () => {
    return await Task.find({});
  },

  findById: async (id) => {
    return await Task.findById(id);
  },

  updateById: async (id, updateData) => {
    return await Task.findByIdAndUpdate(id, updateData, { new: true });
  },

  deleteById: async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) throw new Error("Task not found");
    return deletedTask;
  }

};

module.exports = taskRepository;