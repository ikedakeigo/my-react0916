import React from 'react'
import { useParams } from 'react-router-dom'

const BookPage = () => {
  //ルートパラメータを取得
  // useParams関数は受けっとたルートパラメーターを取得
  // params.名前
  // または
  // params['名前']

  // const {isbn} = useParams();
  const { isbn = '978-4-8156-0182-9'} = useParams();
  return (
    <p>
      ISBNコード「{isbn}」のページです。
    </p>
  )
}

export default BookPage
