import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

export default function AdminPanel() {
  const { user, logout } = useContext(AuthContext);
  const [selected, setSelected] = useState('Track Orders');

  const isAdmin = user?.role === 'admin'; // assuming user role is stored

  const menuItems = [
    'Track Orders',
    'Cart',
    ...(isAdmin ? ['Orders', 'Add Restaurant', 'Edit Restaurant'] : []),
    'Logout'
  ];

  const renderContent = () => {
    switch(selected) {
      case 'Track Orders':
        return <div>Track Orders Content</div>;
      case 'Cart':
        return <div>Cart Content</div>;
      case 'Orders':
        return <div>All Orders Content (Admin Only)</div>;
      case 'Add Restaurant':
        return <div>Add Restaurant Form</div>;
      case 'Edit Restaurant':
        return <div>Edit Restaurant Options</div>;
      case 'Logout':
        logout(); // call logout function
        return <div>Logging out...</div>;
      default:
        return <div>Welcome to Admin Panel</div>;
    }
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r p-4 space-y-4 max-sm:w-48">
        <h2 className="text-xl font-bold mb-4">{isAdmin ? 'Admin Panel' : 'User Panel'}</h2>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item)}
            className={`block w-full text-left px-3 py-2 rounded-md ${selected === item ? 'bg-red-500 text-white' : 'hover:bg-blue-100'}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}
