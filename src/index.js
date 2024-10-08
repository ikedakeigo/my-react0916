import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StateEffect from "./chapter7/StateEffect";
import HookTimer from "./chapter7/HookTimer";
import HookEffec from "./chapter7/HookEffec";
import HookRefNg from "./chapter7/HookRefNg";
import HookRef from "./chapter7/HookRef";
import HookRefForword from "./chapter7/HookRefForword";
import HookCallbackRef from "./chapter7/HookCallbackRef";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <HookCallbackRef />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
