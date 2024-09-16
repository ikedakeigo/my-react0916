import React from 'react'
import dl_icon from './image/logo192.png'

const Download = ({isbn}) => {
  return (
    <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}`}>
      <img src={dl_icon} alt="Sample Download" />
    </a>
  )
}

export default Download
