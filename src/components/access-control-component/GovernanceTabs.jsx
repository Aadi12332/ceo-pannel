"use client";

import { useState } from "react";
import {
  EmployeeIcon,
  ShieldIcon,
  ClockIcon,
  FreezeIcon,
  SuccessIcon,
  WarningTriangleIcon,
  EyeIcon,
} from "../../assets/icons/icons";
import keyicon from "../../assets/keyicon.svg";

export default function GovernanceTabs() {
  const [tab, setTab] = useState("org");

  const tabs = [
    { key: "org", label: "Org Chart" },
    { key: "permissions", label: "Permissions" },
    { key: "temp", label: "Temp Access" },
    { key: "tools", label: "Tool Governance" },
    { key: "alerts", label: "Anomalies" },
  ];

  return (
    <>
      <div className="mb-5 flex gap-3 rounded-full bg-gray-100 p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-2 flex-1 text-sm ${tab === t.key ? "bg-white" : "text-gray-600"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-white p-6 mb-5">
        {tab === "org" && (
          <div className="space-y-8">
            <h2 className="text-lg font-semibold">
              Organization Chart - Roles, Teams & Directory Assignments
            </h2>

            <Section
              title="Executive Team"
              variant="executive"
              items={[
                {
                  name: "Sarah Johnson",
                  role: "CEO",
                  dir: "CEO",
                  badge: "admin",
                },
                { name: "Mike Davis", role: "COO", dir: "COO", badge: "admin" },
                { name: "Emily Wang", role: "CFO", dir: "CFO", badge: "admin" },
                { name: "Alex Chen", role: "CTO", dir: "CTO", badge: "admin" },
                {
                  name: "Jessica Lee",
                  role: "CMO",
                  dir: "CMO",
                  badge: "admin",
                },
              ]}
            />

            <Section
              title="Sales Team"
              items={[
                {
                  name: "Tom Rodriguez",
                  role: "Sales VP",
                  reports: "Mike Davis",
                  dir: "GSD",
                  badge: "editor",
                },
              ]}
            />

            <Section
              title="Customer Success Team"
              items={[
                {
                  name: "Lisa Park",
                  role: "Support Lead",
                  reports: "Mike Davis",
                  dir: "COO",
                  badge: "editor",
                },
              ]}
            />

            <Section
              title="Engineering Team"
              items={[
                {
                  name: "David Miller",
                  role: "Senior Engineer",
                  reports: "Alex Chen",
                  dir: "CTO",
                  badge: "editor",
                },
                {
                  name: "John Smith",
                  role: "Contractor - DevOps",
                  reports: "Alex Chen",
                  dir: "CTO",
                  badge: "editor",
                },
              ]}
            />

            <Section
              title="Legal Team"
              items={[
                {
                  name: "Emma Wilson",
                  role: "Legal Director",
                  reports: "Sarah Johnson",
                  dir: "LPD",
                  badge: "admin",
                },
              ]}
            />
          </div>
        )}

        {tab === "permissions" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">
                High-Risk Tool Access Review
              </h2>
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-600 border border-red-200">
                2 Critical Access
              </span>
            </div>
            <RiskCard
              title="Payout Processing"
              level="critical"
              user="Emily Wang (CFO)"
              by="Sarah Johnson (CEO)"
              date="1/15/2024"
              scope="All payouts, all regions"
            />

            <RiskCard
              title="PII Data Export"
              level="critical"
              user="Emma Wilson (Legal)"
              by="Sarah Johnson (CEO)"
              date="2/1/2024"
              scope="Legal compliance exports only"
            />

            <RiskCard
              title="Refund Authorization"
              level="high"
              user="Lisa Park (Support Lead)"
              by="Mike Davis (COO)"
              date="12/20/2024"
              scope="Refunds up to $500"
              expires="12/23/2024"
            />

            <RiskCard
              title="Config Management"
              level="high"
              user="John Smith (Contractor)"
              by="Alex Chen (CTO)"
              date="12/18/2024"
              scope="Infrastructure configs only"
              expires="12/25/2024"
            />

            <RiskCard
              title="Database Query Tool"
              level="medium"
              user="David Miller (Engineer)"
              by="Alex Chen (CTO)"
              date="11/1/2024"
              scope="Read-only access"
            />
          </div>
        )}

        {tab === "temp" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">
                Temporary Access Requests - Expiry & Auto-Revoke
              </h2>

              <div className="flex gap-2">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700 border border-yellow-200">
                  1 Pending
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 border border-green-200">
                  1 Active
                </span>
              </div>
            </div>

            <TempCard
              id="TAR-001"
              status="approved"
              user="Lisa Park (Support Lead)"
              by="Mike Davis (COO)"
              tool="Order Details - Extended View"
              reason="Sev1 incident - need to investigate order issues for affected customers"
              duration="24 hours"
              revoke="12/23/2024, 2:00 PM"
              approvedBy="Sarah Johnson (CEO)"
            />

            <TempCard
              id="TAR-002"
              status="pending"
              user="Tom Rodriguez (Sales VP)"
              by="Tom Rodriguez (Sales VP)"
              tool="Financial Reports Access"
              reason="Board presentation preparation"
              duration="7 days"
              revoke="12/29/2024, 5:30 AM"
            />

            <TempCard
              id="TAR-003"
              status="auto revoked"
              user="John Smith (Contractor)"
              by="Alex Chen (CTO)"
              tool="Production Deployment"
              reason="Emergency hotfix deployment"
              duration="2 hours"
              revoke="12/22/2024, 5:30 PM"
              approvedBy="Sarah Johnson (CEO)"
            />

            <div className="rounded-xl bg-blue-50 p-4 text-sm">
              <p className="font-medium">Auto-Revocation Policy</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-gray-700">
                <li>
                  Temporary access is automatically revoked at expiry time
                </li>
                <li>System logs revocation event with full audit trail</li>
                <li>Restoration requires new approval workflow</li>
                <li>
                  All temp access included in quarterly access review reports
                </li>
              </ul>
            </div>
          </div>
        )}

        {tab === "tools" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold mb-6">
              Tool Registry + Approvals + Scope + Expiry
            </h2>

            <ToolCard
              id="TOOL-001"
              name="Payout Processing"
              level="critical"
              users={3}
              approvers={["CEO", "CFO"]}
              scope="Financial operations"
              expiry="No expiry for permanent staff, 90 days for contractors"
            />

            <ToolCard
              id="TOOL-002"
              name="Refund Authorization"
              level="high"
              users={12}
              approvers={["COO", "CFO"]}
              scope="Customer service operations"
              expiry="Review every 90 days"
            />

            <ToolCard
              id="TOOL-003"
              name="PII Data Export"
              level="critical"
              users={2}
              approvers={["CEO", "Legal"]}
              scope="Legal and compliance only"
              expiry="Per-export approval required"
            />

            <ToolCard
              id="TOOL-004"
              name="Config Management"
              level="high"
              users={8}
              approvers={["CTO"]}
              scope="Infrastructure and application configs"
              expiry="30 days for temporary access"
            />

            <ToolCard
              id="TOOL-005"
              name="Database Query Tool"
              level="medium"
              users={15}
              approvers={["CTO"]}
              scope="Read-only database access"
              expiry="Annual review"
            />
          </div>
        )}

        {tab === "alerts" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <WarningTriangleIcon /> Anomalous Access Alerts
              </h2>

              <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-600 border border-red-200">
                1 Critical
              </span>
            </div>

            <AlertCard
              id="ANA-001"
              title="Mass Profile Views"
              level="high"
              user="Tom Rodriguez (Sales VP)"
              detected="Dec 22, 02:00 PM"
              desc="Viewed 347 customer profiles in 2 hours (baseline: 20/day)"
            />

            <AlertCard
              id="ANA-002"
              title="Unusual Refund Tool Usage"
              level="medium"
              user="Lisa Park (Support Lead)"
              detected="Dec 22, 12:45 PM"
              desc="Processed 23 refunds in 1 hour (baseline: 5/hour)"
            />

            <AlertCard
              id="ANA-003"
              title="Off-Hours Database Access"
              level="critical"
              user="John Smith (Contractor)"
              detected="Dec 21, 08:00 AM"
              desc="Database queries at 2:30 AM on weekend"
            />

            <div className="rounded-xl border border-orange-300 bg-orange-50 p-4 text-sm">
              <p className="mb-2 flex items-center gap-2 font-medium">
                <ShieldIcon color="#F54900" width={16} /> Anomaly Detection
                Rules
              </p>
              <ul className="list-disc space-y-1 pl-5 text-gray-700">
                <li>
                  Mass profile views: &gt;100 profiles/hour triggers alert
                </li>
                <li>Unusual refund tool usage: &gt;3× baseline rate</li>
                <li>Off-hours database access: Queries between 12 AM – 6 AM</li>
                <li>Geographic anomaly: Access from new country</li>
                <li>
                  Multiple failed auth attempts: &gt;5 failures in 10 minutes
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function Section({ title, items, variant = "default" }) {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2 font-medium">
        <EmployeeIcon color="#155DFC" width={20} height={20} />
        {title}
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((i) => (
          <div
            key={i.name}
            className={`rounded-xl border p-4 ${
              variant === "executive"
                ? "border-blue-300 bg-blue-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">{i.name}</p>
                <p className="text-sm text-gray-600">{i.role}</p>
              </div>

              <span
                className={`rounded-lg px-2 py-1 text-xs border ${
                  i.badge === "admin"
                    ? "bg-red-100 text-red-600 border-red-200"
                    : "bg-yellow-100 text-yellow-700 border-yellow-200"
                }`}
              >
                {i.badge}
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-700">Directory: {i.dir}</p>

            {i.reports && (
              <p className="text-sm text-gray-600">Reports to: {i.reports}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RiskCard({ title, level, user, by, date, scope, expires }) {
  const levelStyles = {
    critical: "bg-red-50 border-red-300",
    high: "bg-white border-gray-200",
    medium: "bg-white border-gray-200",
  };

  const badgeStyles = {
    critical: "bg-red-100 text-red-600 border-red-200",
    high: "bg-orange-100 text-orange-600 border-orange-200",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };

  return (
    <div className={`rounded-xl border p-5 ${levelStyles[level]}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <ShieldIcon color="#DC2626" width={18} height={18} />
          <p className="font-medium">{title}</p>
          <span
            className={`rounded-full px-2 py-0.5 text-xs border ${badgeStyles[level]}`}
          >
            {level}
          </span>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-1.5 text-sm text-white">
          <FreezeIcon color="#fff" width={18} height={18} /> Revoke
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
        <div>
          <p className="text-gray-500">User</p>
          <p>{user}</p>
        </div>
        <div>
          <p className="text-gray-500">Granted By</p>
          <p>{by}</p>
        </div>
        <div>
          <p className="text-gray-500">Granted At</p>
          <p>{date}</p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 px-4 py-3 text-sm">
        <span className="font-medium">Scope:</span> {scope}
      </div>

      {expires && (
        <div className="mt-3 flex items-center gap-2 text-sm text-orange-600">
          <ClockIcon width={14} height={14} />
          Expires: {expires}
        </div>
      )}
    </div>
  );
}

function TempCard({
  id,
  status,
  user,
  by,
  tool,
  reason,
  duration,
  revoke,
  approvedBy,
}) {
  const styles = {
    approved: "bg-white border-gray-200",
    pending: "bg-yellow-50 border-yellow-300",
    "auto revoked": "bg-purple-50 border-purple-300",
  };

  const badge = {
    approved: "bg-green-100 text-green-700 border-green-200",
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    "auto revoked": "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <div className={`rounded-xl border p-5 ${styles[status]}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded bg-gray-100 px-2 py-1 text-xs">{id}</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs border ${badge[status]}`}
          >
            {status}
          </span>
        </div>

        {status === "pending" && (
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">
              ✓ Approve
            </button>
            <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm">
              ⦸ Deny
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
        <div>
          <p className="text-gray-500">Requested For</p>
          <p>{user}</p>
        </div>
        <div>
          <p className="text-gray-500">Requested By</p>
          <p>{by}</p>
        </div>
        <div>
          <p className="text-gray-500">Tool</p>
          <p>{tool}</p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 px-4 py-3 text-sm">
        <span className="font-medium">Reason:</span> {reason}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
        <span className="flex items-center gap-2 text-blue-600">
          ⏱ Duration: {duration}
        </span>
        <span className="flex items-center gap-2 text-orange-600">
          🔁 Auto-revoke: {revoke}
        </span>
      </div>

      {approvedBy && (
        <p className="mt-2 text-sm text-gray-600">Approved by: {approvedBy}</p>
      )}

      {status === "auto revoked" && (
        <div className="mt-4 rounded-lg border border-purple-300 bg-purple-100 px-4 py-3 text-sm text-purple-700">
          ✓ Access automatically revoked after expiry. Event logged in audit
          trail.
        </div>
      )}
    </div>
  );
}

function ToolCard({ id, name, level, users, approvers, scope, expiry }) {
  const badge = {
    critical: "bg-red-100 text-red-600 border-red-200",
    high: "bg-orange-100 text-orange-600 border-orange-200",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img src={keyicon} alt="" />
            <span className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 text-xs">
              {id}
            </span>
          </div>

          <p className="font-medium">{name}</p>

          <span
            className={`rounded-full px-2 py-0.5 text-xs border ${badge[level]}`}
          >
            {level}
          </span>
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold text-blue-600">{users}</p>
          <p className="text-xs text-gray-500">Active Users</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 text-sm">
        <div>
          <p className="text-gray-500">Requires Approval</p>
          <p className="flex items-center gap-2 text-green-600">
            <SuccessIcon width={14} height={14} color="#00A63E" /> Yes
          </p>
        </div>

        <div>
          <p className="text-gray-500">Approvers</p>
          <div className="mt-1 flex flex-wrap gap-2">
            {approvers.map((a) => (
              <span
                key={a}
                className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700 border border-blue-200"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm">
          <span className="text-gray-500">Scope:</span> {scope}
        </div>

        <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm">
          <span className="text-gray-500">Expiry Policy:</span> {expiry}
        </div>
      </div>
    </div>
  );
}

function AlertCard({ id, title, level, user, detected, desc }) {
  const styles = {
    high: "bg-orange-50 border-orange-300",
    medium: "bg-yellow-50 border-yellow-300",
    critical: "bg-red-50 border-red-300",
  };

  const badge = {
    high: "bg-orange-100 text-orange-700 border-orange-200",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
    critical: "bg-red-100 text-red-600 border-red-200",
  };

  return (
    <div className={`rounded-xl border flex items-start gap-3 p-5 ${styles[level]}`}>
        <div className="flex-1">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <WarningTriangleIcon
                    width={14}
                    height={14}
                    color={
                        level === "critical"
                        ? "#DC2626"
                        : level === "high"
                            ? "#F97316"
                            : "#EAB308"
                    }
                    />

                    <span className="flex items-center gap-2 rounded bg-white px-2 py-1 text-xs border">
                    {id}
                    </span>
                </div>

                <p className="font-medium">{title}</p>

                <span
                    className={`rounded-full px-2 py-0.5 text-xs border ${badge[level]}`}
                >
                    {level}
                </span>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm">
                <div>
                <p className="text-gray-500">User</p>
                <p>{user}</p>
                </div>
                <div>
                <p className="text-gray-500">Detected At</p>
                <p>{detected}</p>
                </div>
            </div>

            <div className="mt-4 rounded-lg bg-white px-4 py-3 text-sm">{desc}</div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm">
            <EyeIcon width={20} height={20} color="#000" /> Investigate
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm text-white">
            <FreezeIcon width={16} height={16} color="#fff" /> Revoke Access
          </button>
        </div>
    </div>
  );
}
