import React from "react";
import { useParams } from "@tanstack/react-router";
import { useRecipes } from "../hooks/useRecipes";

const RecipeDetailPage = () => {
  const { id } = useParams({}); // Get the recipe ID from the URL parameters
  const { data, error, isPending } = useRecipes(); // Fetch recipes data

  // Convert `id` to a number if your `recipe.id` is a number
//   const recipeId = parseInt(id, 10);
  
  // Find the recipe based on the ID
  const foundRecipe = data.find((recipe) => recipe.id === id);

  // Handle loading state
  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Recipe Details</h1>
      {foundRecipe ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{foundRecipe.title}</h2>
          <p className="text-base text-gray-600 mb-4">
            <strong>Ingredients:</strong> {foundRecipe.ingredients}
          </p>
          <p className="text-base text-gray-600">
            <strong>Instructions:</strong> {foundRecipe.instructions}
          </p>
        </div>
      ) : (
        <p className="text-lg text-gray-600">No recipe found</p>
      )}
    </div>
  );
};

export default RecipeDetailPage;
