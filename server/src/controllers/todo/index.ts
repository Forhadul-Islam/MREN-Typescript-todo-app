import { Request, Response } from "express";
import Todo from "../../models/todo";
import { ITodo } from "../../types/todo";

// get all todos controller

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (err) {
    throw err;
  }
};

//add todo controller

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;
    console.log(body);
    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });
    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();
    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (err) {
    console.log(err);
    res.json({ err: err.message });
  }
};

//update todo by id
const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    });
  } catch (err) {
    throw err;
  }
};

//delete todo by id

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(id);
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo deleted successfully!",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (err) {
    throw err;
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };
