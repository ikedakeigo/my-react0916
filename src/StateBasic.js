import React, { useState } from 'react'

const StateBasic = ({init}) => {
  const [count, seCount] = useState(init);

  const handleClick = () => {
    seCount(c => c + 1);
    seCount(c => c + 1);
  };
  return (
   <>
   <button onClick={handleClick}>カウント</button>
   <p>{count}回、クリックされました。</p>
   </>
  )
}

export default StateBasic
