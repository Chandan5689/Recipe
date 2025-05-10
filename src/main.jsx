import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider,createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import BreakFast from "./pages/PopularCategories/Breakfast/Breakfast.jsx";
import Dinner from "./pages/PopularCategories/Dinner/Dinner.jsx";
import Lunch from "./pages/PopularCategories/Lunch/Lunch.jsx";
import Dessert from "./pages/PopularCategories/Dessert/Dessert.jsx";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/breakfast" element={<BreakFast />} />
      <Route path="/dinner" element={<Dinner />} />
      <Route path="/lunch" element={<Lunch />} />

      <Route path="/desserts" element={<Dessert />} />

      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
