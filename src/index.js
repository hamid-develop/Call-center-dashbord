import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import LoginForm from "./components/LoginForm";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <LoginForm />
  </React.StrictMode>
);
