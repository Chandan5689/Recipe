import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Hero({bgImage}) {
    // const [searchQuery,setSearchQuery] = useState("")
    // const [showSuggestions,setShowSuggestions] = useState(false);
    // const handleSearch = (e) =>{
    //     e.preventDefault();
    //     console.log("searching for",searchQuery)
    // }
  return (
    <section id="home" className="relaive h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-transparent z-10 "></div>
      <img
          src={bgImage}
          alt="Kitchen with fresh ingredients" className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="relative z-20 mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Delicious Recipes for Every Occasion</h1>
                <p className="text-lg mb-8">Explore our collection of easy-to-follow recipes that will inspire your cooking journey</p>
                <div className="relative w-full max-w-xl">
                    <form>
                        <input type="text"
                        placeholder="Search recipes or ingredients..."
                        className="w-full  py-3 px-5 pr-12 text-gray-800 bg-white shadow-md border-none focus:ring-2 focus:ring-emerald-300 focus:outline-none text-sm rounded " />
                        <button type="submit" className="text-emerald-500 absolute right-3 top-1/2 -translate-y-1/2 text-lg cursor-pointer">
                            <FaSearch/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;
