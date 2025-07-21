import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import AdminForm from '../../Admin/AdminForm';

export default function AdminPanel() {
  const { user, logout } = useContext(AuthContext);
  const [selected, setSelected] = useState('Track Your Orders');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false); // new state
  const navigate = useNavigate();

  const isAdmin = user?.role === 'admin';

  const menuItems = [
    'Track Your Orders',
    'Cart',
    ...(isAdmin ? ['Orders', 'Add Restaurant', 'Edit Restaurant'] : []),
    'Logout'
  ];

  const handleMenuClick = (item) => {
    if (item === 'Logout') {
      setShowConfirmLogout(true); // show confirmation modal
    } else {
      setSelected(item);
      setShowSidebar(false);
    }
  };

  const handleConfirmLogout = () => {
    logout();
    navigate('/');
    setShowConfirmLogout(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmLogout(false);
  };

  const renderContent = () => {
    switch(selected) {
      case 'Track Your Orders':
        return <div>Track Orders Content</div>;
      case 'Cart':
        return <div>Cart Content</div>;
      case 'Orders':
        return <div>All Orders Content (Admin Only)</div>;
      case 'Add Restaurant':
        return <AdminForm/>;
      case 'Edit Restaurant':
        return <div>Edit Restaurant Options</div>;
      default:
        return <div>Welcome to Admin Panel</div>;
    }
  };

  return (
    <div className="flex h-screen bg-white relative">
      {/* Mobile Toggle Button */}
      <button 
        className="sm:hidden p-4 absolute top-0 left-0 z-20"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`bg-gray-100 border-r p-4 space-y-4 max-sm:w-48 w-64 
        ${showSidebar ? 'block' : 'hidden'} sm:block absolute sm:relative z-10 h-full`}>
        <h2 className="text-xl font-bold mb-4">{isAdmin ? 'Admin Panel' : 'User Panel'}</h2>
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(item)}
            className={`block w-full text-left px-3 py-2 rounded-md ${selected === item ? 'bg-red-500 text-white' : 'hover:bg-red-100'}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </div>

      {/* Logout Confirmation Modal */}
      {showConfirmLogout && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-30">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
