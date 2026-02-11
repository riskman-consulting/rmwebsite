// import {
//     Shield,
//     Lock,
//     Heart,
//     CheckCircle,
//     AlertTriangle,
//     FileText,
//     Users,
//     Globe,
//     Scale,
//     Briefcase,
//     Eye,
//     Gavel,
//     BookOpen,
//     Activity,
//     Megaphone,
//     Handshake,
//     Banknote,
//     FileKey
// } from 'lucide-react';
// import All_Policies from "../../assets/policies_file"
// import { existingPolicies } from './../../assets/policies_file/index';
// export const policies = [
//     {
//         id: 'corporate-governance',
//         title: "Corporate Governance Policy",
//         category: "Core",
//         icon: Scale,
//         filePath: All_Policies.new.corporateGovernancePolicy,
//         filename: "Corporate_Governance_Policy.docx",
//         summary: "Establishing a comprehensive, structured, and enforceable governance framework.",
//         content: `
//       <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
//       <p class="mb-6 text-lg leading-relaxed">The objective of this Corporate Governance Policy (“Policy”) is to establish a comprehensive, structured, and enforceable governance framework for RiskMan Consulting LLP (“RiskMan” or “the Firm”). This Policy ensures effective leadership, clear accountability, and ethical conduct.</p>

//       <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
//       <p class="mb-6 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP, including employees, partners, consultants, and third-party stakeholders.</p>

//       <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Governance Approach</h3>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>Integrity and ethical practices</li>
//         <li>Transparency and accountability</li>
//         <li>Prudent risk management</li>
//         <li>Compliance with laws and professional standards</li>
//         <li>Responsible stewardship of reputation and resources</li>
//       </ul>

//       <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Governance Structure</h3>
//       <div class="space-y-6 mb-8 text-lg">
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.1 Partner-Led Governance Model</h4>
//           <p>Ultimate authority and responsibility for the management, direction, and conduct of the Firm rests with all the Partners.</p>
//         </div>
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.2 Management Structure</h4>
//           <p>The Partners may delegate operational responsibilities to senior management, subject to clearly defined authority limits and ongoing oversight.</p>
//         </div>
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.3 Committees and Oversight</h4>
//           <p>Partners may constitute committees for Risk Management, Compliance, Quality, and Cyber Security.</p>
//         </div>
//       </div>

//       <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Roles and Responsibilities</h3>
//       <div class="space-y-6 mb-8 text-lg">
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">5.1 Responsibilities of Partners</h4>
//           <ul class="list-disc pl-6 space-y-1">
//             <li>Setting strategic direction</li>
//             <li>Approving governance frameworks and policies</li>
//             <li>Defining risk appetite and tolerance</li>
//             <li>Ensuring ethical conduct and compliance</li>
//           </ul>
//         </div>
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">5.2 Responsibilities of Senior Management</h4>
//           <ul class="list-disc pl-6 space-y-1">
//             <li>Implementing Partner-approved strategies</li>
//             <li>Managing day-to-day operations</li>
//             <li>Escalating material risks or breaches</li>
//           </ul>
//         </div>
//       </div>

//       <h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Decision-Making</h3>
//       <p class="mb-6 text-lg leading-relaxed">Material decisions relating to strategy, finance, client acceptance, and risk exposure shall be taken in accordance with mutual discussions among the partners and senior management.</p>

//       <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Ethical Governance</h3>
//       <p class="mb-6 text-lg leading-relaxed">The Firm adopts a zero-tolerance approach towards unethical or unlawful conduct, reinforcing strict adherence to the Code of Conduct and Code of Ethics.</p>

//       <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Risk and Compliance Oversight</h3>
//       <p class="mb-6 text-lg leading-relaxed">The Partners ensure material risks are identified, assessed, and mitigated, and that compliance with laws and standards is monitored and addressed.</p>

//       <h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Transparency and Disclosure</h3>
//       <p class="mb-6 text-lg leading-relaxed">RiskMan maintains transparency in governance through public disclosure of principles and clear internal communication.</p>

//       <h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Monitoring and Performance</h3>
//       <p class="mb-6 text-lg leading-relaxed">The effectiveness of the governance framework is reviewed periodically by the Partners to identify gaps and implement corrective actions.</p>

//       <h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Training and Awareness</h3>
//       <p class="mb-6 text-lg leading-relaxed">Personnel are made aware of this Policy through induction, periodic formal communications, and training initiatives.</p>
//     `
//     },
//     {
//         id: 'code-of-ethics',
//         title: "Code of Ethics",
//         category: "Core",
//         icon: BookOpen,
//         filePath: All_Policies.new.codeOfEthics,
//         filename: "Code_of_Ethics.docx",
//         summary: "Defining the ethical principles, values, and standards of conduct.",
//         content: `
//       <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
//       <p class="mb-6 text-lg leading-relaxed">The objective of this Code of Ethics (“Code”) is to define the ethical principles, values, and standards of conduct that guide all professional and business activities of RiskMan Consulting LLP. This Code aims to establish a common ethical framework, promote integrity, and protect the interests of all stakeholders.</p>

//       <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Core Ethical Principles</h3>
//       <div class="grid gap-6 md:grid-cols-2 mb-8">
//         <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
//           <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Integrity</strong>
//           <span class="text-gray-600 dark:text-gray-300">Act honestly, fairly, and transparently in all professional and business dealings.</span>
//         </div>
//         <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
//           <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Objectivity</strong>
//           <span class="text-gray-600 dark:text-gray-300">Exercise professional judgment free from bias, conflict of interest, or undue influence.</span>
//         </div>
//         <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
//           <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Competence</strong>
//           <span class="text-gray-600 dark:text-gray-300">Maintain appropriate professional knowledge and skill, perform duties diligently.</span>
//         </div>
//         <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
//           <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Confidentiality</strong>
//           <span class="text-gray-600 dark:text-gray-300">Protect confidential and proprietary information.</span>
//         </div>
//       </div>
//     `
//     },
//     {
//         id: 'risk-mgmt',
//         title: "Risk Management Policy",
//         category: "Core",
//         icon: Activity,
//         filePath: All_Policies.new.riskManagementPolicy,
//         filename: "Risk_Management_Policy.docx",
//         summary: "Framework for identifying, assessing, and mitigating risks.",
//         content: `
//       <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
//       <p class="mb-6 text-lg leading-relaxed">The objective of this Risk Management Policy is to establish a structured and proportionate framework through which RiskMan Consulting LLP identifies, evaluates, and manages risks arising from its professional services, client engagements, people, operations, and reputation.</p>

//       <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Risk Management Approach</h3>
//       <p class="mb-6 text-lg leading-relaxed">RiskMan recognises that primary risks arise from judgment, advice, people, and reputation. The Firm adopts a principles-based, engagement-centric, and governance-driven approach to risk management.</p>

//       <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Key Risk Areas</h3>
//       <ul class="list-none space-y-4 mb-8">
//         <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Engagement and Client Risk</strong> Client integrity, scope, and expectations.</li>
//         <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Professional Judgment and Quality Risk</strong> Flawed judgment, supervision, or competence.</li>
//         <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Independence and Conflict Risk</strong> Conflicts of interest and objectivity.</li>
//         <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Compliance and Regulatory Risk</strong> Non-compliance with laws and standards.</li>
//       </ul>
//     `
//     },
//     {
//         id: 'privacy',
//         title: "Data Privacy Policy",
//         category: "Security",
//         icon: FileKey,
//         filePath: All_Policies.new.dataPrivacyPolicy,
//         filename: "Data_Privacy_Policy.docx",
//         summary: "Protecting personal data and ensuring privacy compliance.",
//         content: `
//       <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
//       <p class="mb-6 text-lg leading-relaxed">The objective of this Information Security & Data Privacy Policy is to establish a unified and structured framework for safeguarding information assets and personal data handled by RiskMan Consulting LLP.</p>

//       <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Data Privacy Principles</h3>
//       <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
//         <li>Information and personal data shall be protected against unauthorised access.</li>
//         <li>Personal data shall be processed lawfully, fairly, and transparently.</li>
//         <li>Data shall be collected only for legitimate and specified purposes.</li>
//         <li>Access to information shall be restricted on a need-to-know basis.</li>
//       </ul>

//       <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Information Security Controls</h3>
//       <p class="mb-6 text-lg leading-relaxed">The Firm shall implement reasonable technical and organisational measures including role-based access controls, secure configuration, malware protection, and secure storage/transmission of sensitive information.</p>
//     `
//     },
//     {
//         id: 'qa',
//         title: "Quality Assurance & Independence Policy",
//         category: "Operations",
//         icon: CheckCircle,
//         filePath: All_Policies.new.qualityAssurancePolicy,
//         filename: "Quality_Assurance_Policy.docx",
//         summary: "Maintaining high standards of quality and independence in all our services.",
//         content: `
//       <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
//       <p class="mb-6 text-lg leading-relaxed">The objective of this Quality Assurance & Independence Policy (“Policy”) is to establish a robust framework to ensure:</p>
//       <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//         <li>Consistent delivery of high-quality professional services</li>
//         <li>Maintenance of independence, objectivity, and professional judgment across all engagements</li>
//       </ul>
//       <p class="mb-6 text-lg leading-relaxed">This Policy reinforces the Firm’s commitment to professional excellence, ethical conduct, and compliance with applicable professional standards and laws & regulations.</p>

//       <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
//       <p class="mb-6 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP. It covers all employees, including those who are permanent, contractual, or interns, as well as partners, consultants, and associates who are professionally engaged with the Firm. Additionally, the policy extends to clients, suppliers, vendors, and any other third-party stakeholders who interact with or are connected to the operations and business activities of RiskMan in any capacity.</p>

//       <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Quality Approach</h3>
//       <p class="mb-4 text-lg leading-relaxed">RiskMan is committed to delivering services that:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
//         <li>Meet or exceed client expectations</li>
//         <li>Comply with applicable laws, regulations, and conform to professional standards & practices</li>
//         <li>Uphold the Firm’s reputation for integrity, competence, and reliability</li>
//       </ul>
//       <p class="mb-6 text-lg italic text-brandPrimary dark:text-brandAccent">Quality is viewed as a collective responsibility and an integral part of all activities of the Firm.</p>

