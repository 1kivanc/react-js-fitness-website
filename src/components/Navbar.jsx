import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <div>
            <h1 className='w-full text-3xl font-bold text-[#DF1D2F]'>FITNESS</h1>
            <span className='italic ml-10'>Sağlıklı bir yaşam seni bekliyor</span>
      </div>
      
      <ul className='hidden md:flex whitespace-nowrap font-bold'>
        <li className='p-4'>KULÜPLER</li>
        <li className='p-4'>TOPLULUK</li>
        <li className='p-4'>GRUP DERSLERİ</li>
        <li className='p-4'>SPA</li>
        <li className='p-4'>BLOG</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? ' z-50  fixed left-0 top-0 w-[60%] h-full border-r text-white border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#DF1D2F] m-4'>FITNESS</h1>
          <li className='p-4 border-b border-gray-600'>KULÜPLER</li>
          <li className='p-4 border-b border-gray-600'>TOPLULUK</li>
          <li className='p-4 border-b border-gray-600'>GRUP DERSLERİ</li>
          <li className='p-4 border-b border-gray-600'>SPA</li>
          <li className='p-4'>BLOG</li>
      </ul>
    </div>
  );
};

export default Navbar;