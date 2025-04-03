import React from 'react';
import logo from '../../public/logo.png'
import { Link } from "react-router-dom";



const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#161515] flex flex-col">
      {/* Header */}
      <header>
        <div className="flex-col items-center">
        <img className='p-4' src={logo} height={300} width={300} alt="" />
          

          <div className='bg-[#878C8C] h-20 w-full mt-6'></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl font-semibold mb-4">
          Enjoy The World In Briefs
        </h1>
        <p className="text-[#9A9A9A] mb-8 text-xs md:text-xl ">
          Create viral videos effortlessly with Zoomerang! Trendy effects, <br/> seamless transitions, and powerful tools all in one app!
        </p>
        
        <Link to="/signIn">
  <button className="bg-gradient-to-r from-[#0E3D3F] to-[#000000] text-white 
                     py-3 text-lg px-6 rounded-lg hover:opacity-90 transition-opacity">
    Get Started (Dylan Zhu)
  </button>
</Link>
      </main>
    </div>
  );
};

export default Homepage;