import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
  color: 5555ff;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  padding-left: 20px;
  border-radius: 8px;
  border: 2px solid black;
  font-size: 15px;
  margin: 10px;
`;

export const Button = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 30px;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
