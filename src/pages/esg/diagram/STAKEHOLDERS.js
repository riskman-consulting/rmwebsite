
 
export const STAKEHOLDERS = [
  {
    id: 'investors',
    name: 'INVESTORS',
    subtitle: 'Capital Access',
    title: 'Investors',
    description: 'Institutional investors integrate ESG factors into investment decisions. Strong ESG performance improves access to capital and favorable financing terms.',
    color: '#1565C0',
    gradient: 'investorGrad',
    position: { x: 350, y: 90 },
    connection: {
      out: { x1: 350, y1: 200, x2: 350, y2: 120 },
      in: { x1: 340, y1: 120, x2: 340, y2: 200 }
    },
    labels: ['ESG Performance', 'Capital Flow']
  },
  {
    id: 'regulators',
    name: 'REGULATORS',
    subtitle: 'Compliance',
    title: 'Regulators',
    description: 'Global regulatory bodies mandate ESG disclosures (CSRD, BRSR, SEC). Compliance is increasingly tied to market access and operational licenses.',
    color: '#F57C00',
    gradient: 'regulatorGrad',
    position: { x: 120, y: 205 },
    connection: {
      out: { x1: 207, y1: 257, x2: 140, y2: 190 },
      in: { x1: 133, y1: 200, x2: 200, y2: 267 }
    },
    labels: ['Compliance', 'Requirements']
  },
  {
    id: 'customers',
    name: 'CUSTOMERS',
    subtitle: 'Procurement',
    title: 'Customers',
    description: 'B2B and B2C customers prioritize sustainable suppliers. Supply chain ESG requirements cascade throughout vendor ecosystems.',
    color: '#2E7D32',
    gradient: 'customerGrad',
    position: { x: 580, y: 205 },
    connection: {
      out: { x1: 493, y1: 257, x2: 560, y2: 190 },
      in: { x1: 567, y1: 200, x2: 500, y2: 267 }
    },
    labels: ['Sustainable', 'Products']
  },
  {
    id: 'employees',
    name: 'EMPLOYEES',
    subtitle: 'Talent & Culture',
    title: 'Employees',
    description: 'Top talent seeks employers with genuine sustainability commitments. Strong ESG profiles enhance engagement, retention, and productivity.',
    color: '#7B1FA2',
    gradient: 'employeeGrad',
    position: { x: 150, y: 585 },
    connection: {
      out: { x1: 257, y1: 443, x2: 170, y2: 530 },
      in: { x1: 163, y1: 520, x2: 250, y2: 433 }
    },
    labels: ['Purpose &', 'Values']
  },
  {
    id: 'society',
    name: 'SOCIETY',
    subtitle: 'License to Operate',
    title: 'Society',
    description: 'Communities and civil society grant social license to operate. ESG performance impacts reputation, brand value, and stakeholder trust.',
    color: '#1A7A8C',
    gradient: 'societyGrad',
    position: { x: 550, y: 585 },
    connection: {
      out: { x1: 443, y1: 443, x2: 530, y2: 530 },
      in: { x1: 537, y1: 520, x2: 450, y2: 433 }
    },
    labels: ['Social', 'Impact']
  }
];
 
 