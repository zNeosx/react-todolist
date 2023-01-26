import React, { FC, useEffect } from "react";
import { useActionData, useLoaderData } from "react-router-dom";
import TodoFormComponent from "../components/todos/TodoFormComponent";
import TodoListComponent from "../components/todos/TodoListComponent";
import { todoService } from "../services/todoService";

export async function loader() {
  const todoList = await todoService.getTodoList();
  return { todoList };
}

const Home: FC = () => {
  const {
    todoList: { data },
  }: any = useLoaderData();

  const actionData = useActionData();

  return (
    <div className="container mx-auto my-4 flex items-center justify-center">
      <div>
        <TodoFormComponent actionData={actionData}></TodoFormComponent>
        <TodoListComponent todoList={data}></TodoListComponent>
      </div>
    </div>
  );
};

export default Home;
