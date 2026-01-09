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

const CustomAppDevPage: React.FC = () => {
  return (
    <ServicePageLayout
      title="Custom Application Development"
      description="Build powerful, scalable, and intuitive business applications on the Now Platform to solve your unique challenges and automate any workflow."
      seoTitle="Custom Application Development | CloudAdept Systems"
      seoDescription="Build custom enterprise applications on ServiceNow platform. Expert low-code development using App Engine, Flow Designer, and UI Builder for rapid, secure business solutions."
      seoUrl="https://www.cloudadeptsystems.com/services/custom-app-development"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8 text-gray-700">
          <h2 className="text-3xl font-bold text-brand-black">Innovate Faster with Low-Code Development</h2>
          <p>Move beyond spreadsheets and legacy point solutions. The ServiceNow App Engine allows you to build custom enterprise applications at speed. CloudAdept Systems provides the expert development services you need to turn your ideas into powerful, workflow-driven applications that connect your entire organization.</p>
          <p>Our developers are masters of the Now Platform, utilizing tools like Flow Designer, UI Builder, and scoped application development best practices to create solutions that are secure, scalable, and easy to maintain. Whether you need to automate a departmental process or build a complex, enterprise-wide solution, we have the expertise to deliver.</p>

          <h3 className="text-2xl font-semibold text-brand-black pt-4">Key Benefits of Our App Dev Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Rapid Time-to-Value:</strong> Develop and deploy applications in a fraction of the time compared to traditional development methods.</li>
            <li><strong>Modern User Experiences:</strong> Create engaging, mobile-friendly interfaces and workspaces that drive user adoption.</li>
            <li><strong>Enterprise-Grade & Secure:</strong> Build on a secure, compliant platform with built-in governance and scalability.</li>
            <li><strong>Automate Anything:</strong> Digitize any manual process, from simple approvals to complex cross-departmental workflows.</li>
            <li><strong>Seamless Integration:</strong> Your custom apps are natively integrated with ServiceNow data and processes, creating a unified experience.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-black">Our Development Process</h3>
          <ul className="mt-4 space-y-3">
            {['Discovery & Prototyping', 'Agile Scoped Development', 'UI/UX Design & Workspaces', 'Process Automation with Flow Designer', 'Integration with Enterprise Systems', 'Testing & Deployment', 'Ongoing Support & Enhancement'].map(item => (
              <li key={item} className="flex items-start">
                <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CaseStudy
        title="Manufacturing Firm Digitizes Quality Control"
        industry="Manufacturing"
        challenge="A paper-based quality control process was slow, error-prone, and provided no real-time visibility into production line issues."
        solution="We built a custom Quality Management application on the Now Platform. The app allowed inspectors to log findings on mobile devices, automatically triggered remediation workflows, and provided real-time dashboards for plant managers."
        result="Reduced quality-related production delays by 35%, improved data accuracy by 98%, and provided unprecedented real-time visibility into plant operations."
      />
    </ServicePageLayout>
  );
};

export default CustomAppDevPage;
