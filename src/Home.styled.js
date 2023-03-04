import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .filter {
    width: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchBar = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 20px;
  margin-right: 20px;
`;

export const SearchButton = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 80px;
  padding: 20px;
`;
