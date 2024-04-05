import styled from 'styled-components';

const SecondHand = ({ seconds }) => {
  const degSec = seconds * (360 / 60);
  return <Hands className="s-hand" style={{ transform: `rotate(${degSec}deg)` }}></Hands>;
};
const Hands = styled.div`
  position: absolute;
  transform-origin: bottom;
  top: calc(50% - 200px);
  left: calc(50% - 2px);
  width: 4px;
  height: 200px;
  background: #a5dd9b;
  rotate: var(--degSec);

  &:after {
    position: absolute;
    bottom: -15px;
    left: -15px;
    display: block;
    content: '';
    width: 30px;
    height: 30px;
    background: #ad88c6;
    border-radius: 50%;
  }
`;

export default SecondHand;
