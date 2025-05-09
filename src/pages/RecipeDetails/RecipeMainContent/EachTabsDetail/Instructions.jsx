import React from 'react'
import { FaClock,} from "react-icons/fa6";
function Instructions({recipe}) {
  return (
    <>
    <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cooking Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction)=>(
                  <li key={instruction.step} className="flex">
                      <div className="mr-4 flex-shrink-0">
                      <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-medium">
                          {instruction.step}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-800 mb-1">{instruction.instruction}</p>
                        <span className="text-sm text-gray-500 flex items-center">
                          <FaClock/>
                          {instruction.time}
                        </span>
                      </div>
                  </li>
                ) )}
              </ol>
              
            </div>
    </>
  )
}

export default Instructions