//       <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Quality Governance Structure</h3>
//       <div class="space-y-6 mb-8 text-lg">
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.1 Oversight by Partners</h4>
//           <p>The Partners have ultimate responsibility for setting quality objectives, approving frameworks, overseeing adherence, and advising on improvement.</p>
//         </div>
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.2 Management Responsibility</h4>
//           <p>Senior management is responsible for implementing quality processes, monitoring performance across engagements, and escalating significant issues.</p>
//         </div>
//       </div>

//       <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Engagement Acceptance and Planning</h3>
//       <p class="mb-4 text-lg leading-relaxed">Quality considerations shall be embedded at the outset of each engagement through:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>Assessment of client requirements and expectations</li>
//         <li>Evaluation of the Firm’s competence and capacity to deliver</li>
//         <li>Assignment of appropriately skilled and experienced personnel</li>
//         <li>Establishment of clear engagement objectives, scope, and deliverables</li>
//       </ul>

//       <h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Engagement Execution and Supervision</h3>
//       <p class="mb-6 text-lg leading-relaxed">All engagements shall be executed in accordance with approved methodologies, applicable professional standards, and agreed contractual terms. Appropriate supervision and review shall be maintained throughout the engagement lifecycle.</p>

//       <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Quality Review and Assurance</h3>
//       <p class="mb-4 text-lg leading-relaxed">The Firm may conduct quality reviews, including:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>Internal reviews of selected engagements</li>
//         <li>Peer or Partner reviews for high-risk or complex assignments</li>
//         <li>Post-engagement evaluations to identify lessons learned</li>
//       </ul>

//       <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Independence and Objectivity</h3>
//       <p class="mb-6 text-lg leading-relaxed">RiskMan is committed into maintaining independence in letter and spirit. All personnel shall act objectively, avoid situations that compromise judgment, and comply with independence requirements under applicable standards.</p>

//       <h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Independence Safeguards</h3>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>Deep-testing of Conflict of interest checks</li>
//         <li>Separation of teams and responsibilities</li>
//         <li>Review by personnel independent of the assignment</li>
//         <li>Restrictions on financial or personal relationships</li>
//         <li>Avoidance of gifts from clients</li>
//       </ul>

//       <h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Non-Compliance</h3>
//       <p class="mb-6 text-lg leading-relaxed">Any actual or suspected non-compliance shall be reported promptly and assessed to determine the root cause and appropriate corrective action(s).</p>

//       <h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Documentation</h3>
//       <p class="mb-6 text-lg leading-relaxed">Quality assurance and independence-related activities shall be appropriately documented to support transparency, accountability, and future reference.</p>

//       <h3 id="section-12" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">12. Training and Development</h3>
//       <p class="mb-6 text-lg leading-relaxed">The Firm shall promote quality and independence awareness through induction training and ongoing development. Personnel shall maintain and improve competence appropriate to their roles.</p>
//     `
//     },
//     {
//         id: 'client-acceptance',
//         title: "Client Acceptance Policy",
//         category: "Operations",
//         icon: Handshake,
//         filePath: All_Policies.new.clientAcceptancePolicy,
//         filename: "Client_Acceptance_Policy.docx",
//         summary: "Guidelines for accepting new clients and engagements.",
//         content: `
//       <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
//       <p class="mb-6 text-lg leading-relaxed">The objective of this Client Acceptance & Continuance Policy (“Policy”) is to establish a structured and risk-based framework for:</p>
//       <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//         <li>Evaluating prospective clients prior to engagement</li>
//         <li>Periodically reassessing existing client relationships</li>
//       </ul>
//       <p class="mb-6 text-lg leading-relaxed">To ensure that RiskMan Consulting LLP (“RiskMan” or “the Firm”) undertakes engagements that are aligned with its ethical standards, professional capabilities, risk appetite, and legal & regulatory obligations.</p>

//       <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
//       <p class="mb-6 text-lg leading-relaxed">This policy applies to all individuals employees and entities associated with RiskMan Consulting LLP. It covers all employees, including those who are permanent, contractual, or interns, as well as partners, consultants, and associates who are professionally engaged with the Firm. Additionally, the applicability of the policy extends to clients, suppliers, vendors, and any other third-party stakeholders who interact with or are connected associated to the operations and business activities of RiskMan in any capacity.</p>

//       <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Client Acceptance Approach</h3>
//       <p class="mb-4 text-lg leading-relaxed">RiskMan adopts a disciplined and principled approach to client acceptance and continuance. The Firm shall only undertake engagements where:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
//         <li>The client’s integrity ethical standards and business practices are prima facie consistent with the Firm’s ethical standards.</li>
//         <li>The Firm has the competence, capacity, and resources to timely deliver the engagement with quality.</li>
//         <li>Independence and objectivity can be maintained.</li>
//         <li>Engagement-related risks are within the Firm’s approved risk appetite.</li>
//       </ul>
//       <p class="mb-6 text-lg font-bold text-red-600 dark:text-red-400">Revenue considerations shall never override ethical, legal, or professional concerns requirements.</p>

//       <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Client Acceptance Governance</h3>
//       <div class="space-y-6 mb-8 text-lg">
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.1 Oversight by Partners</h4>
//           <p>The Partner(s) has/have ultimate responsibility for approving the client acceptance and continuance framework and reviewing high-risk or sensitive client relationships.</p>
//         </div>
//         <div>
//           <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.2 Management and Engagement Leadership</h4>
//           <p>Engagement leaders and senior management are responsible for conducting client acceptance and continuance assessments and escalating matters requiring Partner approval, if need be.</p>
//         </div>
//       </div>

//       <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Client Acceptance Assessment</h3>
//       <p class="mb-4 text-lg leading-relaxed">Prior to accepting a new client or engagement, the Firm shall assess at a minimum the following:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>The client’s business activities and ownership structure.</li>
//         <li>The client’s reputation, integrity, and ethical standing.</li>
//         <li>Regulatory, legal, or compliance risks associated with the client.</li>
//         <li>Potential conflicts of interest or independence concerns issues.</li>
//         <li>The Firm’s competence, capacity, and resource availability.</li>
//         <li>Financial and commercial considerations, including credit risk.</li>
//       </ul>

//       <h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Due Diligence and Background Checks</h3>
//       <p class="mb-4 text-lg leading-relaxed">Where appropriate, the Firm may perform due diligence activities, which may include:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>Publicly available background checks.</li>
//         <li>Sanctions, watchlist, or adverse media screening.</li>
//         <li>Regulatory or legal history reviews.</li>
//         <li>Verification of beneficial ownership and key management.</li>
//         <li>Payment track record in the market.</li>
//       </ul>
//       <p class="text-lg italic">The depth intensity of due diligence shall be commensurate with the assessed risks.</p>

//       <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Risk Assessment and Approval</h3>
//       <p class="mb-6 text-lg leading-relaxed">Client acceptance decisions shall be approved by the Partner(s) and be documented. High-risk clients or engagements shall require Enhanced more detailed assessment and Explicit Partner approval prior to acceptance.</p>

//       <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Engagement Terms and Clarity</h3>
//       <p class="mb-4 text-lg leading-relaxed">Prior to commencement of an engagement:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>The scope, objectives, deliverables, and responsibilities shall be clearly defined in the Engagement Letter (EL).</li>
//         <li>Terms of engagement shall be formally agreed and documented.</li>
//       </ul>
//       <p class="text-lg">Ambiguous or inappropriate engagement terms shall not be accepted.</p>

//       <h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Client Continuance Review</h3>
//       <p class="mb-4 text-lg leading-relaxed">Existing client relationships shall be periodically (say, on an annual basis) reassessed to determine whether:</p>
//       <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
//         <li>The client continues to meet the Firm’s acceptance criteria.</li>
//         <li>New risks or concerns have emerged.</li>
//         <li>Independence and objectivity can be continued to be maintained.</li>
//       </ul>
//       <p class="mb-4 text-lg font-bold">Continuance reviews may also be triggered by:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>Significant changes in the client’s business or ownership pattern.</li>
//         <li>Regulatory or reputational significant event(s).</li>
//         <li>Concerns regarding client conduct or cooperation.</li>
//       </ul>

//       <h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Declining or Discontinuing Engagements</h3>
//       <p class="mb-4 text-lg leading-relaxed">The Firm shall decline or discontinue engagements where:</p>
//       <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
//         <li>Unacceptable ethical, legal, or reputational risks issues are identified.</li>
//         <li>Independence or objectivity cannot be adequately safeguarded.</li>
//         <li>The client fails to cooperate comply with professional or contractual requirements.</li>
//       </ul>

//       <h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Client Communication</h3>
//       <p class="mb-6 text-lg leading-relaxed">Where appropriate, decisions relating to engagement acceptance, modification of scope, or engagement discontinuance shall be communicated to the client in a professional and transparent manner, consistent with contractual, regulatory and legal obligations.</p>
//     `
//     },
//     {
//         id: 'compliance',
//         title: "Compliance Management Policy",
//         category: "Compliance",
//         icon: Gavel,
//         filePath: All_Policies.new.complianceManagementPolicy,
//         filename: "Compliance_Management_Policy.docx",
//         summary: "Ensuring adherence to all applicable laws and regulations.",
//         content: `
//       <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
//       <p class="mb-6 text-lg leading-relaxed">The objective of this Compliance Management Policy is to establish a structured and effective framework for ensuring that RiskMan Consulting LLP complies with all applicable laws, regulations, professional standards, and internal policies.</p>

//       <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Compliance Approach</h3>
//       <p class="mb-6 text-lg leading-relaxed">RiskMan adopts a proactive, preventive, and risk-based approach. Compliance includes adherence to laws, professional standards, contractual obligations, and internal policies.</p>

