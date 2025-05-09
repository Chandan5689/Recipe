import React from 'react'
import { FaCheck,} from "react-icons/fa6";
function Ingredients({ingredients,recipe,servings}) {

    //scaled ingredients based on servings
  const getScaledIngredients = () => {
    const scaleFactor = servings / 4; //base recipe is for 4 servings
    return recipe.baseIngredients.map((ingredient) => ({
      ...ingredient,
      quantity:
        ingredient.quantity === 0 ? 0 : ingredient.quantity * scaleFactor,
    }));
  };
   ingredients = getScaledIngredients();
  
    //Format quantity for display
    const formatQuantity = (quantity, unit) => {
        if (unit === "to taste") return unit;
        // Format fractions nicely
        if (quantity === 0.25) return "¼";
        if (quantity === 0.5) return "½";
        if (quantity === 0.75) return "¾";
        if (quantity === 1.5) return "1½";
        if (quantity === 2.5) return "2½";
        // For other decimals, round to 1 decimal place if needed
        return quantity % 1 === 0 ? quantity : quantity.toFixed(1);
      };
  return (
   <>
    
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Ingredients
                </h2>
                <div className="flex items-center">
                  <h3 className="">
                    <span className="text-lg text-gray-800 font-medium mr-2">
                      Unit
                    </span>
                    <span className="bg-emerald-500 text-white text-xl px-4 py-2 rounded whitespace-nowrap cursor-default">
                      Metric
                    </span>
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {ingredients.map((ingredient) => (
                  <li key={ingredient.id} className="flex items-start">
                    <div className="w-6 h-6 rounded border border-emerald-500 flex-shrink-0 mt-0.5 mr-3 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                      <span>
                        <FaCheck className="text-sm text-emerald-500" />
                      </span>
                    </div>
                    <span className="text-gray-800">
                      {ingredient.quantity > 0 && (
                        <span className="font-medium mr-1">
                          {formatQuantity(ingredient.quantity, ingredient.unit)}{" "}
                          {ingredient.unit}
                          {""}
                        </span>
                      )}

                      {ingredient.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
   </>
  )
}

export default Ingredients