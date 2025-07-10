import React from 'react';

const ResturantDetails = () => {
  return (
    <div className='w-full h-[200px] mt-5 bg-[#efefef] rounded-3xl p-5'>
        <div className='rounded-2xl h-full border bg-white z-10 p-3 sm:p-5'>
            <div className='flex flex-col text-[16px]'>
                <div className='flex gap-2 font-bold leading-normal'>
                    <span>
                        <i className="fa-solid fa-star"></i>
                        <span>4.3 (3000+ Ratings)</span>
                    </span> 
                    <span><i className="fa-solid fa-circle scale-50"></i></span>
                    <span>$300 for two</span>
                </div>
                <div className='flex gap-2 text-gray-500 font-semibold text-sm'>
                    <span>Pizzas ,</span>
                    <span>Burgers</span>
                </div>
                <div className='flex text-sm mt-3'>
                    <div className='flex flex-col h-auto items-center justify-center'>
                        <div className=''><i className="fa-solid fa-circle scale-30"></i></div>
                        <div className='h-[20px] w-0.5 bg-gray-400'></div>
                        <div className=''><i className="fa-solid fa-circle scale-30 "></i></div>
                    </div>
                        
                    <div className='flex flex-col h-auto items-start justify-between'>
                        <div className='flex gap-2'>
                            <span className='font-bold'>Outlet</span>
                            <span className='font-semibold text-gray-500'>Sargampura</span>
                        </div>
                        <div>
                            <span className='font-bold'>20-25 Minutes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ResturantDetails;
