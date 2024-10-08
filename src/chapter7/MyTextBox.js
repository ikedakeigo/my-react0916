import React, { forwardRef, useImperativeHandle, useRef } from "react";

const MyTextBox = forwardRef(({label}, ref) => {
  // const {label} = props
  const input = useRef(null)

  //親コンポーネントに対して公開するオブジェクトを生成
  useImperativeHandle(ref, () => {
    return {
      focus() {
        input.current.focus();
      }
    }
  }, [])
  return (
    <label>
      {label}:
      <input type="text" size="15" ref={input} />
    </label>
  );
});

export default MyTextBox;
