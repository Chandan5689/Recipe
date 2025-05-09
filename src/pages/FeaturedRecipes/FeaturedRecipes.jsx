import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaClock, FaSignal } from "react-icons/fa6";
import { Link, useNavigate, useRoutes } from "react-router";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
// import RecipeDetails from "../RecipeDetails/RecipeDetails";
import RecipesData from "../../assets/RecipesData";

function FeaturedRecipes({ activeCategory }) {
  
  const navigate = useNavigate()
    const handleSelectedRecipe = (recipeId) => {
    navigate(`/recipes/${recipeId}`)
  };
  // if (selectedRecipe) {
  //   return <RecipeDetails recipe={selectedRecipe} />;
  // }


  const featuredRecipes = RecipesData

  const filteredRecipes =
    activeCategory === "All"
      ? featuredRecipes
      : featuredRecipes.filter((r) => r.category === activeCategory);
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Recipes</h2>

          <a
            href="#"
            className="flex items-center text-emerald-500 hover:text-emerald-700 font-medium"
          >
            View all <FaArrowRight className="ml-2" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredRecipes.map((recipe) => (
            
              <div
                key={recipe.id}
                onClick={() => handleSelectedRecipe(recipe.id)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                
                <div className="h-60 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="object-cover w-full h-full object-top transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {recipe.title}
                    </h3>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <FaClock className="mr-1" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center">
                      <FaSignal className="mr-1" />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-button whitespace-nowrap">
                      {recipe.category}
                    </span>
                    <button className="text-emerald-500 hover:text-emerald-600 text-sm font-medium cursor-pointer">
                     
                      View Recipe
                        
                    </button>
                  </div>
                </div>
              </div>
           
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRecipes;
