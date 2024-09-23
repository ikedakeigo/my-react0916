import React, { useState } from 'react'

const FormSelect = () => {
  const [form, setForm] = useState({
    animal: 'dog'
  })

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    console.log(`好きな動物は${form.animal}`)
  }
  return (
    <form action="">
      <div>
        <label htmlFor="animal">好きな動物</label>
        <select name="animal" id="animal"
        value={form.animal}
        onChange={handleForm}
        >
          <option value="dog">犬</option>
          <option value="saru">猫</option>
          <option value="neko">猿</option>
          <option value="kba">かば</option>
          <option value="wani">わに</option>

        </select>
        <button type='button' onClick={show}>
          送信
        </button>
      </div>
    </form>
  )
}

export default FormSelect
