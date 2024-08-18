import React from "react";
import { useRecipes } from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const { data, error, isPending } = useRecipes();

  if (isPending) {
    return (
      <div>
        <div className="font-bold text-4xl text-center">RecipeList</div>
        <p className="font-bold text-center">Loading....</p>
      </div>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="text-center">
      <div className="font-bold text-4xl">RecipeList</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {data?.map((recipe) => (
        <div key={recipe.id}>
          {/* <p>{recipe.title}</p> */}
          <RecipeCard recipe={recipe} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default RecipeList;
