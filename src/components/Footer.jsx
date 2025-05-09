import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaPinterest,
  FaUtensils,
} from "react-icons/fa6";
import { Link } from "react-router";

function Footer() {
  const scrollToSection = (sectionID) => {
    const section = document.getElementById(sectionID);
    section?.scrollIntoView({behavior: "smooth"});

    if(!section){
      window.scrollTo({top:10,left:10,behavior:"smooth"})
    }
    
  };

  return (
    <footer id="contact" className="bg-gray-800 py-12 text-white">
      <div className="mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Logo Or Title and short text about company */}
          <div>
            <div className="flex items-center mb-4">
              <FaUtensils className="text-2xl text-emerald-400 mr-2" />
              <h3 className="text-xl font-bold">Culinary Delight</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Discover delicious recipes for every occasion and skill level.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/14xgdvYSKaH/" target="_blank"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/chandantiwari918" target="_blank"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pin.it/2AbHNlm2j" target="_blank"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection("home")}
                  
                  className="text-gray-400 hover:text-white cursor-pointer"
                  
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("recipes")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Recipes
                </a>
              </li>
              <li>
                <Link to='/'
                  onClick={() => scrollToSection("categories")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Categories
                </Link>
              </li>
              <li>
                <a
                  onClick={() => scroContactSection("contact")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us  */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaLocationDot className="mr-2 text-emerald-400 mt-1" />
                <span className="text-gray-400">SimalChour,Pokhara,Nepal</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-emerald-400" />
                <a
                  href="mailto:chandantiwari8889@gmail.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  chandantiwari8889@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-emerald-400" />
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  +977-9817182911
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* last section copyriight and others */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Culinary Delight. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm cursor-pointer"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
