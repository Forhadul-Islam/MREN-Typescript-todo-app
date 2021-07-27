interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
}

interface ApiDataType {
  messge: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
}
