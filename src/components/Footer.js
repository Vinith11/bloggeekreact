import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Your main content goes here */}
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        {/* Your footer content goes here */}
        &copy; 2023 Your Company
      </footer>
    </div>
  );
};

export default Footer