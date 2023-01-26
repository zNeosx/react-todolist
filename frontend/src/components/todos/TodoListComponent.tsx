import React, { FC, useState } from "react";
import { ITodo } from "../../models/Todo";
import { BsCheckCircle } from "react-icons/Bs";

interface Props {
  todoList: ITodo[];
}

const TodoListComponent = ({ todoList }: Props) => {
  return (
    <div>
      {todoList.map((todo: ITodo) => (
        <div
          key={todo._id}
          className="bg-primary bg-opacity-50 p-3 pr-6 rounded-xl my-2 flex items-center justify-start"
        >
          <BsCheckCircle className="text-3xl mr-6 text-white rounded-full bg-white hover:text-green-400 transition-all ease-in-out duration-300" />
          <p>{todo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoListComponent;
