import React from 'react';

import './index.css';

function Post({ title, date, author, text, highlights, image }) {
  return <article>
    
    <h1>{title}</h1>

    <h2>{date}</h2>

    <h3>{author}</h3>

    <p>{text}</p>

    {highlights.map((highlight) =>
    <li>{highlight}</li>)}

    <img alt={image.alt} width={"80%"} src={image.link} />

  </article>;
}

export default Post;
