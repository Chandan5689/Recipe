import React from 'react'
import { FaClock, FaSignal } from "react-icons/fa6";
import { useNavigate } from "react-router";
import BackToHome from '../../components/BackToHome';
function EachCategory({ exploreCategoryTitle,filteredCategory, }) {
    const navigate = useNavigate()
    const handleSelectedRecipe = (recipeId) => {
    navigate(`/recipes/${recipeId}`)
  };
  return (
    <>
    <section id="recipes" className="py-12 bg-gray-50">
        <div className="mx-auto px-4">
          <div className="flex items-center md:pt-5 md:pl-2 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {exploreCategoryTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategory.map((exploreRecipe) => (
              <div
                key={exploreRecipe.id} onClick={() => handleSelectedRecipe(exploreRecipe.id)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-60 overflow-hidden">
                  
                    <img
                      src={exploreRecipe.image}
                      alt={exploreRecipe.title}
                      className="object-cover w-full h-full object-top transition-transform hover:scale-105 duration-300"
                    />
                  
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {exploreRecipe.title}
                    </h3>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <FaClock className="mr-1" />
                      <span>{exploreRecipe.time}</span>
                    </div>
                    <div className="flex items-center">
                      <FaSignal className="mr-1" />
                      <span>{exploreRecipe.difficulty}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-button whitespace-nowrap">
                      {exploreRecipe.category}
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
        <BackToHome />
      </section>
    </>
  )
}

export default EachCategory