import { Axios } from "../config/index";

export const todoService = {
  getTodoList: () => {
    return Axios.get("todos/getAll");
  },
  addTodo: (todoName: FormDataEntryValue | null) => {
    return Axios.post("todos/addOne", { name: todoName });
  },
};
