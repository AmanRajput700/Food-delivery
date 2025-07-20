import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // corrected import

const User = () => {
  return (
    <Link to="/Adminpanel">
      <FaUser className="text-white-600 text-xl cursor-pointer hover:text-red-500" />
    </Link>
  );
};

export default User;