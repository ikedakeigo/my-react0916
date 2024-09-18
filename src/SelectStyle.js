import React from 'react'
import './SelectStyle.css'
import cn from 'classnames'

const SelectStyle = ({mode}) => {
  return (
    <div className={ cn('box', {
        light: mode === 'light',
        dark: mode === 'dark'
      })}>
      こんにちは世界
    </div>
  )
}

export default SelectStyle
