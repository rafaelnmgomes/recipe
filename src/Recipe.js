import React, { useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
  TopContainer,
  ImageContainer,
  LoadingContainer,
  BackText,
  Header,
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

  if (data.length === 0) return <LoadingContainer />;

  const getIntructions = () => {
    const instructions = data.instructions
      .split("<li>")
      .join("")
      .split("</li>")
      .join(".");

    return DOMPurify.sanitize(instructions, { ALLOWED_TAGS: [] });
  };

  return (
    <Container>
      <Header>
        <ArrowBackIosIcon />
        <BackText to={"/"}>Home</BackText>
      </Header>
      <RecipeContainer>
        <ImageContainer>
          <RecipeImage src={data.image} alt={data.title} />
        </ImageContainer>
        <RecipeTitle>{data.title}</RecipeTitle>
        <TopContainer>
          <SectionLabel>Ingredients</SectionLabel>
          <SectionLabel>Health Labels</SectionLabel>
          <RecipeIngredients>
            {data.extendedIngredients.map((ingredient) => {
              return (
                <RecipeIngredient key={ingredient.name}>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </RecipeIngredient>
              );
            })}
          </RecipeIngredients>
          <HealthLabels>
            {data.diets.map((diet) => {
              return <HealthLabel key={diet}>{diet}</HealthLabel>;
            })}
          </HealthLabels>
        </TopContainer>
        <Label>Instructions</Label>
        <RecipeInstructions>
          {getIntructions()
            .split(".")
            .map((instruction, index) => {
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
