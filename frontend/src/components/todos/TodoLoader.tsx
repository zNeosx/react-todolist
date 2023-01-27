import { todoService } from "../../services/todoService";

export async function loader() {
  const todoList = await todoService.getTodoList();
  return todoList.data;
}
