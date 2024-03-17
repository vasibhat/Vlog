import React from 'react';

function Home() {
  return (
    <div className="relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1548611716-ad782502c9d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        minHeight: '100vh', // Ensure the background covers the entire viewport
      }}>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center text-white mb-64">
          <h1 className="text-4xl font-bold ">Welcome to Our Website</h1>
          <p className="text-lg">Explore our amazing content and features.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
