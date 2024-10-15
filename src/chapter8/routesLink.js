import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import TopPage from "./TopPage";
import RouteApp from "./RouteApp";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";
import RouterNav from "./RouterNav";
import styled from "styled-components";
import InfoPage from "./InfoPage";

const Active = styled.div`
  .active {
    color: red;
    font-weight: bold;
  }
`;

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterNav />}>
      <Route index element={<TopPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="article" element={<ArticlePage />} />
      <Route path="article/info" element={<InfoPage />} />
    </Route>
  )
);

export default routesLink;
