import React from 'react'

const ListTemplate = ({src, children}) => {
  return (
    <dl>
      {src.map(elem => (
        <React.Fragment key={elem.isbn}>
          {children(elem)}
        </React.Fragment>
      ))}
    </dl>
  )
}

export default ListTemplate
