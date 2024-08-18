import React from "react";
import { useParams } from "@tanstack/react-router";
import { useRecipes } from "../hooks/useRecipes";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { data, error, isPending } = useRecipes();
  const foundRecipe = data.find((recipe) => recipe.id === id);
  console.log(foundRecipe);

  return (
    <div>
      <h1>Recipe Details for ID: {id}</h1>
      <p>{data?.id}</p>
    </div>
  );
};

export default RecipeDetailPage;
