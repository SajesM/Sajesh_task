const fs = require("fs");
const { json } = require("stream/consumers");
const filePath = "./data/task.json";

const getTasks=(req,res) =>{
    const readFile = fs.readFileSync(filePath);
    const fileData = JSON.parse(readFile);
    res.json(fileData);
}

const createTasks=(req,res) =>{
    const readFile = fs.readFileSync(filePath);
    const fileData = JSON.parse(readFile);

    const addTask={
        id: fileData.length+1,
        title: req.body.title,
        completed: false
    };

    fileData.push(addTask);
    fs.writeFileSync(filePath,JSON.stringify(fileData));
    res.status(201).json(addTask);
};

const updateTask=(req,res)=>{
    const taskId = parseInt(req.params.id);
    const readFile = fs.readFileSync(filePath);
    const fileData =JSON.parse(readFile);
    const task=fileData.find(n=>n.id===taskId);

    if (!task){
        return res.status(404).json({message: "not found"});
    }


    if (typeof req.body.completed === "boolean") {
        task.completed = req.body.completed;
    } else {
        task.completed = !task.completed;
    }

    fs.writeFileSync(filePath, JSON.stringify(fileData));
    res.json(task);
}

const deleteTask=(req,res)=>{
    const taskId = parseInt(req.params.id);
    const readFile = fs.readFileSync(filePath);
    const fileData =JSON.parse(readFile);
    const task=fileData.find(n=>n.id===taskId);
    if (!task){
        return res.status(404).json({message: "not found"});
    }

    const deleted =fileData.filter(n=>n.id !== taskId);
    fs.writeFileSync(filePath, JSON.stringify(deleted));
    res.json({ message:"successfully deleted", task});
}

module.exports = {
    getTasks,
    createTasks,
    updateTask,
    deleteTask
};

