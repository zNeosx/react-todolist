import React, { FC } from "react";
import { Outlet, useActionData, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoFormComponent from "./components/todos/TodoFormComponent";
import TodoListComponent from "./components/todos/TodoListComponent";
import { todoService } from "./services/todoService";

export async function loader() {
  const todoList = await todoService.getTodoList();
  return { todoList };
}

const Root: FC = () => {
  // const {
  //   todoList: { data },
  // }: any = useLoaderData();

  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
