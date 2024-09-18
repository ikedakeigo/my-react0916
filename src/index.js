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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <FormCheckMult />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
