import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Homepage from "./views/Homepage/Homepage";
import Day from "./views/Day/Day";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <div>Oopps</div>,
  },
  {
    path: "/hp",
    element: <Homepage />,
  },
  {
    path: "/day/:issue",
    element: <Day />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
