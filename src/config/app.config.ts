interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Project Manager', 'Freelancer', 'Financial Manager', 'Customer Support'],
  tenantName: 'Company',
  applicationName: 'freelancer marketplace like upwork',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read company information', 'Read project details', 'Read task details'],
  ownerAbilities: [
    'Manage user information',
    'Manage company details',
    'Manage projects',
    'Manage tasks',
    'Manage invoices',
    'Manage reviews',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4ffa860d-b6ef-42c8-aa3d-385e80336843',
};
