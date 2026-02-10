import { useState } from "react";

const statusStyle = {
  Passed: "bg-[#DBEAFE] text-[#2563EB]",
  Failed: "bg-[#FEE2E2] text-[#DC2626]",
  Pending: "bg-[#FEF3C7] text-[#B45309]",
  Running: "bg-[#EDE9FE] text-[#7C3AED]",
};

export default function ExceptionApprovalModal({ open, onClose }) {
  const [selected, setSelected] = useState({
    integration: true,
    e2e: true,
    performance: true,
  });
  const [token, setToken] = useState("");
  const [justification, setJustification] = useState("");

  if (!open) return null;

  const toggle = (key) =>
    setSelected((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white w-[96%] max-h-[96vh] overflow-auto scroll-hide max-w-[720px] rounded-lg lg:rounded-xl lg:p-6 p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-5 gap-3">
          <div>
            <h2 className="text-xl font-semibold">
              Exception approvals with audit
            </h2>
            <p className="text-sm text-gray-500">
              Overrides are policy-bound: token + justification required, and
              only QA/Release can approve.
            </p>
          </div>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        <div className="mb-6">
          <p className="font-medium mb-1">Select gates to override</p>
          <p className="text-sm text-gray-500 mb-4">
            Gate requirements are immutable for this release record; you can
            only override outcomes.
          </p>

          <GateRow
            label="Unit suite *"
            desc="Fast feedback; must pass before merge and before release promotion."
            status="Passed"
            disabled
          />

          <GateRow
            label="Integration suite *"
            desc="Service-level checks and contract tests."
            status="Failed"
            checked={selected.integration}
            onChange={() => toggle("integration")}
          />

          <GateRow
            label="E2E suite *"
            desc="Critical user journeys across browser/device matrix."
            status="Failed"
            checked={selected.e2e}
            onChange={() => toggle("e2e")}
          />

          <GateRow
            label="Performance budget"
            desc="Optional in normal releases; required during quarter-end freeze."
            status="Pending"
            checked={selected.performance}
            onChange={() => toggle("performance")}
          />

          <GateRow
            label="Security scan *"
            desc="SAST + dependency scan must be green."
            status="Running"
            disabled
          />
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm font-medium">Approval Token</label>
            <input
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="mt-1 w-full border border-[#D1D5DC] rounded-lg px-3 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Justification</label>
            <textarea
              rows={3}
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              className="mt-1 w-full border border-[#D1D5DC] rounded-lg px-3 py-2 resize-none  focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4 border-t border-[#00000033] pt-4">
          <button
            onClick={onClose}
            className="flex-1 border rounded-lg py-2"
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-[#0E1E38] text-white rounded-lg py-2"
          >
            Approve Override
          </button>
        </div>
      </div>
    </div>
  );
}

function GateRow({ label, desc, status, checked, onChange, disabled }) {
  return (
    <div className="flex items-start gap-3 border-b py-3 border-[#00000033]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`mt-1 h-5 w-5 rounded accent-black ${
          disabled ? "bg-[#D1D5DC] cursor-not-allowed" : ""
        }`}
      />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{label}</span>
          <span
            className={`px-2 py-0.5 text-xs rounded ${statusStyle[status]}`}
          >
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}
