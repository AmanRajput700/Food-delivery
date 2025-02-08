import { useState } from "react"
import React from 'react'

const Dish = ({title, price, rating_star ,rating_count, image}) => {

    const [count, setCount] = useState(0);
  return (<>
    <div className='w-full flex justify-between'>
        <div className='flex flex-col font-[Gilroy-Bold]'>
            <h2 className='text-lg font-bold text-gray-700 leading-5 sm:leading-normal'>{title}</h2>
            <p className='text-md font-bold text-gray-800'>${price}</p>
            <p className='text-sm mt-2 '>
                <i className='fa-solid fa-star p-0.5 text-green-900'></i>
                <span className='text-green-900'>{rating_star}</span>
                <span className='text-gray-500'>({rating_count})</span>
            </p>
        </div>

        <div className='flex flex-col items-center relative'>
            <img src={image} alt={title} className='w-40 h-36 object-cover rounded-md' />
            <button className='w-[70%] bg-green-700 rounded-md px-2 py-1.5 h-9 absolute -bottom-4 cursor-pointer'
            onClick={() =>!count && setCount(count + 1)}>
                {
                    count ? (<div className="flex font-bold">
                        <div className="w-1/3" onClick={()=>{setCount(count-1)}}><i class="fa-solid fa-minus scale-90"></i></div>
                        <div className="font-mono w-1/3">{count}</div>
                        <div className="w-1/3" onClick={()=>{setCount(count+1)}}><i class="fa-solid fa-plus scale-90"></i></div>

                    </div>) : (
                        <span className="font-[Gilroy-Bold]">Add</span>
                    )
                }
            </button>
        </div>
    </div>
    <hr className="border-none h-0.5 bg-gray-200"/>
    </>
  )
}

export default Dish
