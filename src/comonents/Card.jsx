import React from 'react';

const Card = () => {
  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="px-6 py-4 mx-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Scheduling that actually works</h2>
          <p className="text-gray-700 text-base">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
        </div>
      </div>
      
      {/* Right side */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="relative h-96 w-96">
          <img className="absolute top-0 left-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1536724609414-5f000e9a2745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkwfHxnaXJsJTIwaG9sZGluZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
