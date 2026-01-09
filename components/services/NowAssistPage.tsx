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

const NowAssistPage: React.FC = () => {
  return (
    <ServicePageLayout
      title="Now Assist (Generative AI)"
      description="Unlock the power of Generative AI on the Now Platform. Boost productivity, improve experiences, and accelerate value with intelligent automation."
      seoTitle="Now Assist - Generative AI | CloudAdept Systems"
      seoDescription="Harness Generative AI with ServiceNow Now Assist. Boost productivity with case summarization, text-to-code, virtual agent enhancement, and AI-powered automation."
      seoUrl="https://www.cloudadeptsystems.com/services/now-assist"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8 text-gray-700">
          <h2 className="text-3xl font-bold text-brand-black">Transform Work with Generative AI</h2>
          <p>ServiceNow's Now Assist brings the power of Generative AI directly into your workflows. CloudAdept Systems helps you harness this technology to supercharge productivity for agents, developers, and employees. We ensure you implement AI responsibly, securely, and effectively to drive tangible business outcomes.</p>
          <p>Whether it's summarizing complex cases for support agents, generating code for developers, or creating content for your knowledge base, Now Assist reduces manual effort and speeds up resolution times. We guide you through the adoption journey, from identifying high-value use cases to configuring and tuning the models for your specific needs.</p>

          <h3 className="text-2xl font-semibold text-brand-black pt-4">Key Benefits of Now Assist</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Agent Productivity:</strong> Automatically summarize cases, chat histories, and incidents to help agents understand context instantly.</li>
            <li><strong>Developer Velocity:</strong> Generate code from text prompts and convert code to flow, accelerating development cycles.</li>
            <li><strong>Enhanced Self-Service:</strong> Provide employees with instant, conversational answers generated from your knowledge base and service catalog.</li>
            <li><strong>Actionable Insights:</strong> Turn data into narrative insights to help leaders make faster, better-informed decisions.</li>
            <li><strong>Secure & Private:</strong> Leverage ServiceNow's secure AI architecture that keeps your data private and within your control.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-black">Core Capabilities</h3>
          <ul className="mt-4 space-y-3">
            {['Case Summarization', 'Incident Summarization', 'Resolution Note Generation', 'Text-to-Code', 'Flow Generation', 'Search Summarization', 'Virtual Agent Enhancements'].map(item => (
              <li key={item} className="flex items-start">
                <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CaseStudy
        title="Global Retailer Enhances Employee Support"
        industry="Retail"
        challenge="HR and IT service desks were overwhelmed with repetitive questions, and employees struggled to find answers in a vast knowledge base."
        solution="We deployed Now Assist for HRSD and ITSM. The Virtual Agent was upgraded to provide generative answers, and agents used summarization features for complex tickets."
        result="Deflected 40% of routine inquiries, reduced average handle time by 25%, and improved employee satisfaction scores by 15 points."
      />
    </ServicePageLayout>
  );
};

export default NowAssistPage;
