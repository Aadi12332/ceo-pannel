import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "../../../components/common/Select";

const initialRules = [
  {
    id: 1,
    dataset: "Payments",
    field: "bank_account_number",
    masking: "Partial",
    owner: "Security Lead",
    required: true,
  },
  {
    id: 2,
    dataset: "Customers",
    field: "ssn",
    masking: "Hash",
    owner: "Privacy Owner",
    required: false,
  },
  {
    id: 3,
    dataset: "Customers",
    field: "email",
    masking: "Full",
    owner: "CTO",
    required: true,
  },
  {
    id: 4,
    dataset: "Search API",
    field: "query",
    masking: "Full",
    owner: "CS/Support",
    required: true,
  },
];

const accessData = [
  {
    principal: "cs-team@acme",
    role: "CS / Support",
    resource: "Customer Records (masked PII)",
    lastUsed: "01-20-2026, 15:14",
    expiry: "01-19-2027",
  },
  {
    principal: "security@acme",
    role: "Security Lead",
    resource: "PII Reveal (time-limited)",
    lastUsed: "01-20-2026, 09:14",
    expiry: "01-19-2027",
  },
  {
    principal: "infra@acme",
    role: "CTO",
    resource: "Secrets & Key Rotation",
    lastUsed: "01-19-2026, 10:14",
    expiry: "01-18-2027",
  },
];

export default function PIIMaskingRulesEditor() {
  const [rules, setRules] = useState(initialRules);
  const navigate = useNavigate();

  const toggle = (id) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, required: !r.required } : r)),
    );
  };

  const updateRule = (id, key, value) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)),
    );
  };

  return (
    <div className="space-y-5 mb-5">
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">Access Review</h2>
            <p className="text-sm text-gray-500">
              Who has access to what, last used, expiry.
            </p>
          </div>
          <button
            onClick={() => navigate("/view-access-review")}
            className="px-4 py-2 bg-[#0E1E38] text-white rounded-lg"
          >
            View All
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="border-b text-black font-bold">
            <tr>
              <th className="text-left py-3">Principal</th>
              <th className="text-left">Role</th>
              <th className="text-left">Resource</th>
              <th className="text-left">Last used</th>
              <th className="text-left">Expiry</th>
            </tr>
          </thead>
          <tbody>
            {accessData.map((row, i) => (
              <tr key={i} className="border-b last:border-b-0 text-[#000000CC]">
                <td className="py-4">{row.principal}</td>
                <td>{row.role}</td>
                <td>{row.resource}</td>
                <td>{row.lastUsed}</td>
                <td>{row.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">PII Masking Rules Editor</h2>
            <p className="text-sm text-gray-500">
              Field-level controls with policy ownership.
            </p>
          </div>
          <button className="px-4 py-2 bg-[#0E1E38] text-white rounded-lg">
            Save Changes
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="border-b text-black font-bold">
            <tr>
              <th className="text-left py-3">Dataset</th>
              <th className="text-left">Field</th>
              <th className="text-left">Masking</th>
              <th className="text-left">Owner</th>
              <th className="text-left">Reveal requires approval</th>
            </tr>
          </thead>

          <tbody>
            {rules.map((r) => (
              <tr key={r.id} className="border-b last:border-b-0 text-[#000000CC]">
                <td className="py-4">{r.dataset}</td>
                <td>{r.field}</td>

                <td className="w-[220px]">
                  <Select
                    value={r.masking}
                    onChange={(val) => updateRule(r.id, "masking", val)}
                    options={[
                      { value: "Partial", label: "Partial" },
                      { value: "Hash", label: "Hash" },
                      { value: "Full", label: "Full" },
                    ]}
                    inputClassName="!h-10 !text-sm max-w-[90%] !rounded-lg !px-3 !bg-white !border !border-[#D0D5DD]"
                    listItemClassName="!px-3 !text-sm"
                  />
                </td>

                <td className="w-[220px]">
                  <Select
                    value={r.owner}
                    onChange={(val) => updateRule(r.id, "owner", val)}
                    options={[
                      { value: "Security Lead", label: "Security Lead" },
                      { value: "Privacy Owner", label: "Privacy Owner" },
                      { value: "CTO", label: "CTO" },
                      { value: "CS/Support", label: "CS/Support" },
                    ]}
                    inputClassName="!h-10 !text-sm max-w-[90%] !rounded-lg !px-3 !bg-white !border !border-[#D0D5DD]"
                    listItemClassName="!px-3 !text-sm"
                  />
                </td>

                <td>
                  <button
                    onClick={() => toggle(r.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                      r.required ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        r.required ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>

                  <span className="ml-3 text-sm text-gray-500">
                    {r.required ? "Required" : "Not required"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
