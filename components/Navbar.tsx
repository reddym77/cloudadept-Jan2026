import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICE_LINKS } from '../src/constants';

const CustomNavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
        isActive
          ? 'text-brand-blue'
          : 'text-gray-600 hover:text-brand-blue'
      }`
    }
  >
    {children}
  </NavLink>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isMobileServicesMenuOpen, setMobileServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 shadow-md backdrop-blur-sm' 
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <CustomNavLink to="/">Home</CustomNavLink>
              <CustomNavLink to="/about">About Us</CustomNavLink>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setServicesMenuOpen(true)} onMouseLeave={() => setServicesMenuOpen(false)}>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
                      isActive
                        ? 'text-brand-blue'
                        : 'text-gray-600 hover:text-brand-blue'
                    }`
                  }
                  aria-haspopup="true"
                  aria-expanded={isServicesMenuOpen}
                >
                  Services
                  <ChevronDown className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
                </NavLink>
                <AnimatePresence>
                  {isServicesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-20 border border-slate-100"
                    >
                      {SERVICE_LINKS.map(link => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setServicesMenuOpen(false)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 hover:text-brand-blue transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
                to="/contact"
                className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300 shadow-sm"
            >
                Get a Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand-blue hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brand-blue"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <X className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <CustomNavLink to="/" onClick={() => setIsOpen(false)}>Home</CustomNavLink>
            <CustomNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</CustomNavLink>
            
            {/* Mobile Services Accordion */}
            <div>
              <NavLink 
                to="/services"
                onClick={(e) => {
                    e.preventDefault();
                    setMobileServicesMenuOpen(prev => !prev);
                }}
                className={({isActive}) => `w-full flex justify-between items-center text-left px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-brand-blue bg-blue-50' : 'text-gray-600 hover:text-brand-blue hover:bg-gray-50'}`}
                aria-expanded={isMobileServicesMenuOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform duration-200 ${isMobileServicesMenuOpen ? 'rotate-180' : ''}`} />
              </NavLink>
              {isMobileServicesMenuOpen && (
                <div className="pl-7 mt-1 space-y-1">
                  {SERVICE_LINKS.map(link => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-left w-full px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-blue hover:bg-gray-50"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <CustomNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</CustomNavLink>
          </div>
           <div className="px-5 pb-4">
                <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center block bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300"
                >
                    Get a Quote
                </Link>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
