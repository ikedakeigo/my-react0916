import React from 'react'
import { useParams } from 'react-router-dom'

const NotFoundPage = () => {
  const { '*': paths } = useParams();
  return (
  <>
  <p>
    指定されたパス「{paths}」は存在しません。
  </p>
  </>
  )
}

export default NotFoundPage
