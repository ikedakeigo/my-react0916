import React from "react";
import Download from "./Download";

const ForSort = ({ src }) => {
  src.sort((m,n) => m.price - n.price);
  return (
    <dl>
    {src.map((elem) => (
      <React.Fragment key={elem.title}>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
        </dt>
        <dd>
        {elem.summary}
        {elem.download ? <Download isbn={elem.isbn} /> : <p>ダウンロード不可</p>}
        </dd>
      </React.Fragment>
    ))}
  </dl>
  );
};

export default ForSort;
