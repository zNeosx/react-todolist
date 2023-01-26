import { FC, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import Root from "./Root";

const App: FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} loader={homeLoader} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
