import React from "react";
import Hero from "../../../components/Hero";
import RecipesData from "../../../assets/RecipesData";
import EachCategory from "../EachCategory";
function Lunch() {
  const exploreRecipescategory = RecipesData;
  const filteredCategory = exploreRecipescategory.filter(
    (e) => e.category === "Lunch"
  );
  return (
    <>
      <Hero
        bgImage={
          "https://readdy.ai/api/search-image?query=Lunch%20spread%20featuring%20colorful%20salads%2C%20sandwiches%2C%20grain%20bowls%2C%20and%20fresh%20vegetables.%20Bright%20natural%20lighting%20with%20a%20clean%2C%20minimalist%20aesthetic.%20Food%20arranged%20on%20a%20light%20wooden%20table%20with%20cloth%20napkins%20and%20simple%20tableware.%20Perfect%20balance%20of%20healthy%20and%20satisfying%20meal%20options.&width=400&height=300&seq=8&orientation=landscape"
        }
        title={`Enjoy your Lunch everyday with different dishes`}
      />
      <EachCategory
        filteredCategory={filteredCategory}
        exploreCategoryTitle={"Lunch"}
      />
    </>
  );
}

export default Lunch;
