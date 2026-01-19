import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { COMPANY_INFO, SERVICE_LINKS } from '../src/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-brand-black border-t border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/">
              <Logo />
            </Link>
            <p className="text-gray-600 text-base">
              {COMPANY_INFO.tagline}. Your trusted partner in ServiceNow transformation and innovation.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  {SERVICE_LINKS.slice(0, 4).map(link => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-base text-gray-600 hover:text-brand-blue">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 sm:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-gray-600 hover:text-brand-blue">About</Link></li>
                  <li><Link to="/contact" className="text-base text-gray-600 hover:text-brand-blue">Contact</Link></li>
                  <li><Link to="/services" className="text-base text-gray-600 hover:text-brand-blue">Services</Link></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
                <ul className="mt-4 space-y-4 text-base text-gray-600">
                  <li>
                    {COMPANY_INFO.addressLines.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}<br />
                      </React.Fragment>
                    ))}
                  </li>
                  <li>{COMPANY_INFO.phone}</li>
                  <li>{COMPANY_INFO.email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-400 pt-8">
          <p className="text-base text-gray-500 xl:text-center">&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
