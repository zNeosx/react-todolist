import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import { ErrorPage } from "./pages/ErrorPage";
import Home from "./pages/Home";
import Root from "./Root";
import TodoList from "./pages/TodoList";
import { loader as todoloader } from "./components/todos/TodoLoader";
import { action as todoAction } from "./components/todos/actions/TodoAction";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route
        path={"/todos"}
        element={<TodoList />}
        loader={todoloader}
        action={todoAction}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
