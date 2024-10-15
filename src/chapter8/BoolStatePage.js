import React from 'react'
import { useLocation } from 'react-router-dom'

const BoolStatePage = () => {
  // Locationオブジェクトを取得
  const {state: isbn = '978-4-8156-0182-0'} = useLocation();


  return (
    <>
    <p>
      ISBNコード「{isbn}」のページです。
    </p>
    </>
  )
}

export default BoolStatePage
