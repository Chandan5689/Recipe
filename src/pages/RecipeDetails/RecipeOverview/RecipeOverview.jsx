import React, { useState } from "react";
import { FaClock, FaFire, FaMinus, FaPlus, FaSignal, FaUtensils } from "react-icons/fa6";
import RecipeMainContent from "../RecipeMainContent/RecipeMainContent";
function RecipeOverview({recipe}) {
  const [servings, setServings] = useState(4);
  const incrementServings = () => {
    if (servings < 12) {
      setServings(servings + 1);
    }
  };
  const decrementServings = () => {
    if (servings > 1) {
      setServings(servings - 1);
    }
  };
  return (
    <>
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {recipe.intro}
              </p>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Servings</h3>
              <div className="flex items-center">
                <button
                  onClick={decrementServings}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer"
                  disabled={servings <= 1}
                >
                  <FaMinus className="text-gray-600" />
                </button>
                <span className="mx-3 font-medium text-gray-800">
                  {servings}
                </span>
                <button
                  onClick={incrementServings}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer"
                  disabled={servings >= 12}
                >
                  <FaPlus className="text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-emerald-500 mb-1">
                    <FaClock/>
                  </div>
                  <p className="text-sm text-gray-500">Prep Time</p>
                  <p className="font-medium text-gray-800">{recipe.perpTime}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-emerald-500 mb-1">
                    <FaFire/>
                  </div>
                  <p className="text-sm text-gray-500">Cook Time</p>
                  <p className="font-medium text-gray-800">{recipe.cookTime}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-emerald-500 mb-1">
                    <FaUtensils/>
                  </div>
                  <p className="text-sm text-gray-500">Total Time</p>
                  <p className="font-medium text-gray-800">{recipe.time}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-emerald-500 mb-1">
                    <FaSignal/>
                  </div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="font-medium text-gray-800">{recipe.difficulty}</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>

      {/* Recipe Main content */}
    <RecipeMainContent servings={servings} recipe={recipe}/>
    </>
    
  );
}

export default RecipeOverview;
