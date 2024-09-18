import React from 'react'
import ForItem from './ForItem'

const ForNest = ({unnti}) => {
  return (
    <dl>
      {unnti.map(elem =>
        <ForItem kuso={elem} key={elem.isbn} />
      )}
    </dl>
  )
}

export default ForNest
