import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import RouterParam from './RouterParam'
import TopPage from './TopPage'
import BookPage from './BookPage'

const routesHandle = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path='/' element={<TopPage />} handle={{
        title: "トップ",
        keywords: "解説サンプル",
        description: "説明するよ",
      }} />
      <Route path='book/:isbn?' element={<BookPage />} handle={{
        title: "書籍詳細",
        keywords: "運いち",
        description: "説明するよ333",
      }} />
    </Route>
  )
)

export default routesHandle
