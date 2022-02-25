import React from 'react';
import moment from 'moment';

const Article = ({ title, snippet, date, length }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{moment(date).format('dddd Do MMMM YYYY')}</p>
      <p>{length} minute read</p>
      <p>{snippet}</p>
    </article>
  )
}

export default Article;