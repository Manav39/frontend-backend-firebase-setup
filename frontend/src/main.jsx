import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PracProvider } from "./context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PracProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PracProvider>
);
