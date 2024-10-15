import React, { useState } from 'react'

const HookRefNg = () => {
  // タイマーのオンオフを管理するための関数
  let id = null;
  const [count, setCount] = useState(0)

  // 開始ボタンでタイマーを生成
  const handleStart = () => {
    // タイマー稼働中の場合は何もしない（二度おし対象)
    if(id === null){
      id = setInterval(() => setCount(c => c + 1), 1000)
    }
  };

  // 終了ボタンでタイマーを破棄
  const handleEnd = () => {
    clearInterval(id);
    id = null
  }
  return (
    <>
    <button onClick={handleStart}>開始</button>
    <button onClick={handleEnd}>終了ボタンでタイマーを破棄</button>
    <p>{count}秒経過</p>
    </>
  )
}

export default HookRefNg
