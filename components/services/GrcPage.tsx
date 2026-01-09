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

const GrcPage: React.FC = () => {
  return (
    <ServicePageLayout
      title="Governance, Risk, and Compliance (GRC)"
      description="Embed risk management and compliance into your daily workflows. We help you respond to business risks in real-time and ensure regulatory compliance with ServiceNow GRC."
      seoTitle="Governance, Risk & Compliance (GRC) | CloudAdept Systems"
      seoDescription="Manage risk and compliance with ServiceNow GRC. Automate policy management, risk assessment, audit management, vendor risk, and regulatory compliance workflows."
      seoUrl="https://www.cloudadeptsystems.com/services/grc"
    >
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8 text-gray-700">
          <h2 className="text-3xl font-bold text-brand-black">Resilient Business Operations</h2>
          <p>In an era of increasing regulatory scrutiny and cyber threats, managing risk via spreadsheets and emails is a liability. CloudAdept Systems implements ServiceNow GRC (Integrated Risk Management) to provide a unified, real-time view of your compliance posture and risk exposure.</p>
          <p>We help you automate the lifecycle of policies, risks, and audits. By connecting GRC to your IT and business processes, we ensure that compliance is not an afterthought but an integral part of your operations. This "test once, comply many" approach significantly reduces the burden of audits and strengthens your overall security posture.</p>

          <h3 className="text-2xl font-semibold text-brand-black pt-4">Key Benefits of Our GRC Solutions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Real-Time Visibility:</strong> Monitor your risk and compliance posture continuously with interactive dashboards.</li>
            <li><strong>Automated Evidence Collection:</strong> Automatically gather evidence from your IT systems to prove compliance, reducing audit fatigue.</li>
            <li><strong>Unified Risk Framework:</strong> Map policies and controls to multiple regulations (ISO, NIST, GDPR, SOX) to avoid duplication of effort.</li>
            <li><strong>Faster Issue Resolution:</strong> Automatically trigger remediation workflows when controls fail or risks materialize.</li>
            <li><strong>Vendor Risk Management:</strong> Assess and monitor the security posture of your third-party vendors efficiently.</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-brand-black">Core Capabilities</h3>
          <ul className="mt-4 space-y-3">
            {['Policy & Compliance Management', 'Risk Management', 'Audit Management', 'Vendor Risk Management', 'Business Continuity Management', 'Privacy Management', 'Regulatory Change Management'].map(item => (
              <li key={item} className="flex items-start">
                <CheckCircle2 className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-1" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CaseStudy
        title="Financial Institution Streamlines Audits"
        industry="Banking & Finance"
        challenge="Preparing for quarterly audits was a manual, 3-week process involving hundreds of emails and spreadsheets, often leading to finding gaps too late."
        solution="We implemented ServiceNow Policy & Compliance and Audit Management. We automated evidence collection from their CMDB and security tools."
        result="Reduced audit preparation time by 70%, eliminated manual data collection errors, and provided the board with a real-time compliance dashboard."
      />
    </ServicePageLayout>
  );
};

export default GrcPage;
