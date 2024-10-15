import React, { useEffect, useState } from "react";

const HookTimer = ({ init }) => {
  const [count, setCount] = useState(init);

  useEffect(() => {
    // 起動時の処理
    const t = setInterval(() => {
      setCount(c => c - 1);
    }, 1000);

    // アンマウント時の処理
    return () => {
      clearInterval(t);
    };
    // 依存する変数
  }, []);

  const warnStyle = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <>
      <div style={count < 0 ? warnStyle : {}}>現在のカウント: {count}</div>
    </>
  );
};

export default HookTimer;
