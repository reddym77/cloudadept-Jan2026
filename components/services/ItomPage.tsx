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

const ItomPage: React.FC = () => {
  return (
    <ServicePageLayout
      title="ServiceNow IT Operations Management (ITOM)"
      description="Gain complete visibility into your IT infrastructure and services, prevent outages, and automate remediation with our intelligent ITOM solutions."
      seoTitle="IT Operations Management (ITOM) | CloudAdept Systems"
      seoDescription="Transform IT operations with ServiceNow ITOM. Get infrastructure visibility, prevent outages, automate discovery, service mapping, and event management for proactive IT operations."
      seoUrl="https://www.cloudadeptsystems.com/services/itom"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8 text-gray-700">
          <h2 className="text-3xl font-bold text-brand-black">From Reactive to Proactive IT Operations</h2>
          <p>Stop service outages before they impact your business. CloudAdept Systems leverages ServiceNow ITOM to provide a single system of record for your IT infrastructure. By discovering and mapping the relationships between your IT components and business services, we help you understand the impact of changes and quickly pinpoint the root cause of issues.</p>
          <p>Our approach integrates seamlessly with your ITSM processes, creating a closed-loop system where events automatically generate incidents, and orchestration workflows trigger automated resolutions, dramatically improving your service availability and operational agility.</p>

          <h3 className="text-2xl font-semibold text-brand-black pt-4">Key Benefits of Our ITOM Solutions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Improved Service Availability:</strong> Proactively identify and resolve issues before they cause business disruptions.</li>
            <li><strong>Increased Operational Agility:</strong> Automate discovery, service mapping, and remediation tasks to free up your operations teams.</li>
            <li><strong>Enhanced Visibility & Control:</strong> Gain a comprehensive, real-time view of your entire IT estate, from on-premise to multi-cloud environments.</li>
            <li><strong>Optimized Cloud Spend:</strong> Effectively manage and optimize your cloud resources with integrated cloud management capabilities.</li>
            <li><strong>Reduced Mean Time to Resolution (MTTR):</strong> Accelerate incident resolution by automatically correlating events and identifying root causes.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-black">Core Capabilities</h3>
          <ul className="mt-4 space-y-3">
            {['Discovery', 'Service Mapping', 'Event Management', 'Operational Intelligence', 'Orchestration', 'Cloud Management', 'Certificate and TLS Management'].map(item => (
              <li key={item} className="flex items-start">
                <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CaseStudy
        title="E-commerce Giant Ensures 99.99% Uptime"
        industry="Retail & E-commerce"
        challenge="Frequent service degradations during peak shopping seasons were impacting revenue and customer trust due to a complex, undiscovered infrastructure."
        solution="We deployed ServiceNow Discovery and Service Mapping to create a complete dependency map. Event Management was configured to filter noise and correlate alerts, triggering automated runbooks."
        result="Reduced critical incidents by 75% during peak periods, decreased MTTR by 50%, and achieved near-perfect service availability."
      />
    </ServicePageLayout>
  );
};

export default ItomPage;
