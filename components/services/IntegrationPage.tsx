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

const IntegrationPage: React.FC = () => {
  return (
    <ServicePageLayout
      title="ServiceNow Platform Integration"
      description="Connect ServiceNow to your entire enterprise ecosystem. We build robust, scalable integrations that create seamless workflows and a single source of truth."
      seoTitle="Platform Integration Services | CloudAdept Systems"
      seoDescription="Connect ServiceNow with ERP, CRM, HRIS, and DevOps tools. Expert integration services using IntegrationHub and custom APIs for unified enterprise workflows and automation."
      seoUrl="https://www.cloudadeptsystems.com/services/integration"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8 text-gray-700">
          <h2 className="text-3xl font-bold text-brand-black">Create a Unified Enterprise</h2>
          <p>Your business processes don't exist in a silo, and your enterprise software shouldn't either. ServiceNow is most powerful when it acts as the "platform of platforms," orchestrating work across all your critical business systems. CloudAdept Systems specializes in creating seamless, bi-directional integrations between ServiceNow and other applications.</p>
          <p>Using ServiceNow's IntegrationHub, pre-built spokes, and custom API development, we connect your ERP, CRM, HRIS, DevOps tools, and more. This eliminates manual data entry, reduces errors, and accelerates your end-to-end business processes, providing a truly connected experience for employees and customers.</p>

          <h3 className="text-2xl font-semibold text-brand-black pt-4">Key Benefits of Our Integration Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Automate Cross-Functional Processes:</strong> Trigger actions in other systems based on events in ServiceNow, and vice versa.</li>
            <li><strong>Create a Single Source of Truth:</strong> Ensure data consistency and accuracy across your entire application landscape.</li>
            <li><strong>Improve Decision-Making:</strong> Consolidate data from multiple systems into ServiceNow for unified reporting and analytics.</li>
            <li><strong>Enhance User Experience:</strong> Allow users to interact with multiple systems' data and processes from a single, intuitive interface.</li>
            <li><strong>Maximize Technology ROI:</strong> Unlock new value from your existing software investments by connecting them through intelligent workflows.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-black">Common Integration Points</h3>
          <ul className="mt-4 space-y-3">
            {['HR Systems (e.g., Workday)', 'CRM (e.g., Salesforce)', 'ERP (e.g., SAP, Oracle)', 'DevOps Tools (e.g., Jira, Azure DevOps)', 'Cloud Providers (AWS, Azure, GCP)', 'IT Monitoring Tools', 'Communication Platforms (Slack, Teams)'].map(item => (
              <li key={item} className="flex items-start">
                <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CaseStudy
        title="Healthcare Provider Automates Employee Onboarding"
        industry="Healthcare"
        challenge="A manual, multi-system onboarding process for new clinicians was slow and led to day-one readiness issues, impacting patient care."
        solution="We built an onboarding workflow in ServiceNow that integrated with their HRIS, Active Directory, and EMR system. The integration automated account creation, provisioned necessary access, and tracked equipment deployment."
        result="Reduced new hire onboarding time from 5 days to 1 day, eliminated manual errors, and ensured 100% of clinicians were fully equipped on their first day."
      />
    </ServicePageLayout>
  );
};

export default IntegrationPage;
