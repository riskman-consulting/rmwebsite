import {
  ClipboardCheck,
  ShieldCheck,
  FileText,
  ListChecks,
  Layers,
  AlertTriangle,
  Target,
  Gauge,
  BarChart3,
  CalendarClock,
  Workflow,
  ClipboardList,
  FolderOpen,
  Search,
  Bell,
  Building2,
  LineChart,
  Repeat,
  History,
  UserCheck,
  Database,
  BookOpen,
  Filter,
  TrendingUp,
  Network,
  ShieldAlert,
  FileSpreadsheet,
  FileCheck,
  FileSearch,
  Lock,
  Link2,
  Flag,
  Clock,
  Stamp,
  SlidersHorizontal,
  Globe,
  MessagesSquare,
  Send,
  CalendarCheck,
} from "lucide-react";

// Product screenshots. Only the modules with artwork carry a `screens` array —
// `ModuleScreens` is skipped entirely for the ones that do not, so a module
// without a screenshot still renders as a finished page.
import rbiaPlanOverview from "../../assets/products/riskman-grc/rbia/project-dashboard.png";
import controlTestingProject from "../../assets/products/riskman-grc/control-testing/project-dashboard.png";
import ermOverview from "../../assets/products/riskman-grc/erm/dashboard-01-overview.png";
import ermRiskProfile from "../../assets/products/riskman-grc/erm/dashboard-02-risk-profile.png";
import ermDistribution from "../../assets/products/riskman-grc/erm/dashboard-03-distribution.png";
import ermOverdue from "../../assets/products/riskman-grc/erm/dashboard-04-overdue.png";
import ermOwners from "../../assets/products/riskman-grc/erm/dashboard-05-owners.png";
import atrAnalytics from "../../assets/products/riskman-grc/atr/dashboard-01-analytics.png";
import atrOverdue from "../../assets/products/riskman-grc/atr/dashboard-02-overdue-summary.png";
import policyAcknowledgements from "../../assets/products/riskman-grc/policy-sop/dashboard-acknowledgements.png";

export const PRODUCTS_BASE_PATH = "/products";

/**
 * RiskMan's product catalogue.
 *
 * One product for now — RiskMan GRC — with the modules it ships. This array
 * drives the Products mega menu, the product sub-nav, the overview page and
 * every module page, so adding a module only has to happen here (plus a thin
 * route file and a <Route> in App.jsx).
 *
 * Each module carries its own documentation set: the problem it addresses,
 * capabilities, the lifecycle it runs, the artefacts it produces, the
 * governance references it is built around, the roles that use it and FAQs.
 * `components/ModulePage.jsx` renders all of it, so the module pages stay
 * in step and a copy change only happens here.
 *
 * NOTE FOR REVIEW: the statutory and framework references below (Companies Act
 * 2013, SEBI LODR, COSO, ISO, ICAI guidance) describe the governance context
 * each module is designed around — they are not a claim of certification.
 * Product and compliance owners should confirm both the feature claims and the
 * section references before this goes live.
 */
