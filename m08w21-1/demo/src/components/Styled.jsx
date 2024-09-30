import styled from 'styled-components';
import Wrapper from './Wrapper';
import RefPractice from './RefPractice';

const Styled = () => {
  const H2 = styled.h2`
    color: yellow;
    text-decoration: underline;
  `;

  const P = styled.p`
    color: ${props => props.orange ? 'orange' : 'blue'};
    margin-left: 20px;
  `;

  const Wrapped = styled(Wrapper)`
    color: magenta;
  `;

  const WrappedTwo = styled(RefPractice)`
    color: blue;
    background-color: yellow;
  `;

  return (
    <div>
      <h2>Styled Component Demo</h2>
      <H2>How do I look?</H2>
      <P orange>Hello</P>
      <P>World</P>
      <Wrapper>Does this work?</Wrapper>
      <Wrapped>Does this one work?</Wrapped>
      <WrappedTwo />
      <RefPractice />
    </div>
  );
};

export default Styled;
