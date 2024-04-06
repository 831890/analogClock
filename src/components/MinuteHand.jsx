import styled from 'styled-components';

const MinuteHand = ({ minutes, seconds }) => {
  const degMin = minutes * (360 / 60) + seconds * (360 / 60 / 60);
  return <Hands degMin={degMin}></Hands>;
};

const Hands = styled.div`
  position: absolute;
  transform-origin: bottom;
  top: calc(50% - 220px);
  left: calc(50% - 5px);
  width: 8px;
  height: 220px;
  background: #9cafaa;
  transform: rotate(${(props) => props.degMin}deg);
`;

export default MinuteHand;
