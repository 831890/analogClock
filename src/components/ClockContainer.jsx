import React, { useState, useEffect } from 'react';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import useTimeStore from '../store/useTimeStore';
import IndexNumber from './IndexNumber';
import styled from 'styled-components';

const ClockContainer = () => {
  const date = useTimeStore((state) => state.date);
  const updateDate = useTimeStore((state) => state.updateDate);

  useEffect(() => {
    const timerId = setInterval(() => {
      updateDate();
    }, 1000);
    return () => clearInterval(timerId);
  }, [updateDate]);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const [tooltip, setTooltip] = useState({ x: 0, y: 0, display: 'none' });

  const handleMouseMove = (e) => {
    setTooltip({
      x: e.clientX,
      y: e.clientY,
      display: 'block',
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, display: 'none' });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('ko-KR');
  };
  return (
    <ClockWrap onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Clock className="clock">
        <HourHand hours={hours} minutes={minutes} />
        <MinuteHand minutes={minutes} seconds={seconds} />
        <SecondHand seconds={seconds} />
        <IndexNumber />
      </Clock>
      <Tooltip tooltip={tooltip}>{formatTime(date)}</Tooltip>
    </ClockWrap>
  );
};

const ClockWrap = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

const Clock = styled.div`
  position: relative;
  margin: 0 auto;
  width: 500px;
  height: 500px;
  background: #000;
  border-radius: 50%;
  overflow: hidden;
  transform: rotate(${(props) => props.theme.degHour}deg);
`;

const Tooltip = styled.div`
  position: fixed;
  left: ${(props) => props.tooltip.x + 20}px;
  top: ${(props) => props.tooltip.y + 20}px;
  display: ${(props) => props.tooltip.display};
  padding: 5px;
  background-color: #5d9f8a;
  border-radius: 5px;
  pointer-events: none;
`;

export default ClockContainer;
