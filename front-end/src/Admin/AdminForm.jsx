import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/authContext'; // ✅ adjust path if needed

function AddRestaurantForm() {
  const { user } = useContext(AuthContext); // ✅ Get user from context

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    knownFor: '',
    location: '',
    price_for_two: '',
  });

  const categories = ['burger', 'pizza', 'biryani', 'thali', 'dosa', 'cake', 'veg-meals'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.id) {
      alert("You're not logged in. Please log in to add a restaurant.");
      return;
    }

    try {
      const dataToSend = {
        ...formData,
        userId: user.id, // ✅ Add userId from context
      };

      await axios.post('http://localhost:8080/api/restaurants', dataToSend, {
        withCredentials: true, // in case you're using cookies/sessions
      });

      alert('Restaurant added successfully!');
      setFormData({
        name: '',
        image: '',
        knownFor: '',
        location: '',
        price_for_two: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error adding restaurant');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input type="text" name="name" value={formData.name} onChange={handleChange}
          placeholder="Restaurant Name" required className="border p-2 rounded" />

        <input type="text" name="image" value={formData.image} onChange={handleChange}
          placeholder="Image URL" className="border p-2 rounded" />

        <select name="knownFor" value={formData.knownFor} onChange={handleChange}
          required className="border p-2 rounded">
          <option value="">Select Known For</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input type="text" name="location" value={formData.location} onChange={handleChange}
          placeholder="Location" className="border p-2 rounded" />

        <input type="number" name="price_for_two" value={formData.price_for_two} onChange={handleChange}
          placeholder="Price for Two" className="border p-2 rounded" />

        <button type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-red-700">
          Add Restaurant
        </button>

      </form>
    </div>
  );
}

export default AddRestaurantForm;
