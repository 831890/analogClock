import styled from 'styled-components';

const MinuteHand = ({ minutes, seconds }) => {
  const degMin = minutes * (360 / 60) + seconds * (360 / 60 / 60);
  return <Hands degMin={degMin}></Hands>;
};

const Hands = styled.div`
  position: absolute;
  transform-origin: bottom;
  top: calc(50% - 100px);
  left: calc(50% - 5px);
  width: 5px;
  height: 100px;
  background: #fca311;
  transform: rotate(${(props) => props.degMin}deg);
`;

export default MinuteHand;
