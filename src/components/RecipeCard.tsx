import { Link } from "@tanstack/react-router";
import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-md mx-auto">
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
        <Link to={`/${recipe.id}`}>{recipe.title}</Link>
            </h2>
        <p className="text-base text-gray-600">
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>
        <p className="text-base text-gray-600 mt-4">
          <strong>Instructions:</strong> {recipe.instructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
