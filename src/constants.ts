export const COMPANY_INFO = {
  name: "CloudAdept Systems",
  tagline: "Mastering the ServiceNow Platform",
  email: "admin@cloudadeptsystems.com",
  phone: "(+91) 703-256-5006",
  address: "128, Kota, Nellore, Andhra Pradesh, India - 524413",
  addressLines: [
    "128, Kota, Nellore",
    "Andhra Pradesh, India - 524413"
  ],
  // Using a static map image placeholder for now
  //mapUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/e2e8f0/64748b?text=Kota,+Nellore" 
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' }, // This has a dropdown
  { name: 'Contact', path: '/contact' },
];

export const SERVICE_LINKS = [
  { name: 'ITSM', path: '/services/itsm' },
  { name: 'ITOM', path: '/services/itom' },
  { name: 'CSM', path: '/services/csm' },
  { name: 'Custom App Development', path: '/services/custom-app-development' },
  { name: 'Integration', path: '/services/integration' },
  { name: 'GRC', path: '/services/grc' },
  { name: 'Now Assist (GenAI)', path: '/services/now-assist' },
];
