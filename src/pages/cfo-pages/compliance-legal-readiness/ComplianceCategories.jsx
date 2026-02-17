import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const statusStyle = {
  "In Progress": "bg-[#DBEAFE] text-[#2563EB]",
  Completed: "bg-[#DCFCE7] text-[#166534]",
  Pending: "bg-[#FEF3C7] text-[#B45309]",
  Blocked: "bg-[#FEE2E2] text-[#DC2626]",
};

const complianceData = [
  {
    title: "Regulatory Compliance",
    description: "Legal frameworks and industry regulations",
    status: "In Progress",
    progress: 20,
  },
  {
    title: "Data Privacy & GDPR",
    description: "Data protection and privacy requirements",
    status: "Completed",
    progress: 100,
  },
  {
    title: "Security Audit",
    description: "Security certifications and assessments",
    status: "In Progress",
    progress: 60,
  },
  {
    title: "Third-Party Agreements",
    description: "Vendor contracts and partnerships",
    status: "Pending",
    progress: 25,
  },
  {
    title: "International Compliance",
    description: "Cross-border legal requirements",
    status: "Blocked",
    progress: 40,
  },
];

const ComplianceCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-[#111827]">
        Compliance Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {complianceData.map((item, index) => (
          <div
            key={index}
            onClick={()=>navigate("/regulatory-compliance")}
            className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] hover:shadow-md transition cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-[#111827]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280] mt-1">
                  {item.description}
                </p>
              </div>

              <ChevronRight className="text-[#6B7280]" size={20} />
            </div>

            <div className="flex items-center justify-between mt-6">
              <span
                className={`px-3 py-1 text-xs rounded ${statusStyle[item.status]}`}
              >
                {item.status}
              </span>

              <span className="text-sm text-[#6B7280]">
                {item.progress}% Completed
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceCategories;
