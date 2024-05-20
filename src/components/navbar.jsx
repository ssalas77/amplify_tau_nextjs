/** @Navbar module */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { logo } from '../assets';
import ToggleTheme from './toggleTheme';
import { useTheme } from 'next-themes';
import { ImageComponent } from './imageComponent';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState('#0b54a3');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (theme === 'light' && window.scrollY >= 90) {
        // This sets the navbar color to taublue and text to white for scroll event
        setColor('#0b54a3');
        setTextColor('#ffffff');
      } else if (theme !== 'light' && window.scrollY >= 90) {
        setColor('#06172A');
        // setColor("#062F5B");
        // setTextColor('ffffff')
      } else {
        setColor('transparent');
        // setTextColor("#0b54a3");
        setTextColor('#1079eb');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, [theme]);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='m-auto lg:m-0 flex justify-between items-center p-2 text-black'>
        <Link href='/'>
          <ImageComponent
            className='block fill-current text-white h-15 w-15 mr-2 ml-2 lg:ml-10'
            src={logo}
            fetchPriority='high'
            alt='tau nav logo'
            width={60}
            height={60}
          />
        </Link>
        <div className='flex'></div>
        <div className='flex'></div>
        <ul
          style={{ color: `${textColor}` }}
          className='hidden sm:flex'
        >
          <li className='p-4 no-underline hover:underline hover:text-slate-700 dark:hover:text-white rounded-md text-xl font-semibold'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 no-underline hover:underline hover:text-slate-700 dark:hover:text-white rounded-md text-xl font-semibold'>
            <Link href='../capabilities'>Capabilities</Link>
          </li>
          <li className='p-4 no-underline hover:underline hover:text-slate-700 dark:hover:text-white rounded-md text-xl font-semibold'>
            <Link href='../careers'>Careers</Link>
          </li>
          <li className='p-4 no-underline hover:underline hover:text-slate-700 dark:hover:text-white rounded-md text-xl font-semibold'>
            <Link href='../products'>Products</Link>
          </li>
          <li className='p-4 no-underline hover:underline hover:text-slate-700 dark:hover:text-white rounded-md text-xl font-semibold'>
            <Link href='../contact'>Contact</Link>
          </li>
        </ul>

        <div className='sm:flex justify-between'>
          <ToggleTheme />
        </div>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className=' block sm:hidden z-10'
        >
          {nav ? (
            <AiOutlineClose
              size={20}
              style={{ color: 'black' }}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>

        {/* Mobile Menu  */}
        <div
          className={
            nav
              ? ' sm:hidden glass-nav absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-opacity-95 text-center ease-in duration-300'
              : ' sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-transparent text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className=' p-4 text-4xl dark:text-white'
            >
              <Link href='/'>Home</Link>
            </li>
            <li
              onClick={handleNav}
              className=' p-4 text-4xl dark:text-white'
            >
              <Link href='../capabilities'>Capabilities</Link>
            </li>
            <li
              onClick={handleNav}
              className=' p-4 text-4xl dark:text-white'
            >
              <Link href='../careers'>Careers</Link>
            </li>
            <li
              onClick={handleNav}
              className=' p-4 text-4xl dark:text-white'
            >
              <Link href='../products'>Products</Link>
            </li>
            <li
              onClick={handleNav}
              className=' p-4 text-4xl dark:text-white'
            >
              <Link href='../contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
