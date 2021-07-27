import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (err) {
    throw new Error(err.message);
  }
};

//add new todo

export const addTodo = async (
  formData: Omit<ITodo, "_id">
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };

    const savedTodos: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/todos",
      todo
    );
    return savedTodos;
  } catch (err) {
    throw new Error(err.message);
  }
};

//update single todo
export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "status"> = {
      status: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/todos/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (err) {
    throw new Error(err);
  }
};

//delte singe todo
export const delteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/todos/${_id}`
    );
    return deletedTodo;
  } catch (err) {
    throw new Error(err);
  }
};
