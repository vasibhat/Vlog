import React from 'react';

function Nav() {
  return (
    <>
    <div
      className="bg-black flex flex-row justify-between py-3"
    >
      <h1 className="text-3xl font-bold text-white cursor-pointer mx-9">
        Team.
      </h1>
      <div className="flex flex-row">
        {/* <input type="search" placeholder className="rounded-md" /> */}

        <ul className="flex flex-row space-x-10 hover:cursor-pointer text-white px-8 mx-11 font-bold text-2xl">
          <li></li>
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Service</li>
          <li className="hover:underline">Contact</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Nav;
