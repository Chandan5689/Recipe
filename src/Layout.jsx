import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsLetter from "./pages/NewsLetter/NewsLetter";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./components/ScrollControlling/ScrollToTop";

function Layout() {
  
  return (
    
      <div className="bg-gray-50 min-h-screen">
        <ScrollToTop />
        <Header />
        <Outlet />
        <NewsLetter />
        <Footer />
        <Analytics />
      </div>
    
  );
}

export default Layout;
