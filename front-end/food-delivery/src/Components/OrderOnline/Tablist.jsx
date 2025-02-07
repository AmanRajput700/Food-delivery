import React from "react";
import { Outlet } from "react-router-dom";

const Tablist = () => {
  return (<>
    <div className="mt-10 w-[90%] sm:w-[90%] md:w-[80%] mx-auto">
      <div className="flex h-auto justify-start items-center space-x-2 sm:space-x-4 ">
        <div  onClick={()=>{document.location.href = '/food/dine-out'}} className="flex justify-center items-center space-x-2 p-1 cursor-pointer border-slate-200 "> 
          <div className="rounded-full bg-slate-200 p-3 w-16 h-1w-16 flex items-center justify-center mb-2">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
              alt=""
            />
          </div>
          <div className="text-xl font-[Poppins]">
            <h1>Dining Out</h1>
          </div>
        </div>

        <div  onClick={()=>{document.location.href = '/food/order-online'}} className="flex justify-center items-center space-x-2 cursor-pointer border-slate-200">
          <div className="rounded-full bg-slate-200 p-3 w-16 h-1w-16 flex items-center justify-center mb-2">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
              alt=""
            /> 
          </div>
          <div className="text-xl font-[Poppins]">
            <h1>Delivery</h1>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-2 bg-gray-100 border-none h-0.5"/></>
  );
};

export default Tablist;
