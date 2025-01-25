import React from "react";
import ReactDOM from "react-dom/client"; // pastikan mengimpor dari "react-dom/client"
import "./index.css";
import App from "./App";

// Menggunakan createRoot untuk mendukung fitur concurrent rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
