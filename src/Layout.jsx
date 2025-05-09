import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

import Footer from "./components/Footer";
import NewsLetter from "./pages/NewsLetter/NewsLetter";
import { Analytics } from "@vercel/analytics/react"

function Layout() {
  
  return (
    
      <div className="bg-gray-50 min-h-screen">
        <Header />
        
        <Outlet />
        
        <NewsLetter />
        <Footer />
        <Analytics />
      </div>
    
  );
}

export default Layout;
