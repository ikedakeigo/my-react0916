import React, { useState } from 'react'

const FormRadio = () => {

  const [form, setForm] = useState({
    os: 'window'
  })

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    console.log(`使用OS:${form.os}`)
  }
  return (
    <form action="">
      <fieldset>
        <legend>使用OS：</legend>
        <label htmlFor="os_wn">window</label>
        <input type="radio" id='os_win' name='os'
        value='window'
        checked={form.os === 'window'}
        onChange={handleForm}
        />
        <label htmlFor="os_mac">macOS</label>
        <input type="radio" id='os_mac' name='os'
        value='mac'
        checked={form.os === 'mac'}
        onChange={handleForm}
        />
        <label htmlFor="linux">linux</label>
        <input type="radio" is='os_linux' name='os'
        value='linux'
        checked={form.os === 'linux'}
        onChange={handleForm}
        />
      </fieldset>
      <button type='button' onClick={show}>送信</button>
    </form>
  )
}

export default FormRadio
