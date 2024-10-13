import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./RouterNav.css";

// const isCurrent = ({isActive }) => isActive ? 'active' : '';

// スタイルクラスを変更
const isCurrent = ({ isActive }) =>
  isActive
    ? {
        color: "Red",
        fontWeight: "bold",
      }
    : {};

const RouterNav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink style={isCurrent} to="/">
            トップ
          </NavLink>
        </li>
        <li>
          <NavLink style={isCurrent} to="/article">
            公開記事
          </NavLink>
        </li>
        <li>
          <NavLink style={isCurrent} to="/about">
            このサイトについて
          </NavLink>
        </li>
        <li>
          <NavLink style={isCurrent} to="/article/info">
            Infoページ
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default RouterNav;