//       <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Risk Assessment</h3>
//       <p class="mb-6 text-lg leading-relaxed">Compliance risks shall be assessed as part of the Firm’s overall risk management process, taking into account the nature of activities, regulatory expectations, and emerging developments.</p>
//     `
//     },
//     { title: "Whistleblower Policy", category: "Compliance", icon: Megaphone, filename: "Whistleblower_Policy.docx", summary: "Mechanism for reporting genuine concerns or grievances.", id: 'whistleblower',filePath:All_Policies.existing.whistleblowerPolicy },
//     { title: "Information Security Policy", category: "Security", icon: Lock, filename: "Information_Security_Policy.docx", summary: "Ensuring the confidentiality, integrity, and availability of information.", id: 'infosec',filePath:All_Policies.existing.informationSecurityPolicy },
//     { title: "Health and Safety", category: "HR", icon: Heart, filename: "Health_and_Safety_Policy.docx", summary: "Commitment to providing a safe and healthy working environment.", id: 'health-safety',filePath:All_Policies.existing.healthAndSafety },
//     { title: "Anti-Money Laundering Policy", category: "Compliance", icon: Banknote, filename: "Anti_Money_Laundering_Policy.docx", summary: "Preventing the use of our services for money laundering activities.", id: 'aml',filePath:All_Policies.existing.antiMoneyLaundering },
//     { title: "Human Rights Policy", category: "HR", icon: Users, filename: "Human_Rights_Policy.docx", summary: "Respecting and promoting human rights in our operations.", id: 'human-rights',filePath:All_Policies.existing.humanRightPolicy },
//     { title: "Anti-Bribery & Corruption", category: "Compliance", icon: Shield, filename: "Anti_Bribery_Corruption_Policy.docx", summary: "Zero tolerance approach towards bribery and corruption.", id: 'anti-bribery',filePath:All_Policies.existing.antiBriberyAndAntiCorruption },
//     { title: "POSH Policy", category: "HR", icon: AlertTriangle, filename: "POSH_Policy.docx", summary: "Prevention of Sexual Harassment at the workplace.", id: 'posh',filePath:All_Policies.existing.posh },
//     { title: "Code of Conduct", category: "HR", icon: Briefcase, filename: "Code_of_Conduct.docx", summary: "Expected behavior and conduct for all employees and partners.", id: 'code-conduct',filePath:All_Policies.existing.codeOfConduct },
// ];

// export const categories = ["All", "Core", "Compliance", "Security", "Operations", "HR"];




import {
    Shield,
    Lock,
    Heart,
    CheckCircle,
    AlertTriangle,
    FileText,
    Users,
    Globe,
    Scale,
    Briefcase,
    Eye,
    Gavel,
    BookOpen,
    Activity,
    Megaphone,
    Handshake,
    Banknote,
    FileKey,
    ShieldCheck
} from 'lucide-react';
import All_Policies from "../../assets/policies_file"
import { existingPolicies } from './../../assets/policies_file/index';

