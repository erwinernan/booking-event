import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  // return <h1 className="text-3xl font-bold underline text-center">Header</h1>;
  return (
    <div className="z-10 text-center fixed top-0 left-0 right-0 bg-gray-800 text-white p-4">
      <Link to="/">Home</Link>
      <Link to="/about" className="ml-4">About</Link>
    </div>
  )
};

export default Header;