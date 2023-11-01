import React from 'react'
import {BsArrowUpRight} from "react-icons/bs"

const Card = ({icon, heading, desc}) => {
  return (
    <div className='flex flex-col items-center p-8 border-2 border-gray-400 rounded-lg w-[350px] h-[250px] relative'>
        <div className='absolute h-[60px] w-[60px] rounded-full bg-blue-200 text-center flex justify-center items-center -top-8 '>
          {icon}
        </div>

        <div className='mt-3'>
          <h2 className='text-2xl text-center font-bold'>
            {heading}
          </h2>

          <p className='text-sm text-center text-gray-500'>{desc}</p>
        </div>
        
        <button className='absolute border-2 rounded-full w-[30%] h-[15%] border-blue-500 flex justify-center items-center -bottom-4 bg-white '>
          <BsArrowUpRight />
        </button>
    </div>
  )
}

export default Card