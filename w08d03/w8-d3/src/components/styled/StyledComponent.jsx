import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: turquoise;
`;

const Paragraph = styled.p`
  color: purple;
  font-size: 36px;
`;

const StyledComponent = () => {
  return (
    <div>
      <Header>I Look Gooooood!!</Header>
      <Paragraph>Not as good as I do. Hahahahahahha</Paragraph>
    </div>
  );
};

export default StyledComponent;
