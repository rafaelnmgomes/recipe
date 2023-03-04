import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 40px;
`;

export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SectionLabel = styled.h2``;

export const RecipeTitle = styled.h2`
  text-align: center;
`;

export const RecipeImage = styled.img``;

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
`;
