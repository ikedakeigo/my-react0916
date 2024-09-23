import React, { useState } from 'react'

const FormCheck = () => {
  const [form, setForm] = useState({
    agreement: true
  });

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    })
  }

  const show = () => {
    console.log(`同意確認：${form.agreement ? '同意': '反対'}`)
  }
  return (
    <form action="">
      <label htmlFor="agreement">同意します</label>
      <input type="checkbox" id='agreement' name='agreement'
      checked={form.agreement}
      onChange={handleForm}
      /> <br />
      <button type='button' onClick={show}>送信</button>
    </form>
  )
}

export default FormCheck
