import React from "react";
// routerインポート
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// ルーティングで利用するページをインポート
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";

const routeBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
    </>
  )
);

export default routeBasic;
