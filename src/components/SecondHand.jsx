import styled from 'styled-components';

const SecondHand = ({ seconds }) => {
  const degSec = seconds * (360 / 60);
  return <Hands degSec={degSec}></Hands>;
};
const Hands = styled.div`
  position: absolute;
  transform-origin: bottom;
  top: calc(50% - 100px);
  left: calc(50% - 2px);
  width: 2px;
  height: 100px;
  background: #a5dd9b;
  transform: rotate(${(props) => props.degSec}deg);

  &:after {
    position: absolute;
    bottom: -5px;
    left: -5px;
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    background: #ad88c6;
    border-radius: 50%;
  }
`;

export default SecondHand;
