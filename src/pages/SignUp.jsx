import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../../public/logo.png'
import Sign from '../../public/signIn.png'
import appleLogo from '../../public/apple.png'



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log('Sign in attempt', { username, password });
  };

  return (
    <div className="min-h-screen bg-[#161515]  ">
          <header>
                <div className="flex-col items-center">
                <img className='p-4' src={logo} height={300} width={300} alt="" />
                  
        
                  <div className='bg-[#878C8C] h-15 w-full mt-6'></div>
                </div>
              </header>

<div className='m-8 md:m-0  flex items-center justify-center gap-40'>
<div className="w-full items-center justify-center max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">Sign Up</h1>
        <p className="text-gray-300 mb-6">
          Welcome to Zoomerang-Z New User <a href="#" className="text-blue-500">Join Us</a>
        </p>

        <form onSubmit={handleSignIn} className="space-y-4">
          <input 
            type="text"
            placeholder="Enter Username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-[#758084] text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-[#758084] text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-[#758084] text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button onclick="window.location.href='/mainPage';" 
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-[#0E3D3F] to-[#000000] text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="mx-4 text-gray-400">Or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="p-2 bg-gray-700 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.5 10.73 22.39 10H12.25V14.51H17.71C17.45 15.99 16.56 17.24 15.19 18.09V20.59H18.92C21.07 18.61 22.56 15.67 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12.25 23C15.35 23 17.97 22.01 19.96 20.18L16.23 17.68C15.11 18.42 13.79 18.88 12.25 18.88C9.25 18.88 6.71 16.89 5.71 14.11H1.85V16.7C3.84 20.53 7.79 23 12.25 23Z" fill="#34A853"/>
              <path d="M5.7 14.11C5.5 13.37 5.39 12.7 5.39 12C5.39 11.3 5.5 10.63 5.7 9.89V7.3H1.85C1.05 8.95 0.61 10.73 0.61 12C0.61 13.27 1.05 15.05 1.85 16.7L5.7 14.11Z" fill="#FBBC05"/>
              <path d="M12.25 5.12C13.95 5.12 15.48 5.75 16.71 6.92L19.04 4.59C17.96 3.59 15.35 2.5 12.25 2.5C7.79 2.5 3.84 4.97 1.85 8.8L5.7 11.39C6.71 8.61 9.25 5.12 12.25 5.12Z" fill="#EA4335"/>
            </svg>
          </button>
          <button className="p-2 bg-gray-700 rounded-full">
          <img  src={appleLogo} height={24} width={24} alt="Apple Logo" />


          </button>

        </div>

        <div className="text-center mt-6 text-gray-400">
         Have an Account? <a href="/signin" className="text-blue-500">Sign In</a>
        </div>
      </div>

      <div className="hidden sm:block md:h-[400px] lg:h-[550px] mt-7">
    <img src={Sign} className="h-full" alt="" />
</div>

</div>
    </div>
  );
};

export default SignUp;