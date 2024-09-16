import React from 'react'

const ForFilter = ({src}) => {
  const lowPrice = src.filter(book => book.price < 3500);
  return (
    <dl>
    {
      lowPrice.map(elem => (
        <React.Fragment key={elem.title}>
         <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
         </dt>
         <dd>{elem.summary}</dd>
        </React.Fragment>
      ))
    }
  </dl>
  )
}

export default ForFilter
