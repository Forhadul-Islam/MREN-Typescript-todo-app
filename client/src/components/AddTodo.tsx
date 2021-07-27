import React, { useState } from "react";

interface IProps {
  handleAddTodo: (task: string, name: string) => void;
}

const AddTodo = ({ handleAddTodo }: IProps): JSX.Element => {
  const [task, setTask] = useState<string>("");
  const [name, setName] = useState<string>("");

  //add new todo function
  function addTodo(task: string, name: string): void {
    handleAddTodo(task, name);
    setTask("");
    setName("");
  }

  return (
    <div className=" mx-auto bg-pink-100 flex justify-center h-12">
      <input
        className="  border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-2 border-4 border-indigo-600 focus:border-purple-500"
        type="text"
        value={name}
        placeholder="Task name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        className="  border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-2 flex-grow border-4 border-purple-600 focus:border-purple-500 "
        type="text"
        value={task}
        placeholder="Add a Task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <button
        onClick={() => addTodo(task, name)}
        className="w-32 bg-purple-800 text-white text-xl font-semibold"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
