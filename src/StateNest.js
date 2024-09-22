import React, { useState } from 'react'
import { useImmer } from 'use-immer'

const StateNest = () => {

  const [form, setForm] = useImmer({
    name: '山田太郎',
    address: {
      prefecture: '広島',
      city: 'うんち町'
    }
  })

  const handleForm = e => {
    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value
    // }
    // )

    setForm(form => {
      form[e.target.name] = e.target.value
    })
  }

  const handleFormNest = e => {
    // setForm({
    //   ...form,
    //   address: {
    //     ...form.address,
    //     [e.target.name]: e.target.value
    //   }
    // })

    setForm(form => {
      form.address[e.target.name] = e.target.value
    })
  }

  const show = () => {
    console.log(`${form.name}(${form.address.prefecture}..${form.address.city})`)
  }
  return (
    <form action="">
      <label htmlFor="name">名前</label>
      <input type="text" id='name' name='name' value={form.name} onChange={handleForm}  />
      <label htmlFor="">住所</label>
      <input type="text" id='prefecture' name='prefecture' onChange={handleFormNest} value={form.address.prefecture} />
      <label htmlFor="">市町村</label>
      <input type="text" id='city' name='city' onChange={handleFormNest} value={form.address.city} />
      <div>
        <button onClick={show} type='button'>送信</button>
      </div>
    </form>
  )
}

export default StateNest
