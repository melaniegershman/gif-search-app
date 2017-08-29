import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt="A GIF"/>
  </li>
);

export default Gif;
