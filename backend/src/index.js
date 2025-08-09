import express from "express";
import "dotenv/config";
// import todosList from './routes/todosRoute.js'
import connectDB from "./config/db.js";


const app = express();

//Database connection
connectDB();

//middleware
app.use(express.json());





//routes
// app.use('/api/todos', todosList);



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});