import styled from 'styled-components';

const HourHand = ({ hours, minutes }) => {
  const degHour = hours * (360 / 12) + minutes * (360 / 12 / 60);
  return <Hands style={{ transform: `rotate(${degHour}deg)` }}></Hands>;
};
const Hands = styled.div`
  position: absolute;
  transform-origin: bottom;
  top: calc(50% - 160px);
  left: calc(50% - 8px);
  width: 13px;
  height: 160px;
  background: #efbc9b;
  rotate: var(--degHour);
`;
export default HourHand;
