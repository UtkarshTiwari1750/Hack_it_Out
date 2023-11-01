import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-[#1570EF] hover:bg-[#444CE7] px-3 py-1 rounded-full text-center text-white pb-2 transition-all duration-300'>
        {text}
    </button>  
  )
}

export default Button