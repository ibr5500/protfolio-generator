"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300">
      <div className="flex flex-row justify-between p-4">
        <Link href="/">
          <Image
            className="w-12 hover:animate-pulse"
            src="/logo.png"
            alt="..."
            width={60}
            height={60}
          />
        </Link>
        <div className="hidden md:block items-center">
          <div className="flex gap-8">
            <Link href="/" className="text-gray-300 hover:text-white hover:animate-pulse">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white hover:animate-pulse">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white hover:animate-pulse">Contact</Link>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="block md:hidden text-gray-300 focus:outline-none focus:ring focus:ring-violet-300 px-4 rounded-3xl"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'block  bg-slate-700 w-1/2 fixed min-h-screen' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