export const PRODUCTS = [
  {
    slug: "riskman-grc",
    path: `${PRODUCTS_BASE_PATH}/riskman-grc`,
    name: "RiskMan GRC",
    shortName: "RiskMan GRC",
    seoTitle: "RiskMan GRC: Governance, Risk and Compliance Software",
    tagline: "One connected system for governance, risk and compliance, with AI-enabled workflows",
    summary:
      "Connect policies, procedures, risks and controls on a single platform across every entity and business process. Evidence is captured as the work is done, with a complete trail of activity, while AI-enabled workflows generate test plans, surface insights and feed dashboards configured for your organisation.",
    modules: [
      /* ---------------------------------------------------------------- */
      /* 1. Enterprise Risk Management                                     */
      /* ---------------------------------------------------------------- */
      {
        slug: "enterprise-risk-management",
        name: "Enterprise Risk Management",
        navLabel: "Enterprise Risk Management",
        shortName: "ERM",
        seoTitle: "Enterprise Risk Management (ERM) Software",
        icon: Layers,
        summary:
          "A live risk register with named owners, scores based on your own guideline, approval for every change and periodic owner confirmation.",
        tagline: "A single risk register, scored consistently across the organisation and kept current throughout the year",
        description:
          "Publish your risk scoring guideline, build the register, and let the system calculate inherent and residual scores. Risks become active only after approval, every subsequent change is approved before it takes effect, and owners confirm their risks on a schedule you define.",
        overview:
          "Many risk registers are updated only in preparation for a committee meeting. In RiskMan GRC, the register remains live. Your organisation publishes a scoring guideline that sets out its categories and its impact, probability and control scales, and every risk is scored against it. The inherent score is impact multiplied by probability, and the residual score reflects the controls in place. A new risk becomes active only after the Business HOD and the Audit Manager approve it. Thereafter, every addition, change or deletion is processed through a change request, and risk and control owners confirm their risks each period.",
        atAGlance: [
          { label: "Built for", value: "Risk owners, business heads and audit teams" },
          { label: "Replaces", value: "Register workbooks and quarterly presentations" },
          { label: "Cycle", value: "Continuous, with periodic owner confirmation" },
          { label: "Ends with", value: "A register that supports reporting on any day" },
        ],
        challenges: [
          {
            title: "Registers updated only before meetings",
            text: "Risks are reviewed in the fortnight before the committee meets, so the register reflects a single point in time rather than the current position.",
          },
          {
            title: "Inconsistent scoring across functions",
            text: "Without a single published scale, a 'high' rating in operations and a 'high' rating in treasury do not carry the same meaning, and heat maps cannot be compared across the organisation.",
          },
          {
            title: "Unapproved changes to ratings",
            text: "Ratings are edited directly in the workbook, with no record of who made the change, when it was made or why.",
          },
          {
            title: "Untracked mitigation deadlines",
            text: "Plans have an owner and a due date, but no follow-up mechanism, so overdue actions surface only when someone enquires.",
          },
        ],
        outcomes: [
          "A single published scoring guideline applied to every risk",
          "Inherent and residual scores calculated automatically",
          "New risks activated only after HOD and Audit Manager approval",
          "Every change to an active risk approved before it takes effect",
          "Risk owners confirm their risks every period",
          "Automated reminders for overdue controls and plans",
        ],
        capabilities: [
          {
            icon: BookOpen,
            title: "Risk scoring guideline",
            text: "Define your risk categories, impact and probability scales, control scale and residual rating bands, or extract them from an existing Excel, Word or PDF file. Users acknowledge each published version.",
            points: [
              "Your own categories and scale levels",
              "Previous versions retained when a new version is published",
            ],
          },
          {
            icon: Database,
            title: "Risk register",
            text: "Import risks in bulk from the Excel template, with a mapping and validation step, or add them individually. Each risk records its entity, sub-entity, department, category, risk event, owner and associated controls.",
            points: [
              "Import history retained for every upload",
              "A single register, filtered by entity and department",
            ],
          },
          {
            icon: Gauge,
            title: "Automated risk scoring",
            text: "The inherent score is impact multiplied by probability. The residual score takes the controls into account, and the rating is derived from the bands in your guideline.",
            points: [
              "Inherent and residual scores displayed side by side",
              "Controls scored individually or collectively",
            ],
          },
          {
            icon: Stamp,
            title: "Approval before activation",
            text: "A new risk is routed to the Business HOD and then to the Audit Manager. Either approver can return it with a reason. The risk becomes active only after final approval.",
            points: ["Up to five approval stages, configured by your administrator"],
          },
          {
            icon: Repeat,
            title: "Controlled change requests",
            text: "An active risk cannot be edited directly. Any addition, change or deletion raises a change request for approval by the process owner and the Audit Manager, with a before-and-after comparison.",
          },
          {
            icon: Target,
            title: "Controls and mitigation plans",
            text: "Every control has an owner, a status and key dates. Each mitigation plan has an owner and a due date, and owners upload evidence as work progresses. A completed plan is converted into a control.",
          },
          {
            icon: CalendarClock,
            title: "Periodic confirmation",
            text: "On a schedule you choose, whether monthly, quarterly, half-yearly, yearly or on custom dates, risk and control owners confirm their risks or propose changes. The HOD and Audit Manager approve the confirmations, and late confirmations are flagged.",
          },
          {
            icon: Bell,
            title: "Reminders and escalation",
            text: "Owners receive reminders before, on and after each due date, with escalation for items that remain open. Pending approvals and guideline acknowledgements are also followed up.",
          },
          {
            icon: BarChart3,
            title: "Dashboards, reports and audit trail",
            text: "The dashboard presents totals, the heat map, distribution by department and category, top risks, overdue items and owner workload. Export the register to Excel, PDF or CSV, run the standard reports, and review every field change in the audit trail.",
          },
        ],
        screens: [
          {
            image: ermOverview,
            tab: "Overview",
            alt: "RiskMan GRC ERM dashboard header with department, category, status and owner filters and tiles for total risks, active risks and risks awaiting acknowledgement",
            title: "Register overview",
            caption:
              "Total risks, active risks and risks awaiting acknowledgement, with filters for department, category, status and owner.",
          },
          {
            image: ermRiskProfile,
            tab: "Risk profile",
            alt: "Risks by department and category table alongside an impact versus probability risk heat map with low, medium, high and critical bands",
            title: "Risk profile",
            caption:
              "Active risks by department and category alongside the impact and probability heat map, both drawn from the same register.",
          },
          {
            image: ermDistribution,
            tab: "Distribution",
            alt: "Department-wise and category-wise risk distribution bar charts above a mitigation plan timeline chart across the year",
            title: "Risk distribution and mitigation timeline",
            caption:
              "Risks by department and by category, with every mitigation due date across the year shown below.",
          },
          {
            image: ermOverdue,
            tab: "Overdue",
            alt: "Overdue mitigation plans table listing control, owner, due date and ageing band, beside a periodic confirmation panel",
            title: "Overdue items",
            caption:
              "Mitigation plans past their due date, each with its control, owner, due date and ageing, alongside the status of periodic confirmation.",
          },
          {
            image: ermOwners,
            tab: "Owners",
            alt: "Risk owner-wise and control owner-wise distribution bar charts showing active risks and controls per owner",
            title: "Accountability by owner",
            caption:
              "Active risks per risk owner and controls per control owner, highlighting where responsibility is concentrated in too few individuals.",
          },
        ],
        lifecycle: [
          {
            title: "Publish the scoring guideline",
            text: "The Audit Manager publishes the categories, scales and rating bands. Users acknowledge each published version.",
          },
          {
            title: "Build the register",
            text: "Import risks from the Excel template or add them individually, each with an entity, department, category, owner and controls.",
          },
          {
            title: "Calculate scores",
            text: "The inherent score is impact multiplied by probability. The residual score reflects the controls, and the rating is derived from the bands.",
          },
          {
            title: "Approve and activate",
            text: "Each risk is approved by the Business HOD and then the Audit Manager. It becomes active only after final approval.",
          },
          {
            title: "Manage changes",
            text: "Once a risk is active, every addition, change or deletion is raised as a change request and approved before it takes effect.",
          },
          {
            title: "Track controls and plans",
            text: "Owners upload evidence against due dates. Reminders and escalations are issued, and a completed plan is converted into a control.",
          },
          {
            title: "Confirm each period",
            text: "Risk and control owners confirm or revise their risks on the defined schedule, and the HOD and Audit Manager approve them.",
          },
          {
            title: "Report",
            text: "Dashboards, the heat map and reports draw directly from the register, supported by exports and a complete audit trail.",
          },
        ],
        deliverables: [
          "Published risk scoring guideline with user acknowledgements",
          "Risk register by entity, department and category",
          "Inherent and residual scores for every risk",
          "Approval and change request history",
          "Register of overdue controls and mitigation plans",
          "Periodic owner confirmation record",
          "Register exports (Excel, PDF, CSV) and standard reports",
          "Field-level audit trail",
        ],
        standards: [
          {
            name: "COSO ERM (2017)",
            note: "Provides a register, scoring method and review cycle that can be aligned with the framework's components.",
          },
          {
            name: "ISO 31000:2018",
            note: "Supports identification, assessment, treatment, monitoring and reporting, with a complete recorded trail.",
          },
          {
            name: "Companies Act 2013, Sec 134(3)(n)",
            note: "Supports the risk management statement in the Board's report.",
          },
          {
            name: "Companies Act 2013, Sec 177(4)",
            note: "Supports the Audit Committee's evaluation of risk management systems.",
          },
          {
            name: "SEBI LODR, Reg 21",
            note: "Supports reporting to the Risk Management Committee of listed entities.",
          },
        ],
        roles: [
          {
            role: "Audit Manager",
            text: "Publishes the scoring guideline, provides final approval for risks and changes, and approves periodic confirmations.",
          },
          {
            role: "Staff Auditor",
            text: "Builds and maintains the register, and corrects risks that are returned.",
          },
          {
            role: "Business HOD and process owners",
            text: "Approve new risks and change requests for their area, and approve periodic confirmations.",
          },
          {
            role: "Risk owners and control owners",
            text: "Keep their risks, controls and plans up to date, upload evidence and confirm their risks each period.",
          },
        ],
        faqs: [
          {
            q: "Can we retain our existing scales and categories?",
            a: "Yes. The scoring guideline holds your own categories, impact and probability scales, control scale and rating bands. You can enter them manually or extract them from an existing Excel, Word or PDF document.",
          },
          {
            q: "How are risk scores calculated?",
            a: "The inherent score is impact multiplied by probability. The residual score takes the controls into account, and the residual rating is derived from the bands in your published guideline.",
          },
          {
            q: "Who can change a risk once it is active?",
            a: "An active risk cannot be edited directly. Any addition, change or deletion is raised as a change request, approved by the process owner and the Audit Manager, and applied only after approval. Both the original and revised versions are retained.",
          },
          {
            q: "How often do owners review their risks?",
            a: "At the frequency your organisation defines: monthly, quarterly, half-yearly, yearly or on custom dates. Owners confirm each risk or propose a change, and late confirmations are flagged.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      /* 2. Risk Based Internal Audit                                      */
      /* ---------------------------------------------------------------- */
      {
        slug: "risk-based-internal-audit",
        name: "Risk Based Internal Audit",
        navLabel: "Risk Based Internal Audit",
        shortName: "RBIA",
        seoTitle: "Risk Based Internal Audit (RBIA) Software",
        icon: ClipboardCheck,
        summary:
          "Score the audit universe on risk, obtain CAE approval for the annual plan, and execute each audit from request to final report.",
        tagline: "A risk-based audit plan, approved by the CAE and carried through to the final report",
        description:
          "Build the audit universe, score each area against weighted risk factors, and convert the results into an annual plan for CAE approval. The approved plan automatically becomes an audit project, and each process within it moves through requests, testing, management response and the final report.",
        overview:
          "An internal audit plan must demonstrate why each area has been included. In RiskMan GRC, your team defines auditable areas by category, process and sub-process, scores them against risk factors weighted by your organisation, and can optionally take account of the assurance already provided by other functions. The score determines each area's risk band and audit frequency. The Audit Manager submits the plan to the Chief Audit Executive (CAE). Once approved, the plan is locked and an audit project is created, with every area set up as a process. The team then issues document requests, performs testing, completes reviews and reports, process by process.",
        atAGlance: [
          { label: "Built for", value: "Heads of Internal Audit and internal audit teams" },
          { label: "Replaces", value: "Planning workbooks and shared-drive files" },
          { label: "Cycle", value: "Annual plan, executed process by process" },
          { label: "Ends with", value: "A CAE-approved final report for each area" },
        ],
        challenges: [
          {
            title: "Plans carried forward by default",
            text: "Areas are included because they were audited previously, not because their risk warrants it. There is no documented basis for including one area and excluding another.",
          },
          {
            title: "Spreadsheet-based risk scoring",
            text: "Weights and scores change between file versions, and the rationale behind the ranking is lost when the person who built the workbook leaves.",
          },
          {
            title: "Informal plan approval",
            text: "The plan is agreed in a meeting or by email, leaving no reliable record of what was approved and when.",
          },
          {
            title: "Disconnect between plan and execution",
            text: "Once fieldwork begins, requests, workpapers and responses are scattered across folders, and the link to the approved plan is lost.",
          },
        ],
        outcomes: [
          "Every area scored against the same weighted risk factors",
          "Audit frequency determined by risk band rather than precedent",
          "A CAE-approved plan, with the approver and date on record",
          "Scores and ranking locked once the plan is approved",
          "An audit project created directly from the plan, with no duplicate setup",
          "Each area reported only after testing and responses are approved",
        ],
        capabilities: [
          {
            icon: Layers,
            title: "Audit universe",
            text: "Define auditable areas for each entity by category, process and sub-process. Start from the built-in library of ten categories, import from Excel, or populate the universe by uploading an RCM.",
            points: [
              "Business process, compliance, third party, IT, cyber, projects and more",
              "Inherent risk, control adequacy and control type recorded for each area",
            ],
          },
          {
            icon: Gauge,
            title: "Risk factor scoring",
            text: "Weight the risk factors to total 100% and score each area against them. Audit history, including the last audit date, previous rating and management concern, adjusts the result and assigns each area a band and a rank.",
            points: [
              "Bands: Critical, High, Medium, Low",
              "Weights configured for each entity",
            ],
          },
          {
            icon: ShieldCheck,
            title: "Assurance mapping (optional)",
            text: "Rate the coverage already provided by the first line, the second line and external providers. The ranking then shows where internal audit attention is still required.",
          },
          {
            icon: CalendarClock,
            title: "Frequency and annual plan",
            text: "Each band determines audit frequency, from every six months for Critical to every three years for Low. Areas due this year are added to the plan with an assigned quarter and hours.",
            points: [
              "Align the plan with your team's capacity",
              "Defer an area with a documented reason, or bring one forward",
            ],
          },
          {
            icon: Stamp,
            title: "CAE approval",
            text: "The Audit Manager submits the plan, and the CAE either approves it or returns it with a reason. Approval locks the scores, ranking and schedule.",
          },
          {
            icon: UserCheck,
            title: "Auditor assignment",
            text: "After approval, each area is assigned a lead auditor and a start date, and the auditor is notified. Reminders are sent for unassigned areas and when a start date arrives.",
          },
          {
            icon: ClipboardList,
            title: "Audit programme and requests",
            text: "For each process, the auditor prepares the audit programme, either by uploading it or by generating test steps, and assigns a client contact to each line. The Audit Manager approves the programme before the information request is sent to the auditee.",
          },
          {
            icon: ClipboardCheck,
            title: "Testing and review",
            text: "Auditors test design and operating effectiveness, document the workpaper and record the root cause. The Audit Manager reviews each line and the CAE approves the testing. Either reviewer can return it for rework.",
          },
          {
            icon: ShieldAlert,
            title: "Management response and reporting",
            text: "For each observation, the control owner records the management response, target date and responsible person. The process owner, auditor, Audit Manager and CAE approve it in sequence, after which the final report for the area is issued.",
            points: [
              "An auditee satisfaction survey opens with the report",
              "Failed items move to the Action Taken Report module",
            ],
          },
          {
            icon: FolderOpen,
            title: "Preliminary requests and audit drive",
            text: "Request early documents from the business before the audit programme is finalised, track outstanding items for each contact, and store every audit file in the project's dedicated drive.",
          },
          {
            icon: BarChart3,
            title: "Dashboard",
            text: "View the number of plans and areas, the universe by risk band, scheduled versus due areas, audits per quarter, the status of each audit and findings by severity.",
          },
        ],
        screens: [
          {
            image: rbiaPlanOverview,
            alt: "RiskMan GRC internal audit plan overview showing scored universe objects, risk profile by band, plan disposition and a risk heat map by quarter",
            title: "Approved plan overview",
            caption:
              "The plan overview follows the sequence in which the plan was built: universe, risk factors, scoring, annual plan and assignments. Below these, it shows the scored areas by band, the coverage for the year and the quarter assigned to each area, along with the plan's submitter and approver.",
          },
        ],
        lifecycle: [
          {
            title: "Set up the plan",
            text: "Select the group, entities and year, and decide whether to use assurance mapping.",
          },
          {
            title: "Build the universe",
            text: "Define auditable areas by category, process and sub-process, using the library, an Excel import or an RCM upload.",
          },
          {
            title: "Score against risk factors",
            text: "Weight the factors to total 100% and score each area. The score, adjusted for audit history, sets its band and rank.",
          },
          {
            title: "Map assurance (optional)",
            text: "Rate the coverage other functions already provide, so the ranking shows where internal audit is still needed.",
          },
          {
            title: "Build the annual plan",
            text: "The band sets audit frequency. Areas due this year receive a quarter and hours. Others can be deferred with a reason.",
          },
          {
            title: "Approve the plan",
            text: "The Audit Manager submits the plan, and the CAE approves or returns it. Approval locks the scores and schedule.",
          },
          {
            title: "Assign auditors",
            text: "The approved plan becomes one audit project, with each area as a process. Each area receives a lead auditor and a start date.",
          },
          {
            title: "Execute each process",
            text: "The audit programme is prepared and approved, the information request is sent to the auditee, and testing is reviewed by the Audit Manager and approved by the CAE.",
          },
          {
            title: "Respond and report",
            text: "Management responds to each observation, the response is approved in sequence, and the final report is issued. Failed items move to the Action Taken Report.",
          },
        ],
        flowLead:
          "Four phases, from building the plan to following up on findings. Each step shows who performs it and the record it produces.",
        flow: [
          {
            title: "Phase 1: Build the annual plan",
            text: "The Audit Manager builds the plan in a guided wizard. Progress is saved at each step, and the plan cannot be submitted until every step is complete.",
            steps: [
              {
                title: "Organisation setup",
                text: "Select the group, the entities and sub-entities in scope, the financial year and the scoring scale. At this stage, you also decide whether the plan will use assurance mapping.",
                who: "Audit Manager",
                result: "Plan scope and year",
              },
              {
                title: "Audit universe",
                text: "Define every auditable area for each entity at three levels: category, process and sub-process. Start from the built-in library of ten categories, import an Excel file, or populate the universe by uploading an RCM.",
                points: [
                  "Categories include business process, compliance, third party, projects and change, enterprise risk, application, infrastructure, data and cyber, emerging risk and location",
                  "Each area records its inherent risk, control adequacy, automation, control type and frequency",
                ],
                who: "Audit Manager",
                result: "Audit universe by entity",
              },
              {
                title: "Risk factors and weights",
                text: "Select the relevant risk factors from the library, grouped into four pillars, each with a defined 1, 3 or 5 scoring guide. Assign a weight to each factor. The weights for an entity must total 100%.",
                who: "Audit Manager",
                result: "Weighted risk framework",
              },
              {
                title: "Risk assessment",
                text: "Score every area against the selected factors. Audit history adjusts the score, based on when the area was last audited, its previous rating and any concern raised by management. Each area then receives a composite score, a band and a rank.",
                points: ["Bands: Critical, High, Medium, Low", "Every area receives an ID such as AU-007"],
                who: "Audit Manager",
                result: "Scored and ranked universe",
              },
              {
                title: "Assurance mapping (if selected)",
                text: "Weight the first line, second line, external providers and third line, and score the coverage each already provides for an area on a scale of 0 to 3. The ranking then reflects the assurance internal audit still needs to provide.",
                who: "Audit Manager",
                result: "Assurance map and adjusted ranking",
              },
              {
                title: "Audit frequency",
                text: "The band determines audit frequency: every 6 months for Critical, every year for High, every 2 years for Medium and every 3 years for Low. Each area receives its next due date, and the areas due this year are identified.",
                who: "Audit Manager",
                result: "Audit cycle and next due dates",
              },
              {
                title: "Annual audit plan",
                text: "Areas due this year are added to the plan. Each is assigned a quarter (Q1 to Q4, or allocated automatically) and audit hours, from which days and cost are calculated. Align the plan with your team's capacity, defer an area with a reason, or bring one forward.",
                who: "Audit Manager",
                result: "Draft annual plan",
              },
            ],
          },
          {
            title: "Phase 2: Approve and assign",
            text: "The plan is approved once, by the CAE, and that approval initiates the audit work.",
            steps: [
              {
                title: "Submit for CAE approval",
                text: "The Audit Manager submits the plan, which is validated first. The universe must not be empty, the weights must total 100%, all areas must be scored and the plan must contain at least one line.",
                who: "Audit Manager",
                result: "Plan pending approval",
              },
              {
                title: "CAE approves or returns",
                text: "The CAE approves the plan or returns it with a mandatory reason. On approval, the scores, weights, bands, ranking, quarters and hours are locked, and the decision is logged with the approver and date.",
                who: "CAE",
                result: "Approved, locked plan",
              },
              {
                title: "Audit project created",
                text: "The approved plan automatically becomes one audit project. Every area in the plan becomes a process within it, and the team is populated from the plan: the CAE, the Audit Manager and the assigned auditors.",
                who: "Automatic",
                result: "One audit project for the plan",
              },
              {
                title: "Assign lead auditors",
                text: "Each area is assigned a lead auditor and a planned start date, and the auditor is notified by email. Reminders are sent for unassigned areas, and to the auditor on the morning the start date arrives.",
                who: "Audit Manager",
                result: "Assigned areas with start dates",
              },
            ],
          },
          {
            title: "Phase 3: Execute each process",
            text: "Each process in the project moves through its own stages, so one area can be in testing while another is still awaiting documents.",
            steps: [
              {
                title: "Prepare the audit programme",
                text: "The Staff Auditor builds the audit programme for the process by uploading it from Excel, generating test procedures and the information request with AI, or entering them line by line. Each line is assigned a client contact. Early documents can be requested through a preliminary data request.",
                who: "Staff Auditor",
                result: "Draft audit programme and IDR",
              },
              {
                title: "Approve and release the IDR",
                text: "The Staff Auditor submits the programme to the Audit Manager, who approves it or returns it. On approval, the Information and Document Request (IDR) is released to the auditee.",
                who: "Audit Manager",
                result: "IDR released to the business",
              },
              {
                title: "Auditee uploads evidence",
                text: "The client contact uploads documents against each request from their own screens, and the audit team tracks received and pending items. All files are stored in the project's drive.",
                who: "Auditee / control owner",
                result: "Evidence on file",
              },
              {
                title: "Test and document the workpaper",
                text: "For each line, the auditor records the audit procedure, the design walkthrough and its conclusion, the population, sample size and method, the attributes tested, exceptions and the final conclusion. Annexures and evidence are attached to the workpaper.",
                who: "Staff Auditor",
                result: "Completed workpapers",
              },
              {
                title: "Audit Manager and CAE approve the testing",
                text: "The Audit Manager reviews the workpapers line by line, and the CAE then approves them. Either reviewer can return a line with comments. On CAE approval, a finding is raised for every failed line, classified by type and rated Low, Medium, High or Critical.",
                who: "Audit Manager, then CAE",
                result: "Approved testing and findings",
              },
            ],
          },
          {
            title: "Phase 4: Respond, report and follow up",
            text: "Findings are sent to management for a response, and the report is issued once that response is approved.",
            steps: [
              {
                title: "Management responds",
                text: "For each observation, the control owner records the management response, action plan, responsible person and target date, for both the immediate and the systemic remediation. The auditor's observation, risk, recommendation and root cause are displayed alongside.",
                who: "Control owner",
                result: "Management response submitted",
              },
              {
                title: "Response approved in sequence",
                text: "The response is reviewed by the process owner, then the Staff Auditor, the Audit Manager and finally the CAE. Any of them can return it for revision.",
                who: "Process owner, Staff Auditor, Audit Manager, CAE",
                result: "CAE-approved response",
              },
              {
                title: "Final report issued",
                text: "On CAE approval of the response, the final audit report for the area is generated as a PDF from the approved tests and responses. An area with no gaps is reported as soon as its testing is approved.",
                who: "Automatic, on CAE approval",
                result: "Final audit report",
              },
              {
                title: "Survey and follow-up",
                text: "An auditee satisfaction survey opens with the report. Failed items and their responses move to the Action Taken Report module, where each action is tracked to closure.",
                who: "Automatic",
                result: "Survey and ATR actions",
              },
            ],
          },
        ],
        deliverables: [
          "Audit universe by entity, category, process and sub-process",
          "Risk scores, bands and ranking for every area",
          "Assurance map (where used)",
          "Annual audit plan with quarters and hours",
          "Approval record with submitter, approver and date",
          "Approved audit programme and information requests",
          "Testing workpapers with Audit Manager review and CAE approval",
          "Final audit report for each area, with approved management responses",
        ],
        standards: [
          {
            name: "Companies Act 2013, Sec 138 and Rule 13",
            note: "Supports the internal audit plan and scope approved by the Audit Committee.",
          },
          {
            name: "Companies Act 2013, Sec 177",
            note: "Supports the Audit Committee's review of internal audit and its findings.",
          },
          {
            name: "SEBI LODR, Reg 18",
            note: "Supports the Audit Committee's oversight of internal audit for listed entities.",
          },
          {
            name: "ICAI Standards on Internal Audit",
            note: "Supports risk-based planning, documentation and reporting in line with the Standards.",
          },
          {
            name: "IIA International Professional Practices Framework",
            note: "Supports a risk-based plan and engagement work aligned with the Standards.",
          },
        ],
        roles: [
          {
            role: "Chief Audit Executive",
            text: "Approves the plan, the testing and the management responses, and signs off each final report.",
          },
          {
            role: "Audit Manager",
            text: "Builds and submits the plan, assigns auditors, approves audit programmes and reviews testing.",
          },
          {
            role: "Staff Auditors",
            text: "Prepare the audit programme, raise requests, perform testing, document workpapers and review responses.",
          },
          {
            role: "Control owners and auditees",
            text: "Upload the requested documents and record the management response to each observation.",
          },
          {
            role: "Process owners",
            text: "Approve the management response for their process before it is passed to the audit team.",
          },
        ],
        faqs: [
          {
            q: "How is the risk of an area scored?",
            a: "Your team weights a set of risk factors to total 100% and scores each area against them. Audit history, including when the area was last audited, its previous rating and any management concern, adjusts the result. The score places the area in a band (Critical, High, Medium or Low) and assigns it a rank.",
          },
          {
            q: "Is assurance mapping mandatory?",
            a: "No. It is selected during plan setup. If it is used, the coverage provided by the first line, the second line and external providers is scored and reflected in the ranking.",
          },
          {
            q: "What happens after the CAE approves the plan?",
            a: "The scores, ranking and schedule are locked, and an audit project is created for the plan with each area as a process. The Audit Manager then assigns a lead auditor and a start date to each area.",
          },
          {
            q: "Does this follow the same steps as control testing?",
            a: "Largely, yes. After planning, each process moves through an audit programme, information requests, testing, management response and a final report. Internal audit adds an Audit Manager approval before the request is issued and a process owner approval of the management response.",
          },
          {
            q: "What happens to observations after the report is issued?",
            a: "When the final report is released, the failed items and their management responses move to the Action Taken Report module, where they are tracked to closure.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      /* 3. Control Testing                                                */
      /* ---------------------------------------------------------------- */
      {
        slug: "control-testing",
        name: "Control Testing",
        navLabel: "Control Testing",
        shortName: "Control Testing",
        seoTitle: "Internal Control Testing Software for IFC and ICFR",
        icon: ShieldCheck,
        summary:
          "Manage each testing project end to end, covering the RCM, information requests, testing, approvals, management responses and the final report.",
        tagline: "From RCM to final report, with every request, test and approval in a single project",
        description:
          "Create a testing project, load the RCM, approve and release the Information and Document Request (IDR), collect evidence and test each control. Results and management responses then move through their approvals, and the CAE's final approval releases the report.",
        overview:
          "Control testing is a defined engagement with a clear start and finish. A project is set up for the entity, period and processes in scope. The Staff Auditor loads the Risk and Control Matrix (RCM) and specifies what each control owner must provide, and the Audit Manager approves the request before it is issued. Control owners upload evidence, the team tests each control, and the Audit Manager and then the CAE approve the testing. For each failed control, the control owner prepares a management response, which the Staff Auditor, Audit Manager and CAE approve in turn. The CAE's final approval releases the report and refers failed controls for follow-up.",
        atAGlance: [
          { label: "Built for", value: "CFOs, financial controllers and IFC / SOX teams" },
          { label: "Replaces", value: "RCM workbooks and evidence exchanged over email" },
          { label: "Runs as", value: "One project per entity, period and set of processes" },
          { label: "Ends with", value: "A report released on the CAE's final approval" },
        ],
        challenges: [
          {
            title: "Unowned risk and control matrices",
            text: "Control descriptions diverge from actual practice, and multiple versions of the matrix circulate at the same time.",
          },
          {
            title: "Email-based requests and evidence",
            text: "Documents are followed up over email, so there is no clear record of what was requested, what has been received and what remains pending.",
          },
          {
            title: "Undocumented approvals",
            text: "Testing is reviewed on calls and responses are agreed over email, so demonstrating who approved what requires considerable effort.",
          },
          {
            title: "Manually rebuilt reports",
            text: "Results and responses are re-entered into the report at the end, and the report and the working file gradually fall out of alignment.",
          },
        ],
        outcomes: [
          "A single project holding the RCM, requests, testing and report",
          "Information requests approved by the Audit Manager before release",
          "Evidence tracked against each request",
          "Testing approved by the Audit Manager and the CAE",
          "Management responses approved by the Staff Auditor, Audit Manager and CAE",
          "A report released from approved results, with failed controls referred for follow-up",
        ],
        capabilities: [
          {
            icon: FolderOpen,
            title: "Project setup",
            text: "Each testing cycle is a project with its entity, financial year, processes and team, and a status bar shows which of its twelve stages it has reached.",
          },
          {
            icon: Database,
            title: "RCM upload",
            text: "Load the Risk and Control Matrix from the template, with a preview and validation checks before confirmation, or start from the control library or AI-generated controls.",
            points: [
              "Key control, frequency, owner and assertion recorded for each control",
              "Preventive, detective or corrective; manual or automated",
            ],
          },
          {
            icon: ClipboardList,
            title: "Information requests (IDR)",
            text: "Specify what is required for each control and who must provide it. The Audit Manager approves the request or returns it, and only then is it released to control owners by email.",
            points: [
              "Due dates and status for each request",
              "Additional Data Requests (ADR) when further information is needed",
            ],
          },
          {
            icon: FolderOpen,
            title: "Evidence collection",
            text: "Control owners upload documents against each request item. Reminders are sent to the owner before and after the due date, with escalation to the process owner and head of department.",
          },
          {
            icon: ClipboardCheck,
            title: "Control testing",
            text: "The Staff Auditor records the test steps, population and sample, design and operating effectiveness, and the conclusion for each control, with the gap documented where a control fails.",
          },
          {
            icon: FileCheck,
            title: "Testing approval",
            text: "The Audit Manager reviews each workpaper and the CAE approves it. Either reviewer can return it with comments. Passed controls are finalised at this stage.",
          },
          {
            icon: ShieldAlert,
            title: "Management response",
            text: "For each failed control, the control owner records the action plan, the person responsible and the target dates. The Staff Auditor, Audit Manager and CAE approve it in turn, and any of them can return it.",
          },
          {
            icon: Stamp,
            title: "Reporting and follow-up",
            text: "The CAE's final approval releases the report, which is built only from approved controls and emailed to business heads. Failed controls and their responses move to the Action Taken Report module.",
          },
          {
            icon: BarChart3,
            title: "Analytics",
            text: "Controls in scope, testing progress, pass rate and open findings, drawn from the project as it progresses.",
          },
        ],
        screens: [
          {
            image: controlTestingProject,
            alt: "RiskMan GRC control testing project showing RCM controls, IDR fields, report and analytics tabs with testing progress, pass rate and open findings",
            title: "Inside a testing project",
            caption:
              "The project holds the RCM controls and the requests raised against them, together with the report and analytics: controls in scope, testing progress, pass rate and open findings. The status bar shows the stage the project has reached.",
          },
        ],
        lifecycle: [
          {
            title: "Create the project",
            text: "The Audit Manager sets up the project for the entity, period and processes, and assigns the team.",
          },
          {
            title: "Upload the RCM",
            text: "The Staff Auditor loads the Risk and Control Matrix and reviews it before confirming.",
          },
          {
            title: "Approve the IDR",
            text: "The Staff Auditor specifies what is required for each control. The Audit Manager approves the request before it is released.",
          },
          {
            title: "Collect evidence",
            text: "Control owners upload documents against each request, with reminders until the request is complete.",
          },
          {
            title: "Test the controls",
            text: "The Staff Auditor records the test steps, sample, design and operating effectiveness, and the conclusion.",
          },
          {
            title: "Approve the testing",
            text: "The Audit Manager and then the CAE approve or return each workpaper. Passed controls are finalised at this stage.",
          },
          {
            title: "Prepare the management response",
            text: "For each failed control, the control owner records the action plan, responsible person and target dates.",
          },
          {
            title: "Approve the response",
            text: "The Staff Auditor, the Audit Manager and the CAE review the response in turn. Any of them can return it.",
          },
          {
            title: "Release the report",
            text: "The CAE's final approval releases the report and moves failed controls to the Action Taken Report.",
          },
        ],
        deliverables: [
          "Project scope with team and status",
          "Uploaded Risk and Control Matrix",
          "Approved information requests with their status",
          "Evidence filed against each request",
          "Testing workpapers with Audit Manager and CAE approval",
          "Management responses with action plans and an approval trail",
          "Final control testing report (PDF)",
        ],
        standards: [
          {
            name: "Companies Act 2013, Sec 134(5)(e)",
            note: "Supports the directors' responsibility statement on internal financial controls.",
          },
          {
            name: "Companies Act 2013, Sec 143(3)(i)",
            note: "Provides the documentation the statutory auditor reviews when reporting on IFC.",
          },
          {
            name: "ICAI Guidance Note on Audit of Internal Financial Controls over Financial Reporting",
            note: "Design and operating effectiveness testing aligned with the Guidance Note.",
          },
          {
            name: "COSO Internal Control (2013)",
            note: "The relevant COSO component is recorded for each control.",
          },
          {
            name: "SEBI LODR, Reg 17(8)",
            note: "Supports the CEO and CFO certification on internal controls.",
          },
          {
            name: "SOX Section 404",
            note: "For groups with a US-listed parent. See also the Global SOX module.",
          },
        ],
        roles: [
          {
            role: "Audit Manager",
            text: "Creates the project, approves information requests, and reviews testing and management responses.",
          },
          {
            role: "Chief Audit Executive",
            text: "Approves the testing and management responses, and releases the report.",
          },
          {
            role: "Staff Auditor",
            text: "Loads the RCM, raises requests, tests the controls and performs the first review of management responses.",
          },
          {
            role: "Control owners",
            text: "Upload the requested evidence and prepare the management response when a control fails.",
          },
        ],
        faqs: [
          {
            q: "What is the IDR step?",
            a: "The Information and Document Request (IDR) lists what each control owner must provide. The Staff Auditor prepares it, the Audit Manager approves it, and it is then released by email. Responses are tracked against each request item.",
          },
          {
            q: "Can we upload our existing RCM?",
            a: "Yes. Use the template, review the preview and confirm the upload. You can also start from the control library or generate controls with AI.",
          },
          {
            q: "How many approval stages are there?",
            a: "There are three approval chains by default. The Audit Manager approves the information request before release. The Audit Manager and then the CAE approve the testing. The Staff Auditor, Audit Manager and CAE approve the management response. Your administrator can modify these chains.",
          },
          {
            q: "When is the report released?",
            a: "The report is released on the CAE's final approval. It is built from approved controls only and emailed to business heads, and failed controls with their responses move to the Action Taken Report module.",
          },
          {
            q: "How does this differ from internal audit?",
            a: "The two are closely aligned. Internal audit begins earlier, with the audit universe, risk scoring and plan approval, and adds a process owner approval on the management response. After planning, the steps are largely the same.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      /* 4. Action Taken Report                                            */
      /* ---------------------------------------------------------------- */
      {
        slug: "action-taken-report",
        name: "Action Taken Report",
        navLabel: "Action Taken Report",
        shortName: "ATR",
        seoTitle: "Action Taken Report (ATR) and Audit Issue Tracking Software",
        icon: ListChecks,
        summary:
          "Track every audit observation through to closure, with a named owner, a target date and evidence reviewed by the audit team.",
        tagline: "Every audit observation tracked through to an approved closure",
        description:
          "Convert observations from internal audit and control testing reports into actions with named owners and target dates. Remind owners before and after each deadline, collect their evidence, and close each action only after the audit team has reviewed it.",
        videoSection: {
          title: "Streamline Audit Remediation",
          lead: "See how audit observations become tracked actions. Owners are assigned, reminders are sent automatically, and every closure is reviewed and approved in one place rather than over email.",
          cta: {
            label: "Learn More",
            href: `${PRODUCTS_BASE_PATH}/riskman-grc`,
          },
        },
        overview:
          "Follow-up on audit findings is often managed through spreadsheets and email. In RiskMan GRC, actions are created automatically when an internal audit report is released or when a control testing report receives the CAE's final approval. Each action records the observation, the management action plan, a priority, an owner and a target date. Owners are reminded as the target date approaches and upload their evidence. The Staff Auditor, the Audit Manager and, where your organisation requires it, the CAE review that evidence before the action is closed.",
        atAGlance: [
          { label: "Built for", value: "Internal audit teams and action owners" },
          { label: "Replaces", value: "Follow-up trackers and status emails" },
          { label: "Actions from", value: "Internal audit, control testing or an Excel upload" },
          { label: "Ends with", value: "Every action closed after audit review" },
        ],
        challenges: [
          {
            title: "Manual transcription of findings",
            text: "After a report is issued, each observation is re-entered into a spreadsheet by hand. Some are missed, and the wording departs from what was agreed with management.",
          },
          {
            title: "Delayed follow-up",
            text: "Owners are contacted again only when the next review approaches. By then the target date has passed, and the update is a commitment rather than evidence.",
          },
          {
            title: "Closure without evidence",
            text: "Actions are marked complete on the basis of an email reply. When the auditor requests proof, the evidence sits in an individual inbox, if it exists at all.",
          },
          {
            title: "Unapproved date extensions",
            text: "Target dates are changed without approval. The original commitment is lost, and overdue actions appear to be on schedule.",
          },
        ],
        outcomes: [
          "Actions created directly from released audit and testing reports",
          "A named owner, target date and priority on every action",
          "Automated reminders before and after the due date",
          "Closure only after the audit team has reviewed the evidence",
          "Date extensions approved, with the original date retained",
          "Closure rate and overdue ageing on a single dashboard",
        ],
        capabilities: [
          {
            icon: Link2,
            title: "Actions from audit reports",
            text: "When an internal audit report is released, or the CAE gives final approval to a control testing report, the failed items and their management responses become actions automatically. Findings from other sources can be added using the ATR Excel template.",
            points: [
              "Observation, risk, recommendation and management action plan on each action",
              "Priority (High, Medium, Low) carried over from the original rating",
            ],
          },
          {
            icon: UserCheck,
            title: "Owners, dates and escalation contacts",
            text: "Every action has a responsible person, a target date and an assigned Staff Auditor. For each owner, a process owner and head of department are also recorded, providing a clear escalation path.",
            points: [
              "Reassignment requires a reason and is logged",
              "Actions are released to owners once the Audit Manager confirms them",
            ],
          },
          {
            icon: Bell,
            title: "Automated reminders",
            text: "Owners receive emails before and after the due date. The Audit Manager can enable a schedule that also copies the process owner and head of department on overdue actions, or send a reminder at any time.",
          },
          {
            icon: FileCheck,
            title: "Evidence submission and review",
            text: "The owner uploads and submits evidence. The Staff Auditor reviews it and forwards or returns it. The Audit Manager closes the action, returns it, or refers it to the CAE for final sign-off. Every step is recorded.",
            points: [
              "Up to five review stages, configured by your administrator",
              "Returned actions go back to the owner with remarks",
            ],
          },
          {
            icon: Clock,
            title: "Approved date extensions",
            text: "An owner who requires more time requests a revised date and states a reason. The process owner approves the request by default. The original date remains on record alongside the revised date.",
          },
          {
            icon: BarChart3,
            title: "Dashboards and exports",
            text: "View the closure rate, overdue ageing in day bands, and actions by priority, status, owner, process and entity. Export the dashboard to PDF, Word or Excel, or download the remediation report for a project.",
          },
        ],
        screens: [
          {
            image: atrAnalytics,
            tab: "Analytics",
            alt: "Remediation analytics dashboard with tiles for total, closed, open and overdue actions and closure rate, above a distribution by process, an ageing chart of overdue actions and a breakdown by risk",
            title: "Remediation status at a glance",
            caption:
              "Total, closed, open and overdue actions, with the closure rate measured against its target. Below these sit actions by process, the ageing of overdue items, and a breakdown that can be switched between risk, status and priority.",
          },
          {
            image: atrOverdue,
            tab: "Overdue summary",
            alt: "Overdue summary table listing project and process, observation, management response, point of contact, risk, priority and the number of days each action is past its deadline",
            title: "Every action past its deadline",
            caption:
              "Each overdue action with its observation, the agreed management response, the responsible person, the risk and priority, and the number of days past the target date.",
          },
        ],
        lifecycle: [
          {
            title: "Set up",
            text: "The Audit Manager creates a remediation project, selects the audit team and records each owner's process owner and head of department.",
          },
          {
            title: "Import actions",
            text: "Actions are created from a released internal audit report, an approved control testing report or an uploaded ATR template.",
          },
          {
            title: "Assign",
            text: "Each action receives an owner, a target date and a Staff Auditor, and is released to the owner once the Audit Manager confirms it.",
          },
          {
            title: "Remind",
            text: "Owners are reminded before and after the due date. Overdue actions can be copied to the process owner and head of department.",
          },
          {
            title: "Submit evidence",
            text: "The owner uploads and submits evidence, or requests more time with a reason for the process owner to approve.",
          },
          {
            title: "Review and close",
            text: "The Staff Auditor reviews the evidence. The Audit Manager then closes the action, returns it, or refers it to the CAE for final sign-off.",
          },
          {
            title: "Report",
            text: "Dashboards show the closure rate and overdue ageing by owner, process and entity, and can be exported with the project report.",
          },
        ],
        deliverables: [
          "Action register with observation, owner, priority and target date",
          "Evidence submitted against each action",
          "Review and approval trail for every closure",
          "Extension requests with original and revised dates",
          "Overdue summary with days past due",
          "Closure rate and ageing dashboard (PDF, Word or Excel)",
          "Remediation report for each project",
        ],
        standards: [
          {
            name: "Companies Act 2013, Sec 177(4)",
            note: "Supports the Audit Committee's review of the follow-up of internal audit findings.",
          },
          {
            name: "SEBI LODR, Reg 18 and Schedule II Part C",
            note: "Supports the Audit Committee's review of internal audit reports and the actions taken on them.",
          },
          {
            name: "ICAI Standards on Internal Audit",
            note: "Follow-up of observations documented with evidence and the auditor's review.",
          },
          {
            name: "IIA International Professional Practices Framework",
            note: "Monitoring of management's actions on audit results.",
          },
        ],
        roles: [
          {
            role: "Audit Manager",
            text: "Sets up the project, confirms actions, manages reminders, and closes or escalates reviewed actions.",
          },
          {
            role: "Staff Auditor",
            text: "Reviews each owner's evidence and marks the action as implemented, or returns it with remarks.",
          },
          {
            role: "Chief Audit Executive",
            text: "Provides final sign-off where the review chain includes the CAE, and monitors closure and overdue figures.",
          },
          {
            role: "Action owners",
            text: "Upload evidence, submit it for review, and request more time where required.",
          },
          {
            role: "Process owners and heads of department",
            text: "Receive copies of overdue action reminders and approve date extensions.",
          },
        ],
        faqs: [
          {
            q: "Where do the actions come from?",
            a: "Most actions are created automatically. When an internal audit report is released, the failed items become actions grouped by process. When the CAE gives final approval to a control testing report, controls with gaps and their management responses also become actions. Findings from other reviews can be added using the ATR Excel template.",
          },
          {
            q: "Can an owner close their own action?",
            a: "No. The owner submits evidence, and the audit team closes the action after review. The Staff Auditor reviews it first, followed by the Audit Manager, and then the CAE if your review chain includes the CAE.",
          },
          {
            q: "What happens when an action is overdue?",
            a: "The owner continues to receive reminders after the due date. If the Audit Manager has enabled the overdue schedule, the process owner and head of department are also copied. Overdue actions appear in the overdue summary with the number of days past due.",
          },
          {
            q: "Can a target date be changed?",
            a: "Only through an extension request. The owner requests a revised date with a reason, the process owner approves it by default, and both the original and revised dates remain on record.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      /* 5. Policy and SOP                                                 */
      /* ---------------------------------------------------------------- */
      {
        slug: "policy",
        name: "Policy and SOP",
        navLabel: "Policy and SOP",
        shortName: "Policy and SOP",
        seoTitle: "Policy and SOP Management Software",
        icon: FileText,
        summary:
          "A single library for policies and SOPs, with recorded review and approval, version control and employee-level acknowledgement tracking.",
        tagline: "The current version, the approval behind it and evidence that it has been read",
        description:
          "Upload or draft a policy, route it for review and publish it on approval. Every person within its scope is asked to read and acknowledge it, review dates are monitored and every version is retained on record.",
        overview:
          "An effective policy framework must answer three questions: which version is current, who approved it, and whether the people it applies to have read it. In RiskMan GRC, each document is assigned a reference number, an owner, reviewers, an audience and a review frequency. It is reviewed and approved through a recorded workflow and published on approval, either immediately or on a scheduled date. The intended audience is asked to acknowledge it, with reminders until they do so, and the owner is alerted when the review date arrives.",
        atAGlance: [
          { label: "Built for", value: "Compliance teams, Company Secretaries and process owners" },
          { label: "Replaces", value: "Shared drives and multiple 'final_v3' documents" },
          { label: "Cycle", value: "A defined review date for each document" },
          { label: "Ends with", value: "A published version, acknowledged by its audience" },
        ],
        challenges: [
          {
            title: "Uncertainty over the current version",
            text: "Copies are scattered across drives and mailboxes, and the version employees follow is not always the one that was approved.",
          },
          {
            title: "Approvals buried in email",
            text: "When an auditor asks who approved a policy and when, the evidence must be retrieved from old email correspondence.",
          },
          {
            title: "No evidence of acknowledgement",
            text: "A policy is circulated to all employees, but there is no record of who opened it and accepted it.",
          },
          {
            title: "Missed policy reviews",
            text: "Without defined review dates, a policy written for superseded requirements remains in force until someone notices.",
          },
        ],
        outcomes: [
          "A single library with one published version of each document",
          "Review and approval recorded, including who approved and when",
          "Acknowledgement tracked by employee, with automated reminders",
          "Review dates that alert the owner when they fall due",
          "Every version retained, with a change summary",
          "Policies linked to the processes, risks and controls they govern",
        ],
        capabilities: [
          {
            icon: BookOpen,
            title: "Document library",
            text: "Policies, SOPs, process maps, work instructions, forms, guidelines, manuals and frameworks are held in one place. Each document carries a reference number, an owner, a department, a data classification and tags.",
            points: [
              "Reference numbers generated automatically (for example, POL-2026-001)",
              "Search by name and filter by type, status, owner or department",
            ],
          },
          {
            icon: FileText,
            title: "Upload or AI-assisted drafting",
            text: "Upload an existing document, create several entries and attach files later, or use Policy AI to draft a document based on your industry, process and document type, complete with a RACI and an approval matrix.",
          },
          {
            icon: Workflow,
            title: "Review and approval",
            text: "A submitted draft is locked while reviewers assess it. Every named reviewer must approve it, or your administrator can configure a multi-stage approval chain. Reviewers may return it with a reason.",
            points: ["Reminders to reviewers who have not yet acted"],
          },
          {
            icon: Stamp,
            title: "Publication on approval",
            text: "Final approval publishes the document immediately or on a scheduled date. The effective date is recorded, and the previous version is marked as superseded and retained.",
          },
          {
            icon: UserCheck,
            title: "Acknowledgement tracking",
            text: "Every member of the audience, whether all employees, a department, a team, a role or named individuals, is asked to read and acknowledge the document. Each acknowledgement is timestamped, and reminders continue until it is completed.",
            points: ["Each new version requires fresh acknowledgement", "Progress tracked by department"],
          },
          {
            icon: History,
            title: "Version control",
            text: "A new version is created with a change summary and goes through review again. Only one version can be in progress at a time, and every earlier version remains on record.",
          },
          {
            icon: CalendarClock,
            title: "Review scheduling",
            text: "A review frequency is set for each document. When the review date arrives, the owner is alerted, and a document that is not reviewed in time is marked as expired.",
          },
          {
            icon: Link2,
            title: "Links to processes, risks and controls",
            text: "Link each document to the processes, risks and controls it governs, either manually or by accepting AI suggestions, and identify processes that have no supporting policy.",
          },
        ],
        screens: [
          {
            image: policyAcknowledgements,
            tab: "Acknowledgements",
            alt: "Policy and SOP acknowledgement dashboard showing total assigned, acknowledged and pending tiles above a list of policies awaiting acknowledgement and a department progress panel",
            title: "Acknowledgement status at a glance",
            caption:
              "Documents assigned, acknowledged and still pending, with the oldest due dates shown first and progress tracked by department.",
          },
        ],
        lifecycle: [
          {
            title: "Draft",
            text: "The owner uploads a document or drafts one with AI, then sets its audience, reviewers and review frequency.",
          },
          {
            title: "Submit",
            text: "The owner submits the draft for review. It remains locked while reviewers assess it.",
          },
          {
            title: "Review and approve",
            text: "Each reviewer, or each stage of the approval chain, approves the draft or returns it with a reason.",
          },
          {
            title: "Publish",
            text: "Final approval publishes it immediately or on a scheduled date. The previous version is marked as superseded and retained.",
          },
          {
            title: "Acknowledge",
            text: "Every member of the audience reads and acknowledges it, with reminders until they do so.",
          },
          {
            title: "Review",
            text: "The owner is alerted when the review date arrives. If it is not reviewed in time, the document is marked as expired.",
          },
          {
            title: "Revise or archive",
            text: "The owner either starts a new version with a change summary, which goes through review again, or archives the document.",
          },
        ],
        deliverables: [
          "Document library with reference numbers and owners",
          "Approval trail for every version",
          "Version history with change summaries",
          "Timestamped acknowledgement record by employee",
          "List of reviews due and overdue",
          "Links from documents to processes, risks and controls",
          "Master list export",
        ],
        standards: [
          {
            name: "Companies Act 2013, board-approved policies",
            note: "Keeps policies such as CSR, related party transactions and the vigil mechanism current, with their approval trail.",
          },
          {
            name: "SEBI LODR, Reg 9 and Schedule II",
            note: "Keeps the policies that listed entities are required to maintain up to date.",
          },
          {
            name: "SEBI PIT Regulations",
            note: "Maintains the code of conduct and records its acknowledgement by designated persons.",
          },
          {
            name: "ISO 9001 / ISO 27001",
            note: "Supports control of documented information, including approval, versioning, distribution and retention.",
          },
          {
            name: "DPDP Act 2023",
            note: "Keeps the privacy notice and its related policies current.",
          },
        ],
        roles: [
          {
            role: "Policy owners",
            text: "Draft and submit documents, define their audience and review dates, and initiate new versions.",
          },
          {
            role: "Reviewers and approvers",
            text: "Review drafts and either approve them or return them with a reason.",
          },
          {
            role: "Compliance and Company Secretary",
            text: "Keep the library current and monitor acknowledgement status and review dates.",
          },
          {
            role: "Employees",
            text: "Access the current version of each document and acknowledge those that apply to them.",
          },
        ],
        faqs: [
          {
            q: "How are documents numbered?",
            a: "The system assigns each document a reference number by type, for example POL-2026-001 or SOP-2026-001, ensuring that numbers are unique and consistent.",
          },
          {
            q: "How is acknowledgement recorded?",
            a: "When a document is published, every member of its audience is asked to read and acknowledge it. Each acknowledgement is timestamped, reminders are sent automatically for pending acknowledgements, and progress is shown by person and by department.",
          },
          {
            q: "Are previous versions retained?",
            a: "Yes. When a new version is published, the earlier version is marked as superseded and retained with its approval trail and change summary.",
          },
          {
            q: "What happens when a review falls due?",
            a: "The owner is alerted when the review date arrives. If the document is not reviewed in time, it is marked as expired, so an outdated policy does not appear to be current.",
          },
          {
            q: "Can a policy be linked to our controls?",
            a: "Yes. Each document can be linked to the processes, risks and controls it governs, either manually or by accepting AI suggestions, and your team can identify processes that do not yet have a policy.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      /* 6. Global SOX                                                     */
      /* ---------------------------------------------------------------- */
      {
        slug: "global-sox",
        name: "Global SOX",
        navLabel: "Global SOX",
        shortName: "Global SOX",
        seoTitle: "Global SOX Compliance Software for Multi-Entity Groups",
        icon: Globe,
        summary:
          "Designed for groups that test the same SOX controls across multiple entities. A single control library, an approved scope, and testing projects that conclude in a signed-off report.",
        tagline: "Your SOX programme across every entity, in one platform",
        description:
          "Maintain a single risk and control library for the entire group. Confirm each year which entities are in scope. Run each testing project from the first evidence request through to the final report.",
        overview:
          "A group with twenty subsidiaries often maintains twenty versions of the same Risk and Control Matrix (RCM). Global SOX replaces them with a single library. Each control is written once, rolled out to the entities that perform it, and every project tests against that same library. The Chief Audit Executive (CAE) approves the scope and each project before work begins. Evidence is received against each request, Staff Auditors document testing on a workpaper, and the final report is issued only after every control and every management response has been signed off.",
        atAGlance: [
          { label: "Built for", value: "Group SOX teams, CAEs and financial controllers" },
          { label: "Replaces", value: "Separate RCM workbooks for each entity and evidence requested over email" },
          { label: "Runs as", value: "Projects by entity, process and audit period" },
          { label: "Ends with", value: "A final report signed off by the CAE" },
        ],
        challenges: [
          {
            title: "Inconsistent RCMs across entities",
            text: "When the group revises a control description, only some subsidiaries update their workbooks. By year end, it is unclear which version of the control was actually tested.",
          },
          {
            title: "Undocumented scoping decisions",
            text: "The decision on which entities are in scope is often recorded only in an email thread. When the external auditor requests it at year end, it is difficult to produce.",
          },
          {
            title: "Repetitive and untracked evidence requests",
            text: "Each control owner receives a separate email requesting documents. Responses are incomplete, forwarded or incorrect, and tracking outstanding items requires a separate spreadsheet.",
          },
          {
            title: "No reliable approval trail",
            text: "Testing is reviewed on a call, responses are agreed over email, and the report is signed off in a meeting. Evidencing these approvals later is time-consuming and unreliable.",
          },
        ],
        outcomes: [
          "Each control is written once and used by every entity that performs it",
          "The annual SOX scope is approved by the CAE and retained on record",
          "Outstanding documents are visible for each control",
          "Testing reviewed and approved by the Audit Manager and the CAE",
          "Management responds once testing is complete, rather than control by control",
        ],
        capabilities: [
          {
            icon: Database,
            title: "Single risk and control library",
            text: "Upload your existing RCM or build it on screen. Each control records its type, frequency, COSO component, assertions, sampling criteria and testing steps. A master control can be rolled out to sub-entities, cloned to another entity, or edited once and applied across all entities.",
            points: [
              "Automated, manual or semi-manual; preventive, detective or corrective",
              "Classified as Operational, Financial, ITGC, ELC or Stat Compliance",
            ],
          },
          {
            icon: FileSpreadsheet,
            title: "Validated Excel upload",
            text: "No data is saved until the file passes validation. Every error is displayed in a preview grid, where it can be corrected before the upload is committed. Alternatively, the error report can be downloaded and corrected in Excel.",
            points: [
              "Templates for RCM, Risk Master and Control Master",
              "Complete history of every upload and the user who performed it",
            ],
          },
          {
            icon: Stamp,
            title: "Approval-controlled library changes",
            text: "When an Audit Manager edits, adds, deletes or links a risk or control, the change is submitted to the CAE as a change request. The CAE reviews exactly which fields have changed and either approves the request or returns it with a comment.",
            points: [
              "Deleted records can be restored",
              "Every change is logged with its previous and new value",
            ],
          },
          {
            icon: CalendarCheck,
            title: "Annual SOX applicability",
            text: "List every entity and sub-entity, mark each as Yes or No, and submit the list to the CAE. Once approved, it is locked. If the scope changes during the year, a new version is raised, for example SOXA-2026-000001 v2, and the previous version is archived.",
          },
          {
            icon: FolderOpen,
            title: "CAE-approved testing projects",
            text: "Select a control-wise or entity-wise approach, the audit period, and the processes and entities in scope. Exclude any deferred controls, assign staff by entity, process or control with start and due dates, and submit the project to the CAE.",
            points: [
              "The CAE can defer or reinstate controls during approval",
              "Scope can be limited to the entities marked Yes in the applicability",
              "Projects can be closed or reopened as required",
            ],
          },
          {
            icon: Send,
            title: "Evidence requests and uploads",
            text: "The data requirements for each control form its Information and Document Request (IDR). Staff submit it to the Audit Manager, who approves it and releases it immediately or on a scheduled date. Control owners then upload files against each line, or upload all files at once and allow the system to match them to requests by name.",
            points: [
              "Process Owner and Business Head are copied as escalation contacts",
              "Further evidence can be requested through an Additional Data Request (ADR)",
              "Files that do not meet the request can be returned with a reason",
            ],
          },
          {
            icon: ClipboardCheck,
            title: "Workpapers and review",
            text: "Staff record the population, sample, exceptions and test steps, rate design and operating effectiveness, and conclude each control as Pass or Fail. Each failed control receives a gap analysis with root cause and recommendation. The review then proceeds to the Audit Manager and on to the CAE.",
            points: [
              "Multiple controls can be approved or returned at once",
            ],
          },
          {
            icon: ShieldAlert,
            title: "Management response",
            text: "Responses open for all failed controls together, once testing of the entire project is complete. The control owner records the response, action plan, responsible owner and target date. The Process Owner or Business Head approves it first, followed by audit staff, the Audit Manager and the CAE.",
          },
          {
            icon: BarChart3,
            title: "Reports and analytics",
            text: "Each project provides a live view of testing progress, effectiveness rate, deficiencies by process and staff workload. The final report is issued once all items are approved and can be downloaded as a PDF, organised by entity or by control.",
          },
          {
            icon: MessagesSquare,
            title: "Chat and reminders",
            text: "Each control has a dedicated chat thread with the client contacts, so queries about a document remain alongside it. Your administrator configures which reminders are sent, on which days and to whom, so overdue items are followed up without manual effort.",
          },
        ],
        lifecycle: [
          {
            title: "Load the RCM",
            text: "Upload the Risk and Control Matrix and roll out each control to the entities that perform it.",
          },
          {
            title: "Approve the scope",
            text: "Mark which entities are in SOX scope for the period. The CAE approves the scope.",
          },
          {
            title: "Set up the project",
            text: "The Audit Manager selects the period, scope, controls and staff, and submits the project to the CAE.",
          },
          {
            title: "Issue the IDR",
            text: "Staff prepare the document request for each control. The Audit Manager approves and releases it.",
          },
          {
            title: "Collect evidence",
            text: "Control owners upload files. Staff accept them, return them or request additional data.",
          },
          {
            title: "Test controls",
            text: "Staff complete the workpaper and conclude each control as Pass or Fail.",
          },
          {
            title: "Review testing",
            text: "The Audit Manager and then the CAE approve or return each control.",
          },
          {
            title: "Obtain management responses",
            text: "Control owners respond on failed controls. The business and then audit approve the responses.",
          },
          {
            title: "Issue the report",
            text: "The final report is issued to the audit team and the client contacts.",
          },
        ],
        deliverables: [
          "Risk and control library, showing the entities to which each control applies",
          "Approved SOX applicability for each period",
          "Approved project scope and staff assignments",
          "IDR list with the evidence received against each line",
          "Workpapers with samples, exceptions and conclusions",
          "Gap analysis for every failed control",
          "Management responses with action plans and target dates",
          "Final SOX testing report (PDF)",
          "Log of every change made to the library",
        ],
        standards: [
          {
            name: "SOX Section 404",
            note: "Testing of internal control over financial reporting across all entities in scope.",
          },
          {
            name: "SOX Section 302",
            note: "A current view of control status to support officer certifications.",
          },
          {
            name: "PCAOB AS 2201",
            note: "Workpapers and evidence in the format reviewed by the external auditor.",
          },
          {
            name: "COSO Internal Control (2013)",
            note: "Each control is mapped to its COSO component, and each risk to its financial statement assertions.",
          },
          {
            name: "Companies Act 2013, Sec 134(5)(e) and 143(3)(i)",
            note: "Supports Indian groups operating Internal Financial Controls (IFC) on the same control library.",
          },
        ],
        roles: [
          {
            role: "Chief Audit Executive",
            text: "Approves the scope, each project and changes to the library, and provides final sign-off on testing and management responses.",
          },
          {
            role: "Audit Manager",
            text: "Sets up projects, approves IDRs before they are released, and reviews testing.",
          },
          {
            role: "Staff Auditor",
            text: "Prepares IDRs, examines evidence, tests controls and reviews management responses.",
          },
          {
            role: "Control owners",
            text: "Upload evidence and prepare the management response on failed controls.",
          },
          {
            role: "Process Owners and Business Heads",
            text: "Act as escalation contacts on each control and as first approvers of the management response.",
          },
        ],
        faqs: [
          {
            q: "Why is the module called Global SOX?",
            a: "It is designed for groups. Your organisation maintains a single set of risks and controls and rolls it out to every entity, sub-entity and division that uses it. A single project and a single report can cover multiple entities.",
          },
          {
            q: "How does Global SOX differ from Control Testing?",
            a: "Control Testing is suited to a single entity running a testing project. Global SOX adds the capabilities a group requires: a shared control library with approved changes, annual scope approval, CAE approval of each project, scheduled IDR release, Additional Data Requests, and an extended approval chain for management responses.",
          },
          {
            q: "Can we import our existing RCM?",
            a: "Yes. Download the template, enter your RCM, and upload it. Any issues, such as a missing owner or an unrecognised entity, are shown in the preview and can be corrected before any data is saved.",
          },
          {
            q: "Can the approval workflow be configured?",
            a: "Yes. Your administrator defines who approves library changes, scope and testing, with up to four stages for each. By default, approval is by the Audit Manager followed by the CAE.",
          },
          {
            q: "Why do management responses not open immediately?",
            a: "This ensures management sees the complete picture. Responses open once every control in the project has been tested and approved, and all failed controls are then sent together.",
          },
        ],
      },
    ],
  },
];

export const getProduct = (slug) =>
  PRODUCTS.find((product) => product.slug === slug);

export const getModule = (productSlug, moduleSlug) =>
  getProduct(productSlug)?.modules.find((m) => m.slug === moduleSlug);

export default PRODUCTS;
