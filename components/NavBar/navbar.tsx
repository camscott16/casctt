"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          Cameron Scott
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul
          className={`md:flex space-x-6 items-center ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link href="/" className="text-black hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/experience" className="text-black hover:text-black">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
