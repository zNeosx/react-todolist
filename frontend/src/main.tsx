import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import { ErrorPage } from "./pages/ErrorPage";
import Home, { loader as homeLoader } from "./pages/Home";
import { action as formAction } from "./components/todos/TodoFormComponent";
import Root from "./Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      action={formAction}
    >
      <Route index element={<Home />} loader={homeLoader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
