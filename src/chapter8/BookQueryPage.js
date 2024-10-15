import React from 'react'
import { useSearchParams } from 'react-router-dom'

const BookQueryPage = () => {
  // クエリの取得
  const [params, setParams] = useSearchParams(
    { isbn: '978-4-8156-0182-9'}
  )
  return (
   <>
   <p>
    ISBNコード「{params.get('isbn')}」のページです。
   </p>
   </>
  )
}

export default BookQueryPage
