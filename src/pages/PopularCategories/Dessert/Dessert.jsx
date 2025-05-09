import React from "react";
import Hero from "../../../components/Hero";
import RecipesData from "../../../assets/RecipesData";
import EachCategory from "../EachCategory";
function Dessert() {
 
  const exploreRecipescategory = RecipesData;
  const filteredCategory = exploreRecipescategory.filter(
    (e) => e.category === "Desserts"
  );
  return (
    <>
      <Hero
        bgImage={
          "https://readdy.ai/api/search-image?query=Decadent%20dessert%20display%20with%20chocolate%20cake%2C%20fruit%20tarts%2C%20macarons%2C%20and%20ice%20cream.%20Soft%2C%20dreamy%20lighting%20with%20bokeh%20effects.%20Desserts%20arranged%20on%20a%20marble%20surface%20with%20gold%20accents%20and%20fresh%20berries%20as%20garnish.%20Rich%20textures%20and%20colors%20highlighting%20the%20indulgent%2C%20tempting%20nature%20of%20sweet%20treats.&width=400&height=300&seq=10&orientation=landscape"
        }
      />
     <EachCategory filteredCategory={filteredCategory} exploreCategoryTitle={'Desserts'} />
    </>
  );
}

export default Dessert;
