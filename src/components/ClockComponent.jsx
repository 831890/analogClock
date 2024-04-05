import React, { useState, useEffect } from 'react';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import useTimeStore from '../store/useTimeStore';
import IndexNumber from './IndexNumber';
import '../assets/css/clock.css';
import styled from 'styled-components';

const ClockComponent = () => {
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
      {/* 툴팁!!!!!!!!!!!!! */}
      <div
        style={{
          position: 'fixed',
          left: `${tooltip.x + 10}px`,
          top: `${tooltip.y + 10}px`,
          display: `${tooltip.display}`,
          backgroundColor: 'lightgray',
          padding: '5px',
          borderRadius: '5px',
          pointerEvents: 'none',
        }}
      >
        {formatTime(date)}
      </div>
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
`;
export default ClockComponent;
