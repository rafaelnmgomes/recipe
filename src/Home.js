import React, { useEffect } from "react";
import {
  Container,
  SearchBar,
  Title,
  RecipeGrid,
  SearchButton,
  SearchBarContainer,
} from "./Home.styled";
import RecipeCard from "./RecipeCard";
import SearchIcon from "@mui/icons-material/Search";
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";

const cuisines = [
  { label: "African", value: "African" },
  { label: "American", value: "American" },
  { label: "British", value: "British" },
  { label: "Cajun", value: "Cajun" },
  { label: "Caribbean", value: "Caribbean" },
  { label: "Chinese", value: "Chinese" },
  { label: "Eastern European", value: "Eastern European" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "Greek", value: "Greek" },
  { label: "Indian", value: "Indian" },
  { label: "Irish", value: "Irish" },
  { label: "Italian", value: "Italian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Jewish", value: "Jewish" },
  { label: "Korean", value: "Korean" },
  { label: "Latin American", value: "Latin American" },
  { label: "Mediterranean", value: "Mediterranean" },
  { label: "Mexican", value: "Mexican" },
  { label: "Middle Eastern", value: "Middle Eastern" },
  { label: "Nordic", value: "Nordic" },
  { label: "Southern", value: "Southern" },
  { label: "Spanish", value: "Spanish" },
  { label: "Thai", value: "Thai" },
  { label: "Vietnam", value: "Vietnam" },
];

function Home() {
  const [filters, setFilters] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const getRecipes = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${filters}&number=5&query=${search}`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSearch = () => {
    getRecipes();
  };

  useEffect(() => {
    getRecipes();
  }, [filters]);

  return (
    <Container>
      <Title>Recipes</Title>
      <SearchBarContainer>
        <SearchBar
          placeholder="Search for recipes"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
        <SearchButton onClick={onSearch}>
          <SearchIcon />
        </SearchButton>
      </SearchBarContainer>
      <MultiSelect
        options={cuisines}
        value={filters}
        onChange={setFilters}
        className="filter"
        placeholder="Select Filter"
        hasSelectAll={false}
      />
      {data.length === 0 ? (
        <h1>No recipes found</h1>
      ) : (
        <RecipeGrid>
          {data.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            );
          })}
        </RecipeGrid>
      )}
    </Container>
  );
}

export default Home;
