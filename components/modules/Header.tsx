// components/Header.tsx
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import ToggleButton from './ToggleButton'
import CartIcon from './CartIcon'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[900px] m-auto p-5 flex justify-between 
      items-center bg-white dark:bg-slate-800 dark:text-white shadow-md 
      dark:shadow-[0_4px_20px_rgba(255,255,255,0.1)] rounded-xl backdrop-blur-md">
        
      <div className='flex items-center'>
      <Link href="/" className="text-[1.2rem] text-brandColor font-semibold">AliFooD</Link>
      <CartIcon />
      </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ToggleButton />
          <Link href="/menu" className="ml-4 font-[500] text-gray-500 dark:text-gray-300">Menu</Link>
          <Link href="/categories" className="ml-4 font-[500] text-gray-500 dark:text-gray-300">Categories</Link>

          {/* Shopping Cart Icon */}
          
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-white"
          onClick={() => setIsOpen(true)}
        >
          <HiMenu />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-slate-700 shadow-lg z-50 transform transition-transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <HiX />
          </button>
          <ToggleButton />
        </div>

        {/* Mobile Menu Body */}
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            href="/menu"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 font-medium"
          >
            Menu
          </Link>
          <Link
            href="/categories"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 font-medium"
          >
            Categories
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
