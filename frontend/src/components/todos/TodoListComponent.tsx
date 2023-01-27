import { ITodo } from "../../models/Todo";
import { BsCheckCircle } from "react-icons/Bs";
import { AiFillDelete } from "react-icons/Ai";
import { useFetcher } from "react-router-dom";
import { SyntheticEvent } from "react";

interface Props {
  todoList: ITodo[];
}

const TodoListComponent = ({ todoList }: Props) => {
  let fetcher = useFetcher();

  return (
    <div>
      {todoList.map((todo: ITodo) => (
        <div key={todo._id} className="flex items-center">
          <div className="bg-primary bg-opacity-50 p-3 pr-4 rounded-xl my-2 flex items-center justify-start grow">
            <fetcher.Form
              method="post"
              className="flex items-center justify-center"
            >
              <input type="hidden" name="action" value="edit" />
              <button type="submit" name="todoId" value={todo._id}>
                <BsCheckCircle
                  className={`text-3xl mr-2 text-white rounded-full ${
                    todo.isDone ? "bg-green-500" : "bg-white"
                  } hover:text-green-400 transition-all ease-in-out duration-300`}
                />
              </button>
            </fetcher.Form>
            <p className={`${todo.isDone && "line-through"}`}>{todo.name}</p>
          </div>
          <div className="flex items-center bg-primary bg-opacity-50 p-3 pr-3 rounded-xl ml-3">
            <fetcher.Form
              method="post"
              onSubmit={(event: SyntheticEvent) => {
                const target = event.target as typeof event.target & {
                  todoName: { value: string };
                };
                const todoName = target.todoName.value; // typechecks!
                if (
                  !confirm(
                    `Voulez-vous vraiment supprimer cette tâche: ${todoName}`
                  )
                ) {
                  event.preventDefault();
                }
              }}
            >
              <input type="hidden" name="action" value="delete" />
              <input type="hidden" name="todoName" value={todo.name} />
              <button type="submit" name="todoId" value={todo._id}>
                <AiFillDelete className="text-3xl hover:text-icons-delete transition-all ease-in-out duration-300" />
              </button>
            </fetcher.Form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoListComponent;
