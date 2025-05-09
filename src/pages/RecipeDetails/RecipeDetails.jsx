import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import { useParams } from "react-router";
import RecipeOverview from "./RecipeOverview/RecipeOverview";
import RecipeDetailsHero from "./RecipeDetailsHero/RecipeDetailsHero";
import RecipesData from "../../assets/RecipesData";
import RecipeMainContent from "./RecipeMainContent/RecipeMainContent";
import BackToHome from "../../components/BackToHome";

function RecipeDetails() {
  const recipes = RecipesData;
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  
  useEffect(() => {
    const recipeId = parseInt(id);
    const foundRecipe = recipes.find((r) => r.id === recipeId);
    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
  }, [id]);
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recipe not found
          </h2>
          <BackToHome />
        </div>
      </div>
    );
  }
  return (
    <section>
      {/* recipe detail hero section */}
      <RecipeDetailsHero recipe={recipe} />
      {/* Recipe Overview */}
      <RecipeOverview recipe={recipe} />

    </section>
  );
}

export default RecipeDetails;
