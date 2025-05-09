import React from 'react'
import RecipesData from '../../../../assets/RecipesData'

function NutritionFacts({recipe,nutritionFacts}) {
    // const nutritionFacts = {
    //     calories: 380,
    //     protein: 10,
    //     carbs: 48,
    //     fat: 15,
    //     fiber: 3,
    //     sugar: 2,
    //     sodium: 580,
    //     servingSize: '1 cup (240g)'
    //   }
    
  return (
    <>
          
                  <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Nutrition Facts</h2>
                    <p className="text-gray-600 mb-4">Serving Size: {recipe.nutritionFacts.servingSize}</p>
                    
                    <div className="border-gray-300 border-1 rounded-lg overflow-hidden mb-6">
                      <div className="bg-gray-50 p-4 border-b border-gray-300">
                        <h3 className="text-lg font-bold text-gray-800">Amount Per Serving</h3>
                      </div>
                      
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-800">Calories</span>
                          <span className="text-lg font-bold text-gray-800">{recipe.nutritionFacts.calories}</span>
                        </div>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        <div className="p-4 flex justify-between">
                          <span className="font-medium text-gray-800">Total Fat</span>
                          <span className="text-gray-800">{recipe.nutritionFacts.fat}g</span>
                        </div>
                        <div className="p-4 flex justify-between">
                          <span className="font-medium text-gray-800">Total Carbohydrates</span>
                          <span className="text-gray-800">{recipe.nutritionFacts.carbs}g</span>
                        </div>
                        <div className="p-4 flex justify-between pl-8">
                          <span className="text-gray-700">Dietary Fiber</span>
                          <span className="text-gray-800">{recipe.nutritionFacts.fiber}g</span>
                        </div>
                        <div className="p-4 flex justify-between pl-8">
                          <span className="text-gray-700">Sugars</span>
                          <span className="text-gray-800">{recipe.nutritionFacts.sugar}g</span>
                        </div>
                        <div className="p-4 flex justify-between">
                          <span className="font-medium text-gray-800">Protein</span>
                          <span className="text-gray-800">{recipe.nutritionFacts.protein}g</span>
                        </div>
                        <div className="p-4 flex justify-between">
                          <span className="font-medium text-gray-800">Sodium</span>
                          <span className="text-gray-800">{recipe.nutritionFacts.sodium}mg</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</p>
              </div>
          
        
        
    </>
  )
}

export default NutritionFacts