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
import { RouterProvider } from "react-router-dom";
import routeBasic from "./chapter8/routeBasic";
import routesLink from "./chapter8/routesLink";
import routeParam from "./chapter8/routeParam";
import routesHandle from "./chapter8/routesHandle";
import { HelmetProvider } from "react-helmet-async";


const root = ReactDOM.createRoot(document.getElementById("root"));
// react-helmetを有効
root.render(
  <HelmetProvider>
    <RouterProvider router={routesHandle} />
  </HelmetProvider>
  // ここまでp446
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
