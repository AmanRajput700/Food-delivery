import React from "react";
import MainNav from '../Navbar/MainNav';
import Dish from "../Resturant/Dish";

function Burgerkingmenu() {
    return (  
        <div>
      <MainNav />
      
      {/* Restaurant Header */}
      <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-8'>
        <div>
          <h1 className='font-[Poppins] font-bold text-2xl p-2'>Burger King</h1>
          <hr className='bg-gray-400 h-[1px] border-none'/>
        </div>
      </div>

      {/* Restaurant Info Card */}
      <div className="w-full flex justify-center mt-5">
        <div className="w-full max-w-2xl bg-[#efefef] rounded-3xl p-5">
          <div className="rounded-2xl border bg-white z-10 p-3 sm:p-5">
            <div className="flex flex-col text-[16px]">
              
              {/* Ratings and Pricing */}
              <div className="flex gap-2 font-bold leading-normal">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-star"></i>
                  <span>4.4 (2500+ Ratings)</span>
                </span> 
                <span><i className="fa-solid fa-circle scale-50"></i></span>
                <span>400 for two</span>
              </div>

              {/* Categories */}
              <div className="flex gap-2 text-gray-500 font-semibold text-sm">
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
                    <span className="font-semibold text-gray-500">NA</span>
                  </div>
                  <div>
                    <span className="font-bold">Delivery Time </span>
                    <span className="font-semibold text-gray-500">NA</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Dishes Section */}
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-8">
        <h1 className='font-[Poppins] font-bold text-2xl p-3'>Dishes for you</h1>

        <div className="flex flex-col gap-6 p-3">
          <Dish 
            title='Extra Crunchy Veg Whopper Deluxe' 
            price="149" 
            rating_star="4.0" 
            rating_count="400" 
            description="New Whopper Deluxe in premium glazed bun (regular size). 7 layers of taste: Extra Crunchy Veg patty, fresh onion, crispy lettuce, juicy tomatoes (seasonal) tangy gherkins, creamy & smoky sauces." 
            image="https://b.zmtcdn.com/data/dish_photos/5f8/ad6793b9306e0f17bd368c91b1ceb5f8.jpeg?fit=around|130:130&crop=130:130;*,*"
          />
          <Dish 
            title='Crunchy Soft Paneer Whopper Deluxe' 
            price="199" 
            rating_star="4.2" 
            rating_count="300" 
            description="New Whopper Deluxe in premium glazed bun (regular size). 7 layers of taste: Crunchy Soft Paneer patty, fresh onion, crispy lettuce, juicy tomatoes (seasonal) tangy gherkins, creamy & smoky sauces." 
            image="7 layers of taste: Crunchy Soft Paneer patty, fresh onion, crispy lettuce, juicy tomatoes (seasonal) tangy gherkins, creamy & smoky sauces."
          />
        </div>
      </div>

    </div>
    );
}

export default Burgerkingmenu;