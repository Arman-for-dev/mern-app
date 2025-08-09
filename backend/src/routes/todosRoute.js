import {Router} from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../cotrollers/todoController.js";


const router = Router();

router.get("", getTodos);
router.post("", createTodo);
router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);


export default router;
