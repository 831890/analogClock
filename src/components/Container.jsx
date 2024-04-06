import React, { useState, useEffect } from 'react';
import useTimeStore from '../store/useTimeStore';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import IndexNumber from './IndexNumber';
import styled from 'styled-components';

const Container = () => {
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
    <Wrap onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Clock className="clock">
        <HourHand hours={hours} minutes={minutes} />
        <MinuteHand minutes={minutes} seconds={seconds} />
        <SecondHand seconds={seconds} />
        <IndexNumber />
      </Clock>
      <Tooltip tooltip={tooltip}>김주아 : {formatTime(date)}</Tooltip>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
`;

const Clock = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: #e5e5e5;
  overflow: hidden;
`;

const Tooltip = styled.div`
  position: fixed;
  left: ${(props) => props.tooltip.x + 20}px;
  top: ${(props) => props.tooltip.y + 20}px;
  display: ${(props) => props.tooltip.display};
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  pointer-events: none;
`;

export default Container;
