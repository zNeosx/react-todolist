import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Form } from "react-router-dom";
import { todoService } from "../../services/todoService";

export async function action(props: any) {
  let formData = await props.request.formData();
  let name: FormDataEntryValue | null = formData.get("todoName");
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

interface Props {
  actionData: any;
}

const TodoFormComponent = ({ actionData }: Props) => {
  return (
    <div className="mb-8">
      <Form method="post" action="/">
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="todoName"
          >
            Ajouter une tâche
          </label>
          {actionData?.err && <span>{actionData.err}</span>}
          {actionData?.res && <span>{actionData.res}</span>}
          <div className="flex items-center">
            <input
              className="rounded-xl border py-2 px-3 focus:outline-1 focus:outline-primary"
              id="todoName"
              type="text"
              name="todoName"
              placeholder="Nom de la tâche"
            />
            <button
              type="submit"
              className="bg-primary bg-opacity-50 py-2 px-3 rounded-xl ml-2"
            >
              Ajouter
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default TodoFormComponent;
