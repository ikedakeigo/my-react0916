import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import TopPage from './TopPage'
import RouterParam from './RouterParam'
import BookPage from './BookPage'

const routeParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
        <Route path='/' element={<TopPage />} />
        <Route path='/book/:isbn' element={<BookPage />} />
    </Route>
  )
)

export default routeParam
