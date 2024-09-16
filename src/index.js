import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyHello from "./MyHello";
import ForList from "./ForList";
import books from "./books";
import ForNest from "./ForNest";
import ForFilter from "./ForFilter";
import ForSort from "./ForSort";
import SelectStyle from "./SelectStyle";
import StyledPanel from "./StyledPanel";
import TitlePanel from "./TitlePanel";
import ListTemplate from "./ListTemplate";
import TypeProp, { Member } from "./TypeProp";
import StateBasic from "./StateBasic";
import StateParent from "./StateParent";
import EventPoint from "./EventPoint";
import EventKey from "./EventKey";
import EventOnce from "./EventOnce";

const root = ReactDOM.createRoot(document.getElementById("root"));
const attrs = {
  href: "https://wings.msn.to/",
  download: false,
  target: "_blank",
  rel: "help",
};
root.render(
  // <ForList src={books} />
  <>
    {/* <ForNest unnti={books} /> */}
    {/* <ForFilter src={books} /> */}
    {/* <ForSort src={books} /> */}
    {/* <SelectStyle mode="light" /> */}
    {/* <StyledPanel>
      <p>メンバー募集中</p>
      <p>ようこそ、</p>
      <MyHello myName="す鈴木"/>
    </StyledPanel> */}
    {/* <TitlePanel>
      <p key="title">メンバー募集中</p>
      <p key="body">ようこそ </p>
    </TitlePanel> */}
    {/* <ListTemplate src={books}>
      {(elem) => (
        <>
          <dt>
            <a href={`https//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title} ( {elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      )}
    </ListTemplate> */}
    {/* <MyHello /> */}
    {/* <TypeProp prop3={new Member()}/> */}
    {/* <StateBasic init={0}/> */}
    {/* <StateParent /> */}
    {/* <EventPoint /> */}
    {/* <EventKey /> */}
    <EventOnce />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
