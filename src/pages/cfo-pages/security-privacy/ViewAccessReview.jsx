import { useState } from "react";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import SearchInput from "../common/SearchInput";
import Select from "../../../components/common/Select";

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

const ViewAccessReview = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("ALL");

  return (
    <MainLayout>
      <div>
        <h2
          onClick={() => navigate("/security-privacy")}
          className="text-[28px] font-bold text-[#0A0A0A] mb-5 flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          Access Review
        </h2>
      </div>
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 flex flex-col">
        <div className="flex items-center justify-between gap-3 !mb-5 w-full">
          <SearchInput
            value={search}
            onChange={setSearch}
            className="!max-w-[320px]"
            placeholder="Search"
          />
          <div className="!min-w-[150px]">
            <Select
            value={role}
            onChange={(value) => setRole(value)}
            placeholder="All Role"
            options={[
              { value: "ALL", label: "All Role" },
              { value: "CEO", label: "Chief Executive Officer (CEO)" },
              { value: "CTO", label: "Chief Technology Officer (CTO)" },
              { value: "COO", label: "Chief Operating Officer (COO)" },
              { value: "CFO", label: "Chief Financial Officer (CFO)" },
              { value: "CMO", label: "Chief Marketing Officer (CMO)" },
              { value: "SECURITY", label: "Security Lead" },
              { value: "PRIVACY", label: "Privacy Owner" },
              { value: "CS", label: "CS / Support" },
              { value: "ENGINEER", label: "Engineer" },
              { value: "SRE", label: "SRE Team" },
              { value: "LEGAL", label: "Legal / Compliance" },
            ]}
            inputClassName="!h-10 !text-sm !rounded-lg !px-3 !bg-white !border !border-[#D0D5DD]"
            listItemClassName="!px-3 !text-sm"
            listParentClassName="!w-max !right-0 !left-[unset]"
          />
          </div>
        </div>
        <div className="overflow-auto scroll-hide max-h-[calc(100vh-270px)]">
          <div className="overflow-x-auto lg:w-[calc(100vw-390px)] scroll-hide">
            <table className="w-full text-sm min-w-[992px]">
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
        </div>
      </div>
    </MainLayout>
  );
};

export default ViewAccessReview;
