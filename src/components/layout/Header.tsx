'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Certificates', href: '/services/certificates' },
      { label: 'Business', href: '/services/business' },
      { label: 'Tax Payments', href: '/services/tax-payments' },
      { label: 'Social Services', href: '/services/social-services' },
      { label: 'Health', href: '/services/health' },
      { label: 'Agriculture', href: '/services/agriculture' },
      { label: 'Infrastructure', href: '/services/infrastructure' },
      { label: 'Education', href: '/services/education' },
      { label: 'Public Safety', href: '/services/public-safety' },
      { label: 'Environment', href: '/services/environment' },
    ],
  },
  { label: 'Government', href: '/government' },
  { label: 'Statistics', href: '/statistics' },
  {
    label: 'Legislative',
    href: '/legislative',
    dropdown: [
      { label: 'Ordinance Framework', href: '/legislative/ordinance-framework' },
      { label: 'Resolution Framework', href: '/legislative/resolution-framework' },
    ],
  },
  { label: 'Transparency', href: '/budget' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-[3px] border-bz-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏛️</span>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-bz-primary leading-tight">Better Zamboanga</span>
                <span className="text-[10px] text-gray-400 -mt-0.5">Civic Portal</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-bz-primary rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.dropdown && (
                    <i className="bi bi-chevron-down text-xs opacity-50 group-hover:rotate-180 transition-transform"></i>
                  )}
                </Link>
                {/* Dropdown */}
                {item.dropdown && (
                  <div className="fixed left-0 right-0 w-full bg-white border-t border-b border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="container mx-auto px-4 py-3 flex justify-center gap-2 flex-wrap">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-bz-primary hover:bg-gray-50 rounded-md transition-colors whitespace-nowrap"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Time, Weather & Language */}
          <div className="flex items-center gap-3">
            {/* Time & Weather - V1 Style */}
            <div className="hidden md:flex items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <i className="bi bi-clock"></i>
                {currentTime || '--:--'}
              </span>
              <span className="flex items-center gap-1">
                <i className="bi bi-sun text-yellow-500"></i>
                32°C
              </span>
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-gray-200"></div>
            
            {/* Language Toggle */}
            <div className="hidden sm:flex items-center gap-1">
              <button className="px-2 py-1 text-xs font-medium bg-bz-primary text-white rounded">EN</button>
              <button className="px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded">FIL</button>
              <button className="px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded">CBG</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
