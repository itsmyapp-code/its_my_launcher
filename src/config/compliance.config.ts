export interface ComplianceMetadata {
  frameworkStatus: string;
  effectiveDate: string;
  reviewCycle: string;
  dpoStatus: string;
  contactEmail: string;
  phone: string;
  companyName: string;
}

export const COMPLIANCE_CONFIG: ComplianceMetadata = {
  frameworkStatus: "Certified Compliant (UK GDPR / DUAA 2025 / DMCCA 2024 Frameworks)",
  effectiveDate: "3 June 2026",
  reviewCycle: "Annual (Next Review: June 2027)",
  dpoStatus: "Exempt under Art 37(1) - Internal Data Privacy Lead Assigned (Log B)",
  contactEmail: "hello@itsmyapp.co.uk",
  phone: "+44 20 8000 0000",
  companyName: "itsmyapp.co.uk",
};

export const TRANSPARENCY_CALLOUT = {
  title: "Data Privacy & Compliance Queries",
  body: "For any questions regarding your data rights, or to submit an inquiry, please contact our Data Privacy Lead directly at hello@itsmyapp.co.uk. We formally acknowledge all compliance submissions within 30 days.",
};