export const policies = [
    {
        id: 'code-conduct',
        title: "Code of Conduct",
        category: "Core",
        icon: Briefcase,
        filePath: All_Policies.existing.codeOfConduct,
        filename: "Code_of_Conduct.pdf",
        summary: "Expected behavior and conduct for all employees and partners.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The purpose of this Code of Conduct and Ethics is to promote conduct of business ethically in an efficient and transparent manner and to meet its obligations to all its stakeholders. The above guidelines and code of conduct are to be followed by each employee of RiskMan irrespective of his/her hierarchy level and department. These guidelines, policies and code of conduct are designed to make sure that RiskMan and its employees carry out their responsibilities, ethically and honestly. All employees must follow these throughout their tenure at RiskMan.</p>
      
      <p class="mb-8 text-lg leading-relaxed bg-amber-50 dark:bg-amber-900/20 border-l-4 border-brandGold p-4 rounded">RiskMan lays great emphasis on this code of ethics guidelines and believes that these are critical in ensuring a constructive and positive work environment at RiskMan along with portraying a good image of RiskMan to the outside world. Hence, RiskMan will not tolerate any violations and appropriate disciplinary action will be taken against any employee found to be violating these. RiskMan management will decide on the nature of such disciplinary action on a case to case basis depending on the severity of the violation.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-8 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP. It covers all employees, including those who are permanent, contractual, or interns, as well as partners, consultants, and associates who are professionally engaged with the Firm. Additionally, the policy extends to clients, suppliers, vendors, and any other third-party stakeholders who interact with or are connected to the operations and business activities of RiskMan in any capacity.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Policy</h3>
      
      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">I. General Code of Conduct</h4>
        <p class="mb-4 text-lg">It is the duty of each employee to:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Respect the nature of privileged or confidential information regarding RiskMan, its officers, board, or staff</li>
          <li>Not use information obtained in the conduct of RiskMan's business for personal or business advantage</li>
          <li>Be certain that a position held with RiskMan is never used to obtain unauthorized, illegal or questionable benefit as it would apply to a partner, contractor, supplier or other party conducting business with RiskMan</li>
        </ul>
        
        <p class="mb-4 text-lg font-semibold">In addition, employees will not indulge in behaviour that can result in disciplinary action which includes, but is not limited to the following:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Possible criminal action, verbal mistreatment of colleagues, an ongoing failure to follow supervisory instructions</li>
          <li>Tardiness or poor attendance</li>
          <li>Major violations of rules (possession of or the using of alcoholic beverages or controlled substances during working hours)</li>
          <li>Inappropriate use of RiskMan's property, equipment or facilities, fighting or violating safety rules including failure to report an accident involving RiskMan's vehicles or equipment, insubordination, stealing, falsifying a time sheet or any official document, accepting a tip, gift, or bribe offered by a contractor or entity that may contract with RiskMan as a sign of appreciation for performance of required duties</li>
          <li>Committing other serious illegal acts</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">II. Outside Employment</h4>
        <p class="mb-6 text-lg leading-relaxed">No outside employment activity shall take place during normal work hours or using RiskMan's premises, supplies, or equipment.</p>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">III. Dress Code and Personal Appearance During Virtual Meeting</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Employees are expected to reflect a favourable image by appropriate dress and hygiene during meetings/conferences/webinars</li>
          <li>Moderation and common sense should be used in all these matters to assure the employee is suitable for work and the respective work environment</li>
        </ul>
      </div>

      <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Prohibited Conduct</h3>
      
      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">I. Work Performance</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Insubordination, including disobedience, or failure or refusal to carry out assignments or instructions</li>
          <li>Sleeping or engaging in unauthorized personal business</li>
          <li>Unauthorized disclosure of confidential information or records</li>
          <li>Falsifying records or giving false information to other state agencies or to employees responsible for record keeping</li>
          <li>Failure to provide accurate and complete information whenever such information is required by an authorized person</li>
          <li>Negligence in the performance of assigned duties</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">II. Attendance and Punctuality</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Failure to report promptly at the starting time of a shift or leaving before the scheduled quitting time of a shift without the specific approval of the supervisor</li>
          <li>Unexcused or excessive absenteeism</li>
          <li>Failure to notify the supervisor promptly of unanticipated absence or tardiness</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">III. Misconduct</h4>
        <p class="mb-4 text-lg">The following are considered acts of misconduct and the employees will face disciplinary action if found indulging in any of the following:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Wilful insubordination or disobedience, whether alone or in combination with others to any of the lawful and reasonable orders of the superiors</li>
          <li>Theft, fraud, or misappropriation of company's funds dishonesty in connection with the employer's business or property</li>
          <li>Wilful damage to or loss of RiskMan's goods or property</li>
          <li>Riotous or disorderly behaviour towards superiors, co-workers or any act subversive of discipline in connection with the work of RiskMan</li>
          <li>Habitual negligence or neglect of work</li>
          <li>Striking work singly or in combination with others or inciting others to strike work in contravention of the provisions of any law or rule having the forces of law/or any contract including the implied contract of appointment to attend and to work</li>
          <li>Sleeping while on duty</li>
          <li>Adopting, participation, instigating, encouraging abetting go slow tactics</li>
          <li>Engaging in activities or giving false statements before any person or authority with the intention to cheat the company</li>
          <li>Refusal to work overtime due to exigencies of work</li>
          <li>Unauthorized disclosure, to any person, of any information regarding the process of the company, which may come in the possession of workman in the course of his work</li>
          <li>Failure to observe safety instructions notified by the employer or interference with any safety device installed within the company</li>
          <li>While in employment, working for any other employer for any consideration or otherwise</li>
          <li>Entering the RiskMan premises without permission and/or authority outside the duty hours</li>
          <li>Allowing an unauthorized person to operate his machine</li>
          <li>Doing any act prejudicial to the interest of reputation of the company</li>
          <li>Not taking proper care of the tools, gauges, jigs, fixtures, or any other company's property entrusted to him</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">IV. Social Media Policy</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Employees need to know and adhere to the Company's Code of Conduct, Employee Handbook, and other company policies when using social media in reference to RiskMan</li>
          <li>Employees should be aware of the effect of their actions may have on their images, as well as Company's image</li>
          <li>The information that employees post or publish may be public information for a long time; employees should be aware that RiskMan may observe content and information made available by employees through social media</li>
          <li>Employees should use their best judgment in posting material that is neither inappropriate nor harmful to RiskMan, its employees, or customers/clients</li>
          <li>Although not an exclusive list, some specific examples of prohibited social media conduct include posting commentary, content, or images that are defamatory, pornographic, proprietary, harassing, libelous, or that can create a hostile work environment</li>
          <li>Employees are not to publish, post or release any information that is considered confidential or not public. If there are questions about what is considered confidential, employees should check with the Human Resources Department and/or supervisor</li>
          <li>Social media networks, blogs and other types of online content sometimes generate press and media attention or legal questions. Employees should refer these inquiries to authorized RiskMan spokespersons</li>
          <li>Employees should get appropriate permission before you refer to or post images of current or former employees, members, vendors, or suppliers. Additionally, employees should get appropriate permission to use a third party's copyrights, copyrighted material, trademarks, service marks or other intellectual property</li>
          <li>If employees publish content after-hours that involves work or subjects associated with RiskMan, a disclaimer should be used, such as this: "The postings on this site are my own and may not represent Company's positions, strategies or opinions."</li>
          <li>It is highly recommended that employees keep RiskMan-related social media accounts separate from personal accounts, if practical</li>
        </ul>
      </div>

      <div class="mb-8 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 rounded">
        <h4 class="text-xl font-bold text-red-700 dark:text-red-400 mb-4">V. Sexual Harassment</h4>
        <p class="mb-4 text-lg">Any employee by any means found to be involved in sexual harassment which involves employees or colleagues by any means will be considered as severe offense and therefore actions shall be initiated, and the perpetrator/s shall be liable including a severe punishment as per the policy of RiskMan and/or in accordance with the applicable local Laws & Regulations.</p>
        
        <p class="mb-3 text-lg font-semibold">Sexual harassment would mean and include any of the following:</p>
        <ul class="list-disc pl-6 space-y-2 text-lg">
          <li>Unwelcome Sexual advances, request/demand/prayer/offer directly/impliedly/through a third party for sexual pleasure, favour</li>
          <li>Unwelcome Sexual advances, request/demand/prayer/offer either unambiguously/explicitly or implicitly or by through any media or mode in lieu of or in return of money, promotion, employment, evaluation of a person towards any activity for which the Company directly and/or indirectly involved</li>
          <li>Unwelcome sexual advances involving verbal, non-verbal, physical contact (such as sexually coloured remarks, jokes, letters, phone calls, e-mails, gestures, showing of pornography, lurid stares, physical contact, molestation, aggravation, display of pictures, signs, verbal or non-verbal communication (directly and/or indirectly) which offends any individual's sensibilities and affect his/her performance</li>
        </ul>
      </div>
    `
    },
    {
        id: 'code-of-ethics',
        title: "Code of Ethics",
        category: "Core",
        icon: BookOpen,
        filePath: All_Policies.new.codeOfEthics,
        filename: "Code_of_Ethics.pdf",
        summary: "Defining the ethical principles, values, and standards of conduct.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Code of Ethics ("Code") is to define the ethical principles, values, and standards of conduct that guide all professional and business activities of RiskMan Consulting LLP ("RiskMan" or "the Firm"). This Code aims to:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Establish a common ethical framework for decision-making and behaviour</li>
        <li>Promote integrity, independence, and professional excellence</li>
        <li>Protect the interests of clients, employees, regulators, and other stakeholders</li>
        <li>Reinforce trust in the Firm's judgment, advice, and conduct</li>
      </ul>
      
      <p class="mb-8 text-lg leading-relaxed bg-blue-50 dark:bg-blue-900/20 border-l-4 border-brandPrimary p-4 rounded">This Code represents the ethical foundation upon which all other Firm policies are built.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-8 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP. It covers all employees, including those who are permanent, contractual, or interns, as well as partners, consultants, and associates who are professionally engaged with the Firm. Additionally, the policy extends to clients, suppliers, vendors, and any other third-party stakeholders who interact with or are connected to the operations and business activities of RiskMan in any capacity.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Ethical Governance and Tone from the Top</h3>
      <p class="mb-4 text-lg leading-relaxed">RiskMan's Partners are responsible for setting the <strong class="text-brandPrimary dark:text-brandAccent">"Tone from the top"</strong> by:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Demonstrating ethical leadership</li>
        <li>Acting consistently with the principles set out in this Code</li>
        <li>Holding themselves and others accountable for ethical conduct</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed">Ethical considerations shall be integral to strategic, operational, and client-related decisions.</p>

      <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Core Ethical Principles</h3>
      <p class="mb-6 text-lg">RiskMan and its personnel shall adhere to the following core ethical principles:</p>
      
      <div class="grid gap-6 md:grid-cols-2 mb-8">
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">4.1 Integrity</h4>
          <p class="text-gray-600 dark:text-gray-300">Act honestly, fairly, and transparently in all professional and business dealings. Misrepresentation, deception, or unethical conduct is strictly prohibited.</p>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">4.2 Objectivity and Independence</h4>
          <p class="text-gray-600 dark:text-gray-300">Exercise professional judgment free from bias, conflict of interest, or undue influence. Independence in fact and appearance shall be maintained at all times.</p>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">4.3 Professional Competence and Due Care</h4>
          <p class="text-gray-600 dark:text-gray-300">Maintain appropriate professional knowledge and skill, perform duties diligently, and apply sound judgment in accordance with applicable standards.</p>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">4.4 Confidentiality</h4>
          <p class="text-gray-600 dark:text-gray-300">Protect confidential and proprietary information and use it only for legitimate business purposes.</p>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors md:col-span-2">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">4.5 Accountability</h4>
          <p class="text-gray-600 dark:text-gray-300">Take responsibility for decisions and actions and be prepared to explain and justify them when required.</p>
        </div>
      </div>

      <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Compliance with Laws and Standards</h3>
      <p class="mb-4 text-lg">All personnel shall comply with:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Applicable laws and regulations</li>
        <li>Professional standards and codes of conduct</li>
        <li>Contractual obligations</li>
        <li>The Firm's internal policies and procedures</li>
      </ul>
      <p class="mb-8 text-lg font-semibold text-red-600 dark:text-red-400">Ignorance of legal or policy requirements is not an acceptable defence.</p>

      <h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Conflicts of Interest</h3>
      <p class="mb-4 text-lg leading-relaxed">Personnel shall avoid situations where personal, financial, or other interests conflict, or appear to conflict, with the interests of the firm or its clients.</p>
      <p class="mb-8 text-lg leading-relaxed">All conflicts shall be disclosed and managed in accordance with the <strong class="text-brandPrimary dark:text-brandAccent">Conflict-of-Interest Policy</strong>. Unmanaged conflicts are strictly prohibited.</p>

      <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Fair Business Practices</h3>
      <p class="mb-4 text-lg">RiskMan is committed to fair and ethical business practices. Personnel shall:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Compete fairly and honestly</li>
        <li>Avoid bribery, corruption, or improper inducements</li>
        <li>Comply with the Firm's <em>Anti-Bribery and Anti-Corruption Policy</em></li>
        <li>Not engage in conduct that could damage the Firm's reputation</li>
      </ul>

      <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Respectful and Inclusive Workplace</h3>
      <p class="mb-4 text-lg leading-relaxed">RiskMan is committed to maintaining a workplace that is respectful, inclusive, and free from discrimination, harassment, or retaliation.</p>
      <p class="mb-8 text-lg leading-relaxed">All personnel are expected to treat others with dignity and professionalism and comply with the Firm's people-related policies.</p>

      <h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Use of Firm Resources and Information</h3>
      <p class="mb-4 text-lg">Firm resources, systems, and information shall be:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Used responsibly and for legitimate business purposes only</li>
        <li>Protected against misuse, loss, or unauthorised access</li>
      </ul>

      <h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Reporting Ethical Concerns</h3>
      <p class="mb-4 text-lg">Personnel are encouraged and expected to report:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Suspected ethical violations</li>
        <li>Unlawful or improper conduct</li>
        <li>Breaches of this Code or other Firm policies</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed">Reports may be made through designated channels in accordance with the Firm's <em class="text-brandPrimary dark:text-brandAccent">Whistleblower Policy</em>.</p>

      <h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Breaches and Consequences</h3>
      <p class="mb-4 text-lg">Breaches of this Code may result in:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Disciplinary action</li>
        <li>Termination of employment or engagement</li>
        <li>Legal or regulatory action, where applicable</li>
      </ul>
      <p class="mb-8 text-lg leading-relaxed">Consequences shall be proportionate to the severity of the violation.</p>

      <h3 id="section-12" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">12. Training and Awareness</h3>
      <p class="mb-6 text-lg leading-relaxed">The Firm promotes ethical awareness through Induction programmes, Periodic communication, and Training initiatives, as appropriate. All personnel are expected to understand and uphold this Code.</p>
    `
    },
    {
        id: 'whistleblower',
        title: "Whistleblower Policy",
        category: "Compliance",
        icon: Megaphone,
        filePath: All_Policies.existing.whistleblowerPolicy,
        filename: "Whistleblower_Policy.pdf",
        summary: "Mechanism for reporting genuine concerns or grievances.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">At RiskMan Consulting, we uphold the highest standards of ethical conduct, integrity, and transparency in all our operations. This policy is intended to encourage and enable employees, clients, vendors, and other stakeholders to raise concerns about unethical, unlawful, or questionable practices in a secure and confidential manner without fear of retaliation.</p>
      
      <p class="mb-4 text-lg">This Whistleblower Policy is designed to:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Encourage employees, partners, and stakeholders to raise concerns about unethical behaviour or misconduct</li>
        <li>Provide a secure mechanism for reporting such concerns without fear of retaliation</li>
        <li>Establish a structured investigation process while ensuring fairness and confidentiality</li>
      </ul>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-8 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP. It covers all employees, including those who are permanent, contractual, or interns, as well as partners, consultants, and associate partners who are professionally engaged with the Firm. Additionally, the policy extends to clients, suppliers, vendors, and any other third-party stakeholders who interact with or are connected to the operations and business activities of RiskMan in any capacity.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Policy</h3>
      <p class="mb-6 text-lg leading-relaxed">This policy is intended to empower employees, partners, consultants, and other associated stakeholders of RiskMan Consulting LLP to report genuine concerns or grievances related to unethical behaviour, suspected or actual fraud, or violations of the Firm's Code of Conduct or internal policies. It provides a secure mechanism to disclose information regarding any conduct believed to be improper or questionable.</p>
      
      <p class="mb-4 text-lg font-semibold">Such disclosures may include, but are not limited to:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Financial irregularities</li>
        <li>Malpractice</li>
        <li>Manipulation of records</li>
        <li>Bribery or corruption</li>
        <li>Unethical business conduct or professional misconduct</li>
        <li>Harassment, discrimination, or workplace abuse</li>
        <li>Conflict of interest</li>
        <li>Breach of RiskMan's internal policies or applicable laws</li>
      </ul>

      <div class="mb-8 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 rounded">
        <h4 class="text-xl font-bold text-green-700 dark:text-green-400 mb-4">Protection of Whistleblowers</h4>
        <p class="mb-4 text-lg">This policy ensures that all whistleblowers are protected from any form of retaliation, provided the disclosure, concern, or allegation is made in good faith and relates to a genuine and serious breach of RiskMan's values, policies, or code of conduct.</p>
        
        <p class="mb-4 text-lg">Whistleblowers shall be fully protected against direct or indirect actions such as:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2 text-lg">
          <li>Intimidation or threats</li>
          <li>Suspension or demotion</li>
          <li>Denial of promotion</li>
          <li>Disciplinary action</li>
          <li>Any other attempt to obstruct their ability to perform their role in a fair and impartial manner</li>
        </ul>
        
        <p class="text-lg font-semibold">Any such retaliation if brought to the attention of the Whistleblower Committee (<a href="mailto:wbhotline@riskman.in" class="text-brandPrimary dark:text-brandAccent hover:underline">wbhotline@riskman.in</a>) will be treated as a serious violation and may lead to disciplinary action against the offender.</p>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">Reporting Mechanisms</h4>
        <p class="mb-4 text-lg">Reports may be made through the following channels:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li><strong>Email:</strong> <a href="mailto:wbhotline@riskman.in" class="text-brandPrimary dark:text-brandAccent hover:underline">wbhotline@riskman.in</a></li>
          <li><strong>Anonymous Reporting:</strong> Physical mode at RiskMan office</li>
        </ul>
        <p class="text-lg italic text-gray-600 dark:text-gray-400">All reports will be handled with strict confidentiality and will be investigated thoroughly and fairly.</p>
      </div>
    `
    },
    {
        id: 'aml',
        title: "Anti-Money Laundering Policy",
        category: "Compliance",
        icon: Banknote,
        filePath: All_Policies.existing.antiMoneyLaundering,
        filename: "Anti_Money_Laundering_Policy.pdf",
        summary: "Preventing the use of our services for money laundering activities.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan Consulting is committed to the highest standards of ethical and lawful conduct in all its business operations. This Anti-Money Laundering (AML) Policy outlines the principles and procedures that guide our efforts to prevent the use of our services for money laundering, terror funding, and other forms of financial crimes.</p>
      
      <p class="mb-4 text-lg">This policy is established to:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Prevent RiskMan Consulting's systems, employees, services, or reputation from being misused in money laundering or terror funding activities</li>
        <li>Ensure compliance with relevant laws and regulatory requirements including the <strong>Prevention of Money Laundering Act (PMLA), 2002</strong> and global best practices</li>
        <li>Promote transparency and accountability in all financial and operational dealings</li>
        <li>Reinforce our culture of integrity, diligence, and risk awareness</li>
      </ul>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Definition of Money Laundering</h3>
      <p class="mb-4 text-lg leading-relaxed">Money laundering is the process of disguising the origins of illegally obtained money so that it appears to be legitimate. It typically involves three stages:</p>
      
      <div class="grid gap-6 md:grid-cols-3 mb-8">
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">Placement</h4>
          <p class="text-gray-600 dark:text-gray-300">Introducing illicit funds into the financial system.</p>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">Layering</h4>
          <p class="text-gray-600 dark:text-gray-300">Concealing the source of the funds through complex transactions.</p>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">Integration</h4>
          <p class="text-gray-600 dark:text-gray-300">Re-introducing the laundered money into the legitimate economy as clean funds.</p>
        </div>
      </div>
      
      <p class="mb-8 text-lg leading-relaxed">Money laundering can be linked to various criminal activities such as corruption, fraud, tax evasion, terror funding, drug trafficking, and organized crimes.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Know Your Customer (KYC) Commitment</h3>
      <p class="mb-4 text-lg leading-relaxed">RiskMan Consulting is fully committed to the principle of <strong class="text-brandPrimary dark:text-brandAccent">"Know Your Customer" (KYC)</strong>. As part of this commitment:</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>All clients, vendors, and partners will undergo appropriate due diligence before any business relationship is established</li>
        <li>Customer identification and verification shall be conducted through reliable and independent documentation and data sources</li>
        <li>Enhanced due diligence measures will be applied for high-risk clients or transactions, including politically exposed persons (PEPs) or those in high-risk jurisdictions</li>
        <li>Continuous monitoring of transactions will be performed to detect suspicious behaviour</li>
      </ul>

      <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Internal Controls and Audit Mechanisms</h3>
      <p class="mb-4 text-lg">To maintain AML compliance:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Periodic internal audits will be conducted to assess the effectiveness of our AML controls and adherence to applicable laws</li>
        <li>RiskMan Consulting will maintain up-to-date records of all relevant transactions and customer interactions in accordance with statutory requirements</li>
      </ul>

      <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Training and Awareness</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>All employees will receive regular training on AML regulations, red flag indicators, and internal reporting mechanisms</li>
        <li>Training programs will be tailored to employee roles to ensure they understand their responsibilities and can identify and escalate suspicious activity</li>
      </ul>

      <h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Reporting of Suspicious Transactions</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Employees are obligated to promptly report any suspicious transactions or activities to the Compliance Officer</li>
        <li>RiskMan Consulting will cooperate fully with regulatory and law enforcement authorities, ensuring that suspicious transaction reports (STRs) are filed in accordance with legal obligations</li>
        <li>Confidentiality will be maintained throughout the reporting process, and whistleblowers will be protected against any form of retaliation</li>
      </ul>

      <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Culture and Values</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan Consulting fosters a culture of compliance, ethical behaviour, and zero tolerance for financial crime. We believe that integrity, transparency, and accountability are not only regulatory obligations but also fundamental values that define how we do business.</p>
      <p class="mb-8 text-lg leading-relaxed">All employees, partners, and stakeholders are expected to uphold these values and actively contribute to the prevention of money laundering and other financial crimes.</p>

      <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Review and Amendments</h3>
      <p class="mb-6 text-lg leading-relaxed">This AML Policy will be reviewed as and when needed or more frequently if required by changes in legislation, risk profile, or regulatory expectations. Any amendments will be communicated to all relevant stakeholders.</p>
    `
    },
    {
        id: 'anti-bribery',
        title: "Anti-Bribery & Anti-Corruption Policy",
        category: "Compliance",
        icon: Shield,
        filePath: All_Policies.existing.antiBriberyAndAntiCorruption,
        filename: "Anti_Bribery_Corruption_Policy.pdf",
        summary: "Zero tolerance approach towards bribery and corruption.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">This Anti-Bribery and Anti-Corruption (ABAC) Policy has been established to reaffirm our zero-tolerance approach towards bribery, corruption, illegal gratification, and any form of improper benefit. It underscores RiskMan Consulting's unwavering commitment to fostering a clean, transparent, and ethical business environment, thereby reinforcing the trust and confidence of all stakeholders.</p>
      
      <p class="mb-4 text-lg">The purpose of this policy is to:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Promote a culture of ethics and accountability across all levels of the organization</li>
        <li>Prevent any designated person from engaging in bribery or corrupt activities</li>
        <li>Ensure that effective internal controls and compliance mechanisms are in place to identify, deter, and respond to bribery and corruption risks</li>
        <li>Demonstrate RiskMan Consulting's leadership and responsibility as a fair and professional business entity</li>
      </ul>
      
      <p class="mb-8 text-lg leading-relaxed bg-blue-50 dark:bg-blue-900/20 border-l-4 border-brandPrimary p-4 rounded">This policy is an integral part of our governance framework and applies to all employees, partners, associate partners, contractors, and representatives of the organization by whatever names they may be called, ensuring that our business operations remain untainted by unethical practices.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-4 text-lg leading-relaxed">This Anti-Bribery and Anti-Corruption (ABAC) Policy applies to all individuals associated with RiskMan Consulting, regardless of their role, designation, or location. The policy covers a wide range of stakeholders to ensure a consistent and comprehensive approach toward ethical conduct across all facets of the organization.</p>
      
      <p class="mb-4 text-lg">This includes, but is not limited to:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Partners and Associate Partners</li>
        <li>Employees (whether full-time, part-time, fixed-term, temporary, contract, or project-based)</li>
        <li>Trainees and Interns</li>
        <li>Third Parties associated with the Organisation, such as vendors and suppliers, contractors and sub-contractors, consultants and advisors, agents, representatives, and intermediaries, service providers or any other external agency acting for or on behalf of RiskMan Consulting</li>
      </ul>
      
      <p class="mb-8 text-lg leading-relaxed">This policy is applicable irrespective of geographic location and must be adhered to at all times, whether engaging in business domestically or internationally, in public or private sector dealings.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Policy</h3>
      <p class="mb-8 text-lg leading-relaxed bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded font-semibold">At RiskMan Consulting, we maintain a <strong>zero-tolerance approach</strong> toward bribery and corruption in any form. Bribery and corruption are criminal offenses and are strictly prohibited under Indian law and international anti-corruption standards. This policy outlines the Company's position on what constitutes bribery, the forms it may take, and the standards of conduct expected from all designated persons.</p>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">I. Definition of Bribery</h4>
        <p class="mb-4 text-lg leading-relaxed">A <strong>bribe</strong> is any inducement, payment, reward, or advantage offered, promised, given, or received—directly or indirectly—to influence a decision or to gain an unfair commercial, contractual, regulatory, or personal advantage.</p>
        
        <p class="mb-3 text-lg font-semibold">It is illegal and unethical:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>To offer, promise, give, or accept a bribe</li>
          <li>To engage in bribery directly or indirectly through a third party</li>
          <li>To offer any benefit to a public official (elected or appointed, administrative, legislative, or judicial) to influence any official act or decision</li>
        </ul>
        
        <p class="mb-3 text-lg">Bribery may involve <strong>anything of value</strong>, not just cash. This can include:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Gifts or hospitality</li>
          <li>Inside information</li>
          <li>Employment offers to relatives or close associates</li>
          <li>Payment or reimbursement of travel expenses</li>
          <li>Charitable donations or sponsorships</li>
          <li>Abuse of one's official position</li>
          <li>Political contributions intended to obtain influence</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">II. Definition of Corruption</h4>
        <p class="mb-6 text-lg leading-relaxed">Corruption is the abuse of entrusted power for private gain. It includes acts of dishonesty or misuse of authority that are illegitimate, immoral, or incompatible with ethical standards. Corruption is often associated with favouritism, nepotism, bribery, and misuse of office for personal or organizational benefit.</p>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">III. Charitable Contributions and CSR</h4>
        <p class="mb-4 text-lg leading-relaxed">RiskMan Consulting may make charitable contributions or undertake corporate social responsibility (CSR) activities to support humanitarian or social development causes. However:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>All such contributions must be made in good faith, without any intent to improperly influence business outcomes</li>
          <li>Donations must be aligned with the Company's internal policies and approved by all the <strong>Partners of RiskMan Consulting</strong></li>
          <li>Contributions must be fully transparent, properly documented, and never made in exchange for a business favour or regulatory benefit, as this may be construed as bribery</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">IV. Political Contributions</h4>
        <p class="mb-4 text-lg leading-relaxed">RiskMan Consulting does not permit political contributions—directly or indirectly—unless explicitly permitted by law and pre-approved by all the Partners.</p>
        
        <p class="mb-3 text-lg">Political contributions include:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Financial donations to political parties or candidates</li>
          <li>Sponsorship of campaign events</li>
          <li>Loans or advances to political representatives</li>
          <li>"In-kind" support such as free services, materials, or use of facilities</li>
          <li>Payments made to influence election outcomes or regulatory decisions</li>
        </ul>
        
        <p class="mb-6 text-lg leading-relaxed">Such contributions, even if made with good intent, may create the appearance of impropriety or violate applicable anti-bribery laws and therefore must be strictly controlled or avoided.</p>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">V. Facilitation Payments</h4>
        <p class="mb-4 text-lg leading-relaxed">Facilitation payments are typically unofficial payments made to secure or expedite routine administrative actions by government or public officials (e.g., issuing permits, processing licenses, customs clearance).</p>
        <p class="mb-6 text-lg leading-relaxed font-semibold text-red-600 dark:text-red-400">RiskMan Consulting does not permit facilitation payments under any circumstances—whether made directly or indirectly—regardless of local customs or industry norms. Designated persons must never authorize or make such payments.</p>
      </div>

      <div class="mb-8 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 rounded">
        <h4 class="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-4">Prohibited Actions</h4>
        <p class="mb-3 text-lg">It is not acceptable for any designated persons to:</p>
        <ul class="list-disc pl-6 mb-4 space-y-2 text-lg">
          <li>Accept an offer of a gift of any size from any Third Party which is in negotiation with or is submitting a proposal with the Company</li>
          <li>Give, promise to give or offer, any payment, gift, hospitality or advantage with the expectation or hope that a business advantage will be given or received or to reward a business advantage already given</li>
          <li>Give, promise to give or offer, any payment, gift or hospitality to a government official, agent or representative to "facilitate" or expedite a routine procedure</li>
          <li>Accept or solicit any payment, advantage, gift or hospitality from a Third Party that you know or suspect is being offered with the expectation that it will obtain a business advantage for them</li>
          <li>Threaten or retaliate against another employee who has refused to commit a bribery offence or who has raised concerns under this Policy</li>
          <li>Engage in any activity that might lead to a breach of this Policy</li>
        </ul>
        <p class="text-lg italic"><strong>The points stated above are illustrative in nature and in no way intended to limit the applicability of this Policy.</strong></p>
      </div>

      <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Gifts, Hospitality & Entertainment</h3>
      <p class="mb-6 text-lg leading-relaxed">This policy does not prohibit normal business hospitality, so long as it is reasonable, appropriate, modest, and bona fide corporate hospitality, and if its purpose is to improve company's image, present Company's products and services, or establish cordial relations.</p>
      
      <p class="mb-4 text-lg font-semibold">Gifts, Hospitality & Entertainment must be:</p>
      <ul class="list-none space-y-3 mb-8">
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent">a)</strong> Legal under all applicable anti-corruption laws</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent">b)</strong> Must be duly approved. Normal business hospitality must always be approved at the appropriate level of Company management</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent">c)</strong> Not cash or a cash equivalent</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent">d)</strong> Never given or accepted if any improper action is expected in return</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent">e)</strong> Modest promotional gifts are permitted</li>
      </ul>
      
      <div class="mb-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-brandPrimary p-6 rounded">
        <h4 class="text-lg font-bold text-brandPrimary dark:text-brandAccent mb-3">Gift Policy Guidelines</h4>
        <p class="mb-4 text-lg">RiskMan Consulting permits the acceptance of nominal gifts from business associates, especially during festivals or ceremonial occasions, provided they do not influence or appear to influence business decisions or create a sense of obligation.</p>
        <ul class="list-disc pl-6 mb-4 space-y-2 text-lg">
          <li>Gifts must be modest, culturally appropriate, and should not exceed ₹5,000 in value per giver per financial year without disclosure and approval</li>
          <li>Cash, high-value items, services, or gifts intended to secure business advantages are strictly prohibited</li>
          <li>All gifts over ₹5,000 must be declared in the Gift Register with details such as the recipient, giver, nature and value of the gift, and relevant approvals</li>
        </ul>
      </div>
    `
    },
    {
        id: 'posh',
        title: "Prevention of Sexual Harassment (POSH) Policy",
        category: "Compliance",
        icon: AlertTriangle,
        filePath: All_Policies.existing.posh,
        filename: "POSH_Policy.pdf",
        summary: "Prevention of Sexual Harassment at the workplace.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan Consulting is fully committed to fostering a work environment that upholds dignity, respect, and equality for all individuals. We recognize that a safe and inclusive workplace is essential for the professional growth and well-being of our employees, consultants, clients, vendors, associate partners, and partners.</p>
      
      <p class="mb-8 text-lg leading-relaxed bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded font-semibold">Sexual harassment in any form is strictly prohibited. This policy is designed to prevent, prohibit, and provide redressal mechanisms for sexual harassment of women at the workplace, in line with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, and extends to all employees, consultants, clients, vendors, associate partners and partners irrespective of their gender or role.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-8 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP. It covers all employees, including those who are permanent, contractual, or interns, as well as partners, consultants, and associates who are professionally engaged with the Firm. Additionally, the policy extends to clients, suppliers, vendors, and any other third-party stakeholders who interact with or are connected to the operations and business activities of RiskMan in any capacity.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Definitions</h3>
      
      <div class="space-y-6 mb-8">
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">I. Employee of RiskMan Consulting</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">For the purpose of this policy, an "employee" includes any individual engaged by RiskMan Consulting to perform work-related duties. This includes, but is not limited to, individuals employed on a permanent, temporary, part-time, contractual, internship, or retainer basis—whether hired directly by RiskMan Consulting or indirectly through third-party agencies or vendors.</p>
        </div>
        
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">II. Sexual Harassment</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">Sexual harassment refers to any unwelcome act or behaviour of a sexual nature—whether verbal, non-verbal, written, physical, direct or indirect—committed by any employee, supervisor, or colleague, regardless of gender.</p>
        </div>
        
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">III. Aggrieved Woman</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">In accordance with applicable laws, "Aggrieved Woman" refers to any woman—whether employed with RiskMan Consulting or not—who alleges to have experienced sexual harassment at the workplace. The term extends to female clients, vendors, or visitors who may be present in a work-related setting under RiskMan Consulting's purview.</p>
        </div>
        
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-3">IV. Respondent</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">The "Respondent" is the individual (employee or representative) against whom a complaint of sexual harassment has been formally filed under this policy.</p>
        </div>
      </div>

      <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Policy</h3>
      
      <p class="mb-4 text-lg font-semibold">Sexual harassment includes such unwelcome sexually determined behaviour (whether direct or by implication) such as:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Physical contact and sexual advances</li>
        <li>Demand or request for sexual favours</li>
        <li>Making sexually-coloured remarks</li>
        <li>Showing pornography</li>
        <li>Any other unwelcome physical, verbal or non-verbal or written conduct of a sexual nature</li>
      </ul>

      <div class="mb-8 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 rounded">
        <h4 class="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-4">Circumstances that may constitute Sexual Harassment</h4>
        <p class="mb-4 text-lg">In addition to the above, the following circumstances, among other circumstances, if it occurs or is present in relation to or connected with any act or behaviour of sexual harassment may amount to sexual harassment:</p>
        <ul class="list-disc pl-6 space-y-2 text-lg">
          <li>Implied or explicit promise of preferential treatment in her employment</li>
          <li>Implied or explicit threat of detrimental treatment in her employment</li>
          <li>Implied or explicit threat about her present or future employment status</li>
          <li>Interference with her work or creating an intimidating or offensive or hostile work environment for her</li>
          <li>Humiliating treatment likely to affect her health or safety</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">Examples of Unwelcome Sexually Determined Behaviour</h4>
        <p class="mb-4 text-lg">"Unwelcome sexually determined behaviour" includes but is not limited to:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Subjecting another person to an unwelcome act of physical intimacy including grabbing, brushing, touching, including sexual flirtations, advances, or propositions</li>
          <li>Making any unwelcome remark with sexual connotations like sexually explicit remarks, cracking jokes or using sentences with sexual connotations or making sexist remarks etc.</li>
          <li>Showing any sexually explicit visual material in the form of pictures/cartoons/pinups/calendars/screensavers on computers/any offensive written or electronic material/including pornography</li>
          <li>Engaging in any other unwelcome conduct of a sexual nature, verbal or even non-verbal, staring to make the other person uncomfortable, making offensive gestures, etc.</li>
          <li>Sending unwelcome communication of a sexual nature, through e-mail, letter, mobile technology, or any other form of written or electronic communication, exhibiting conduct of a sexual nature</li>
          <li>Making an unwelcome demand or request whether directly or by implication for sexual favours and/or making it a condition of employment/payment of wages/increments/promotion/preferential treatment/threat to detrimental treatment in employment/threat to current or future employment status or similar act</li>
          <li>Where any employee(s) make(s) sexual epithet, jokes, written or oral references to sexual conduct, and/or gossip regarding one's sex life, comments on an individual's body, comments about an individual's sexual activity, deficiencies or prowess in an attempt to humiliate or make another person uncomfortable</li>
          <li>Behaviour which creates an environment that is intimidating, hostile, offensive, humiliating for women employee</li>
        </ul>
      </div>

      <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Grievance Redressal Mechanism</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan has put a grievance redressal mechanism to have a corrective action approach for any conflict or complaint related to human rights.</p>
      
      <p class="mb-6 text-lg leading-relaxed">To ensure a respectful and inclusive workplace that upholds human dignity and human rights, RiskMan Consulting LLP has established the following grievance redressal mechanism:</p>
      
      <div class="space-y-4 mb-8">
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-2">I. Reporting</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">Any employee, intern, or stakeholder may report a human rights-related concern (e.g., discrimination, harassment, unfair treatment) in writing at <a href="mailto:grievance@riskman.in" class="text-brandPrimary dark:text-brandAccent hover:underline">grievance@riskman.in</a></p>
        </div>
        
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-2">II. Confidentiality</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">All complaints will be treated with strict confidentiality and sensitivity.</p>
        </div>
        
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-2">III. Initial Review</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">The Grievance Officer will acknowledge the complaint within <strong>3 working days</strong> and initiate a preliminary review.</p>
        </div>
        
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-2">IV. Resolution Timeline</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">Efforts will be made to resolve the grievance within <strong>15 working days</strong> through fair investigation and dialogue.</p>
        </div>
        
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent text-lg mb-2">V. Escalation</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">If the issue remains unresolved, it may be escalated to the <strong>Managing Partner(s)</strong> for final review.</p>
        </div>
        
        <div class="p-5 bg-green-50 dark:bg-green-900/20 rounded-lg shadow-sm border-l-4 border-green-600">
          <h4 class="font-bold text-green-700 dark:text-green-400 text-lg mb-2">VI. Protection Against Retaliation</h4>
          <p class="text-gray-600 dark:text-gray-300 text-lg">Retaliation against any complainant is strictly prohibited and may lead to disciplinary action.</p>
        </div>
      </div>
    `
    },
    {
        id: 'health-safety',
        title: "Health and Safety Policy",
        category: "HR",
        icon: Heart,
        filePath: All_Policies.existing.healthAndSafety,
        filename: "Health_and_Safety_Policy.pdf",
        summary: "Commitment to providing a safe and healthy working environment.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">At RiskMan Consulting, we are committed to ensuring the health, safety, and welfare of our employees, clients, contractors, partners and all others who may be affected by our activities. As an organization specializing in risk management and consulting services, we recognize our responsibility to provide a safe and healthy working environment in compliance with the local Health and Safety at Work policy.</p>
      
      <p class="mb-4 text-lg">We aim to:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Prevent accidents and cases of work-related ill health</li>
        <li>Provide clear instructions, information, and adequate training to ensure employees are competent to carry out their work safely</li>
        <li>Engage and consult with employees on health and safety matters</li>
        <li>Provide and maintain safe equipment and a safe working environment</li>
        <li>Regularly assess risks and implement control measures</li>
      </ul>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Policy</h3>
      <p class="mb-8 text-lg leading-relaxed">These policies are vital for building a safe, efficient, and legally compliant workplace.</p>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">I. Workplace Safety</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li>Office areas are regularly inspected for hazards (electrical safety, ergonomic setups, etc.)</li>
          <li>Fire extinguishers and first aid kits are available and routinely checked</li>
          <li>Emergency exits are clearly marked and unobstructed</li>
        </ul>
      </div>

      <div class="mb-8 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 rounded">
        <h4 class="text-xl font-bold text-red-700 dark:text-red-400 mb-4">II. Workplace Travel Guidelines</h4>
        <ul class="list-disc pl-6 space-y-3 text-lg">
          <li><strong>Avoid High-Risk Transport:</strong> RiskMan team members are strongly advised against using motorbikes, Uber Moto, Rapido, or similar two-wheeled transport services for commuting or work-related travel due to increased accident risks</li>
          <li><strong>Preferred Transport Options:</strong> Utilize Metros, or public transport options for all travel needs</li>
          <li><strong>Verify Transport Detail:</strong> When using cabs or ride-sharing services, always verify that the vehicle and driver match the provided details through the mobile app for safety. Ensure to share your cab details to any concerned team member/emergency contact in your family for any late-night travel situations</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">III. Health and Safety Gear</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li><strong>Mandatory Helmet Use:</strong> If using a motorbike is unavoidable, please wear a helmet mandatorily to meet safety standards and ensure that the helmet is securely fastened at all times during the motorbike ride</li>
          <li><strong>Additional Safety Measures during client factory/site visits:</strong> Wear appropriate safety gear such as gloves, jackets with armor, safety helmets, safety shoes, earbuds, and reflective clothing to enhance visibility and protection (whatever is required as per the factory/site's safety protocol in order to visit the area/s)</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">IV. Security</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li><strong>Late Night Travels:</strong> Always inform your reporting manager in case of late-night travels and keep them informed once you reach. For any support, please do reach out to concerned partners</li>
          <li><strong>Visitor Protocol:</strong> Ensure no visitors are invited to client premises</li>
          <li><strong>Secure Personal and Official Belongings:</strong> Keep personal and official belongings in secure areas and do not leave valuables unattended</li>
        </ul>
      </div>

      <div class="mb-8">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">V. Emergency Procedures</h4>
        <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
          <li><strong>Emergency Contacts:</strong> Update your emergency contact details and share back for record purpose with your buddy marking a copy to <a href="mailto:prasen.pal@riskman.in" class="text-brandPrimary dark:text-brandAccent hover:underline">prasen.pal@riskman.in</a>. Respective buddy to ensure for any new hire this information is collected and shared</li>
          <li><strong>Evacuation Plan:</strong> Familiarize yourself with the office's evacuation plan and participate in regular drills (including for respective client offices)</li>
          <li><strong>First Aid:</strong> Be aware of the locations of first aid kits and emergency medical facilities within the workplace (including for respective client offices)</li>
        </ul>
      </div>

      <div class="mb-8 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-brandPrimary p-6 rounded">
        <h4 class="text-xl font-bold text-brandPrimary dark:text-brandAccent mb-4">VI. Cybersecurity</h4>
        <ul class="list-disc pl-6 mb-4 space-y-2 text-lg">
          <li><strong>Device Security:</strong> Ensure all work devices are password-protected and utilize two-factor authentication wherever possible</li>
          <li><strong>Data Protection:</strong> Be vigilant about data protection policies and avoid sharing sensitive information over un-secured channels</li>
          <li><strong>Report Suspicious Activity:</strong> Report any suspicious emails, messages, or behaviour to your reporting Partner immediately. <strong class="text-red-600 dark:text-red-400">DO NOT FORWARD ANY PHISHING EMAIL TO TEAM MEMBERS (STRICTLY AVOID SPREAD).</strong></li>
          <li><strong>Behaviour Cautious:</strong> Stay vigilant and always be cautious on behaviour norms. If there is anything unusual, double check/reach out the person on call separately to verify the source before clicking or responding</li>
        </ul>
      </div>

      <div class="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 rounded">
        <p class="text-lg leading-relaxed mb-4">By adhering to these guidelines, you all can help us maintain a safe and secure working environment.</p>
        <p class="text-lg font-semibold text-green-700 dark:text-green-400">Your safety and security are our utmost priority.</p>
      </div>
    `
    },
    {
        id: 'corporate-governance',
        title: "Corporate Governance Policy",
        category: "Core",
        icon: Scale,
        filePath: All_Policies.new.corporateGovernancePolicy,
        filename: "Corporate_Governance_Policy.pdf",
        summary: "Establishing a comprehensive, structured, and enforceable governance framework.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Corporate Governance Policy ("Policy") is to establish a comprehensive, structured, and enforceable governance framework for RiskMan Consulting LLP ("RiskMan" or "the Firm"). This Policy ensures effective leadership, clear accountability, and ethical conduct.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-8 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP, including employees, partners, consultants, and third-party stakeholders.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Governance Approach</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Integrity and ethical practices</li>
        <li>Transparency and accountability</li>
        <li>Prudent risk management</li>
        <li>Compliance with laws and professional standards</li>
        <li>Responsible stewardship of reputation and resources</li>
      </ul>

      <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Governance Structure</h3>
      <div class="space-y-6 mb-8 text-lg">
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.1 Partner-Led Governance Model</h4>
          <p>Ultimate authority and responsibility for the management, direction, and conduct of the Firm rests with all the Partners.</p>
        </div>
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.2 Management Structure</h4>
          <p>The Partners may delegate operational responsibilities to senior management, subject to clearly defined authority limits and ongoing oversight.</p>
        </div>
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.3 Committees and Oversight</h4>
          <p>Partners may constitute committees for Risk Management, Compliance, Quality, and Cyber Security.</p>
        </div>
      </div>

      <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Roles and Responsibilities</h3>
      <div class="space-y-6 mb-8 text-lg">
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">5.1 Responsibilities of Partners</h4>
          <ul class="list-disc pl-6 space-y-1">
            <li>Setting strategic direction</li>
            <li>Approving governance frameworks and policies</li>
            <li>Defining risk appetite and tolerance</li>
            <li>Ensuring ethical conduct and compliance</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">5.2 Responsibilities of Senior Management</h4>
          <ul class="list-disc pl-6 space-y-1">
            <li>Implementing Partner-approved strategies</li>
            <li>Managing day-to-day operations</li>
            <li>Escalating material risks or breaches</li>
          </ul>
        </div>
      </div>

      <h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Decision-Making</h3>
      <p class="mb-8 text-lg leading-relaxed">Material decisions relating to strategy, finance, client acceptance, and risk exposure shall be taken in accordance with mutual discussions among the partners and senior management.</p>

      <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Ethical Governance</h3>
      <p class="mb-8 text-lg leading-relaxed">The Firm adopts a zero-tolerance approach towards unethical or unlawful conduct, reinforcing strict adherence to the Code of Conduct and Code of Ethics.</p>

      <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Risk and Compliance Oversight</h3>
      <p class="mb-8 text-lg leading-relaxed">The Partners ensure material risks are identified, assessed, and mitigated, and that compliance with laws and standards is monitored and addressed.</p>

      <h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Transparency and Disclosure</h3>
      <p class="mb-8 text-lg leading-relaxed">RiskMan maintains transparency in governance through public disclosure of principles and clear internal communication.</p>

      <h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Monitoring and Performance</h3>
      <p class="mb-8 text-lg leading-relaxed">The effectiveness of the governance framework is reviewed periodically by the Partners to identify gaps and implement corrective actions.</p>

      <h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Training and Awareness</h3>
      <p class="mb-6 text-lg leading-relaxed">Personnel are made aware of this Policy through induction, periodic formal communications, and training initiatives.</p>
    `
    },
    {
        id: 'privacy',
        title: "Data Privacy Policy",
        category: "Security",
        icon: FileKey,
        filePath: All_Policies.new.dataPrivacyPolicy,
        filename: "Data_Privacy_Policy.pdf",
        summary: "Protecting personal data and ensuring privacy compliance.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Information Security & Data Privacy Policy is to establish a unified and structured framework for safeguarding information assets and personal data handled by RiskMan Consulting LLP.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Data Privacy Principles</h3>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
        <li>Information and personal data shall be protected against unauthorised access</li>
        <li>Personal data shall be processed lawfully, fairly, and transparently</li>
        <li>Data shall be collected only for legitimate and specified purposes</li>
        <li>Access to information shall be restricted on a need-to-know basis</li>
      </ul>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Information Security Controls</h3>
      <p class="mb-6 text-lg leading-relaxed">The Firm shall implement reasonable technical and organisational measures including role-based access controls, secure configuration, malware protection, and secure storage/transmission of sensitive information.</p>
    `
    },


  {

  id: "information-security-policy",

  title: "Information Security Policy",

  category: "Security",

  icon: ShieldCheck,

  filePath: All_Policies.existing.informationSecurityPolicy,

  filename: "Information_Security_Policy.pdf",

  summary: "Framework for protecting information assets and ensuring confidentiality, integrity, and availability through enforced security controls.",

  content: `
<h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
<p class="mb-6 text-lg leading-relaxed">

The purpose of this policy is to protect RiskMan Consulting’s information resources from unauthorized access, modification, disclosure, or destruction caused by internal or external threats. It establishes security controls to safeguard the Confidentiality, Integrity, and Availability (CIA) of information systems, data assets, and organizational information, and supports responsible data stewardship and regulatory compliance.
</p>
 
<h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
<p class="mb-8 text-lg leading-relaxed">

This policy applies to all employees (permanent, contractual, and interns), partners, consultants, and associate partners. It covers all assets including information systems, hardware, software, data, media, and physical documents located at RiskMan or approved third-party facilities.
</p>
 
<h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Responsibility</h3>
<p class="mb-8 text-lg leading-relaxed">

The Information Security team is primarily responsible for ensuring adherence to this Information Security Policy, supported by management and all users of company systems.
</p>
 
<h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Core Security Principles</h3>
<ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
<li>Security is everyone’s responsibility</li>
<li>Users are individually responsible for protecting equipment, software, and information</li>
<li>Non-public and confidential data must be identified and protected</li>
<li>Company resources must be used only for authorized business purposes</li>
<li>All system actions are accountable and traceable</li>
</ul>
 
<h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. System and Device Controls</h3>
<ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
<li>Protect equipment from loss and theft</li>
<li>Store company data only on encrypted devices</li>
<li>Do not bypass network or internet security controls</li>
<li>Do not install unauthorized software or browser plugins</li>
<li>Do not store company data on unauthorized external or cloud services</li>
<li>Use IT-approved secure file transfer methods</li>
</ul>
 
<h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Security Incident Reporting</h3>
<p class="mb-8 text-lg leading-relaxed">

Any actual or suspected security incident must be reported immediately by email to prasen.pal@riskman.in. All staff must read, understand, acknowledge, and follow security standards to reduce risk and incident impact.
</p>
 
<h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Data Protection</h3>
<p class="mb-8 text-lg leading-relaxed">

RiskMan enforces strong safeguards for personal and sensitive data. Security controls support organizational data protection and information management standards.
</p>
 
<h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Human Resource Security</h3>
<p class="mb-8 text-lg leading-relaxed">

Security awareness training programs must be maintained. The IT team conducts periodic information security training to ensure appropriate awareness across the organization.
</p>
 
<h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Asset Management</h3>
<ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
<li>Maintain inventory of all key information assets</li>
<li>Record asset type, owner, and custodian</li>
<li>Report lost or stolen hardware immediately</li>
<li>Dispose end-of-life hardware securely</li>
<li>Users must take proper care of issued devices</li>
</ul>
 
<h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Information Classification and Handling</h3>
<p class="mb-4 text-lg leading-relaxed">

All information must be classified based on Confidentiality, Integrity, and Availability requirements to ensure appropriate protection levels.
</p>
<ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
<li>Apply protection controls based on classification</li>
<li>Ensure confidentiality agreements before external sharing</li>
<li>Verify email recipients before sending files</li>
<li>Use encrypted removable storage only with authorization</li>
<li>Use restricted-access storage where possible</li>
</ul>
 
<h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Acceptable Use — Email and Internet</h3>
<ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
<li>Email must be used responsibly and lawfully</li>
<li>Limited personal internet use is allowed if it does not affect productivity</li>
<li>Do not download large or harmful files</li>
<li>Respect copyright and licensing laws</li>
<li>Do not access unauthorized systems</li>
<li>Do not transmit obscene, threatening, or illegal content</li>
<li>Report unusual IT events immediately</li>
</ul>
 
<h3 id="section-12" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">12. Prohibited External Sharing</h3>
<p class="mb-4 text-lg leading-relaxed">

Uploading company non-public information to external storage or transfer platforms is strictly forbidden.
</p>
<ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
<li>Client and project information</li>
<li>Customer financial or account data</li>
<li>Project and proposal documents</li>
<li>Personally identifiable information</li>
<li>Company strategy and plans</li>
<li>Intellectual property</li>
<li>Employee personal records</li>
</ul>
 
<h3 id="section-13" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">13. Violations</h3>
<p class="mb-8 text-lg leading-relaxed">

Policy violations may result in disciplinary action, including termination. Users are personally liable for unlawful misuse. All violations and incidents must be reported to the Manager or Partner and via email to prasen.pal@riskman.in.
</p>

`

},
 







    // {
    //     id: 'infosec',
    //     title: "Information Security Policy",
    //     category: "Security",
    //     icon: Lock,
    //     filePath: All_Policies.existing.informationSecurityPolicy,
    //     filename: "Information_Security_Policy.pdf",
    //     summary: "Ensuring the confidentiality, integrity, and availability of information.",
    //     content: `
    //   <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">Information Security Policy</h3>
    //   <p class="mb-6 text-lg leading-relaxed">This policy establishes comprehensive controls for protecting information assets, ensuring confidentiality, integrity, and availability of data throughout its lifecycle.</p>
      
    //   <div class="mb-8 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-brandPrimary p-6 rounded">
    //     <p class="text-lg">For detailed information security guidelines and controls, please refer to the complete policy document.</p>
    //   </div>
    // `
    // },


    {

  id: "human-rights-policy",

  title: "Human Rights Policy",

  category: "HR",

  icon: Scale,

  filePath: All_Policies.existing.humanRightPolicy,

  filename: "Human_Rights_Policy.pdf",

  summary: "Commitment to uphold, protect, and promote human rights through fair, inclusive, and ethical workplace and business practices.",

  content: `
<h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
<p class="mb-6 text-lg leading-relaxed">

RiskMan is committed to reinforcing and upholding human rights through this Human Rights Policy. The Firm maintains zero tolerance against human rights violations and works to ensure that no abuse occurs within any part of its business operations. Suppliers and business partners are also encouraged to follow the same standards. Employees, partners, and community members are encouraged to speak up without fear of retaliation regarding concerns or harassment at the workplace.
</p>
 
<h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
<p class="mb-8 text-lg leading-relaxed">

This policy applies to all individuals and entities associated with RiskMan Consulting LLP, including permanent and contractual employees, interns, partners, consultants, and associates. It also extends to clients, suppliers, vendors, and other third-party stakeholders connected with the Firm’s operations and business activities.
</p>
 
<h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Policy Commitments</h3>
 
<div class="space-y-6 mb-8 text-lg">
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.1 Equal Opportunity & Non-Discrimination</h4>
<p>RiskMan fosters an inclusive and respectful workplace free from discrimination. Employment decisions are based strictly on merit and business needs. Discrimination based on race, religion, color, gender, gender identity, nationality, disability, medical condition, marital status, age, sexual orientation, pregnancy, or any legally protected characteristic is prohibited.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.2 Gender Pay Equality</h4>
<p>The Firm ensures equal pay for equal work. Compensation decisions are based on performance, responsibilities, and outcomes, not personal identity or gender.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.3 Harassment-Free Workplace</h4>
<p>RiskMan maintains zero tolerance for sexual, verbal, physical, or psychological harassment. A safe and respectful workplace is enforced through the Code of Conduct and POSH Policy.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.4 Diversity, Equity and Inclusion</h4>
<p>The Firm promotes diversity and inclusion across all levels and eliminates stereotypes in language, policy, and practice. Inclusive language is used in official documentation.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.5 Freedom of Association</h4>
<p>Employees have the right to freely associate, join unions, and participate in collective bargaining. Fair grievance mechanisms are provided.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.6 Prohibition of Child and Forced Labour</h4>
<p>Child labour, forced labour, bonded labour, servitude, and human trafficking are strictly prohibited across operations and supply chains.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.7 Modern Slavery</h4>
<p>The Firm follows global human rights frameworks and maintains zero tolerance toward modern slavery and exploitation.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.8 Human Dignity</h4>
<p>All individuals are treated with dignity and respect. Abusive or humiliating behavior is treated as a serious violation. Confidential reporting channels are available with non-retaliation assurance.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.9 Occupational Health and Safety</h4>
<p>Comprehensive safety measures, emergency readiness, women’s safety, and accessibility support are maintained across workplaces.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.10 Data Privacy</h4>
<p>Personal data of employees and stakeholders is protected through strong governance practices and lawful processing standards.</p>
</div>
 
<div>
<h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">3.11 Working Conditions & Living Wages</h4>
<p>The Firm complies with labour laws regarding working conditions and ensures fair wages meeting or exceeding legal minimum standards.</p>
</div>
 
</div>
 
<h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Communication of Policies</h3>
<p class="mb-8 text-lg leading-relaxed">

Human rights policies are communicated transparently to stakeholders. Employees are informed at onboarding and through periodic reminders. Policies are available on the internal HRMS portal for access by all employees.
</p>
 
<h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Risk Assessment and Due Diligence</h3>
<p class="mb-8 text-lg leading-relaxed">

RiskMan performs regular human rights risk assessments and due diligence across operations to identify potential impacts and implement preventive and corrective measures.
</p>
 
<h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Grievance Redressal Mechanism</h3>
 
<ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
<li>Concerns may be reported at grievance@riskman.in</li>
<li>All complaints are handled confidentially</li>
<li>Acknowledgment within 3 working days</li>
<li>Resolution target within 15 working days</li>
<li>Unresolved matters escalated to Managing Partners</li>
<li>Strict prohibition of retaliation</li>
</ul>

`

},


 
    // {
    //     id: 'human-rights',
    //     title: "Human Rights Policy",
    //     category: "HR",
    //     icon: Users,
    //     filePath: All_Policies.existing.humanRightPolicy,
    //     filename: "Human_Rights_Policy.pdf",
    //     summary: "Respecting and promoting human rights in our operations.",
    //     content: `
    //   <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">Human Rights Policy</h3>
    //   <p class="mb-6 text-lg leading-relaxed">RiskMan Consulting is committed to respecting and promoting human rights throughout all our operations and business relationships.</p>
      
    //   <div class="mb-8 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 rounded">
    //     <p class="text-lg">For detailed human rights commitments and procedures, please refer to the complete policy document.</p>
    //   </div>
    // `
    // }
];

export const categories = ["All", "Core", "Compliance", "Security", "HR"];