import React, { useEffect, useState } from "react";
import { addTodo, delteTodo, getTodos, updateTodo } from "./API/API";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos(): void {
    getTodos().then(({ data: { todos } }: ITodo[] | any) => {
      setTodos(todos);
    });
  }

  //add new todo
  function handleAddTodo(task: string, name: string) {
    const todo = {
      name,
      description: task,
      status: false,
    };
    addTodo(todo)
      .then(({ data: { todo } }: ITodo | any) => {
        setTodos([...todos, todo]);
      })
      .catch((err) => console.log(err));
  }

  //update todo status
  function handleUpdateTodo(todo: ITodo): void {
    updateTodo(todo)
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err) => console.log(err));
  }

  //deleteTodo function
  function handleDeleteTodo(_id: string): void {
    delteTodo(_id)
      .then(({ data: { todos } }: ITodo[] | any) => {
        setTodos(todos);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="App min-h-screen bg-gradient-to-r from-purple-500 to-pink-500  p-9">
      <h1 className="text-2xl pb-4 text-gray-800 font-bold shadow-md mb-4">
        Welcome to Take-Notes 🚀
      </h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      <div className="bg-yellow-200 xl:w-3/6 sm:w-4/5 mx-auto mt-7 p-6 flex flex-col gap-2">
        {todos.map((todo: ITodo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
        {todos.length === 0 && (
          <div className="font-bold text-gray-700">No Task to show...</div>
        )}
      </div>
    </div>
  );
};

export default App;
