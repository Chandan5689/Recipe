import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop({children}) {
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[location])
  return children
}

export default ScrollToTop

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     // If there is a hash (like #faq), scroll to that element
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // Otherwise, scroll to top of page
//       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//     }
//   }, [pathname, hash]); // run this effect on every path or hash change

//   return null; // This component does not render anything
// };

// export default ScrollToTop;
