const express = require("express");
const router = express.Router();
const taskController = require("./task.controller");


router.get('/', taskController.getTask);
router.post("/",taskController.addTask);
router.delete("/:id",taskController.removeTask);

module.exports = router;