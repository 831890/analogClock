import styled from 'styled-components';

const IndexNumber = () => {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
        <Number key={num} rotation={num * 30}>
          <p>{num}</p>
        </Number>
      ))}
    </>
  );
};

const Number = styled.div`
  color: #b6b1a6;
  font-weight: bold;
  font-size: 1.5rem;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: ${(props) => `rotate(${props.rotation}deg)`};
`;
export default IndexNumber;
