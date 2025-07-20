import React from "react";
import MainNav from '../Navbar/MainNav';
import Dish from "../Resturant/Dish";

function Pizzahutmenu() {
  return (
    <div>
      <MainNav />
      
      {/* Restaurant Header */}
      <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-8'>
        <div>
          <h1 className='font-[Poppins] font-bold text-2xl p-2'>Pizza Hut</h1>
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
                  <span>4.3 (3000+ Ratings)</span>
                </span> 
                <span><i className="fa-solid fa-circle scale-50"></i></span>
                <span>&#x20B9;450 for two</span>
              </div>

              {/* Categories */}
              <div className="flex gap-2 text-gray-500 font-semibold text-sm">
                <span>Pizza</span>
                
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
                    <span className="font-bold">Outlet Location</span>
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
            title='kadhai panner' 
            price="450" 
            rating_star="4.3" 
            rating_count="215" 
            description="Take Your taste buds on a joyride with juicy marinated panner,capsicum and onion" 
            image="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg"
          />
          <Dish 
            title='Cheesy Spice Delight' 
            price="385" 
            rating_star="4.0" 
            rating_count="330" 
            description="Pizza topped with 100% mozzarella cheese, a flavourful dressing, onion and spicy green chilli, sprinkled with our signature spiced seasoning." 
            image="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/cheesy-spicy-delight-pan-personal.3369663d3fab59191a4ac7e568070a1d.1.jpg"
          />
          <Dish 
            title='Royal Spice Panner' 
            price="490" 
            rating_star="4.4" 
            rating_count="275" 
            description="Indulge in a royal delight with juicy marinated paneer, tomato, onion, and a sauce packed with rich, aromatic spices." 
            image="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/royal-spice-paneer.247b6a69614fb585f16c25aa912563ff.1.jpg"
          />
          <Dish 
            title='Corn&Cheese' 
            price="320" 
            rating_star="3.9" 
            rating_count="260" 
            description="A combination of juicy Sweet Corn & 100% mozzarella cheese with flavourful signature pan sauce." 
            image="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn-&-cheese.2d0ca196e3f309375afeeb35a7ff565b.1.jpg"
          />
          <Dish 
            title='Kadhai Garlic Bread' 
            price="180" 
            rating_star="4.6" 
            rating_count="460" 
            description="Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce" 
            image="https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg"
          />
          <Dish 
            title='Royal Spice Panner Melts' 
            price="210" 
            rating_star="3.4" 
            rating_count="110" 
            description="Thin & Crispy crust, loaded with spiced paneer, capsicum, onion, 100% mozzarella cheese, flavorful Kadhai sauce, folded over and baked , then brushed with herbed butter and sprinkled with Makhni seasoning." 
            image="https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-paneer-melts-single.54055e44b655d82cead5d7c39d69a83f.1.jpg"
          />
          <Dish 
            title='Brow-wow-nie' 
            price="150" 
            rating_star="4.2" 
            rating_count="356" 
            description="A divine choco brownie for your all time chocolate cravings" 
            image="https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/brow-wow-nie-single.af07c0805f1b335d9a66c9f906c355ec.1.jpg"
          />
          
          
          
        </div>
      </div>

    </div>
  );
}

export default Pizzahutmenu;
