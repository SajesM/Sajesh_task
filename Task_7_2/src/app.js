const express = require("express");
const routes = require("./routers/v1/Task/task.routes");
const app = express();

app.use(express.json());
app.use("/",routes);

module.exports = app;