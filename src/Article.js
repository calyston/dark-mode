import React from 'react';
// import moment from 'moment';

const Article = ({ title, snippet, date, length }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>date</p>
      <p>{length} minute read</p>
      <p>{snippet}</p>
    </article>
  )
}

export default Article;