import React, { useState } from 'react'

let maxId = 0;



const StateTodo = () => {

  const [desc, setDesc] = useState(true)

  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState([
  ]);

  const handleChangeTitle = e => {
    // テキストボックスへの入力を反映
    setTitle(e.target.value);
  }

  const handleClick = () => {
    // 新規のtodoの追加
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false
      }
    ])
  }

  const handleDone = e => {
    // todo配列を走査し、id値が等しいものを検索
    setTodo(todo.map(item => {
      if (item.id === Number(e.target.dataset.id)) {
        return {
          ...item,
          isDone: true
        }
      } else {
        return item;
      }
    }))
  }

  // 削除ボタン
  const handleRemove = e => {
    setTodo(todo.filter(item =>
      item.id != Number(e.target.dataset.id)
    ))
  }


  // 昇順・降順
  const handleSort = e => {

    // 既存のtodoリストを複製の上でソート
    const sorted = [...todo]
    sorted.sort((m,n) => {
      // desc値に応じて昇順・降順を決定
      if(desc){
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    })

    // desc値を反転
    setDesc(d => !d)

    // ソート済みのリストを再セット
    setTodo(sorted)
  }

  return (
    <div>
      <label htmlFor="">
        やること：
        <input type="text" name='title' value={title} onChange={handleChangeTitle} />
        <button type='button' onClick={handleClick}>追加</button>
        <button type='button' onClick={handleSort}>
          ソート({desc ? '↑' : '↓'})
        </button>
        <hr />
        <ul>
          {todo.map(item => (
            <li
            key={item.id}
            className={item.isDone ? 'done' : ''}
            >{item.title}
            <button type='button' onClick={handleDone} data-id={item.id}>済み</button>
            <button type='button' onClick={handleRemove} data-id={item.id}>削除</button>
            </li>
          ))}
        </ul>
      </label>
      <style>{`
        .done {
          text-decoration: line-through;
        }
      `}
      </style>
    </div>
  )

}

export default StateTodo
