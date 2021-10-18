import React from 'react';
import styled from 'styled-components';
import Custom from './Custom';

const Header = styled.h1`
  color: turquoise;
`;

const Paragraph = styled.p`
  color: purple;
  font-size: 36px;
`;

const CustomTwo = styled.h2`
  background: ${ props => props.electric ? 'black' : 'white' };
  color: ${ props => props.electric ? 'yellow' : 'darkgrey' };

  text-decoration: underline;
`;

const WrappedCustom = styled(Custom)`
  color: palevioletred;
  font-weight: bold;
`;

const StyledComponent = () => {
  return (
    <div>
      <Header>I Look Gooooood!!</Header>
      <Paragraph>Not as good as I do. Hahahahahahha</Paragraph>
      
      <CustomTwo>Basic</CustomTwo>
      <CustomTwo electric>I'm Electric!!!</CustomTwo>

      <Custom />
      <WrappedCustom />
    </div>
  );
};

export default StyledComponent;
