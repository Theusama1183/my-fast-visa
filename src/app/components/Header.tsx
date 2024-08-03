"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-5">
      <div className=" px-4 md:px-14">
        <div className="flex justify-between h-16">
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
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
              ) : (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-black">
              <Image
                src="/main-logo.png"
                alt="Logo"
                width={100}
                height={90}
              ></Image>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link href="/" className="text-black hover:text-gray-700 text-xl">
              Inicio
            </Link>
            <Link
              href="/about-us"
              className="text-black hover:text-gray-700 text-xl"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contact-us"
              className="text-black hover:text-gray-700 text-xl"
            >
              Contactanos
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link
              href="https://wa.me/5492216832241?text=Hola!"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-black hover:text-white"
            >
              Adelantá ya
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 text-xl hover:bg-gray-200"
          >
            Inicio
          </Link>
          <Link
            href="/about-us"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 text-xl hover:bg-gray-200"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contact-us"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 text-xl hover:bg-gray-200"
          >
            Contactanos
          </Link>

          <Link
            href="https://wa.me/5492216832241?text=Hola!"
            className="mt-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-black hover:text-white w-full block text-center"
          >
            Adelantá ya
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
