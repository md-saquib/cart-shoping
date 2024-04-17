import React from 'react';
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">Go to Home</Link>
    </div>
  );
}

export default NotFound;
