import React, { useEffect, useState } from 'react'

const StateEffect = ({init}) => {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState('hoge');

  useEffect(() => {
    console.log(`count is ${count}.`);
  }, [count])

  const handleClick = () => setCount(count + 1);
  return (
     <>
      {/* ボタンにタイムスタンプを反映 */}
      <button onClick={() => setHoge(Date.now())}>Hoge({hoge})</button>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました。</p>
     </>
  )
}

export default StateEffect
