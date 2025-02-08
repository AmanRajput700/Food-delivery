import React from 'react'
import {Link} from 'react-router-dom'
const ResturantItem = ({id,img,name,rating,categories,price}) => {
    
    return (<>
        
        <Link to={`/food/order-online/resturants/`}>
        <div className=' p-3 rounded-xl hover:shadow-gray-500 hover:shadow-md cursor-pointer transition duration-300 ease-in-out'>
            
            <img src={img} alt="" className='rounded-lg' style={{ height: 250, width: 600, objectFit:'cover' }} />
            <div className='flex justify-between mt-2 items-center'>
                <h1 className='text-xl font-bold'>{name}</h1>
                {/* <p>{rating}</p> */}
                <span className='bg-green-800 rounded-md px-[5px] py-0.5 w-16 h-auto text-center'>{rating}<i class="fa-solid fa-star ml-1"></i></span>
            </div>
            <div className='flex justify-between'>
                <div>{categories}</div>
                <div>{price} for one</div>
            </div>
        </div>
        </Link>
        </>
    )
}

export default ResturantItem
