import React, { useState } from 'react'

const FormCheckMult = () => {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  })

  const handleForm = e => {
    const fa = form.animal
    if(e.target.checked){
      fa.push(e.target.value)
    } else {
      fa.splice(fa.indexOf(e.target.value), 1)
    }
    setForm({
      ...form,
      [e.target.name]:fa
    })
  }

  const show = () => {
    console.log(`好きな動物は${form.animal}`)
  }
  return (
   <form action="">
    <fieldset>
      <legend>好きな動物</legend>
      <label htmlFor="animal_dog">イム</label>
      <input type="checkbox" name='animal' id='animal'
      checked={form.animal.includes('dog')}
      onChange={handleForm}
      /> <br />
      <label htmlFor="animal_neko">猫</label>
      <input type="checkbox" name='animal' id='animal'
      checked={form.animal.includes('hamster')}
      onChange={handleForm}
      /> <br />
      <label htmlFor="animal_dog">イム</label>
      <input type="checkbox" name='animal' id='animal'
      checked={form.animal.includes('aaa')}
      onChange={handleForm}
      /> <br />
      <label htmlFor="animal_dog">イム</label>
      <input type="checkbox" name='animal' id='animal'
      checked={form.animal.includes('rrrr')}
      onChange={handleForm}
      /> <br />
      <label htmlFor="animal_dog">イム</label>
      <input type="checkbox" name='animal' id='animal'
      checked={form.animal.includes('ggg')}
      onChange={handleForm}
      /> <br />
      <button type='button' onClick={show}>送信</button>
    </fieldset>
   </form>
  )
}

export default FormCheckMult
