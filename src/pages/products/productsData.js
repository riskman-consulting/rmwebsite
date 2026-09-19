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
 * `components/ModulePage.jsx` renders all of it, so the five module pages stay
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
    tagline: "Governance, risk and compliance in one connected workspace",
    summary:
      "A single place to plan audits, test controls, manage policies, track actions and maintain the risk register — so the same data feeds every view instead of living in scattered spreadsheets.",
    modules: [
      /* ---------------------------------------------------------------- */
      /* 1. Enterprise Risk Management                                     */
      /* ---------------------------------------------------------------- */
      {
        slug: "enterprise-risk-management",
        name: "Enterprise Risk Management",
        navLabel: "Enterprise Risk Management",
        shortName: "ERM",
        icon: Layers,
        summary:
          "A live risk register feeding heat maps and management reporting.",
        tagline:
          "One risk register the board, the business and internal audit all read from",
        description:
          "Maintain the enterprise risk register with owners, scoring, treatment plans and appetite thresholds. Heat maps and management reporting read from the same register the audit and control modules use.",
        overview:
          "Most risk registers are built for a meeting, not for the year. ERM in RiskMan GRC keeps one register live all year — each risk with an owner, a rating that follows a defined scale, a treatment plan with dates, and a clear line to the controls that mitigate it and the audits that test it. When the Risk Management Committee or the Board asks what has moved since last quarter, the answer comes off the register rather than out of a freshly built deck.",
        atAGlance: [
          { label: "Built for", value: "CROs, CFOs and risk owners" },
          { label: "Replaces", value: "Register workbooks and quarterly decks" },
          { label: "Cycle", value: "Continuous, with formal quarterly review" },
          { label: "Feeds", value: "Audit planning and control testing scope" },
        ],
        challenges: [
          {
            title: "The register only wakes up before a meeting",
            text: "Risks are refreshed in the fortnight before the committee meets, so the register records a point in time rather than the current position.",
          },
          {
            title: "Every function scores differently",
            text: "Without a published likelihood and impact scale, a 'high' in operations and a 'high' in treasury do not mean the same thing, and the heat map cannot be read across the group.",
          },
          {
            title: "Ownership is implied, not recorded",
            text: "Mitigation sits with a department rather than a person, so nothing is ever overdue and nothing is chased.",
          },
          {
            title: "Risk and assurance run on separate tracks",
            text: "The audit plan and the control set are built independently of the register, so the areas rated highest are not necessarily the areas being tested.",
          },
        ],
        outcomes: [
          "One register, one scoring scale and one taxonomy across the group",
          "Inherent and residual ratings held separately, with the control effect visible in between",
          "A named owner, a treatment plan and a review date on every risk",
          "Appetite and tolerance stated, with breaches flagged rather than debated",
          "Audit planning and control testing scoped from the same ratings",
          "Committee reporting produced from live data instead of rebuilt each quarter",
        ],
        capabilities: [
          {
            icon: Database,
            title: "Risk register and taxonomy",
            text: "A structured register with a group taxonomy — strategic, operational, financial, compliance, technology and ESG — so risks are grouped consistently across entities and functions.",
            points: [
              "Entity, function and process tagging",
              "Cause, event and consequence captured separately",
              "Group and subsidiary level registers",
            ],
          },
          {
            icon: Gauge,
            title: "Scoring on a defined scale",
            text: "Likelihood and impact scales are configured once and applied everywhere, with inherent, current and residual ratings held against each risk.",
            points: [
              "Configurable 3x3, 4x4 or 5x5 matrices",
              "Financial, regulatory and reputational impact criteria",
              "Rating history retained for trend analysis",
            ],
          },
          {
            icon: Target,
            title: "Appetite and tolerance",
            text: "Record the appetite statement for each risk category and the tolerance threshold that triggers escalation, so an exception is identified by the system rather than argued in a meeting.",
            points: [
              "Category-level appetite statements",
              "Tolerance thresholds with breach flags",
              "Escalation routing when a threshold is crossed",
            ],
          },
          {
            icon: Workflow,
            title: "Treatment plans that are tracked",
            text: "Each response — accept, mitigate, transfer or avoid — carries an owner, milestones and target dates, so overdue treatment is visible without a status call.",
            points: [
              "Owner and due date on every action",
              "Milestone level progress",
              "Reminders before and after the due date",
            ],
          },
          {
            icon: LineChart,
            title: "Key risk indicators",
            text: "Attach KRIs to a risk with thresholds and a reporting frequency, so movement shows up as data between formal reviews.",
            points: [
              "Threshold bands per indicator",
              "Period-wise capture with trend line",
              "Breach log for committee reporting",
            ],
          },
          {
            icon: Network,
            title: "Linked to controls and audits",
            text: "Map each risk to the controls that mitigate it and the audits that test it, so coverage gaps and over-testing are both visible.",
            points: [
              "Risk to control mapping",
              "Risk to audit universe mapping",
              "Uncovered risk and untested control views",
            ],
          },
          {
            icon: BarChart3,
            title: "Heat maps and dashboards",
            text: "Heat maps, top-risk views and movement charts render from the register itself, filtered by entity, category or owner.",
            points: [
              "Inherent versus residual heat map",
              "Top risks by rating and by movement",
              "Filters by entity, category and owner",
            ],
          },
          {
            icon: CalendarClock,
            title: "Review cycle and audit trail",
            text: "Risk owners confirm or revise their risks on a set cycle, and every change is stamped with who changed what and when.",
            points: [
              "Scheduled owner attestation",
              "Change log on rating and treatment",
              "Snapshot retained at each reporting date",
            ],
          },
        ],
        screens: [
          {
            image: ermOverview,
            tab: "Overview",
            alt: "RiskMan GRC ERM dashboard header with department, category, status and owner filters and tiles for total risks, active risks and risks awaiting acknowledgement",
            title: "The register at a glance",
            caption:
              "The dashboard opens on the position as it stands — total risks, how many are active, and how many are waiting on owner acknowledgement — with filters for department, category, status and owner so the same view narrows to one function without a separate report.",
          },
          {
            image: ermRiskProfile,
            tab: "Risk profile",
            alt: "Risks by department and category table alongside an impact versus probability risk heat map with low, medium, high and critical bands",
            title: "Where the risk sits",
            caption:
              "Active risks split by function and by category next to the impact against probability heat map, both reading off the same scored register — so the table and the map can never tell different stories.",
          },
          {
            image: ermDistribution,
            tab: "Distribution",
            alt: "Department wise and category wise risk distribution bar charts above a mitigation plan timeline chart across the year",
            title: "Distribution and the mitigation timeline",
            caption:
              "Distribution by function and by category, and underneath them the mitigation plan timeline — every control with a due date plotted across the year, with the note making clear that a past date is not the same thing as an overdue one.",
          },
          {
            image: ermOverdue,
            tab: "Overdue",
            alt: "Overdue mitigation plans table listing control, owner, due date and ageing band, beside a periodic confirmation panel",
            title: "What is genuinely late",
            caption:
              "Mitigation plans furthest past their implementation date, each with its control, its named owner, the due date and an ageing band — the view that turns a treatment plan from an intention into something somebody has to answer for. Periodic owner confirmations sit alongside it.",
          },
          {
            image: ermOwners,
            tab: "Owners",
            alt: "Risk owner wise and control owner wise distribution bar charts showing active risks and controls per owner",
            title: "Accountability by owner",
            caption:
              "Active risks per risk owner and controls per control owner — the concentration view that shows when the register is resting on one or two people, which is itself a risk worth recording.",
          },
        ],
        lifecycle: [
          {
            title: "Identify",
            text: "Capture risks from workshops, process reviews, audit findings, incidents and loss events into one register under the group taxonomy.",
          },
          {
            title: "Assess",
            text: "Score likelihood and impact on the published scale, record inherent and residual positions, and let the difference show what the controls are doing.",
          },
          {
            title: "Respond",
            text: "Decide the treatment, assign the owner, set milestones and dates, and record the residual position the response is expected to reach.",
          },
          {
            title: "Monitor",
            text: "Track KRIs, treatment progress and tolerance breaches through the period rather than at the end of it.",
          },
          {
            title: "Report",
            text: "Produce the committee view — heat map, top risks, movement and overdue treatment — directly from the register.",
          },
        ],
        deliverables: [
          "Enterprise and entity-wise risk register extract",
          "Inherent versus residual heat map",
          "Top risk dashboard for the Risk Management Committee",
          "Risk movement and trend report for the period",
          "Treatment plan status and overdue action report",
          "KRI dashboard with threshold breach log",
          "Risk owner attestation record",
          "Risk to control and risk to audit coverage map",
        ],
        standards: [
          {
            name: "COSO ERM (2017)",
            note: "Register, appetite and reporting structured along the framework's components.",
          },
          {
            name: "ISO 31000:2018",
            note: "Identify, assess, treat, monitor and report lifecycle.",
          },
          {
            name: "Companies Act 2013 — Sec 134(3)(n)",
            note: "Supports the risk management statement in the Board's Report.",
          },
          {
            name: "Companies Act 2013 — Sec 177(4)",
            note: "Supports Audit Committee evaluation of risk management systems.",
          },
          {
            name: "SEBI LODR — Reg 21",
            note: "Reporting pack for the Risk Management Committee of listed entities.",
          },
        ],
        roles: [
          {
            role: "Chief Risk Officer / Risk head",
            text: "Owns the taxonomy, the scales and the appetite, and runs the group review cycle.",
          },
          {
            role: "CFO and business heads",
            text: "Own the risks in their area and the treatment plans against them.",
          },
          {
            role: "Internal audit",
            text: "Uses the ratings to build a risk-based plan, and feeds findings back as risks.",
          },
          {
            role: "Risk Management Committee / Board",
            text: "Reads the heat map, top risks and movement, and sees breaches against appetite.",
          },
        ],
        faqs: [
          {
            q: "Can we keep our existing risk scales and categories?",
            a: "Yes. The matrix size, the likelihood and impact definitions and the risk taxonomy are configured to your framework. The point of the module is to apply your scale consistently, not to impose a new one.",
          },
          {
            q: "How does this connect to internal audit planning?",
            a: "Risks carry a link to the auditable entities in the Risk Based Internal Audit module, so the annual plan can be built off current ratings and coverage gaps against high-rated risks are visible before the plan goes to the Audit Committee.",
          },
          {
            q: "Can subsidiaries run their own registers?",
            a: "Yes. Each entity can maintain its own register while rolling up to a group view, with the same taxonomy and scales applied so the consolidated heat map is comparable.",
          },
          {
            q: "Is there an audit trail on changes to a risk?",
            a: "Every change to rating, ownership, treatment or status is recorded with the user and timestamp, and a snapshot is retained at each reporting date so a past committee pack can be reconciled to the register.",
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
        icon: ClipboardCheck,
        summary:
          "Plan by risk, approve the plan, assign it process-wise and execute it.",
        tagline:
          "A plan built on risk, approved on record, and assigned process by process for execution",
        description:
          "Build the audit universe, score it on risk factors, map existing assurance where required, and take the plan through approval. Once approved, the plan is assigned process-wise, and from there each process follows the same steps as a control testing run — project, RCM, IDR, testing, approval, management response, approval and report.",
        overview:
          "Internal audit is judged twice — once on whether the plan covered what mattered, and again on whether the file supports the report. This module holds both ends. The plan is built from the audit universe and risk factor scoring, with assurance mapping available where you want to see what other providers already cover, and it goes through formal approval. Once approved, it is assigned process-wise, and from that point the steps are the same ones a control testing run follows — project, RCM upload, IDR release, testing, approval, management response, approval and report — so the plan and the evidence behind it stay in one line.",
        atAGlance: [
          {
            label: "Built for",
            value: "Heads of Internal Audit and engagement teams",
          },
          { label: "Replaces", value: "Plan workbooks and shared-drive files" },
          { label: "Cycle", value: "Annual plan, executed process by process" },
          {
            label: "Then runs",
            value: "Project, RCM, IDR, testing, approvals, report",
          },
        ],
        challenges: [
          {
            title: "This year's plan is last year's plan",
            text: "Coverage is carried forward by habit, and there is no record showing why one area was audited and another was not.",
          },
          {
            title: "The approved plan and the executed plan differ",
            text: "Assignments change through the year without a record, so what the committee approved and what was actually done are reconciled from memory.",
          },
          {
            title: "Execution runs on a different system to planning",
            text: "The plan sits in one place and the testing file in another, so coverage status has to be collated rather than read.",
          },
          {
            title: "Internal audit repeats work others have already done",
            text: "Without a view of what management testing, external audit or a regulator already covers, effort goes into areas that are already assured.",
          },
        ],
        outcomes: [
          "An audit universe scored on defined risk factors",
          "Optional assurance mapping showing what other providers already cover",
          "A plan that is formally approved, with the approval on record",
          "Process-wise assignment, so every line of the plan has an owner",
          "Execution on the same steps every testing run follows, with one evidence trail",
          "Plan versus actual coverage readable at any point in the year",
        ],
        capabilities: [
          {
            icon: Building2,
            title: "Audit universe",
            text: "A maintained library of auditable entities — processes, locations, subsidiaries, systems and projects — with the attributes used to rank them.",
            points: [
              "Process, entity, location and system dimensions",
              "Last audited date and prior rating retained",
              "Reviewed and updated each planning cycle",
            ],
          },
          {
            icon: Filter,
            title: "Risk factors and scoring",
            text: "Score each auditable entity on weighted risk factors, drawing current ratings from the ERM register, so the ranking reflects the same risk view the board sees.",
            points: [
              "Configurable risk factors and weights",
              "Current residual ratings drawn from ERM",
              "Ranked universe with the scoring rationale retained",
            ],
          },
          {
            icon: Network,
            title: "Assurance mapping (optional)",
            text: "Where you want it, map significant risks to the assurance they already receive — management testing, control testing, external and statutory audit, regulatory inspection — so the plan is set on where assurance is missing rather than on where it is easiest to repeat.",
            points: [
              "Risk mapped across the three lines and external providers",
              "Gaps, duplication and over-assurance made visible",
              "Optional step — used where the coverage picture matters",
            ],
          },
          {
            icon: CalendarClock,
            title: "Plan preparation",
            text: "Turn the ranked universe into a plan with periods, teams and effort, drawn from the scoring and the assurance view rather than from last year's list.",
            points: [
              "Annual, rolling and ad-hoc engagements",
              "Resource and man-day allocation",
              "Scoring rationale carried with the plan",
            ],
          },
          {
            icon: Stamp,
            title: "Plan approval",
            text: "The plan goes through formal approval before execution, and the approved version is the baseline against which the year is measured.",
            points: [
              "Approval recorded with authority and date",
              "Approved plan locked as the baseline",
              "Subsequent changes tracked against it",
            ],
          },
          {
            icon: UserCheck,
            title: "Process-wise assignment",
            text: "The approved plan is broken down process by process and assigned to teams with periods and timelines, so every line has a named owner and a date.",
            points: [
              "Assignment by process with team and period",
              "Reviewer and approver named at assignment",
              "Reassignment tracked against the approved plan",
            ],
          },
          {
            icon: Workflow,
            title: "Execution, step by step",
            text: "From assignment onward the steps are the same ones a control testing run follows — a project is created, the RCM is uploaded, the IDR is released, testing is done and approved, the management response is filled and approved, and the report is generated.",
            points: [
              "A project per assigned process",
              "IDR, testing and evidence held in the project",
              "Management response approved before the report",
            ],
          },
          {
            icon: TrendingUp,
            title: "Coverage and status analytics",
            text: "Track plan versus actual coverage, the status of each assigned process and observations arising, across the year rather than at the end of it.",
            points: [
              "Plan versus actual by period and process",
              "Status of every assigned process in one view",
              "Observation counts by rating and process",
            ],
          },
        ],
        screens: [
          {
            image: rbiaPlanOverview,
            alt: "RiskMan GRC internal audit plan overview showing scored universe objects, risk profile by band, plan disposition and a risk heat map by quarter",
            title: "The plan, once it is approved",
            caption:
              "The plan overview reads the way the plan is built — audit universe, risk framework, scoring, annual plan and assignments across the top, and underneath it the scored universe by band, what the year commits to, and the quarter each auditable area falls in. The approval is stamped on the record with who submitted it and who approved it.",
          },
        ],
        lifecycle: [
          {
            title: "Build the universe",
            text: "Define and maintain auditable entities, each with its owner, its prior coverage and the risks it carries.",
          },
          {
            title: "Score on risk factors",
            text: "Apply the weighted risk factors and the current ratings from the register, and rank the universe on the result.",
          },
          {
            title: "Map assurance (optional)",
            text: "Where the coverage picture matters, set the ranked universe against the assurance each risk already receives from management, external audit and regulators before committing audit effort.",
          },
          {
            title: "Prepare the plan",
            text: "Convert the ranking into a periodised plan with teams and effort, carrying the scoring rationale with it.",
          },
          {
            title: "Approve the plan",
            text: "The plan is formally approved and becomes the baseline for the year, with the approval recorded.",
          },
          {
            title: "Assign process-wise",
            text: "Break the approved plan down by process and assign each one to a team with its period and timeline.",
          },
          {
            title: "Execute",
            text: "From here the steps are the same as a control testing run — create the project, upload the RCM, release the IDR, test, approve the testing, fill the management response, approve it and generate the report.",
          },
          {
            title: "Report and follow up",
            text: "Observations and agreed actions from the executed processes go to the Action Taken Report module and are closed against evidence.",
          },
        ],
        deliverables: [
          "Audit universe with scoring rationale",
          "Risk factor scoring sheet and ranked universe",
          "Assurance map by risk and assurance provider, where used",
          "Risk-based annual internal audit plan",
          "Approved plan with approval authority and date",
          "Process-wise assignment schedule with teams and periods",
          "Executed testing file and report for each assigned process",
          "Plan versus actual coverage dashboard and committee pack",
        ],
        standards: [
          {
            name: "Companies Act 2013 — Sec 138 and Rule 13",
            note: "Supports the internal audit requirement and the scope set by the Board or Audit Committee.",
          },
          {
            name: "Companies Act 2013 — Sec 177",
            note: "Reporting structure for Audit Committee review of internal audit.",
          },
          {
            name: "SEBI LODR — Reg 18",
            note: "Committee pack covering internal audit findings and follow-up for listed entities.",
          },
          {
            name: "ICAI Standards on Internal Audit",
            note: "Planning, documentation, evidence, supervision and reporting structured around the SIA framework.",
          },
          {
            name: "IIA International Professional Practices Framework",
            note: "Risk-based planning, engagement conduct and quality review practices.",
          },
        ],
        roles: [
          {
            role: "Head of Internal Audit",
            text: "Owns the universe, the scoring, the plan and the Audit Committee relationship.",
          },
          {
            role: "Approving authority",
            text: "Approves the plan before execution begins, and approves changes to it during the year.",
          },
          {
            role: "Engagement teams",
            text: "Take the processes assigned to them and execute each through the control testing flow.",
          },
          {
            role: "Process owners and auditees",
            text: "Respond to the IDR, fill the management response and commit to actions with dates.",
          },
        ],
        faqs: [
          {
            q: "How does the plan get built?",
            a: "From the audit universe, scored on your weighted risk factors with current ratings pulled from the risk register. Assurance mapping can be added where you want to see what management testing, external audit or a regulator already covers before internal audit commits effort — it is an optional step, not a required one.",
          },
          {
            q: "What happens after the plan is approved?",
            a: "The approved plan is assigned process-wise, with a team, a period and a timeline against each process. From there the steps are the same ones a control testing run follows — project creation, RCM upload, IDR release, testing, approval, management response, approval and report.",
          },
          {
            q: "Is execution separate from planning?",
            a: "No. The assignment links the plan line to the project that executes it, so coverage status, testing status and the report all read back to the approved plan instead of being collated separately.",
          },
          {
            q: "Can changes to the approved plan be made during the year?",
            a: "Yes, and they are tracked against the approved baseline rather than replacing it, so the committee can see what was approved, what changed and why.",
          },
          {
            q: "Where do observations go once a process is executed?",
            a: "Observations and the actions management commits to in the response step flow into the Action Taken Report module, where each is tracked to an evidence-backed closure.",
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
        icon: ShieldCheck,
        summary:
          "Run a testing project end to end — RCM, IDR, testing, approval, management response and report.",
        tagline:
          "Project to report: the RCM, the requests, the testing, the responses and the sign-offs in one run",
        description:
          "Create a testing project, upload the RCM, release the information and document requests, test the controls, approve the results, collect the management response and generate the report — with the evidence attached at every step.",
        overview:
          "Control testing is a defined run, not a collection of files. A project is created for the entity and period, the RCM is uploaded to it, the IDR goes out to process owners for the information and documents required, the team tests against what comes back, the reviewer approves the results, management fills its response on what failed, that response is approved, and the report is generated from the approved record — so the file that supports the conclusion is built while the work happens rather than assembled after it.",
        atAGlance: [
          {
            label: "Built for",
            value: "CFOs, controllers and IFC/SOX teams",
          },
          { label: "Replaces", value: "RCM workbooks and evidence over email" },
          { label: "Runs as", value: "A project per entity, process and period" },
          { label: "Ends with", value: "An approved report and a closed file" },
        ],
        challenges: [
          {
            title: "The RCM is a workbook nobody owns",
            text: "Process changes are not reflected, control descriptions drift from what is actually performed, and two versions of the matrix circulate at once.",
          },
          {
            title: "Requests and evidence run on email",
            text: "Information and documents are chased over mail, so nobody can say what has been requested, what has arrived and what is still pending on the day it is asked.",
          },
          {
            title: "Management response comes in late and loose",
            text: "Responses are collected in a separate sheet after testing is done, and the link between the exception, the response and the person who accepted it is held together by hand.",
          },
          {
            title: "The report is rebuilt from the file",
            text: "Results, exceptions and responses are re-keyed into a report at the end, so the report and the working file can drift apart.",
          },
        ],
        outcomes: [
          "One project that carries the scope, the RCM, the testing and the report",
          "Every information and document request tracked with its status and due date",
          "Sample, evidence and conclusion held together on the control",
          "Testing approved by a reviewer before it reaches management",
          "Management response recorded against the exception and formally approved",
          "The report generated from the approved record, not re-keyed from it",
        ],
        capabilities: [
          {
            icon: FolderOpen,
            title: "Project setup",
            text: "Each round of testing runs as a project — entity, process scope, period, team and timeline defined up front, so the work has a boundary and a status of its own.",
            points: [
              "Entity, process and period scope",
              "Team, reviewer and approver assignment",
              "Project timeline and status tracking",
            ],
          },
          {
            icon: Database,
            title: "RCM upload and control library",
            text: "Upload the risk and control matrix into the project — process, sub-process, risk, control and the attributes that drive testing — instead of maintaining it alongside in a workbook.",
            points: [
              "Bulk upload of the existing RCM",
              "Preventive / detective, manual / automated, key / non-key",
              "Control frequency, owner and assertion held per control",
            ],
          },
          {
            icon: ClipboardList,
            title: "IDR — information and document requests",
            text: "Release the IDR from the project to the process owners, with what is required against which control and by when, so the request list is a tracked register rather than a mail thread.",
            points: [
              "Requests raised control-wise with due dates",
              "Owner-wise pending and received status",
              "Reminders until the request is closed",
            ],
          },
          {
            icon: ClipboardCheck,
            title: "Testing",
            text: "Test design and operating effectiveness against the uploaded RCM, recording the sample, the attributes tested and the conclusion on each control.",
            points: [
              "Design and operating effectiveness in one run",
              "Sample guidance by control frequency",
              "Attribute-level results with exceptions isolated",
            ],
          },
          {
            icon: FolderOpen,
            title: "Evidence trail",
            text: "What comes back against the IDR attaches to the control and the sample item it supports, so the conclusion and its evidence never travel separately.",
            points: [
              "IDR response mapped to the control tested",
              "Evidence attached at sample level",
              "Complete trail retained with the project",
            ],
          },
          {
            icon: FileCheck,
            title: "Review and approval of testing",
            text: "Testing is submitted for review, and the reviewer approves or returns it with comments before anything goes to management.",
            points: [
              "Maker-checker on every test",
              "Return with comments and re-submission",
              "Approver identity and date recorded",
            ],
          },
          {
            icon: ShieldAlert,
            title: "Management response (MR)",
            text: "Process owners fill the management response against each exception — the reason, the action committed and the date — inside the project rather than in a separate sheet.",
            points: [
              "MR captured against the specific exception",
              "Action and target date recorded with the response",
              "Pending MR visible by owner and by process",
            ],
          },
          {
            icon: Stamp,
            title: "MR approval and report generation",
            text: "The management response is reviewed and approved, and the report is generated from the approved testing and responses.",
            points: [
              "MR approved, or returned for revision",
              "Report generated from approved records",
              "Report retained with the project it came from",
            ],
          },
        ],
        screens: [
          {
            image: controlTestingProject,
            alt: "RiskMan GRC control testing project showing RCM controls, IDR fields, report and analytics tabs with testing progress, pass rate and open findings",
            title: "Inside a testing project",
            caption:
              "One project carries the RCM controls and the IDR fields raised against them, the report, and the analytics that read off both — controls in scope, testing progress, pass rate and open findings — with the project's own status line showing where it has reached in the approval and report release run.",
          },
        ],
        lifecycle: [
          {
            title: "Create the project",
            text: "Set up the testing project for the entity, process scope and period, with the team, the reviewer and the timeline defined.",
          },
          {
            title: "Upload the RCM",
            text: "Load the risk and control matrix into the project, with each control's attributes, frequency and owner.",
          },
          {
            title: "Release the IDR",
            text: "Send the information and document requests to process owners against the controls to be tested, with due dates, and track what comes back.",
          },
          {
            title: "Test",
            text: "Test design and operating effectiveness on the samples selected, attach the evidence received and conclude on each control.",
          },
          {
            title: "Approve the testing",
            text: "The reviewer examines the testing and either approves it or returns it with comments for rework.",
          },
          {
            title: "Fill the management response",
            text: "Process owners record the MR against each exception — the explanation, the action committed and the date by which it will be done.",
          },
          {
            title: "Approve the MR",
            text: "The management response is reviewed and approved, or sent back for revision where it does not address the exception.",
          },
          {
            title: "Generate the report",
            text: "The report is produced from the approved testing and the approved responses, and stays attached to the project that produced it.",
          },
        ],
        deliverables: [
          "Project scope sheet with team and timeline",
          "Uploaded risk and control matrix for the project",
          "IDR register with request, owner and status",
          "Testing papers with samples, attributes and evidence",
          "Approved testing results with reviewer sign-off",
          "Exception list with management response against each",
          "Approved MR record with committed actions and dates",
          "Final control testing report generated from the project",
        ],
        standards: [
          {
            name: "Companies Act 2013 — Sec 134(5)(e)",
            note: "Supports the directors' responsibility statement on internal financial controls.",
          },
          {
            name: "Companies Act 2013 — Sec 143(3)(i)",
            note: "Produces the file the statutory auditor examines when reporting on IFC adequacy and operating effectiveness.",
          },
          {
            name: "ICAI Guidance Note on Audit of Internal Financial Controls over Financial Reporting",
            note: "Design and operating effectiveness testing structured along the Guidance Note's approach.",
          },
          {
            name: "COSO Internal Control — Integrated Framework (2013)",
            note: "Component and principle mapping for entity-level and process controls.",
          },
          {
            name: "SEBI LODR — Reg 17(8)",
            note: "Supports the CEO and CFO certification on internal controls for financial reporting.",
          },
          {
            name: "SOX Section 404",
            note: "For groups with a US-listed parent running a 404 programme alongside IFC.",
          },
        ],
        roles: [
          {
            role: "CFO and Controller",
            text: "Own the assertion, and track project status well before the reporting date.",
          },
          {
            role: "Testing team",
            text: "Runs the project — RCM, IDR, testing — and submits results for review.",
          },
          {
            role: "Process and control owners",
            text: "Respond to the IDR, and fill the management response where a control fails.",
          },
          {
            role: "Reviewer and approver",
            text: "Approves the testing and the management response before the report is generated.",
          },
        ],
        faqs: [
          {
            q: "What exactly is the IDR step?",
            a: "The information and document request is raised from the project to the process owners, control-wise, stating what is needed and by when. It becomes a tracked register — requested, pending, received — so the team is not chasing documents over email, and what arrives attaches to the control it was requested for.",
          },
          {
            q: "Can we upload our existing RCM into a project?",
            a: "Yes. The matrix is uploaded into the project with its processes, risks, controls and attributes, and becomes the control set that testing runs against. Later projects can start from it rather than from a blank sheet.",
          },
          {
            q: "Why are there two approvals in the flow?",
            a: "They cover different things. The first approval is the reviewer accepting the testing itself, before results are put to management. The second is the approval of the management response — whether what management has committed actually addresses the exception. Both are recorded with the approver and the date.",
          },
          {
            q: "Is the report generated or drafted?",
            a: "Generated. It is produced from the approved testing results and approved management responses held in the project, so the report reconciles to the file rather than being re-keyed from it.",
          },
          {
            q: "Are these the same steps internal audit follows?",
            a: "Yes. Internal audit starts earlier — audit universe, risk factor scoring, assurance mapping where required, plan approval and process-wise assignment — and from that point the steps are the same ones set out here: project, RCM, IDR, testing, approval, management response, approval and report.",
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
        icon: ListChecks,
        summary:
          "Track every observation through to closure, with owners and due dates.",
        tagline:
          "Every observation, from any source, tracked to an evidence-backed closure",
        description:
          "Turn audit observations and control failures into owned actions with due dates, then track them to closure. The ATR is generated from live status instead of being re-compiled by hand each cycle.",
        overview:
          "The Action Taken Report is the part of governance that most often runs on email. This module makes it a register instead: every observation — from internal audit, control testing, statutory and tax audit, regulatory inspection or management review — becomes an action with an owner, a due date and a defined closure standard. Closure requires evidence and a reviewer's acceptance, and the quarterly ATR is produced from the register rather than compiled the week before the meeting.",
        atAGlance: [
          {
            label: "Built for",
            value: "Audit Committees, IA teams and action owners",
          },
          { label: "Replaces", value: "Follow-up trackers and status emails" },
          { label: "Cycle", value: "Continuous, reported each committee meeting" },
          { label: "Feeds", value: "Audit Committee and Board reporting" },
        ],
        challenges: [
          {
            title: "The ATR is rebuilt every quarter",
            text: "Someone collates status from several trackers and a mail chain each cycle, and the version presented is only as good as that week's responses.",
          },
          {
            title: "Findings from different sources live apart",
            text: "Internal audit, statutory audit, tax and regulatory observations sit in separate files, so nobody sees the total open position for a process owner.",
          },
          {
            title: "Closure is asserted, not evidenced",
            text: "An item is marked closed on a verbal confirmation, and the same issue is raised again at the next audit.",
          },
          {
            title: "Overdue items surface late",
            text: "Nothing escalates on its own, so slippage is discovered in the meeting rather than in the month it happened.",
          },
        ],
        outcomes: [
          "One register for observations from every source",
          "A named owner and a due date on every action",
          "Reminders and escalation running without manual chasing",
          "Closure only against evidence accepted by a reviewer",
          "Repeat observations flagged against their original finding",
          "The ATR produced from live status on any date it is asked for",
        ],
        capabilities: [
          {
            icon: Database,
            title: "One action register",
            text: "Observations from internal audit, control testing, statutory and tax audit, regulatory inspection, management review and risk treatment all land in the same register with their source retained.",
            points: [
              "Source, reference and date carried on each item",
              "Created automatically from observations and failed controls",
              "Manual entry for external and inspection findings",
            ],
          },
          {
            icon: UserCheck,
            title: "Ownership and accountability",
            text: "Every action carries an individual owner, a reviewer and an agreed date — not a department and a quarter.",
            points: [
              "Individual owner with a functional reviewer",
              "Agreed target date recorded at the outset",
              "Reassignment tracked with reason and date",
            ],
          },
          {
            icon: Flag,
            title: "Priority and risk rating",
            text: "Carry the rating from the originating observation so the register can be read by severity rather than by volume.",
            points: [
              "Rating inherited from the source observation",
              "Regulatory and financial impact flags",
              "Committee views filtered to high and critical",
            ],
          },
          {
            icon: Bell,
            title: "Reminders and escalation",
            text: "Owners are reminded before the due date and after it, and continued slippage escalates to the reviewer and the function head on a defined ladder.",
            points: [
              "Pre-due and overdue reminders",
              "Escalation ladder by days overdue",
              "Scheduled digest to function heads",
            ],
          },
          {
            icon: FileCheck,
            title: "Evidence-backed closure",
            text: "The owner submits closure evidence, the reviewer accepts or returns it, and closure is recorded only on acceptance.",
            points: [
              "Closure evidence attached to the action",
              "Reviewer acceptance or return with comments",
              "Closure date and approver retained",
            ],
          },
          {
            icon: Clock,
            title: "Extensions on record",
            text: "Where a date genuinely has to move, the extension is requested with a reason and approved — and the original date stays visible.",
            points: [
              "Extension request with justification",
              "Approval by the designated authority",
              "Original and revised dates both retained",
            ],
          },
          {
            icon: History,
            title: "Repeat observation tracking",
            text: "A new observation can be linked to a closed one, so repeats are visible as repeats and the closure that did not hold is on record.",
            points: [
              "Link to the original finding",
              "Repeat count by process and owner",
              "Closure quality visible over time",
            ],
          },
          {
            icon: BarChart3,
            title: "Ageing and committee reporting",
            text: "Ageing buckets, owner-wise positions and closure trends render live, and the formal ATR is generated for any period without re-collation.",
            points: [
              "Ageing buckets with overdue analysis",
              "Owner, function and source-wise views",
              "Period ATR exported for the committee pack",
            ],
          },
        ],
        screens: [
          {
            image: atrAnalytics,
            tab: "Analytics",
            alt: "Remediation analytics dashboard with tiles for total, closed, open and overdue actions and closure rate, above distribution by process, an ageing chart of overdue actions and a breakdown by risk",
            title: "The position on one screen",
            caption:
              "Total, closed, open and overdue actions with the closure rate against its target — the four numbers an Audit Committee asks for first — and underneath them the actions split by process, the ageing of what is overdue in day bands, and a breakdown that switches between risk, status and priority.",
          },
          {
            image: atrOverdue,
            tab: "Overdue summary",
            alt: "Overdue summary table listing project and process, observation, management response, point of contact, risk, priority and how many days each action is past its deadline",
            title: "Every action past its deadline",
            caption:
              "Each overdue action with the observation behind it, the response management committed to, the named point of contact, the risk and priority, and exactly how far past the agreed date it has run — the register the Action Taken Report is generated from.",
          },
        ],
        lifecycle: [
          {
            title: "Capture",
            text: "Observations arrive from internal audit, control testing and external sources, carrying their reference and rating.",
          },
          {
            title: "Assign",
            text: "An owner, a reviewer and an agreed date are recorded, along with the action management has committed to.",
          },
          {
            title: "Act",
            text: "Owners update progress against the action, with reminders running before and after the due date.",
          },
          {
            title: "Evidence",
            text: "The owner submits the evidence that supports closure rather than a status statement.",
          },
          {
            title: "Review and close",
            text: "The reviewer accepts the evidence and closes the item, or returns it with comments and a revised date.",
          },
          {
            title: "Report",
            text: "The ATR, the ageing analysis and the repeat-observation summary are generated for the Audit Committee from live status.",
          },
        ],
        deliverables: [
          "Period Action Taken Report for the Audit Committee",
          "Open and overdue action register",
          "Ageing analysis by bucket, function and source",
          "Owner-wise and function-wise status dashboard",
          "Closure evidence file per action",
          "Repeat observation summary",
          "Extension and reassignment log",
          "Closure trend and turnaround analysis",
        ],
        standards: [
          {
            name: "Companies Act 2013 — Sec 177(4)",
            note: "Supports Audit Committee review of internal audit findings and their follow-up.",
          },
          {
            name: "SEBI LODR — Reg 18 and Schedule II Part C",
            note: "Follow-up reporting on internal audit observations for listed entities.",
          },
          {
            name: "ICAI Standards on Internal Audit",
            note: "Monitoring and reporting of prior audit issues, in line with the SIA framework.",
          },
          {
            name: "IIA International Professional Practices Framework",
            note: "Monitoring progress on communicated results until resolution.",
          },
        ],
        roles: [
          {
            role: "Audit Committee and Board",
            text: "Read the ATR, the ageing position and what has not moved since the last meeting.",
          },
          {
            role: "Internal audit",
            text: "Owns the register, validates closure quality and flags repeats.",
          },
          {
            role: "Action owners",
            text: "Update progress and submit the evidence that supports closure.",
          },
          {
            role: "Function heads",
            text: "See their open position and receive escalation on sustained slippage.",
          },
        ],
        faqs: [
          {
            q: "Can we track findings that did not come from internal audit?",
            a: "Yes. Statutory audit, tax audit, regulatory inspection, management review and risk treatment actions can all be recorded with their own source reference, so the committee sees one consolidated position.",
          },
          {
            q: "Who can mark an action closed?",
            a: "Owners submit closure with evidence; closure itself is recorded only when the designated reviewer accepts that evidence. Returns are logged with comments, so the history of a disputed closure is visible.",
          },
          {
            q: "How does the quarterly ATR get produced?",
            a: "It is generated from the register for the period selected, with the opening position, movements, closures and remaining open items, so the pack reconciles to live data rather than to a separately maintained sheet.",
          },
          {
            q: "Can owners be reminded automatically?",
            a: "Yes. Reminders run before and after the due date, and an escalation ladder notifies the reviewer and the function head as an item ages past defined thresholds.",
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
        icon: FileText,
        summary:
          "One library for policies and SOPs, with versions and approvals tracked.",
        tagline:
          "The current version, the approval behind it, and proof that people have read it",
        description:
          "Hold policies and SOPs in one library with version history, review dates and approval trails. Each document can be mapped to the risks and controls it governs, so a policy change is visible wherever it matters.",
        overview:
          "A policy framework is only as good as the answer to three questions: which version is current, who approved it, and can you show that the people it binds have seen it. This module holds policies and standard operating procedures in one governed library — drafting and approval on a workflow, versions and effective dates on record, acknowledgement tracked by employee, review dates that come up on their own, and a mapping to the risks, controls and processes each document governs.",
        atAGlance: [
          {
            label: "Built for",
            value: "Company Secretaries, compliance and process owners",
          },
          { label: "Replaces", value: "Shared drives and 'final_v3' documents" },
          { label: "Cycle", value: "Annual or event-driven review per document" },
          { label: "Feeds", value: "Control testing and secretarial compliance" },
        ],
        challenges: [
          {
            title: "Nobody is certain which version is current",
            text: "Several copies circulate across drives and mailboxes, and the one people actually follow is not necessarily the one that was approved.",
          },
          {
            title: "The approval trail is in an old mail thread",
            text: "When the auditor asks who approved a policy and on what date, the answer has to be reconstructed from inboxes and minutes.",
          },
          {
            title: "Reviews are missed until something happens",
            text: "Documents carry no review date, so a policy written against superseded law stays in force until an audit notices.",
          },
          {
            title: "Policies sit apart from the controls they govern",
            text: "A policy change does not reach the control description or the SOP that depends on it, so the framework drifts out of alignment.",
          },
        ],
        outcomes: [
          "One library with a single current version of every document",
          "Drafting, review and approval recorded as workflow, not as email",
          "Effective dates, version history and superseded copies retained",
          "Acknowledgement tracked by employee and reportable",
          "Review dates that raise themselves before they lapse",
          "A visible map from policy to process, risk and control",
        ],
        capabilities: [
          {
            icon: BookOpen,
            title: "Governed document library",
            text: "Policies, SOPs, charters, manuals and formats held in one structured library with the metadata that makes them governable.",
            points: [
              "Owner, approver and approving authority",
              "Document number, version and effective date",
              "Category, entity and applicability",
            ],
          },
          {
            icon: Workflow,
            title: "Drafting and approval workflow",
            text: "A document moves from draft through review to approval on a defined route, and the trail is captured as it happens.",
            points: [
              "Configurable review and approval routes",
              "Reviewer comments held with the draft",
              "Board or committee approval reference recorded",
            ],
          },
          {
            icon: History,
            title: "Version control and change log",
            text: "Each revision is a version with a change summary, and superseded versions are retained rather than overwritten.",
            points: [
              "Version history with change summary",
              "Superseded versions archived, not deleted",
              "What changed between versions",
            ],
          },
          {
            icon: Stamp,
            title: "Publication and acknowledgement",
            text: "Publish to the audience a document applies to, and track who has read and acknowledged it — with reminders for those who have not.",
            points: [
              "Applicability by entity, function or grade",
              "Employee-wise acknowledgement record",
              "Reminders and an acknowledgement status report",
            ],
          },
          {
            icon: CalendarClock,
            title: "Review calendar",
            text: "Every document carries a next review date, and the owner is prompted ahead of it so periodic review happens on schedule.",
            points: [
              "Review frequency per document",
              "Advance reminders to the document owner",
              "Review-due and overdue dashboard",
            ],
          },
          {
            icon: Link2,
            title: "Mapped to risk and control",
            text: "Link each document to the processes, risks and controls it governs, so a policy change can be traced to what it affects.",
            points: [
              "Policy to process and SOP linkage",
              "Policy to risk and control mapping",
              "Processes without a governing policy identified",
            ],
          },
          {
            icon: ShieldAlert,
            title: "Exception and waiver register",
            text: "Where a deviation is approved, record it as an exception with a validity period rather than leaving it undocumented.",
            points: [
              "Exception request with justification",
              "Approval authority and validity period",
              "Alerts as an exception approaches expiry",
            ],
          },
          {
            icon: Search,
            title: "Search and controlled access",
            text: "People find the current version by searching for it, with access governed so confidential documents reach only their intended audience.",
            points: [
              "Full-text search across the library",
              "Role-based visibility and download control",
              "Read access logged for sensitive documents",
            ],
          },
        ],
        screens: [
          {
            image: policyAcknowledgements,
            tab: "Acknowledgements",
            alt: "Policy and SOP acknowledgement dashboard showing total assigned, acknowledged and pending tiles above a list of policies awaiting acknowledgement and a department progress panel",
            title: "Where each person stands",
            caption:
              "What is assigned to someone, what they have acknowledged and what is still outstanding — with the pending policies listed oldest due date first, and the same list tracked across the department. This is the view that turns acknowledgement from an assumption into a record.",
          },
        ],
        lifecycle: [
          {
            title: "Draft",
            text: "The owner drafts against the approved template and the document numbering convention.",
          },
          {
            title: "Review",
            text: "Reviewers comment on the draft in place, and the comments stay with the version they relate to.",
          },
          {
            title: "Approve",
            text: "The approving authority signs off, and the approval reference and date are recorded against the version.",
          },
          {
            title: "Publish",
            text: "The document goes live with an effective date, and the previous version is superseded and archived.",
          },
          {
            title: "Acknowledge",
            text: "The applicable audience reads and acknowledges, with reminders until the record is complete.",
          },
          {
            title: "Review cycle",
            text: "The next review date comes up on its own; the document is reaffirmed, revised or retired.",
          },
        ],
        deliverables: [
          "Policy and SOP master list with current versions",
          "Approval trail with authority and date per document",
          "Version history and change log",
          "Employee acknowledgement status report",
          "Review-due and overdue dashboard",
          "Exception and waiver register",
          "Policy to risk and control coverage map",
          "Archive of superseded versions",
        ],
        standards: [
          {
            name: "Companies Act 2013 — board-approved policies",
            note: "Supports CSR, related party, vigil mechanism and similar policies requiring Board approval and disclosure.",
          },
          {
            name: "SEBI LODR — Reg 9 and Schedule II",
            note: "Preservation of documents and maintenance of the policies listed entities must keep current.",
          },
          {
            name: "SEBI PIT Regulations",
            note: "Code of conduct and its acknowledgement by designated persons.",
          },
          {
            name: "ISO 9001 / ISO 27001",
            note: "Documented information control — approval, version, distribution and retention.",
          },
          {
            name: "DPDP Act 2023",
            note: "Maintenance of the privacy notice and the internal policies around it.",
          },
        ],
        roles: [
          {
            role: "Company Secretary",
            text: "Maintains board-approved policies with their approval references and disclosure obligations.",
          },
          {
            role: "Compliance and risk teams",
            text: "Keep the framework aligned to current law and track review cycles.",
          },
          {
            role: "Process owners",
            text: "Own the SOPs for their process and revise them when the process changes.",
          },
          {
            role: "Employees",
            text: "Find the current version and record acknowledgement where it is required.",
          },
        ],
        faqs: [
          {
            q: "Can we keep our own document numbering and templates?",
            a: "Yes. Numbering conventions, categories and templates are configured to your framework, and existing documents retain their numbers when they are brought into the library.",
          },
          {
            q: "How is acknowledgement recorded?",
            a: "A published document is assigned to its applicable audience, and each person's acknowledgement is recorded with a timestamp. Pending acknowledgements are reportable and can be reminded automatically.",
          },
          {
            q: "Are superseded versions retained?",
            a: "Yes. Superseded versions are archived with their effective and supersession dates, so it is possible to establish which version was in force on a given date.",
          },
          {
            q: "How does this help during an audit?",
            a: "For any document, the auditor can be shown the current version, who approved it and when, the change history, the acknowledgement position and the controls it governs — without assembling it from separate sources.",
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
