"use client"

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '/about' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Função para rolar até a seção de forma suave
  const scrollToSection = async (event: React.MouseEvent, sectionId: string) => {
    event.preventDefault();

    if (window.location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      await router.push('/#services');  // Use await here
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const scrollToContact = (event: React.MouseEvent) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="border border-white/15 py-4 mt-8 px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex justify-between items-center">
          <motion.div
            className="border h-10 rounded-lg inline-flex justify-center items-center border-white/15 px-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Link href="/">
              <h1 className="font-bold text-gray-300 text-2xl cursor-pointer">
                AI2<span className="text-emerald-500">Agro</span>
              </h1>
            </Link>
          </motion.div>

          <nav className="hidden md:flex flex-grow justify-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <motion.li
                key={item.href}
                className="list-none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      scrollToSection(e, item.href.replace('#', ''));
                    }
                  }}
                  className="text-gray-300 hover:text-emerald-500"
                >
                  <span className="border border-white/20 px-3 py-1 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-all duration-200">
                    {item.label}
                  </span>
                </a>
              </motion.li>
            ))}
          </nav>

          <motion.div
            className="ml-4 hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-500 via-teal-900 to-emerald-700 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-900 transition-all duration-200"
            >
              Contact Us
            </button>
          </motion.div>

          <button
            className="md:hidden text-gray-300 hover:text-emerald-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            className="mt-4 md:hidden flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    scrollToSection(e, item.href.replace('#', ''));
                  }
                }}
                className="text-gray-300 hover:text-emerald-500"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-emerald-500 via-teal-900 to-emerald-700 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-900 transition-all duration-200"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </div>
    </header>
  );
};
