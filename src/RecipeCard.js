import React from "react";
import { Router, CardImage, CardTitle, Container } from "./RecipeCard.styled";

function RecipeCard({ id, title, image }) {
  return (
    <Router to={`recipe/${id}`}>
      <Container>
        <CardImage src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
      </Container>
    </Router>
  );
}

export default RecipeCard;
