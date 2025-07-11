import React from "react";
import MainNav from '../Navbar/MainNav';

function Mcdonladmenu() {
    return ( 
        <div>
      <MainNav />
      
      <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%]  mx-auto mt-8'>
        <div>
            <h1 className='font-[Poppins] font-bold text-2xl p-2'>Mc Donald's</h1>
            <hr className='bg-gray-400 h-[1px] border-none'/>
        </div>
    </div>
      <div className="w-full flex justify-center mt-5">
        
        <div className="w-full max-w-2xl bg-[#efefef] rounded-3xl p-5">
          
          <div className="rounded-2xl border bg-white z-10 p-3 sm:p-5">
            <div className="flex flex-col text-[16px]">
              
              {/* Ratings and Pricing */}
              <div className="flex gap-2 font-bold leading-normal">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-star"></i>
                  <span>4.3 (3000+ Ratings)</span>
                </span> 
                <span><i className="fa-solid fa-circle scale-50"></i></span>
                <span>$300 for two</span>
              </div>

              {/* Categories */}
              <div className="flex gap-2 text-gray-500 font-semibold text-sm">
                <span>Pizzas,</span>
                <span>Burgers</span>
              </div>

              {/* Outlet and Delivery Time */}
              <div className="flex text-sm mt-3">
                <div className="flex flex-col h-auto items-center justify-center">
                  <div><i className="fa-solid fa-circle scale-30"></i></div>
                  <div className="h-[20px] w-0.5 bg-gray-400"></div>
                  <div><i className="fa-solid fa-circle scale-30"></i></div>
                </div>

                <div className="flex flex-col h-auto items-start justify-between ml-3">
                  <div className="flex gap-2">
                    <span className="font-bold">Outlet</span>
                    <span className="font-semibold text-gray-500">Sargampura</span>
                  </div>
                  <div>
                    <span className="font-bold">20-25 Minutes</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
     );
}

export default Mcdonladmenu;