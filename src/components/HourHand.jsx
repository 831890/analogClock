import styled from 'styled-components';

const HourHand = ({ hours, minutes }) => {
  const degHour = hours * (360 / 12) + minutes * (360 / 12 / 60);
  return <Hands degHour={degHour}></Hands>;
};
const Hands = styled.div`
  position: absolute;
  transform-origin: bottom;
  top: calc(50% - 65px);
  left: calc(50% - 5px);
  width: 5px;
  height: 65px;
  background: #14213d;
  transform: rotate(${(props) => props.degHour}deg);
`;
export default HourHand;
