import React from "react";

import { FaUtensils } from "react-icons/fa6";
import { Link } from "react-router";

function Header() {
    const scrollToSection = (sectionID)=>{
        const section = document.getElementById(sectionID);
        section?.scrollIntoView({behavior:'smooth'})
    }
  return (
    <>
      <header className="bg-white shadow-sm z-50 relative">
            <div className="mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between md:mr-4">
                <div className="flex items-center mb-4 md:mb-0">
                    <FaUtensils className="text-2xl text-emerald-500 mr-2"/>
                    <h1 className="text-2xl font-bold text-gray-800">Culinary Delight</h1>
                </div>
                <nav className="flex space-x-6">
                    <Link to='/'>
                        <button onClick={()=>scrollToSection("home")}  className="text-gray-700 hover:text-emerald-500 font-medium cursor-pointer" >
                            Home
                        </button>
                    </Link>
                    
                    <button onClick={()=>scrollToSection("recipes")}  className="text-gray-700 hover:text-emerald-500 font-medium cursor-pointer" >
                        Recipes
                    </button>
                    <button onClick={()=>scrollToSection("categories")}  className="text-gray-700 hover:text-emerald-500 font-medium cursor-pointer" >
                        Categories
                        
                    </button>
                    <button onClick={()=>scrollToSection("contact")}  className="text-gray-700 hover:text-emerald-500 font-medium cursor-pointer" >
                        Contact
                    </button>  
                </nav>
            </div>
      </header>
    </>
  );
}

export default Header;
