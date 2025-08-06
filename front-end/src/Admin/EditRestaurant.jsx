import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/authContext";
import RestaurantList from "./RestaurantList";

const EditRestaurants = () => {
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (user.id) {
      axios
        .get(`http://localhost:8080/myrestaurants/${user.id}`)
        .then((res) => setRestaurants(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Restaurants</h2>
      
        {restaurants.map((rest) => (
         <RestaurantList name={rest.name} imageUrl={rest.image}/>
          
        ))}
      
    </div>
  );
};

export default EditRestaurants;
