import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/styles.css";
import './styles/responsive.css'
import './styles/animate.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
