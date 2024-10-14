import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const TopPage = () => {
  const [, setCount] = useOutletContext();
  useEffect(() => setCount(c => c + 1), [setCount]);
  return (
    <div>TopPage</div>
  )
}

export default TopPage
