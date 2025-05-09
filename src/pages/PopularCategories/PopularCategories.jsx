import React from "react";
import { Link, NavLink } from "react-router";

function PopularCategories() {
  
  const categoryRecipes = [
    {
      id: "breakfast",
      title: "Breakfast",
      description: "Start your day right with our nutritious breakfast recipes",
      image:
        "https://readdy.ai/api/search-image?query=Breakfast%20spread%20with%20pancakes%2C%20eggs%2C%20avocado%20toast%2C%20fresh%20fruits%2C%20granola%2C%20yogurt%2C%20and%20coffee.%20Bright%20morning%20sunlight%20streaming%20through%20windows%2C%20creating%20a%20warm%20and%20inviting%20atmosphere.%20Styled%20on%20a%20white%20marble%20countertop%20with%20linen%20napkins%20and%20wooden%20serving%20boards.&width=400&height=300&seq=7&orientation=landscape",
      explore: "/breakfast",
    },
    {
      id: "lunch",
      title: "Lunch",
      description: "Quick and satisfying lunch ideas for busy days",
      image:
        "https://readdy.ai/api/search-image?query=Lunch%20spread%20featuring%20colorful%20salads%2C%20sandwiches%2C%20grain%20bowls%2C%20and%20fresh%20vegetables.%20Bright%20natural%20lighting%20with%20a%20clean%2C%20minimalist%20aesthetic.%20Food%20arranged%20on%20a%20light%20wooden%20table%20with%20cloth%20napkins%20and%20simple%20tableware.%20Perfect%20balance%20of%20healthy%20and%20satisfying%20meal%20options.&width=400&height=300&seq=8&orientation=landscape",
      explore: "/lunch",
    },
    {
      id: "dinner",
      title: "Dinner",
      description:
        "Impressive dinner recipes for family meals and entertaining",
      image:
        "https://readdy.ai/api/search-image?query=Elegant%20dinner%20spread%20with%20roasted%20meats%2C%20vegetable%20sides%2C%20pasta%20dishes%2C%20and%20fresh%20bread.%20Warm%20ambient%20lighting%20creating%20a%20cozy%20dining%20atmosphere.%20Food%20beautifully%20plated%20on%20ceramic%20dishes%20with%20subtle%20garnishes.%20Rich%2C%20inviting%20colors%20and%20textures%20showcasing%20sophisticated%20home%20cooking.&width=400&height=300&seq=9&orientation=landscape",
      explore: "/dinner",
    },
    {
      id: "desserts",
      title: "Desserts",
      description: "Indulgent treats to satisfy your sweet tooth",
      image:
        "https://readdy.ai/api/search-image?query=Decadent%20dessert%20display%20with%20chocolate%20cake%2C%20fruit%20tarts%2C%20macarons%2C%20and%20ice%20cream.%20Soft%2C%20dreamy%20lighting%20with%20bokeh%20effects.%20Desserts%20arranged%20on%20a%20marble%20surface%20with%20gold%20accents%20and%20fresh%20berries%20as%20garnish.%20Rich%20textures%20and%20colors%20highlighting%20the%20indulgent%2C%20tempting%20nature%20of%20sweet%20treats.&width=400&height=300&seq=10&orientation=landscape",
      explore: "/desserts",
    },
  ];

  return (
    <section id="categories" className="py-12 bg-white">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryRecipes.map((category) => (
            
              <div
                key={category.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>

                <div className="h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover object-top transition-transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {category.description}
                  </p>
                  <Link to={category.explore}>
                    <button className="bg-white text-emerald-500 hover:bg-emerald-50 py-2 px-4 rounded-md whitespace-nowrap text-sm font-medium transition-colors cursor-pointer">
                      Explore Recipes
                    </button>
                  </Link>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
