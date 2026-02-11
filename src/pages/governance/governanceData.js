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
    FileKey
} from 'lucide-react';
import All_Policies from "../../assets/policies_file"
import { existingPolicies } from './../../assets/policies_file/index';
export const policies = [
    {
        id: 'corporate-governance',
        title: "Corporate Governance Policy",
        category: "Core",
        icon: Scale,
        filePath: All_Policies.new.corporateGovernancePolicy,
        filename: "Corporate_Governance_Policy.docx",
        summary: "Establishing a comprehensive, structured, and enforceable governance framework.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Corporate Governance Policy (“Policy”) is to establish a comprehensive, structured, and enforceable governance framework for RiskMan Consulting LLP (“RiskMan” or “the Firm”). This Policy ensures effective leadership, clear accountability, and ethical conduct.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-6 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP, including employees, partners, consultants, and third-party stakeholders.</p>

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
      <p class="mb-6 text-lg leading-relaxed">Material decisions relating to strategy, finance, client acceptance, and risk exposure shall be taken in accordance with mutual discussions among the partners and senior management.</p>

      <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Ethical Governance</h3>
      <p class="mb-6 text-lg leading-relaxed">The Firm adopts a zero-tolerance approach towards unethical or unlawful conduct, reinforcing strict adherence to the Code of Conduct and Code of Ethics.</p>

      <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Risk and Compliance Oversight</h3>
      <p class="mb-6 text-lg leading-relaxed">The Partners ensure material risks are identified, assessed, and mitigated, and that compliance with laws and standards is monitored and addressed.</p>

      <h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Transparency and Disclosure</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan maintains transparency in governance through public disclosure of principles and clear internal communication.</p>

      <h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Monitoring and Performance</h3>
      <p class="mb-6 text-lg leading-relaxed">The effectiveness of the governance framework is reviewed periodically by the Partners to identify gaps and implement corrective actions.</p>

      <h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Training and Awareness</h3>
      <p class="mb-6 text-lg leading-relaxed">Personnel are made aware of this Policy through induction, periodic formal communications, and training initiatives.</p>
    `
    },
    {
        id: 'code-of-ethics',
        title: "Code of Ethics",
        category: "Core",
        icon: BookOpen,
        filePath: All_Policies.new.codeOfEthics,
        filename: "Code_of_Ethics.docx",
        summary: "Defining the ethical principles, values, and standards of conduct.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Code of Ethics (“Code”) is to define the ethical principles, values, and standards of conduct that guide all professional and business activities of RiskMan Consulting LLP. This Code aims to establish a common ethical framework, promote integrity, and protect the interests of all stakeholders.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Core Ethical Principles</h3>
      <div class="grid gap-6 md:grid-cols-2 mb-8">
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Integrity</strong>
          <span class="text-gray-600 dark:text-gray-300">Act honestly, fairly, and transparently in all professional and business dealings.</span>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Objectivity</strong>
          <span class="text-gray-600 dark:text-gray-300">Exercise professional judgment free from bias, conflict of interest, or undue influence.</span>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Competence</strong>
          <span class="text-gray-600 dark:text-gray-300">Maintain appropriate professional knowledge and skill, perform duties diligently.</span>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Confidentiality</strong>
          <span class="text-gray-600 dark:text-gray-300">Protect confidential and proprietary information.</span>
        </div>
      </div>
    `
    },
    {
        id: 'risk-mgmt',
        title: "Risk Management Policy",
        category: "Core",
        icon: Activity,
        filePath: All_Policies.new.riskManagementPolicy,
        filename: "Risk_Management_Policy.docx",
        summary: "Framework for identifying, assessing, and mitigating risks.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Risk Management Policy is to establish a structured and proportionate framework through which RiskMan Consulting LLP identifies, evaluates, and manages risks arising from its professional services, client engagements, people, operations, and reputation.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Risk Management Approach</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan recognises that primary risks arise from judgment, advice, people, and reputation. The Firm adopts a principles-based, engagement-centric, and governance-driven approach to risk management.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Key Risk Areas</h3>
      <ul class="list-none space-y-4 mb-8">
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Engagement and Client Risk</strong> Client integrity, scope, and expectations.</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Professional Judgment and Quality Risk</strong> Flawed judgment, supervision, or competence.</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Independence and Conflict Risk</strong> Conflicts of interest and objectivity.</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Compliance and Regulatory Risk</strong> Non-compliance with laws and standards.</li>
      </ul>
    `
    },
    {
        id: 'privacy',
        title: "Data Privacy Policy",
        category: "Security",
        icon: FileKey,
        filePath: All_Policies.new.dataPrivacyPolicy,
        filename: "Data_Privacy_Policy.docx",
        summary: "Protecting personal data and ensuring privacy compliance.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Information Security & Data Privacy Policy is to establish a unified and structured framework for safeguarding information assets and personal data handled by RiskMan Consulting LLP.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Data Privacy Principles</h3>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
        <li>Information and personal data shall be protected against unauthorised access.</li>
        <li>Personal data shall be processed lawfully, fairly, and transparently.</li>
        <li>Data shall be collected only for legitimate and specified purposes.</li>
        <li>Access to information shall be restricted on a need-to-know basis.</li>
      </ul>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Information Security Controls</h3>
      <p class="mb-6 text-lg leading-relaxed">The Firm shall implement reasonable technical and organisational measures including role-based access controls, secure configuration, malware protection, and secure storage/transmission of sensitive information.</p>
    `
    },
    {
        id: 'qa',
        title: "Quality Assurance & Independence Policy",
        category: "Operations",
        icon: CheckCircle,
        filePath: All_Policies.new.qualityAssurancePolicy,
        filename: "Quality_Assurance_Policy.docx",
        summary: "Maintaining high standards of quality and independence in all our services.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Quality Assurance & Independence Policy (“Policy”) is to establish a robust framework to ensure:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Consistent delivery of high-quality professional services</li>
        <li>Maintenance of independence, objectivity, and professional judgment across all engagements</li>
      </ul>
      <p class="mb-6 text-lg leading-relaxed">This Policy reinforces the Firm’s commitment to professional excellence, ethical conduct, and compliance with applicable professional standards and laws & regulations.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-6 text-lg leading-relaxed">This policy applies to all individuals and entities associated with RiskMan Consulting LLP. It covers all employees, including those who are permanent, contractual, or interns, as well as partners, consultants, and associates who are professionally engaged with the Firm. Additionally, the policy extends to clients, suppliers, vendors, and any other third-party stakeholders who interact with or are connected to the operations and business activities of RiskMan in any capacity.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Quality Approach</h3>
      <p class="mb-4 text-lg leading-relaxed">RiskMan is committed to delivering services that:</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
        <li>Meet or exceed client expectations</li>
        <li>Comply with applicable laws, regulations, and conform to professional standards & practices</li>
        <li>Uphold the Firm’s reputation for integrity, competence, and reliability</li>
      </ul>
      <p class="mb-6 text-lg italic text-brandPrimary dark:text-brandAccent">Quality is viewed as a collective responsibility and an integral part of all activities of the Firm.</p>

      <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Quality Governance Structure</h3>
      <div class="space-y-6 mb-8 text-lg">
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.1 Oversight by Partners</h4>
          <p>The Partners have ultimate responsibility for setting quality objectives, approving frameworks, overseeing adherence, and advising on improvement.</p>
        </div>
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.2 Management Responsibility</h4>
          <p>Senior management is responsible for implementing quality processes, monitoring performance across engagements, and escalating significant issues.</p>
        </div>
      </div>

      <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Engagement Acceptance and Planning</h3>
      <p class="mb-4 text-lg leading-relaxed">Quality considerations shall be embedded at the outset of each engagement through:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Assessment of client requirements and expectations</li>
        <li>Evaluation of the Firm’s competence and capacity to deliver</li>
        <li>Assignment of appropriately skilled and experienced personnel</li>
        <li>Establishment of clear engagement objectives, scope, and deliverables</li>
      </ul>

      <h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Engagement Execution and Supervision</h3>
      <p class="mb-6 text-lg leading-relaxed">All engagements shall be executed in accordance with approved methodologies, applicable professional standards, and agreed contractual terms. Appropriate supervision and review shall be maintained throughout the engagement lifecycle.</p>

      <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Quality Review and Assurance</h3>
      <p class="mb-4 text-lg leading-relaxed">The Firm may conduct quality reviews, including:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Internal reviews of selected engagements</li>
        <li>Peer or Partner reviews for high-risk or complex assignments</li>
        <li>Post-engagement evaluations to identify lessons learned</li>
      </ul>

      <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Independence and Objectivity</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan is committed into maintaining independence in letter and spirit. All personnel shall act objectively, avoid situations that compromise judgment, and comply with independence requirements under applicable standards.</p>

      <h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Independence Safeguards</h3>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Deep-testing of Conflict of interest checks</li>
        <li>Separation of teams and responsibilities</li>
        <li>Review by personnel independent of the assignment</li>
        <li>Restrictions on financial or personal relationships</li>
        <li>Avoidance of gifts from clients</li>
      </ul>

      <h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Non-Compliance</h3>
      <p class="mb-6 text-lg leading-relaxed">Any actual or suspected non-compliance shall be reported promptly and assessed to determine the root cause and appropriate corrective action(s).</p>

      <h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Documentation</h3>
      <p class="mb-6 text-lg leading-relaxed">Quality assurance and independence-related activities shall be appropriately documented to support transparency, accountability, and future reference.</p>

      <h3 id="section-12" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">12. Training and Development</h3>
      <p class="mb-6 text-lg leading-relaxed">The Firm shall promote quality and independence awareness through induction training and ongoing development. Personnel shall maintain and improve competence appropriate to their roles.</p>
    `
    },
    {
        id: 'client-acceptance',
        title: "Client Acceptance Policy",
        category: "Operations",
        icon: Handshake,
        filePath: All_Policies.new.clientAcceptancePolicy,
        filename: "Client_Acceptance_Policy.docx",
        summary: "Guidelines for accepting new clients and engagements.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Client Acceptance & Continuance Policy (“Policy”) is to establish a structured and risk-based framework for:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Evaluating prospective clients prior to engagement</li>
        <li>Periodically reassessing existing client relationships</li>
      </ul>
      <p class="mb-6 text-lg leading-relaxed">To ensure that RiskMan Consulting LLP (“RiskMan” or “the Firm”) undertakes engagements that are aligned with its ethical standards, professional capabilities, risk appetite, and legal & regulatory obligations.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Scope</h3>
      <p class="mb-6 text-lg leading-relaxed">This policy applies to all individuals employees and entities associated with RiskMan Consulting LLP. It covers all employees, including those who are permanent, contractual, or interns, as well as partners, consultants, and associates who are professionally engaged with the Firm. Additionally, the applicability of the policy extends to clients, suppliers, vendors, and any other third-party stakeholders who interact with or are connected associated to the operations and business activities of RiskMan in any capacity.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Client Acceptance Approach</h3>
      <p class="mb-4 text-lg leading-relaxed">RiskMan adopts a disciplined and principled approach to client acceptance and continuance. The Firm shall only undertake engagements where:</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
        <li>The client’s integrity ethical standards and business practices are prima facie consistent with the Firm’s ethical standards.</li>
        <li>The Firm has the competence, capacity, and resources to timely deliver the engagement with quality.</li>
        <li>Independence and objectivity can be maintained.</li>
        <li>Engagement-related risks are within the Firm’s approved risk appetite.</li>
      </ul>
      <p class="mb-6 text-lg font-bold text-red-600 dark:text-red-400">Revenue considerations shall never override ethical, legal, or professional concerns requirements.</p>

      <h3 id="section-4" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">4. Client Acceptance Governance</h3>
      <div class="space-y-6 mb-8 text-lg">
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.1 Oversight by Partners</h4>
          <p>The Partner(s) has/have ultimate responsibility for approving the client acceptance and continuance framework and reviewing high-risk or sensitive client relationships.</p>
        </div>
        <div>
          <h4 class="font-bold text-brandPrimary dark:text-brandAccent mb-2">4.2 Management and Engagement Leadership</h4>
          <p>Engagement leaders and senior management are responsible for conducting client acceptance and continuance assessments and escalating matters requiring Partner approval, if need be.</p>
        </div>
      </div>

      <h3 id="section-5" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">5. Client Acceptance Assessment</h3>
      <p class="mb-4 text-lg leading-relaxed">Prior to accepting a new client or engagement, the Firm shall assess at a minimum the following:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>The client’s business activities and ownership structure.</li>
        <li>The client’s reputation, integrity, and ethical standing.</li>
        <li>Regulatory, legal, or compliance risks associated with the client.</li>
        <li>Potential conflicts of interest or independence concerns issues.</li>
        <li>The Firm’s competence, capacity, and resource availability.</li>
        <li>Financial and commercial considerations, including credit risk.</li>
      </ul>

      <h3 id="section-6" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">6. Due Diligence and Background Checks</h3>
      <p class="mb-4 text-lg leading-relaxed">Where appropriate, the Firm may perform due diligence activities, which may include:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Publicly available background checks.</li>
        <li>Sanctions, watchlist, or adverse media screening.</li>
        <li>Regulatory or legal history reviews.</li>
        <li>Verification of beneficial ownership and key management.</li>
        <li>Payment track record in the market.</li>
      </ul>
      <p class="text-lg italic">The depth intensity of due diligence shall be commensurate with the assessed risks.</p>

      <h3 id="section-7" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">7. Risk Assessment and Approval</h3>
      <p class="mb-6 text-lg leading-relaxed">Client acceptance decisions shall be approved by the Partner(s) and be documented. High-risk clients or engagements shall require Enhanced more detailed assessment and Explicit Partner approval prior to acceptance.</p>

      <h3 id="section-8" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">8. Engagement Terms and Clarity</h3>
      <p class="mb-4 text-lg leading-relaxed">Prior to commencement of an engagement:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>The scope, objectives, deliverables, and responsibilities shall be clearly defined in the Engagement Letter (EL).</li>
        <li>Terms of engagement shall be formally agreed and documented.</li>
      </ul>
      <p class="text-lg">Ambiguous or inappropriate engagement terms shall not be accepted.</p>

      <h3 id="section-9" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">9. Client Continuance Review</h3>
      <p class="mb-4 text-lg leading-relaxed">Existing client relationships shall be periodically (say, on an annual basis) reassessed to determine whether:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>The client continues to meet the Firm’s acceptance criteria.</li>
        <li>New risks or concerns have emerged.</li>
        <li>Independence and objectivity can be continued to be maintained.</li>
      </ul>
      <p class="mb-4 text-lg font-bold">Continuance reviews may also be triggered by:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Significant changes in the client’s business or ownership pattern.</li>
        <li>Regulatory or reputational significant event(s).</li>
        <li>Concerns regarding client conduct or cooperation.</li>
      </ul>

      <h3 id="section-10" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">10. Declining or Discontinuing Engagements</h3>
      <p class="mb-4 text-lg leading-relaxed">The Firm shall decline or discontinue engagements where:</p>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-lg">
        <li>Unacceptable ethical, legal, or reputational risks issues are identified.</li>
        <li>Independence or objectivity cannot be adequately safeguarded.</li>
        <li>The client fails to cooperate comply with professional or contractual requirements.</li>
      </ul>

      <h3 id="section-11" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">11. Client Communication</h3>
      <p class="mb-6 text-lg leading-relaxed">Where appropriate, decisions relating to engagement acceptance, modification of scope, or engagement discontinuance shall be communicated to the client in a professional and transparent manner, consistent with contractual, regulatory and legal obligations.</p>
    `
    },
    {
        id: 'compliance',
        title: "Compliance Management Policy",
        category: "Compliance",
        icon: Gavel,
        filePath: All_Policies.new.complianceManagementPolicy,
        filename: "Compliance_Management_Policy.docx",
        summary: "Ensuring adherence to all applicable laws and regulations.",
        content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Compliance Management Policy is to establish a structured and effective framework for ensuring that RiskMan Consulting LLP complies with all applicable laws, regulations, professional standards, and internal policies.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Compliance Approach</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan adopts a proactive, preventive, and risk-based approach. Compliance includes adherence to laws, professional standards, contractual obligations, and internal policies.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Risk Assessment</h3>
      <p class="mb-6 text-lg leading-relaxed">Compliance risks shall be assessed as part of the Firm’s overall risk management process, taking into account the nature of activities, regulatory expectations, and emerging developments.</p>
    `
    },
    { title: "Whistleblower Policy", category: "Compliance", icon: Megaphone, filename: "Whistleblower_Policy.docx", summary: "Mechanism for reporting genuine concerns or grievances.", id: 'whistleblower',filePath:All_Policies.existing.whistleblowerPolicy },
    { title: "Information Security Policy", category: "Security", icon: Lock, filename: "Information_Security_Policy.docx", summary: "Ensuring the confidentiality, integrity, and availability of information.", id: 'infosec',filePath:All_Policies.existing.informationSecurityPolicy },
    { title: "Health and Safety", category: "HR", icon: Heart, filename: "Health_and_Safety_Policy.docx", summary: "Commitment to providing a safe and healthy working environment.", id: 'health-safety',filePath:All_Policies.existing.healthAndSafety },
    { title: "Anti-Money Laundering Policy", category: "Compliance", icon: Banknote, filename: "Anti_Money_Laundering_Policy.docx", summary: "Preventing the use of our services for money laundering activities.", id: 'aml',filePath:All_Policies.existing.antiMoneyLaundering },
    { title: "Human Rights Policy", category: "HR", icon: Users, filename: "Human_Rights_Policy.docx", summary: "Respecting and promoting human rights in our operations.", id: 'human-rights',filePath:All_Policies.existing.humanRightPolicy },
    { title: "Anti-Bribery & Corruption", category: "Compliance", icon: Shield, filename: "Anti_Bribery_Corruption_Policy.docx", summary: "Zero tolerance approach towards bribery and corruption.", id: 'anti-bribery',filePath:All_Policies.existing.antiBriberyAndAntiCorruption },
    { title: "POSH Policy", category: "HR", icon: AlertTriangle, filename: "POSH_Policy.docx", summary: "Prevention of Sexual Harassment at the workplace.", id: 'posh',filePath:All_Policies.existing.posh },
    { title: "Code of Conduct", category: "HR", icon: Briefcase, filename: "Code_of_Conduct.docx", summary: "Expected behavior and conduct for all employees and partners.", id: 'code-conduct',filePath:All_Policies.existing.codeOfConduct },
];

export const categories = ["All", "Core", "Compliance", "Security", "Operations", "HR"];
