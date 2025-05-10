import React from "react";
import Hero from "../../../components/Hero";
import RecipesData from "../../../assets/RecipesData";
import EachCategory from "../EachCategory";
function Dinner() {
  const exploreRecipescategory = RecipesData;
  const filteredCategory = exploreRecipescategory.filter(
    (e) => e.category === "Dinner"
  );
  //for dinner

  return (
    <>
      <Hero
        bgImage={
          "https://readdy.ai/api/search-image?query=Elegant%20dinner%20spread%20with%20roasted%20meats%2C%20vegetable%20sides%2C%20pasta%20dishes%2C%20and%20fresh%20bread.%20Warm%20ambient%20lighting%20creating%20a%20cozy%20dining%20atmosphere.%20Food%20beautifully%20plated%20on%20ceramic%20dishes%20with%20subtle%20garnishes.%20Rich%2C%20inviting%20colors%20and%20textures%20showcasing%20sophisticated%20home%20cooking.&width=400&height=300&seq=9&orientation=landscape"
        }
        title={`Enjoy your Dinner everyday with different dishes`}
      />
     <EachCategory filteredCategory={filteredCategory} exploreCategoryTitle={'Dinner'} />
    </>
  );
}

export default Dinner;
