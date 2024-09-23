import React, { useState } from 'react'

const StateForm = () => {

  const [form, setForm] = useState({
    name: '山田太郎',
    age: 18
  });

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const show = () => {
    console.log(`こんにちわ、${form.name}(${form.age}歳)さん！`)
  };

  return (
    <form action="">
      <div>
        <label htmlFor="name">名前</label>
        <input id='name' name='name' type="text"
          onChange={handleForm} value={form.name}
        />
      </div>
      <div>
        <label htmlFor="age">年齢</label>
        <input id='age' name='age' type="number"
          onChange={handleForm} value={form.age}
        />
      </div>
      <div>
        <button type='button' onClick={show}>
          送信
        </button>
      </div>
      <p>こんにちは、{form.name}({form.age}歳)さん！</p>
    </form>
  )
}

export default StateForm
