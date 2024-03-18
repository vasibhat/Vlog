import React from 'react';

const Card2 = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side */}
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <div className="w-3/4 md:w-96">
          <img className="w-full h-auto" src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA2fHxnaXJsJTIwaG9sZGluZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="Teamwork"/>
        </div>
      </div>
      
      {/* Right side */}
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <div className="px-6 py-4 md:mx-14">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-2">Your Hub for Teamwork</h2>
          <p className="text-gray-900 text-base">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
