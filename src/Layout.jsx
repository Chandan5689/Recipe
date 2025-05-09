import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewsLetter from "./pages/NewsLetter/NewsLetter";
import CategoryBox from "./pages/FeaturedRecipes/CategoryBox";
function Layout() {
  
  return (
    
      <div className="bg-gray-50 min-h-screen">
        <Header />
        
        <Outlet />
        
        <NewsLetter />
        <Footer />
      </div>
    
  );
}

export default Layout;
