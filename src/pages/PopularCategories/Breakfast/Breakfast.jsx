import React from "react";
import Hero from "../../../components/Hero";
import RecipesData from "../../../assets/RecipesData";
import EachCategory from "../EachCategory";
function BreakFast() {

  // for breakfast
  const exploreRecipescategory = RecipesData
  const filteredCategory = exploreRecipescategory.filter((e)=>e.category === 'Breakfast')
  return (
    <>
    <Hero bgImage={'https://readdy.ai/api/search-image?query=Breakfast%20spread%20with%20pancakes%2C%20eggs%2C%20avocado%20toast%2C%20fresh%20fruits%2C%20granola%2C%20yogurt%2C%20and%20coffee.%20Bright%20morning%20sunlight%20streaming%20through%20windows%2C%20creating%20a%20warm%20and%20inviting%20atmosphere.%20Styled%20on%20a%20white%20marble%20countertop%20with%20linen%20napkins%20and%20wooden%20serving%20boards.&width=400&height=300&seq=7&orientation=landscape'}/>
      <EachCategory filteredCategory={filteredCategory} exploreCategoryTitle={'BreakFast'}/>
    </>
  );
}

export default BreakFast;
