import React, { useEffect, useState } from 'react'

const sleep = delay => {
  const start = Date.now();

  while(true) {
    if (Date.now() - start > 1000){break;}
  }
}

const HookEffec = ({init}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    sleep(2000);
    setCount(init)
  },[])
  const warnStyle = {
    color: "red",
    fontWeight: "bold",
  };
  return (
    <div style={count < 0 ? warnStyle : {}}>現在のカウント: {count}</div>
  )
}

export default HookEffec
