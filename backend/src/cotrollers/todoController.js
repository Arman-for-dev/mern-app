import Todos from "../models/todoModel.js";


export  const   getTodos   = async (req, res)=>{
    try {
        const todos = await Todos.find();
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json({message: "Server errors"});
    }
}
export  const   createTodo = async (req, res)=>{
    const {title, content} = req.body;
    try {
        if(!title || !content || title === "" || content === ""){
            return res.status(404).json({message: "Field is required"});
        }
        const todo = new Todos({
            title,
            content
        });
        await todo.save();
        return  res.status(201).json({message: "Todo created!"});
    } catch (error) {
        return res.status(500).json({message: "Server errors"});
    }
}
export  const   getTodo    = async (req, res)=>{
    const id = req.params.id;
    try {
        const todo = await Todos.findById(id);
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json({message: "Server errors"});
    }
}
export  const   updateTodo = async (req, res)=>{
    const id = req.params.id;
    const {title, content} = req.body;
    console.log(id)

    try {
        const todo = await Todos.findByIdAndUpdate(id, {title, content}, {new:true});
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json({message: "Server errors"});
    }
}
export  const   deleteTodo = async (req, res)=>{
    const id = req.params.id;
    try {
        await Todos.findByIdAndDelete(id);
        return res.status(200).json({message: "Delete successfully!"});
    } catch (error) {
        return res.status(500).json({message: "Server errors"});
    }
}