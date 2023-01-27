import React from "react";
import { useActionData, useLoaderData } from "react-router-dom";
import TodoFormComponent from "../components/todos/TodoFormComponent";
import TodoListComponent from "../components/todos/TodoListComponent";
import { ITodo } from "../models/Todo";

const TodoList = () => {
  const todos = useLoaderData() as ITodo[];
  const actionData = useActionData();

  return (
    <div className="container mx-auto my-4 flex items-center justify-center">
      <div>
        <TodoFormComponent actionData={actionData}></TodoFormComponent>
        <TodoListComponent todoList={todos}></TodoListComponent>
      </div>
    </div>
  );
};

export default TodoList;
