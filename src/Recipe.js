import React, { useEffect } from "react";
import axios from "axios";
import {
  Container,
  HealthLabel,
  HealthLabels,
  Label,
  RecipeContainer,
  RecipeImage,
  RecipeIngredient,
  RecipeIngredients,
  RecipeInstruction,
  RecipeInstructions,
  RecipeTitle,
  SectionLabel,
  Title,
  TopContainer,
} from "./Recipe.styled";

function Recipe() {
  const [data, setData] = React.useState([]);

  const getRecipeInformation = () => {
    const id = window.location.pathname.split("/")[2];
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRecipeInformation();
  }, []);

  if (data.length === 0)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  const instructions = data.instructions
    .split("<li>")
    .join("")
    .split("</li>")
    .join(".")
    .split("<ol>")
    .join("")
    .split("</ol>")
    .join("");

  return (
    <Container>
      <div>
        <Title to={"/"}>Recipe</Title>
      </div>
      <RecipeContainer>
        <RecipeImage src={data.image} alt={data.title} />
        <RecipeTitle>{data.title}</RecipeTitle>
        <TopContainer>
          <SectionLabel>Ingredients</SectionLabel>
          <RecipeIngredients>
            {data.extendedIngredients.map((ingredient) => {
              return (
                <RecipeIngredient key={ingredient.name}>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </RecipeIngredient>
              );
            })}
          </RecipeIngredients>
          <SectionLabel>Health Labels</SectionLabel>
          <HealthLabels>
            {data.diets.map((diet) => {
              return <HealthLabel key={diet}>{diet}</HealthLabel>;
            })}
          </HealthLabels>
        </TopContainer>
        <Label>Instructions</Label>
        <RecipeInstructions>
          {instructions.split(".").map((instruction, index) => {
            return (
              <RecipeInstruction key={index}>{instruction}</RecipeInstruction>
            );
          })}
        </RecipeInstructions>
      </RecipeContainer>
    </Container>
  );
}

export default Recipe;
