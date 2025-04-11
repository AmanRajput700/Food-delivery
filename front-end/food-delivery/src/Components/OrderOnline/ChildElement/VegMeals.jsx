import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import ResturantItem from '../ResturantItem';


const VegMeals = () => {
  const [items, setItems] = useState([]); 
  
  useEffect(() => {
    axios.get("http://localhost:8080/veg-meals")
      .then((res) => {
        setItems(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <h1 className="font-[Poppins] text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem] mt-5">
       Vegeterian Restaurants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {items.length > 0 ? (
          items.map((item) => (
            <ResturantItem
              
              img={item.image}
              name={item.name}
              rating={item.rating} 
              categories={item.category}
              price={`${item.price}`}
            />
          ))
        ) : (
          <p className="text-center col-span-3">Loading restaurants...</p>
        )}
      </div>
    </div>
  )
}

export default VegMeals