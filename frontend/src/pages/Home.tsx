import React, { FC, useEffect } from "react";
import { Link, useActionData, useLoaderData } from "react-router-dom";
import TodoFormComponent from "../components/todos/TodoFormComponent";
import TodoListComponent from "../components/todos/TodoListComponent";
import { todoService } from "../services/todoService";

// export async function loader() {
//   const todoList = await todoService.getTodoList();
//   return todoList.data;
// }

const Home: FC = () => {
  return (
    <div className="container mx-auto my-4 flex items-center justify-center">
      <h1>Home</h1>
      <Link to={"/todos"}>Voir mes tâches</Link>
    </div>
  );
};

export default Home;
