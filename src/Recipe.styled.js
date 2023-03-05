import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Open-Sans, Helvetica, Sans-Serif;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 40px;
`;

export const BackText = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
`;

export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SectionLabel = styled.h2`
  text-align: center;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: url("https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif")
    center no-repeat;
  z-index: 1;
`;

export const RecipeTitle = styled.h2`
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecipeImage = styled.img`
  width: 500px;
  height: 500px;
`;

export const Label = styled.h2`
  text-align: center;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const RecipeIngredients = styled.ul`
  margin-bottom: 10px;
  list-style: none;
`;

export const RecipeIngredient = styled.li`
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const RecipeInstructions = styled.ol`
  margin-bottom: 10px;
  list-style: none;
`;

export const RecipeInstruction = styled.li`
  margin-bottom: 10px;
`;

export const HealthLabels = styled.ul`
  margin-bottom: 10px;
  list-style: none;
`;

export const HealthLabel = styled.li`
  margin-bottom: 10px;
  text-transform: capitalize;
`;
