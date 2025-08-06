import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/authContext";
import RestaurantList from "./RestaurantList";

const EditRestaurants = () => {
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);
  const [editingRestaurant, setEditingRestaurant] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    knownFor: "",
    location: "",
    price_for_two: "",
  });

  useEffect(() => {
    if (user.id) {
      axios
        .get(`http://localhost:8080/myrestaurants/${user.id}`)
        .then((res) => setRestaurants(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditClick = (restaurant) => {
    setEditingRestaurant(restaurant);
    setFormData({
      name: restaurant.name,
      image: restaurant.image,
      knownFor: restaurant.knownFor,
      location: restaurant.location,
      price_for_two: restaurant.price_for_two,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/restaurants/${editingRestaurant._id}`, {
        ...formData,
        userId: user.id,
      });

      const updatedList = restaurants.map((rest) =>
        rest._id === editingRestaurant._id ? { ...rest, ...formData } : rest
      );
      setRestaurants(updatedList);
      setEditingRestaurant(null);
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  const handleDelete = async (restaurantId) => {
    try {
      await axios.delete(`http://localhost:8080/${restaurantId}/${user.id}`);
      setRestaurants(restaurants.filter((rest) => rest._id !== restaurantId));
    } catch (err) {
      console.error("Error deleting restaurant:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Restaurants</h2>

      <div className="gap-4">
        {restaurants.map((rest) => (
          <RestaurantList
            key={rest._id}
            name={rest.name}
            imageUrl={rest.image}
            onDelete={() => handleDelete(rest._id)}
            onEdit={() => handleEditClick(rest)}
          />
        ))}
      </div>

      {/* Modal */}
      {editingRestaurant && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative">
            <h3 className="text-lg font-semibold mb-4">Edit Restaurant</h3>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Restaurant Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full p-2 border rounded"
              />
              <select
                name="knownFor"
                value={formData.knownFor}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Known For</option>
                
                <option value="Burger">Burger</option>
                <option value="Pizza">Pizza</option>
                <option value="Biryani">Biryani</option>
                <option value="Thali">Thali</option>
                <option value="Dosa">Dosa</option>
                <option value="Cake">Cake</option>
                <option value="Veg-meals">Veg-meals</option>
              </select>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                name="price_for_two"
                value={formData.price_for_two}
                onChange={handleChange}
                placeholder="Price for Two"
                className="w-full p-2 border rounded"
              />
              <div className="flex justify-end gap-4">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditingRestaurant(null)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditRestaurants;
