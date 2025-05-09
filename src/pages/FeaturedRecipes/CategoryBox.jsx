import React, { useState } from 'react'
import { FaBowlFood,  FaIceCream, FaMugHot, FaPlateWheat, FaUtensils } from "react-icons/fa6";
import FeaturedRecipes from './FeaturedRecipes';
function CategoryBox() {
    const [activeCategory,setActiveCategory] = useState('All');
    const categories = [
        { id: 1, name: 'All', icon: FaUtensils },
        { id: 2, name: 'Breakfast', icon: FaMugHot },
        { id: 3, name: 'Lunch', icon: FaBowlFood },
        { id: 4, name: 'Dinner', icon: FaPlateWheat },
        { id: 5, name: 'Desserts', icon: FaIceCream },
        
        ];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    }
  return (
    <section id='recipes' className='py-8 bg-white'>
        <div className='mx-auto px-4'>
            <h2 className='font-bold text-2xl text-gray-800 my-6'>Browse By Category</h2>
            <div className='flex overflow-x-auto md:flex-wrap md:justify-center no-scrollbar gap-4 pb-2'>
                {categories.map(category => (
                    <button key={category.id} className={`flex items-center px-5 py-3 rounded-md whitespace-nowrap transition-colors cursor-pointer ${activeCategory === category.name ?'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={()=>handleCategoryClick(category.name)}>
                        {<category.icon className='mr-2'/>}
                        <span>{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
        
        <FeaturedRecipes activeCategory = {activeCategory}/>

    </section>
  )
}

export default CategoryBox