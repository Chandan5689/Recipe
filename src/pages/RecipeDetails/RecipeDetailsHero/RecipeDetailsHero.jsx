import React from 'react'

import {
    FaArrowLeft,
    FaClock,
    FaStar,
    FaStarHalfStroke,
    FaSignal,
    FaUtensils,
    FaBookmark,
    FaShareNodes,
  } from "react-icons/fa6";
import BackToHome from '../../../components/ScrollControlling/BackToHome';
function RecipeDetailsHero({recipe}) {
  return (
    <>
    <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-[1440px] h-full absolute inset-0 object-cover object-center"
        />
        <div className="mx-auto px-4 flex items-end relative z-20 h-full pb-12">
          <div className="max-w-3xl text-white">
            <div className="flex items-center mb-2">
              <BackToHome className={`text-white`}/>
            </div>
            {/* food title part */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {recipe.title}
            </h1>

            {/* rating part */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
              </div>
              <span className="">(4.5) • 28 reviews</span>
            </div>
            {/* rating ends here */}

            {/* food other details like time and difficulty */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center">
                <FaSignal className="mr-2" />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center">
                <FaUtensils className="mr-2" />
                <span>{recipe.category}</span>
              </div>
            </div>
            {/* ends here */}

            {/* save and share button  */}
            <div className="flex flex-wrap gap-3">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded whitespace-nowrap transition-colors cursor-pointer flex items-center">
                <FaBookmark className="mr-2" />
                Save Recipe
              </button>

              <button className="bg-white text-gray-800 py-2 px-4 rounded whitespace-nowrap transition-colors cursor-pointer flex items-center hover:bg-gray-100">
                <FaShareNodes className="mr-2" />
                Share
              </button>
            </div>
            {/* save and share button ends here */}
          </div>
        </div>
      </section>

    </>
  )
}

export default RecipeDetailsHero