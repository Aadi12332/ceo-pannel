import { useState } from "react";
import policiesIcon from "../../assets/policiesicon.svg";
import builderIcon from "../../assets/policybuildericon.svg";
import simulatorIcon from "../../assets/simulatoricon.svg";
import workflowIcon from "../../assets/publishingicon.svg";
import auditIcon from "../../assets/audittrailicon.svg";
import draftIcon from "../../assets/workflowicon1.svg";
import reviewIcon from "../../assets/workflowicon2.svg";
import approvedIcon from "../../assets/workflowicon3.svg";
import activeIcon from "../../assets/workflowicon4.svg";
import arrowIcon from "../../assets/workflowicon5.png";
import Select from "../common/Select";
import { ErrorIcon } from "../../assets/icons/icons";
import CreatePolicyModal from "./CreatePolicyModal";
import PolicyImpactModal from "./PolicyImpactModal";
import IssueExceptionModal from "./IssueExceptionModal";
import {
  SquarePen,
  Play,
  RotateCcw,
  Ticket,
  Upload
} from "lucide-react"

const actionIcons = {
  Edit: SquarePen,
  Simulate: Play,
  Rollback: RotateCcw,
  "Issue Exception": Ticket,
  Publish: Upload,
}

const TABS = [
  { key: "policies", label: "Policies", icon: policiesIcon },
  { key: "builder", label: "Policy Builder", icon: builderIcon },
  { key: "simulator", label: "Simulator", icon: simulatorIcon },
  { key: "workflow", label: "Publishing Workflow", icon: workflowIcon },
  { key: "audit", label: "Audit Trail", icon: auditIcon },
];

const auditTrailData = [
  {
    who: "Michael Chen (CTO)",
    what: "Created new security policy",
    why: "Address recent vulnerability findings",
    when: "Dec 22, 12:45 PM",
    result: "success",
    risk: "high",
  },
  {
    who: "Michael Chen (CTO)",
    what: "Updated API rate limit policy",
    why: "Accommodate increased traffic load",
    when: "Dec 21, 05:30 PM",
    result: "success",
    risk: "medium",
  },
];

const workflowSteps = [
  {
    label: "Draft",
    icon: draftIcon,
    bg: "bg-gray-100",
  },
  {
    label: "Review",
    icon: reviewIcon,
    bg: "bg-yellow-100",
  },
  {
    label: "Approved",
    icon: approvedIcon,
    bg: "bg-blue-100",
  },
  {
    label: "Active",
    icon: activeIcon,
    bg: "bg-green-100",
  },
];

const options = [
  { value: "all", label: "All Cities" },
  { value: "nyc", label: "New York City" },
  { value: "sf", label: "San Francisco" },
  { value: "la", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "boston", label: "Boston" },
];

const policies = [
  {
    title: "Standard Refund Authorization",
    status: "published",
    scope: "global",
    code: "REF-001",
    version: "v2.3",
    previousVersions: 2,
    effectiveDate: "Jan 15, 2024, 05:30 AM",
    approvers: "None",
    enforcements: 1247,
    conditions: [
      "IF refund_amount <= 100",
      "IF order_age_days <= 30",
      "THEN auto_approve",
    ],
    actions: ["Edit", "Simulate", "Rollback", "Issue Exception"],
  },
  {
    title: "Manager-Approved Refunds",
    status: "published",
    scope: "global",
    code: "REF-002",
    version: "v1.8",
    previousVersions: 1,
    effectiveDate: "Feb 1, 2024, 05:30 AM",
    approvers: "CS Manager",
    enforcements: 432,
    conditions: [
      "IF refund_amount > 100",
      "IF refund_amount <= 500",
      "IF fraud_score < 50",
      "THEN require_approval: [CS_Manager]",
    ],
    actions: ["Edit", "Simulate", "Rollback", "Issue Exception"],
  },
  {
    title: "CEO High-Value Refund",
    status: "draft",
    scope: "city: NYC",
    code: "REF-003",
    version: "v2.1",
    previousVersions: 1,
    effectiveDate: "Dec 30, 2024, 05:30 AM",
    approvers: "CEO",
    enforcements: 0,
    conditions: [
      "IF refund_amount > 100",
      'IF city == "NYC"',
      "THEN require_approval: [CEO]",
    ],
    actions: ["Edit", "Simulate", "Publish", "Issue Exception"],
  },
];

