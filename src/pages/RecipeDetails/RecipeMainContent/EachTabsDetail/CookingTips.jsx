import React from 'react'
import { FaHamburger, FaRegSmileBeam, FaThermometerHalf } from 'react-icons/fa';
import {FaBookOpen, FaBowlFood, FaDroplet, FaLayerGroup, FaSeedling, FaSoap, FaTemperatureHigh, FaUtensils } from "react-icons/fa6";
function CookingTips() {
    const cookingTips = [
      {
        id: 1,
        tip: 'Always read the entire recipe before you start cooking to avoid surprises mid-way.',
        icon: FaBookOpen
      },
      {
        id: 2,
        tip: 'Prep all your ingredients before turning on the heat—this is called mise en place and it keeps cooking smooth.',
        icon: FaBowlFood
      },
      {
        id: 3,
        tip: 'Use a sharp knife for better control and to avoid accidents—dull knives are more dangerous.',
        icon: FaUtensils
      },
      {
        id: 4,
        tip: 'Taste as you go! It helps you adjust seasoning and balance flavors before it’s too late.',
        icon: FaRegSmileBeam
      },
      {
        id: 5,
        tip: 'Clean as you go—it keeps your workspace organized and reduces stress.',
        icon: FaSoap
      },
      {
        id: 6,
        tip: 'Don’t overcrowd the pan—this helps food cook evenly and brown instead of steam.',
        icon: FaLayerGroup
      },
      {
        id: 7,
        tip: 'Let meat rest after cooking to allow juices to redistribute and keep it moist.',
        icon: FaHamburger
      },
      {
        id: 8,
        tip: 'Invest in a food thermometer for accurate doneness—especially for poultry and meat.',
        icon: FaThermometerHalf
      }
      
      ];
  return (
    <>
         
              <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cooking Tips</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {cookingTips.map((tip) => (
                  <div key={tip.id} className="bg-gray-50 p-5 rounded-lg flex">
                    <div className="mr-4 text-emerald-500 text-xl">
                      {<tip.icon/>}
                    </div>
                    <p className="text-gray-700">{tip.tip}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <i className="fa-solid fa-lightbulb text-emerald-500 mr-2"></i>
                  Chef's Note
                </h3>
                <p className="text-gray-700">
                Great cooking starts with mindfulness. Always read the full recipe before you begin, prep all your ingredients (mise en place), and clean as you go—it makes the process smoother and more enjoyable. Taste constantly and trust your senses: adjust seasoning, balance flavors, and observe texture. Use sharp knives, fresh ingredients, and never underestimate the power of a good pinch of salt or a splash of acid to brighten a dish. Most importantly, enjoy the process—cooking is as much about creativity and care as it is about the final plate.
                </p>
              </div>
            </div>
          
    </>
  )
}

export default CookingTips