import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Ensure Tailwind is applied globally

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