const PolicyTabsPage = () => {
  const [active, setActive] = useState("policies");
  const [policyGroup, setPolicyGroup] = useState("");
  const [policyAction, setPolicyAction] = useState("");
  const [operator, setOperator] = useState("");
  const [scopeType, setScopeType] = useState("");
  const [simulation, setSimulation] = useState("");
  const [workflowpolicy, setWorkflowpolicy] = useState("");
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyImpactOpen, setPolicyImpactOpen] = useState(false);
  const [rollbackOpen, setRollbackOpen] = useState(false);

  const actionHandlers = {
    Edit: () => setPolicyOpen(true),
    Simulate: () => setPolicyImpactOpen(true),
    // Rollback: () => setRollbackOpen(true),
    "Issue Exception": () => setRollbackOpen(true),
  };

  return (
    <div className="mb-5 space-y-6">
      <div className="overflow-auto scroll-hide w-[calc(100vw-24px)]">
        <div className="bg-[#ECECF0] rounded-full p-1 flex gap-1 w-full min-w-[992px]">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[14px] flex-1 justify-center transition
              ${
                active === tab.key
                  ? "bg-white text-[#101828]"
                  : "text-[#475467]"
              }`}
          >
            <img src={tab.icon} className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>
      </div>

      {active === "policies" && (
        <div className="space-y-5 bg-white rounded-xl p-6 mb-5">
          <h2 className="text-[20px] font-semibold">Policy Rules by Group</h2>

          <div className="flex gap-2 flex-wrap">
            {[
              "All Policies",
              "Financial",
              "Access",
              "Approvals",
              "Automation",
              "Operations",
              "Security",
              "Expansion",
            ].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-full text-sm border ${
                  i === 0
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {policies.map((p) => (
            <div
              key={p.code}
              className="bg-white border rounded-xl p-5 space-y-4"
            >
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-2 items-center">
                    <h3 className="font-semibold">{p.title}</h3>

                    <div className="flex gap-2 text-[12px]">
                      <span
                        className={`px-2 py-0.5 rounded ${
                          p.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {p.status}
                      </span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                        {p.scope}
                      </span>
                    </div>
                  </div>

                  <p className="text-[13px] text-[#667085] mt-1">
                    {p.code} • {p.version} • {p.previousVersions} previous
                    versions
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-blue-600 text-[20px] font-semibold">
                    {p.enforcements}
                  </p>
                  <p className="text-[12px] text-[#667085]">Enforcements</p>
                </div>
              </div>

              <div className="flex gap-10 text-[13px] text-[#667085]">
                <div>
                  <p className="font-medium text-gray-900">Effective Date</p>
                  <p>{p.effectiveDate}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Required Approvers
                  </p>
                  <p>{p.approvers}</p>
                </div>
              </div>

              <div className="bg-[#F9FAFB] rounded-lg p-3 text-[13px] space-y-1 font-mono">
                {p.conditions.map((c) => (
                  <div key={c}>{c}</div>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                {p.actions.map((action) => {
                  const Icon = actionIcons[action];
                  return (
                  <button
                    key={action}
                    onClick={actionHandlers[action]}
                    className={`px-3 py-1.5 text-sm border rounded-md flex items-center gap-2 ${
                      action === "Publish"
                        ? "bg-gray-900 text-white"
                        : "bg-white"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {action}
                  </button>
                )
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {active === "builder" && (
        <div className="bg-white rounded-xl p-6 space-y-5 mb-5">
          <h2 className="text-[20px] font-semibold">
            Policy Builder – Create Rules, Not Paragraphs
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[14px] font-medium block mb-1">
                Policy Name
              </label>
              <input
                className="w-full rounded-lg bg-[#F2F4F7] h-10 px-3 py-2 text-sm outline-none"
                placeholder="e.g., High-Value Payout Approval"
              />
            </div>

            <div>
              <label className="text-[14px] font-medium block mb-1">
                Policy Group
              </label>
              <Select
                placeholder="Select policy group..."
                options={[
                  { label: "CEO Governance", value: "CEO_GOVERNANCE" },
                  { label: "Financial Controls", value: "FINANCIAL_CONTROLS" },
                  {
                    label: "Security & Compliance",
                    value: "SECURITY_COMPLIANCE",
                  },
                  {
                    label: "Workforce Management",
                    value: "WORKFORCE_MANAGEMENT",
                  },
                ]}
                value={policyAction}
                onChange={setPolicyAction}
                inputClassName="!h-10 !px-3 !text-[14px] !text-[#0A0A0A] !bg-[#F3F3F5] !rounded-lg"
                listItemClassName="!text-[14px] !px-3 !py-1.5"
              />
            </div>
          </div>

          <div className="border rounded-xl p-5 bg-[#FAF5FF] border-purple-200">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-4 border-purple-500" />
              Policy Scope
            </h4>

            <div>
              <label className="text-[14px] font-medium block mb-1">
                Scope Type
              </label>
              <Select
                placeholder="Global (All Entities)"
                options={[
                  { label: "Global (All Entities)", value: "GLOBAL" },
                  { label: "Country Level", value: "COUNTRY" },
                  { label: "City Level", value: "CITY" },
                  { label: "Department Level", value: "DEPARTMENT" },
                ]}
                value={scopeType}
                onChange={setScopeType}
                inputClassName="!h-10 !w-full !px-3 !text-[14px] !text-[#0A0A0A] !bg-[#F2F4F7] !rounded-lg lg:!w-[50%]"
                listItemClassName="!text-[14px] !px-3 !py-1.5"
                listParentClassName="lg:w-1/2"
              />
            </div>
          </div>

          <div className="border rounded-xl p-5 border-blue-200 bg-[#F8FAFF]">
            <h4 className="font-medium mb-4">Policy Conditions (IF)</h4>

            <div className="flex gap-3 items-center mb-3">
              <span className="text-blue-600 font-medium min-w-[120px]">
                IF
              </span>

              <input
                className="flex-1 rounded-lg bg-[#F2F4F7] h-10 px-3 py-2 text-sm outline-none"
                placeholder="Field (e.g., amount)"
              />

              <div className="flex-1">
                <Select
                  placeholder="="
                  options={[
                    { label: "=", value: "=" },
                    { label: ">", value: ">" },
                    { label: "<", value: "<" },
                    { label: "<=", value: "<=" },
                    { label: ">=", value: ">=" },
                  ]}
                  value={operator}
                  onChange={setOperator}
                  inputClassName="!h-10 !px-3 !text-[14px] !text-[#0A0A0A] !bg-[#F2F4F7] !rounded-lg flex-1"
                  listItemClassName="!text-[14px] !px-3 !py-1.5"
                />
              </div>
              <input
                className="rounded-lg bg-[#F2F4F7] h-10 px-3 py-2 text-sm outline-none flex-1"
                placeholder="Value"
              />
            </div>

            <button className="w-full border border-blue-400 text-blue-600 rounded-lg py-2 text-sm">
              + Add Condition
            </button>
          </div>

          <div className="border rounded-xl p-5 bg-[#FFF7ED] border-orange-200">
            <h4 className="font-medium mb-2">Policy Outcome (THEN)</h4>

            <label className="text-[14px] font-medium block mb-1">Action</label>
            <Select
              placeholder="Select policy group..."
              options={[
                { label: "CEO Governance", value: "CEO_GOVERNANCE" },
                { label: "Financial Controls", value: "FINANCIAL_CONTROLS" },
                {
                  label: "Security & Compliance",
                  value: "SECURITY_COMPLIANCE",
                },
                {
                  label: "Workforce Management",
                  value: "WORKFORCE_MANAGEMENT",
                },
              ]}
              value={policyGroup}
              onChange={setPolicyGroup}
              inputClassName="!h-10 !px-3 !text-[14px] !text-[#0A0A0A] !bg-[#F3F3F5] !rounded-lg lg:!w-[50%]"
              listItemClassName="!text-[14px] !px-3 !py-1.5"
              listParentClassName="lg:w-1/2"
            />
          </div>

          <div>
            <h4 className="font-medium mb-2">Policy Preview</h4>
            <div className="bg-[#0B1220] text-white rounded-xl p-4 font-mono text-[14px]">
              <span className="text-blue-400">IF</span>{" "}
              <span className="text-purple-400">[field]</span>{" "}
              <span className="text-yellow-400">==</span>{" "}
              <span className="text-yellow-400">[value]</span>
              <br />
              <span className="text-blue-400">THEN</span>{" "}
              <span className="text-red-400">[outcome]</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-lg text-sm">
              Save as Draft
            </button>

            <button className="px-4 py-2 bg-[#101828] text-white rounded-lg text-sm flex items-center gap-2">
              ▶ Simulate Impact
            </button>

            <button className="px-4 py-2 bg-[#101828] text-white rounded-lg text-sm flex items-center gap-2">
              ➤ Submit for Review
            </button>
          </div>
        </div>
      )}

      {active === "simulator" && (
        <div className="bg-white rounded-xl p-6 space-y-4">
          <h2 className="text-[20px] font-semibold">
            Policy Simulation – Test Before You Deploy
          </h2>

          <div className="bg-[#EFF6FF] border border-[#BEDBFF] text-[#193CB8] p-4 rounded-xl text-[14px]">
            <b>Simulation Mode:</b> See what actions would be blocked or
            approved if this policy is activated. No real changes are made.
          </div>

          <Select
            placeholder="Choose a policy with version history.."
            label="Select Policy to Simulate"
            options={options}
            value={simulation}
            onChange={setSimulation}
            inputClassName="!h-10 !w-full !px-3 !text-[14px] !text-[#0A0A0A] !bg-[#F3F3F5] !rounded-lg"
            listItemClassName="!text-[14px] !px-3 !py-1.5"
            listParentClassName="!max-h-[260px]"
          />
        </div>
      )}

      {active === "workflow" && (
        <>
          <div className="bg-white rounded-xl p-6 space-y-5 mb-5">
            <h2 className="text-[20px] font-semibold">
              Publishing Workflow – Draft → Review → Approved → Active
            </h2>

            <div className="flex items-center justify-between bg-[#F9FAFB] rounded-xl px-6 py-5">
              {workflowSteps.map((step, index) => (
                <div>
                  <div key={step.label} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full ${step.bg}`}
                    >
                      <img src={step.icon} alt={step.label} className="" />
                    </div>

                    {index !== workflowSteps.length - 1 && (
                      <img src={arrowIcon} alt={step.label} className="w-6" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-700 mt-2 inline-block pl-1">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              <div className="border rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Draft Policies</h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-100">
                    1 policy
                  </span>
                </div>

                <div className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 text-sm rounded bg-gray-100">
                        AEPS-APPROVAL-001
                      </span>
                      <span className="font-medium">
                        Emergency Override Approval
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Created by Mike Davis (COO) • Last modified 12/28/2024
                    </p>
                  </div>

                  <button className="px-4 py-2 bg-[#101828] text-white rounded-lg text-sm flex items-center gap-2">
                    ➤ Submit for Review
                  </button>
                </div>
              </div>

              <div className="border rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Review Policies</h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
                    1 policy
                  </span>
                </div>

                <div className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 text-sm rounded bg-gray-100">
                        AEPS-NYC-001
                      </span>
                      <span className="font-medium">NYC City Launch Gate</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Created by Tom Rodriguez (GSD) • Last modified 12/22/2024
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-[#101828] text-white rounded-lg text-sm flex items-center gap-2">
                      ✓ Approve
                    </button>
                    <button className="px-4 py-2 border rounded-lg text-sm flex items-center gap-2">
                      <ErrorIcon color="#0A0A0A" width={16} /> Request Changes
                    </button>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Active Policies</h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                    4 policies
                  </span>
                </div>

                {[
                  {
                    code: "AEPS-PAYOUT-001",
                    title: "High-Value Payout Approval",
                    date: "1/15/2024",
                  },
                  {
                    code: "AEPS-REFUND-001",
                    title: "Auto-Approve Small Refunds",
                    date: "2/1/2024",
                  },
                  {
                    code: "AEPS-RBAC-001",
                    title: "Admin Role Assignment",
                    date: "1/1/2024",
                  },
                  {
                    code: "AEPS-AUTO-001",
                    title: "Marketing Automation Budget Cap",
                    date: "3/1/2024",
                  },
                ].map((p) => (
                  <div
                    key={p.code}
                    className="border rounded-lg p-4 flex justify-between items-center"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-1 text-sm rounded bg-gray-100">
                          {p.code}
                        </span>
                        <span className="font-medium">{p.title}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Created by Sarah Johnson (CEO) • Last modified {p.date}
                      </p>
                    </div>

                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm flex items-center gap-2">
                      <ErrorIcon color="#fff" width={16} /> Archive
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 mb-5">
            <h2 className="text-[18px] font-semibold mb-4">
              Policy Rollback – One-Click Revert to Previous Version
            </h2>

            <div>
              <Select
                placeholder="Choose a policy with version history.."
                label="Select Policy"
                options={options}
                value={workflowpolicy}
                onChange={setWorkflowpolicy}
                inputClassName="!h-10 !w-full !px-3 !text-[14px] !text-[#0A0A0A] !bg-[#F3F3F5] !rounded-lg"
                listItemClassName="!text-[14px] !px-3 !py-1.5"
                listParentClassName="!max-h-[260px]"
              />
            </div>
          </div>
        </>
      )}

      {active === "audit" && (
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-[20px] font-semibold mb-6">Policy Audit Trail</h2>

          <table className="w-full text-[14px]">
            <thead className="text-left text-[#667085]">
              <tr>
                <th className="p-2">Who</th>
                <th className="p-2">What</th>
                <th className="p-2">Why</th>
                <th className="p-2">When</th>
                <th className="p-2">Result</th>
                <th className="p-2">Risk</th>
              </tr>
            </thead>

            <tbody>
              {auditTrailData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{item.who}</td>
                  <td className="p-2">{item.what}</td>
                  <td className="p-2">{item.why}</td>
                  <td className="p-2">{item.when}</td>

                  <td className="p-2">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {item.result}
                    </span>
                  </td>

                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium
                ${
                  item.risk === "high"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-yellow-100 text-yellow-600"
                }
              `}
                    >
                      {item.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {policyOpen && 
        <CreatePolicyModal
          title="Edit New Policy Rule"
          subtitle="Edit policy conditions and create a new version"
          btnText="Save New Version"
          policyOpen={policyOpen}
          onClose={() => setPolicyOpen(false)}
        />
      }

      {policyImpactOpen && 
        <PolicyImpactModal
          policyImpactOpen={policyImpactOpen}
          onClose={() => setPolicyImpactOpen(false)}
        />
      }

      {rollbackOpen && (
        <IssueExceptionModal
          rollbackOpen={rollbackOpen}
          onClose={() => setRollbackOpen(false)}
        />
      )}

    </div>
  );
};

export default PolicyTabsPage;
