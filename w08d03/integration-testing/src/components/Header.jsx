import React from 'react';

const Header = (props) => {
  const heading = props.options.map((option) => option[0]).join(' ');
  const emojiHeading = props.options.map((option) => option[1]).join('-');

  return(
    <header>
      <h1>{heading}</h1>
      <h2>{emojiHeading}</h2>
    </header>
  )
};

export default Header;
