import React, { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className='flex justify-around items-center bg-indigo-900 dark:bg-gray-800 text-white dark:text-gray-100 py-3.5 transition-all duration-500'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>Taskly</span>
      </div>
      <ul className="flex gap-8 mx-9 items-center">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='text-xl hover:text-yellow-300 transition-all duration-200'
            title="Toggle Dark Mode">
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
