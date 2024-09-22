import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StateForm from "./StateForm";
import StateFormUC from "./StateFormUC";
import FormTextarea from "./FormTextarea";
import FormSelect from "./FormSelect";
import FormList from "./FormList";
import FormRadio from "./FormRadio";
import FormCheck from "./FormCheck";
import FormCheckMult from "./FormCheckMult";
import FormFile from "./FormFile";
import StateNest from "./StateNest";
import StateNest2 from "./StateNest2";
import StateTodo from "./StateTodo";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <StateTodo />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
