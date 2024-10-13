import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RouterParam = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">トップ</NavLink>
        </li>
        <li>
          <NavLink to="/book/978-4-8156-1336-5">これから始るうんち</NavLink>
        </li>
        <li>
          <NavLink to="/book/978-4-297-13288-0">本格的なうんち</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
};

export default RouterParam;
