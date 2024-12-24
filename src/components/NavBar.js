'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../payment/useCart'

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const { cartCount } = useCart();

  return (
    <div>
      <nav className="bg-green-900 p-2 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <Link href="/" className="flex items-center">
            <img 
                src="/images/logo.jpg" 
                alt="TerraStore Logo" 
                className="h-10 w-10 me-3" 
            />
            <span className="text-white font-bold font-mono text-2xl">TerraStore</span>
        </Link>
        
        <div className='text-white px-4 py-2 font-bold hover:text-red hover:cursor-pointer inline-block'>
          <Link href='/cart'><ShoppingCartIcon className='w-7 h-7 mr-1 ml-auto inline-block' />Cart</Link>
          <span>({cartCount})</span>
        </div>



        <div className="md:hidden">
          <button
            className="text-gray-400 focus:outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <img src="/images/close.svg" alt="Close menu" className="w-6 h-6" />
            ) : (
              <img src="/images/hamburger-menu.svg" alt="Open menu" className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`${navbar ? 'block' : 'hidden'
            } md:block text-white font-mono absolute md:static top-12 right-0 bg-green-800 md:bg-transparent w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <li className="py-2 px-4 text-center hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-500">
              <Link href="/" onClick={() => setNavbar(false)}>
                Home
              </Link>
            </li>
            <li className="py-2 px-4 text-center hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-500">
              <Link href="/products" onClick={() => setNavbar(false)}>
                Shop
              </Link>
            </li>
            <li className="py-2 px-4 text-center hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-500">
              <Link href="/about" onClick={() => setNavbar(false)}>
                About
              </Link>
            </li>
            <li className="py-2 px-4 text-center hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-500">
              <Link href="/contact" onClick={() => setNavbar(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
