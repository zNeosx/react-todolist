import { useEffect, useRef } from "react";
import { Form, useNavigation } from "react-router-dom";
import TodoInputComponent from "./TodoInputComponent";

interface Props {
  actionData: any;
}

const TodoFormComponent = ({ actionData }: Props) => {
  const todoInputRef = useRef<HTMLFormElement>(null);
  let navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      todoInputRef.current?.reset();
    }
  }, [navigation]);
  return (
    <div className="mb-8">
      <Form method="post" action="/todos" ref={todoInputRef}>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="todoName"
          >
            Ajouter une tâche
          </label>
          {actionData?.err && <span>{actionData.err}</span>}
          {/* {actionData?.res && <span>{actionData.res}</span>} */}
          <div className="flex items-center">
            <TodoInputComponent></TodoInputComponent>
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
