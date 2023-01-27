import React from "react";

const TodoInputComponent = () => {
  return (
    <>
      <input
        className="rounded-xl border py-2 px-3 focus:outline-1 focus:outline-primary"
        id="todoName"
        type="text"
        name="todoName"
        placeholder="Nom de la tâche"
      />
    </>
  );
};

export default TodoInputComponent;
