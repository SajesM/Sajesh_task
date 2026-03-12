const app = require("./app");
const connectDB = require("./config/db");

connectDB();
const port = 3000;

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})
