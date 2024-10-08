import React, { useReducer, useRef, useState } from "react";

const HookRef = () => {
  // タイマーのオンオフを管理するための関数
  const id = useRef(null);
  const [count, setCount] = useState(0);

  // 開始ボタンでタイマーを生成
  const handleStart = () => {
    // タイマー稼働中の場合は何もしない（二度おし対象)
    if (id.current === null) {
      id.current = setInterval(() => setCount((c) => c + 1), 1000);
    }

    console.log(id.current, "開始");
  };

  // 終了ボタンでタイマーを破棄
  const handleEnd = () => {
    clearInterval(id.current);
    id.current = null;
    console.log(id.current, "終了");
  };
  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了ボタンでタイマーを破棄</button>
      <p>{count}秒経過</p>
    </>
  );
};

export default HookRef;
