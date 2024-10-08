import React, { useEffect, useRef, useState } from 'react'

const HookCallbackRef = () => {
  const [show, setShow] = useState(false);
  // ボタンクリックで表示・非表示を反転
  const handleClick = () => setShow(!show)

  // コールバックrefを準備
  const callbackRef = elem => elem?.focus()

  // 住所を参照
  // const address = useRef(null)

  // 住所項目が空でなければフォーカスを移動
  // useEffect(() => {
  //   if(address.current){
  //     address.current.focus();
  //   }
  // }, [show])
  return (
   <>
    <div>
      <label htmlFor="name">名前：</label>
      <input type="text" id='name' />
    </div>
    <dir>
      <label htmlFor="email">メールアドレス：</label>
      <input type="text" id='email' />
      <button onClick={handleClick}>拡張</button>
    </dir>
    {/* State (show)値に応じて住所を表示 */}
    {show &&
      <div>
        <label htmlFor="address">住所：</label>
        <input type="text" id='address' ref={callbackRef} />
      </div>
    }
   </>
  )
}

export default HookCallbackRef
