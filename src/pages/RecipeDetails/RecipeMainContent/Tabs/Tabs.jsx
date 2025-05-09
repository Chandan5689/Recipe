import React from 'react'

function Tabs({activeTab,setActiveTab}) {
  return (
    <>
    <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200 mb-8">
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap cursor-pointer ${
              activeTab === "ingredients"
                ? "text-emerald-500 border-b-2 border-emerald-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap cursor-pointer ${
              activeTab === "instructions"
                ? "text-emerald-500 border-b-2 border-emerald-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap cursor-pointer ${
              activeTab === "nutrition"
                ? "text-emerald-500 border-b-2 border-emerald-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("nutrition")}
          >
            Nutrition Facts
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap cursor-pointer ${
              activeTab === "tips"
                ? "text-emerald-500 border-b-2 border-emerald-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("tips")}
          >
            Cooking Tips
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap cursor-pointer ${
              activeTab === "reviews"
                ? "text-emerald-500 border-b-2 border-emerald-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
    </>
  )
}

export default Tabs