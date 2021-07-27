import moment from "moment";
import React from "react";

interface IProps extends TodoProps {
  handleUpdateTodo: (todo: ITodo) => void;
  handleDeleteTodo: (_id: string) => void;
}

const TodoItem: React.FC<IProps> = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
}) => {
  return (
    <div className="grid grid-cols-6 bg-yellow-300 py-1 px-2 shadow-md mb-2">
      <div className="col-span-4 text-left divide-y-2 divide-light-blue-400">
        <div className="font-bold">
          {todo.name} 🎆
          <br />
          <span className="text-gray-700 font-medium">
            {moment(todo.createdAt).fromNow()}
          </span>
        </div>
        <div
          className={
            !todo.status
              ? "text-lg font-mono"
              : "text-lg font-mono line-through"
          }
          style={{ lineBreak: "anywhere" }}
        >
          👉 {todo.description}
        </div>
      </div>
      <div className="col-span-2 justify-center self-center">
        {!todo.status ? (
          <button
            onClick={() => handleUpdateTodo(todo)}
            className="mr-6 bg-blue-600 text-white font-bold px-4 py-1 rounded-sm ml-1"
          >
            Done
          </button>
        ) : (
          <button className="mr-6 bg-red-600 cursor-default text-white font-bold px-4 py-1 rounded-sm ml-1">
            Completed
          </button>
        )}
        <button
          onClick={() => handleDeleteTodo(todo._id)}
          className="w-10 h-10 rounded-full text-2xl transform rotate-45 pb-1 bg-white text-red-700 font-extrabold hover:bg-yellow-200 hover:scale-125"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
