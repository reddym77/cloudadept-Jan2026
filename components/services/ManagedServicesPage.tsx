import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import { CheckCircle2 } from 'lucide-react';

const CaseStudy: React.FC<{ title: string; industry: string; challenge: string; solution: string; result: string; }> = ({ title, industry, challenge, solution, result }) => (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-semibold text-brand-black">Case Study: {title}</h3>
        <p className="text-sm font-medium text-brand-blue mt-1">{industry}</p>
        <div className="mt-4 grid md:grid-cols-3 gap-8">
            <div>
                <h4 className="font-semibold text-gray-800">The Challenge</h4>
                <p className="text-gray-600 mt-1">{challenge}</p>
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">Our Solution</h4>
                <p className="text-gray-600 mt-1">{solution}</p>
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">The Result</h4>
                <p className="text-gray-600 mt-1">{result}</p>
            </div>
        </div>
    </div>
);

const ManagedServicesPage: React.FC = () => {
  return (
    <ServicePageLayout
      title="Managed Services & Support"
      description="Maximize the value and performance of your ServiceNow investment with our proactive administration, support, and continuous improvement services."
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8 text-gray-700">
          <h2 className="text-3xl font-bold text-brand-black">Your Dedicated ServiceNow Partner</h2>
          <p>Implementing ServiceNow is just the first step. To realize its full potential, your platform requires ongoing attention, expert administration, and strategic guidance. CloudAdept's Managed Services provide a dedicated team of certified ServiceNow experts to act as an extension of your own team, ensuring your platform is healthy, secure, and continuously evolving to meet your business needs.</p>
          <p>We move beyond simple break-fix support. Our proactive approach includes daily health checks, performance monitoring, and strategic roadmap planning. We help you stay current with new releases, adopt new features, and drive user adoption, maximizing your return on investment.</p>
        
          <h3 className="text-2xl font-semibold text-brand-black pt-4">Key Benefits of Our Managed Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Access to Certified Experts:</strong> Gain on-demand access to a deep bench of ServiceNow specialists without the cost of hiring internally.</li>
            <li><strong>Proactive Platform Health:</strong> We identify and resolve potential issues before they impact your users and business operations.</li>
            <li><strong>Strategic Guidance:</strong> We help you plan your ServiceNow roadmap, ensuring your platform evolves with your business goals.</li>
            <li><strong>Cost-Effective & Predictable:</strong> Our flexible support packages provide expert support at a predictable monthly cost.</li>
            <li><strong>Focus on Your Core Business:</strong> Free up your internal IT resources to focus on strategic initiatives while we manage the platform.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-brand-black">What's Included?</h3>
            <ul className="mt-4 space-y-3">
                {['24/7 Platform Administration & Support', 'Proactive Health Monitoring', 'Incident & Problem Resolution', 'User & Group Administration', 'Release & Upgrade Management', 'Minor Enhancement Development', 'Performance Tuning', 'Strategic Roadmap Reviews'].map(item => (
                    <li key={item} className="flex items-start">
                         <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1" />
                        <span className="text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      <CaseStudy
        title="Mid-Sized Tech Company Scales Operations"
        industry="Technology"
        challenge="Their internal IT team was stretched thin, spending too much time on ServiceNow administration and struggling to keep up with new features and user requests."
        solution="We provided a Managed Services package that included daily administration, proactive monitoring, and a bucket of hours for enhancements. We upgraded their instance and developed a roadmap for adopting new modules."
        result="Freed up 50% of their internal admin's time, reduced platform incidents by 40%, and increased user satisfaction by delivering enhancements 3x faster."
       />
    </ServicePageLayout>
  );
};

export default ManagedServicesPage;
