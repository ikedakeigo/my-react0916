import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RouteApp = () => {
  return (
    <>
      <ul>
        <li><><Link to="/">トップ</Link></></li>
        <li><><Link to="/about">このサイトについて</Link></></li>
        <li><><Link to="/article">公開記事</Link></></li>
        <li><><Link to="/article/info">INFOページ</Link></></li>
      </ul>
      <hr />
      <Outlet />
    </>
  )
}

export default RouteApp
