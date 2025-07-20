import React, { useState } from 'react';
import axios from 'axios';

function AddRestaurantForm() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    knownFor: '',
    outlet: '',
    delivery_time: '',
    location: '',
    price_for_two: '',
  });

  const categories = ['burger', 'pizza', 'biryani', 'thali', 'dosa', 'cake', 'veg', 'meals'];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/restaurants', formData);
      alert('Restaurant added successfully!');
      setFormData({
        name: '',
        image: '',
        knownFor: '',
        outlet: '',
        delivery_time: '',
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
          placeholder="Restaurant Name" required className="border p-2 rounded"/>

        <input type="text" name="image" value={formData.image} onChange={handleChange}
          placeholder="Image URL" className="border p-2 rounded"/>

        <select name="knownFor" value={formData.knownFor} onChange={handleChange}
          required className="border p-2 rounded">
          <option value="">Select Known For</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input type="text" name="outlet" value={formData.outlet} onChange={handleChange}
          placeholder="Outlet Name" className="border p-2 rounded"/>

        <input type="text" name="delivery_time" value={formData.delivery_time} onChange={handleChange}
          placeholder="Delivery Time" className="border p-2 rounded"/>

        <input type="text" name="location" value={formData.location} onChange={handleChange}
          placeholder="Location" className="border p-2 rounded"/>

        <input type="number" name="price_for_two" value={formData.price_for_two} onChange={handleChange}
          placeholder="Price for Two" className="border p-2 rounded"/>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add Restaurant
        </button>

      </form>
    </div>
  );
}

export default AddRestaurantForm;