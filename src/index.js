import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./compontens/Router";
import { AuthoProvider } from "./context/AuthoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthoProvider>
    <RouterProvider router={router} />
  </AuthoProvider>
);
