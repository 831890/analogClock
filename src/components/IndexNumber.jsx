import styled from 'styled-components';

const IndexNumber = () => {
  return (
    <>
      <Number className="number1">
        <p>1</p>
      </Number>
      <Number className="number2">
        <p>2</p>
      </Number>
      <Number className="number3">
        <p>3</p>
      </Number>
      <Number className="number4">
        <p>4</p>
      </Number>
      <Number className="number5">
        <p>5</p>
      </Number>
      <Number className="number6">
        <p>6</p>
      </Number>
      <Number className="number7">
        <p>7</p>
      </Number>
      <Number className="number8">
        <p>8</p>
      </Number>
      <Number className="number9">
        <p>9</p>
      </Number>
      <Number className="number10">
        <p>10</p>
      </Number>
      <Number className="number11">
        <p>11</p>
      </Number>
      <Number className="number12">
        <p>12</p>
      </Number>
    </>
  );
};

const Number = styled.div`
  color: #b6b1a6;
  --rotation: 0;
  font-weight: bold;
  font-size: 1.5rem;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;

  &.number1 {
    transform: rotate(30deg);
  }
  &.number2 {
    transform: rotate(60deg);
  }
  &.number3 {
    transform: rotate(90deg);
  }
  &.number4 {
    transform: rotate(120deg);
  }
  &.number5 {
    transform: rotate(150deg);
  }
  &.number6 {
    transform: rotate(180deg);
  }
  &.number7 {
    transform: rotate(210deg);
  }
  &.number8 {
    transform: rotate(240deg);
  }
  &.number9 {
    transform: rotate(270deg);
  }
  &.number10 {
    transform: rotate(300deg);
  }
  &.number11 {
    transform: rotate(330deg);
  }
`;
export default IndexNumber;
