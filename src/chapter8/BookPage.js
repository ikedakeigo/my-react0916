import React from 'react'
import { useParams } from 'react-router-dom'

const BookPage = () => {
  //ルートパラメータを取得
  // useParams関数は受けっとたルートパラメーターを取得
  // params.名前
  // または
  // params['名前']

  const params = useParams();
  return (
    <p>
      ISBNコード「{params.isbn}」のページです。
    </p>
  )
}

export default BookPage
