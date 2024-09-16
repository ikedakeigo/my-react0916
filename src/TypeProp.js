import React from 'react'
import PropTypes, { func } from 'prop-types'

export function Member() {};
const TypeProp = (props) => {
  console.log(props)
  return (
   <p>コンソールを確認してください</p>
  )
}

TypeProp.propTypes = {
  prop1: PropTypes.instanceOf(Member),
  prop2: PropTypes.oneOf(['男性', '女性', 'その他']),
  prop3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
}

export default TypeProp
