import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.css";
import "./styles/animation.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

reportWebVitals();
