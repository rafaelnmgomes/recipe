import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Open-Sans, Helvetica, Sans-Serif;
`;

export const NavButton = styled(Link)`
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
