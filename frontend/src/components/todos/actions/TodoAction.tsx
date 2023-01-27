import { ActionFunctionArgs } from "react-router-dom";
import { todoService } from "../../../services/todoService";

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();

  // Edit todo via <fetcher.Form>
  if (formData.get("action") === "edit") {
    let todoId = formData.get("todoId") as FormDataEntryValue;
    const response = await todoService
      .updateIsDoneState(todoId)
      .then((res) => {
        return {
          res: `L'état de la tâche "${res.data.name}" a bien été mise à jour !`,
        };
      })
      .catch((err) => {
        throw { message: err.response.data.message };
        return { err: err.response.data.message };
      });
    return response;
  }

  // Delete todo via <fetcher.Form>
  if (formData.get("action") === "delete") {
    let todoId = formData.get("todoId") as FormDataEntryValue;
    const response = await todoService
      .deleteOne(todoId)
      .then((res) => {
        return { res: `La tâche "${res.data.name}" a bien été supprimée !` };
      })
      .catch((err) => {
        throw { message: err.response.data.message };
        return { err: err.response.data.message };
      });
    return response;
  }

  // Add todo via <Form>
  let name = formData.get("todoName") as FormDataEntryValue;
  // formData.set('todoName) -> voir doc

  const response = await todoService
    .addTodo(name)
    .then((res) => {
      return { res: `La tâche "${res.data.name}" a bien été ajoutée !` };
    })
    .catch((err) => {
      return { err: err.response.data.message };
    });

  return response;
}
