"use client"

// pages/index.js
import React, { useState } from 'react';
import logo from '../../public/logo.png'
import talkTo from '../../public/Talkto.png'
import Online from '../../public/Online.png'
import People from '../../public/People.png'
import Avatar from '../../public/login.png'





import { ChevronLeft, ChevronRight, Home, Users, Mail, Star, LogIn } from 'lucide-react';

export default function MainPage() {
    const [activeButton, setActiveButton] = useState("Trending");

    const handleClick = (buttonName) => {
      setActiveButton(buttonName);
    };
  const [activeTab, setActiveTab] = useState('home');
  
  // Real profile images
  const profileImages = [
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=6",
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=7",
    "https://i.pravatar.cc/150?img=8",
    "https://i.pravatar.cc/150?img=9",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=7",

    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=6",
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=7",
    "https://i.pravatar.cc/150?img=8",
    "https://i.pravatar.cc/150?img=9",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=7",

    "https://i.pravatar.cc/150?img=3",

    
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=6",
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=7",
    "https://i.pravatar.cc/150?img=8",
    "https://i.pravatar.cc/150?img=9",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=7",

    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=3",




  ];
  return (
    <div className="flex h-screen bg-[#161515] text-white">
      {/* Sidebar */}
      <div className="w-56 border-r  border-gray-800 p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center mb-8 px-2">
                <img className='p-4' src={logo} height={300} width={300} alt="" />

        </div>
        
        {/* Navigation */}
        <nav className="flex-1">
  {[
    { id: "home", label: "Home", Icon: Home },
    { id: "news", label: "News", Icon: Users },
    { id: "contact", label: "Contact", Icon: Mail },
    { id: "premium", label: "Premium", Icon: Star }
  ].map(({ id, label, Icon }) => (
    <button
      key={id}
      className={`relative flex items-center w-full p-3 mb-2 rounded-md 
         hover:bg-gray-800/50 
        ${activeTab === id ? "bg-gray-800" : ""}
        before:absolute before:inset-0 before:rounded-md 
        before:border-[2px] before:border-transparent 
        before:bg-gradient-to-r before:from-[#325475] before:to-[#5F9DDB] 
        before:p-[2px] before:-z-10`}
      onClick={() => setActiveTab(id)}
    >
      <Icon className="h-5 w-5 mr-3" />
      <span>{label}</span>
    </button>
  ))}
</nav>

        
        {/* Profile image at bottom */}
        <div className="mt-auto mb-8">
          <div className="relative h-32 w-full rounded-md overflow-hidden">
            <image 
              src="/api/placeholder/200/200?text=Profile" 
              alt="Profile" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
        </div>
        
        {/* Login button */}
        <button className="flex items-center justify-center w-full p-3 rounded-md border border-gray-700 hover:bg-gray-800/50">
          <LogIn className="h-5 w-5 mr-2" />
          <span>Login</span>
        </button>
        
        {/* Talk to Strangers button */}
     
      <button className="flex items-center bg-gradient-to-r from-[#0E3D3F] to-[#000000] justify-center w-full p-3  mt-4 rounded-md ">
                          <img className='p-4' src={talkTo} height={300} width={300} alt="" />
                          <img className='p-4' src={Avatar} height={200} width={200} alt="" />

        </button>

     
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-hidden">
        {/* Top avatar scroll */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {profileImages.map((img, i) => (
              <div key={`top-${i}`} className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full overflow-hidden relative">
                <img 
  src={img} 
  alt={`User ${i+1}`} 
  className="w-full h-full object-cover" 
/>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main banner */}
        <div className="p-4 bg-gray-900/50 flex items-center">
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-4">
            <img className='p-4' src={People} height={150} width={150} alt="" />

            </div>
            <div>
              <h2 className="font-bold">Snap. Share. Connect....</h2>
              <p className="text-sm text-gray-400">Zoomerang-Z - Take, trim, and make the trick. Share, chat, and go viral. #stayzoomedout</p>
            </div>
          </div>
          <div className="ml-auto flex items-center">
                          <img className='p-4' src={Online} height={150} width={150} alt="" />
          
     
        <button className="flex items-center bg-gradient-to-r from-[#0E3D3F] to-[#000000] justify-center w-full p-2 mt-4 rounded-md ">
                          <img className='p-4' src={talkTo} height={150} width={150} alt="" />
          
        </button>
      </div>       
         
        </div>
        
        {/* User Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Top Row */}
            {Array(6).fill().map((_, i) => (
              <div key={`grid-${i}`} className="relative aspect-square bg-gray-800 rounded-md overflow-hidden">
                {i % 2 === 0 ? (
                  // Split view (2 users)
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
                      <image src={`/api/placeholder/300/150?text=User${i*2+1}`} alt={`User ${i*2+1}`} layout="fill" objectFit="cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                      <image src={`/api/placeholder/300/150?text=User${i*2+2}`} alt={`User ${i*2+2}`} layout="fill" objectFit="cover" />
                    </div>
                  </>
                ) : (
                  // Single user
                  <image src={`/api/placeholder/300/300?text=User${i+13}`} alt={`User ${i+13}`} layout="fill" objectFit="cover" />
                )}
                {/* Live tag */}
                {i % 3 === 2 && (
                  <div className="absolute top-2 right-2 bg-red-600 text-xs font-bold px-2 py-0.5 rounded">LIVE</div>
                )}
              </div>
            ))}
            
            {/* Bottom Row - Duplicate of top row for this example */}
            {Array(6).fill().map((_, i) => (
              <div key={`grid2-${i}`} className="relative aspect-square bg-gray-800 rounded-md overflow-hidden">
                {i % 2 === 0 ? (
                  // Split view
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
                      <image src={`/api/placeholder/300/150?text=User${i*2+19}`} alt={`User ${i*2+19}`} layout="fill" objectFit="cover" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
                      <image src={`/api/placeholder/300/150?text=User${i*2+20}`} alt={`User ${i*2+20}`} layout="fill" objectFit="cover" />
                    </div>
                  </>
                ) : (
                  // Single user
                  <image src={`/api/placeholder/300/300?text=User${i+25}`} alt={`User ${i+25}`} layout="fill" objectFit="cover" />
                )}
                {/* Live tag */}
                {i % 3 === 2 && (
                  <div className="absolute top-2 right-2 bg-red-600 text-xs font-bold px-2 py-0.5 rounded">LIVE</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-800 flex justify-between">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md">
            <input 
              type="text" 
              placeholder="Enter a code or link"
              className="bg-transparent outline-none" 
            />
                        <button className="bg-[#0E3D3F]  px-4 py-2 rounded-xl">Join</button>

          </button>
          <div className="flex space-x-4 rounded-3xl bg-gray-800">
      <button
        onClick={() => handleClick("Trending")}
        className={`px-4 py-2 rounded-3xl ${activeButton === "Trending" ? "bg-gradient-to-r from-[#0E3D3F] to-[#000000]" : "bg-transparent"}`}
      >
        Trending
      </button>
      <button
        onClick={() => handleClick("Synapse")}
        className={`px-4 py-2 rounded-3xl ${activeButton === "Synapse" ? "bg-gradient-to-r from-[#0E3D3F] to-[#000000]" : "bg-transparent"}`}
      >
        Synapse
      </button>
    </div>
        </div>
      </div>
    </div>
  );
}