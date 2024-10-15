import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import MyHeader from './MyHeader';

const TopPage = () => {
  const [, setCount] = useOutletContext();
  useEffect(() => setCount(c => c + 1), [setCount]);
  return (
    <>
    <MyHeader />
    <div>TopPage</div>
    </>
  )
}

export default TopPage
