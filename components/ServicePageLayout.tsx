import React from 'react';
import { Link } from 'react-router-dom';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ title, description, children }) => {
  return (
    <div className="animate-fadeIn bg-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white py-24 md:py-32 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-blue-100">{description}</p>
        </div>
      </section>

      {/* Main Content - Explicitly White Background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {children}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-black sm:text-4xl">
            <span className="block">Ready to Transform Your Operations?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Let's discuss how our {title.replace('ServiceNow', '')} expertise can drive success for your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-blue hover:bg-opacity-90 sm:w-auto transition-transform transform hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
