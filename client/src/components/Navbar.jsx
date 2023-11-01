import React from 'react'
import logo from '../assests/logo.jpg'

const Navbar = () => {
  return (
    <div className='container pt-4'>
        <div className='w-[80%] h-[50px] flex mx-auto justify-between items-center'>
            <img src={logo} alt='logo' className='w-20'/>
            
            <div className='w-[50%] flex justify-between items-center'>
                <div className="p-2 relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-2 before:w-0 before:h-1 before:rounded-full
                        before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-[#1570EF] before:via-blue-400 before:to-[#444CE7] hover:before:w-[80%] hover:before:opacity-100">
                    Page 1
                </div>
                <div className="p-2 relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-2 before:w-0 before:h-1 before:rounded-full
                        before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-[#1570EF] before:via-blue-400 before:to-[#444CE7] hover:before:w-[80%] hover:before:opacity-100">
                    Page 2
                </div>
                <div className="p-2 relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-2 before:w-0 before:h-1 before:rounded-full
                        before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-[#1570EF] before:via-blue-400 before:to-[#444CE7] hover:before:w-[80%] hover:before:opacity-100">
                    Page 3
                </div>
                <div className="p-2 relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-2 before:w-0 before:h-1 before:rounded-full
                        before:opacity-0 before:transition-all before:duration-300 before:bg-gradient-to-r before:from-[#1570EF] before:via-blue-400 before:to-[#444CE7] hover:before:w-[80%] hover:before:opacity-100">
                    Page 4
                </div>
            </div>
            
            <div className='w-[13%] flex justify-between items-center'>
                <button className='bg-[#1570EF] hover:bg-[#444CE7] px-3 py-1 rounded-full text-center text-white pb-2 transition-all duration-300'>
                    Login
                </button>
                <button className='bg-[#1570EF] hover:bg-[#444CE7] px-3 py-1 rounded-full text-center text-white pb-2 transition-all duration-300'>
                    Sign Up
                </button>

            </div>
        </div>
    </div>
  )
}

export default Navbar