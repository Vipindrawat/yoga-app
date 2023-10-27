import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {

  const location = useLocation();

  return (

    <div className={`h-16  flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-400 ${location.pathname == "/about" ? "fixed bottom-0 w-[100vw]" : ""} text-white`}>
      <p className='text-lg font-serif'>&#169; 2023 copyright :Iyoga</p>
    </div>

  )
}

export default Footer;
