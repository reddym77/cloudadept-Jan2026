import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardList, Network, HeartHandshake, Blocks, Link as LucideLink, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import SEO from './SEO';

const ServiceCard: React.FC<{
  icon: React.ReactElement;
  title: string;
  description: string;
  linkTo: string;
  delay: number;
}> = ({ icon, title, description, linkTo, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="h-full"
  >
    <Link
      to={linkTo}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl h-full transform hover:-translate-y-1 transition-all duration-300 flex flex-col group border border-slate-200 hover:border-brand-blue"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-brand-blue">
          {icon}
        </div>
        <h3 className="mt-6 text-xl font-semibold text-slate-800">{title}</h3>
        <p className="mt-2 text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex-grow"></div>
      <div className="mt-6">
        <span className="font-semibold text-brand-blue flex items-center gap-2 group-hover:gap-3 transition-all">
          Explore Service <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  </motion.div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "ServiceNow ITSM",
      description:
        "Modernize your IT service delivery with best-practice ITSM solutions on the Now Platform.",
      icon: <ClipboardList className="h-6 w-6" />,
      linkTo: "/services/itsm",
    },
    {
      title: "ServiceNow ITOM",
      description:
        "Gain visibility and control over your infrastructure and services with intelligent operations management.",
      icon: <Network className="h-6 w-6" />,
      linkTo: "/services/itom",
    },
    {
      title: "ServiceNow CSM",
      description:
        "Connect your customer service from the front to the back office to resolve issues proactively.",
      icon: <HeartHandshake className="h-6 w-6" />,
      linkTo: "/services/csm",
    },
    {
      title: "Custom App Development",
      description:
        "Build powerful, custom business applications on the Now Platform to meet your unique needs.",
      icon: <Blocks className="h-6 w-6" />,
      linkTo: "/services/custom-app-development",
    },
    {
      title: "Platform Integration",
      description:
        "Seamlessly connect ServiceNow with other enterprise systems to create a unified ecosystem.",
      icon: <LucideLink className="h-6 w-6" />,
      linkTo: "/services/integration",
    },
    {
      title: "Governance, Risk & Compliance",
      description:
        "Embed risk management and compliance into your daily workflows for real-time resilience.",
      icon: <ShieldAlert className="h-6 w-6" />,
      linkTo: "/services/grc",
    },
    {
      title: "Now Assist (GenAI)",
      description:
        "Boost productivity and accelerate value with Generative AI experiences on the Now Platform.",
      icon: <Sparkles className="h-6 w-6" />,
      linkTo: "/services/now-assist",
    },
  ];

  return (
    <div className="bg-slate-50 animate-fadeIn transition-colors duration-300">
      <SEO
        title="Our Services | CloudAdept Systems"
        description="Explore our comprehensive ServiceNow services including ITSM, ITOM, CSM, Custom App Development, Platform Integration, GRC, and Now Assist (GenAI) to optimize your enterprise workflows."
        url="https://www.cloudadeptsystems.com/services"
      />
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our ServiceNow Expertise
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
              We offer a comprehensive suite of services on the Now Platform, designed to modernize your operations, drive efficiency, and accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                linkTo={service.linkTo}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
