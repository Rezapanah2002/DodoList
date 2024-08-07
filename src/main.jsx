import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import TodoList from "./component/TodoList/TodoList.jsx";
import Calander from "./component/Calander/CalanderC.jsx";
import Timer from "./component/Promodo/Timer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="todolist" element={<TodoList />} />
      <Route path="planner" element={<Calander />} />

      <Route path="promodo" element={<Timer />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
