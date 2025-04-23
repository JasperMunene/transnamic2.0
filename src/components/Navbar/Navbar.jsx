'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Home, Info, Phone, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '../Switch';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav
      className={cn(
        'z-50 fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl mx-auto transition-all duration-500 ease-out rounded-2xl',
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border border-gray-100 dark:border-gray-800'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md border border-gray-50 dark:border-gray-700/50'
      )}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-28 h-10 transition-all duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Company Logo"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 font-medium group rounded-xl transition-all duration-300",
                    isActive
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <link.icon className={cn(
                      "w-4 h-4 transition-all duration-300",
                      isActive
                        ? "opacity-100 scale-110"
                        : "opacity-70 group-hover:opacity-100 group-hover:scale-110"
                    )} />
                    <span className="relative text-lg">
                      {link.label}
                      <span className={cn(
                        "absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}></span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Switch />
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <span className="relative z-10">Get a quote</span>
              <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <Switch />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden border-t border-gray-100 dark:border-gray-700 rounded-b-2xl',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                  isActive
                    ? "text-red-600 dark:text-red-400 bg-gray-50 dark:bg-gray-700/50"
                    : "text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                )}
              >
                <link.icon className={cn(
                  "h-5 w-5 transition-all duration-300",
                  isActive ? "scale-110" : "opacity-75"
                )} />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-2 px-4 pb-4">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
