import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const RouterParam = () => {
  // カウント数を管理するためのStateを準備
  const [count, setCount] = useState(0);
  return (
    <>
    <p>
      アクセス数:{count}
    </p>
      <ul>
        <li>
          <NavLink to="/">トップ</NavLink>
        </li>
        <li>
          <NavLink to="/book/" end>これから始るうんち</NavLink>
        </li>
        <li>
          <NavLink to="/book/" end>本格的なうんち</NavLink>
        </li>
        <li>
          <NavLink to="/nothing/foo/bar" end>存在しないページ</NavLink>
        </li>
        <li>
          <NavLink to="/bookQuery?isbn=978-4-8156-1336-5">これから始るうんこタレ外伝</NavLink>
        </li>
        <li>
          <NavLink to="/bookState" state='978-4-8156-1336-5'>これから始るうんこタレ外伝(State版)</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet context={[count, setCount]} />
    </>
  );
};

export default RouterParam;
