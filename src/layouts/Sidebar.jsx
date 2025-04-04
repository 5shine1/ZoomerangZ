import React from 'react';
import { Home, Users, Mail, Star, LogIn } from 'lucide-react';
import logo from '../../public/logo.png';
import talkTo from '../../public/Talkto.png';
import Avatar from '../../public/login.png';

export default function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'news', label: 'News', Icon: Users },
    { id: 'contact', label: 'Contact', Icon: Mail },
    { id: 'premium', label: 'Premium', Icon: Star },
  ];

  return (
    <div className="border-r w-[315px] rounded-[7px] border-gray-800 p-4 flex flex-col bg-[#1B2020] text-white absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      {/* Logo */}
      <div className="flex items-center mb-8 px-2">
        <img className="p-4" src={logo} height={200} width={220} alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {navItems.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`relative flex items-center w-full p-3 mb-2 rounded-md 
             hover:bg-gray-800/50 ${activeTab === id ? 'bg-gray-800' : ''}
             before:absolute before:inset-0 before:rounded-md 
             before:border-[2px] before:border-transparent 
             before:bg-gradient-to-r before:from-[#325475] before:to-[#5F9DDB] 
             before:p-[2px] before:-z-10`}
            onClick={() => {
              setActiveTab(id);
              setIsOpen(false);
            }}
          >
            <Icon className="h-5 w-5 mr-3" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Login button */}
      <button className="flex items-center justify-center w-full p-3 rounded-md border border-gray-700 hover:bg-gray-800/50">
        <LogIn className="h-5 w-5 mr-2" />
        <span>Login</span>
      </button>

      {/* Talk to Strangers button */}
      <div className="flex mt-5">
        <button className="flex items-center bg-gradient-to-r from-[#0E3D3F] to-[#061c1d] justify-center w-[227px] h-[35px] p-3 mt-4 rounded-md cursor-pointer">
          <img className="p-4" src={talkTo} height={160} width={160} alt="Talk" />
        </button>
        <button className="cursor-pointer">
          <img className="p-0 mb-[10px] ml-3" src={Avatar} height={50} width={40} alt="Avatar" />
        </button>
      </div>
    </div>
  );
}