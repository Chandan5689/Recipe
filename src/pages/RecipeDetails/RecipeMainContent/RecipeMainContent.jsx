import React, { useState } from "react";
import Reviews from "./EachTabsDetail/Reviews";
import Tabs from "./Tabs/Tabs";
import Ingredients from "./EachTabsDetail/Ingredients";
import NutritionFacts from "./EachTabsDetail/NutritionFacts";
import CookingTips from "./EachTabsDetail/CookingTips";
import Instructions from "./EachTabsDetail/Instructions";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import BackToHome from "../../../components/ScrollControlling/BackToHome";

function RecipeMainContent({ recipe, servings, nutritionFacts }) {
  const [activeTab, setActiveTab] = useState("ingredients");

  return (
    <section className="py-12 bg-gray-50" id="recipes">
      <div className="mx-auto px-4">
        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* content */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {/* Ingrdients content */}
          {activeTab === "ingredients" && (
            <Ingredients
              ingredients={"ingredients"}
              recipe={recipe}
              servings={servings}
            />
          )}

          {/* instruction content */}
          {activeTab === "instructions" && <Instructions recipe={recipe} />}

          {/* nutrition content */}
          {activeTab === "nutrition" && (
            <NutritionFacts recipe={recipe} nutritionFacts={nutritionFacts} />
          )}

          {/* cooking tips content */}
          {activeTab === "tips" && <CookingTips />}

          {/* reviews content */}
          {activeTab === "reviews" && <Reviews />}
        </div>
      </div>
      <BackToHome />
    </section>
  );
}

export default RecipeMainContent;
