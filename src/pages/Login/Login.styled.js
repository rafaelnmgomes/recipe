import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: Open-Sans, Helvetica, Sans-Serif;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 400px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 400px;
  height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const GoogleButton = styled.button`
  width: 400px;
  height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
