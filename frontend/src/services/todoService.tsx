import { Axios } from "../config/index";

export const todoService = {
  getTodoList: () => {
    return Axios.get("todos/getAll");
  },
  addTodo: (todoName: FormDataEntryValue) => {
    return Axios.post("todos/addOne", { name: todoName });
  },
  deleteOne: (todoId: FormDataEntryValue) => {
    return Axios.delete(`todos/deleteOneById/${todoId}`);
  },
  updateIsDoneState: (todoId: FormDataEntryValue) => {
    return Axios.put(`todos/updateIsDoneState/${todoId}`);
  },
};
