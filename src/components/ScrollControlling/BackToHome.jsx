import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router'
function BackToHome({className}) {
  const ClickedToTop = ()=>{
    if(window.scrollY)
    window.scrollTo({top:0,left:0,behavior:'auto'})
  }
  return (
    <div className='mt-5'>
        <Link
            to="/"
            onClick={ClickedToTop}
            className={`text-emerald-500 hover:text-emerald-700 font-medium flex items-center justify-center ${className}`} 
          >
            <FaArrowLeft className="mr-2" /> Back to home
          </Link>
    </div>
  )
}

export default BackToHome