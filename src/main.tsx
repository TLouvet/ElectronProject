import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./renderer/App";
import "@fontsource/roboto"; // Defaults to weight 400
import "./renderer/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
