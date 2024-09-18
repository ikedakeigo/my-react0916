import React from 'react'

const EventKey = () => {
  const handleKey = e => {
    if(e.ctrlKey && e.key === 'q') {
      alert('名前は20文字以内で入力してください。')
    }
  }
  return (
    <form>
      <label htmlFor="">
        名前：
        <input type="text" size='20' onKeyDown={handleKey} />
      </label>
    </form>
  )
}

export default EventKey
