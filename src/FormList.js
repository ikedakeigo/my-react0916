import React, { useState } from 'react'

const FormList = () => {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  })

  const handleFormList = e => {
    const data = [];

    const opts = e.target.options;
    for (const opt of opts){
      if(opt.selected) {
        data.push(opt.value)
      }
    }
    setForm({
      ...form,
      [e.target.name]: data
    })
  }

  const show = () => {
    console.log(`好きな動物${form.animal}`)
  }
  return (
    <form action="">
      <label htmlFor="animal">好きな動物</label>
      <select name="animal" id="animal"
      value={form.animal}
      size="4" multiple={true}
      onChange={handleFormList}
      >
        <option value="dog">イム</option>
        <option value="hamster">猫</option>
        <option value="kame">かめ</option>
        <option value="tako">たこ</option>
        <option value="musi">むし</option>

      </select>
      <button type='button' onClick={show}>送信</button>
    </form>
  )
}

export default FormList
