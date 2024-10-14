import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import TopPage from './TopPage'
import RouterParam from './RouterParam'
import BookPage from './BookPage'
import NotFoundPage from './NotFoundPage'
import BookQueryPage from './BookQueryPage'
import BoolStatePage from './BoolStatePage'

const routeParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
        <Route path='/' element={<TopPage />} />
        <Route path='/book/:isbn?' element={<BookPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/bookQuery' element={<BookQueryPage />} />
        <Route path='/bookState' element={<BoolStatePage />} />
    </Route>
  )

)
console.log(routeParam, "関数の中身")

export default routeParam
