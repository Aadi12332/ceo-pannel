import { useNavigate } from "react-router-dom";

const docsData = [
  {
    id: 1,
    title: "Documentation Portal v1",
    category: "Docs Platform",
    description:
      "Single place for launch-critical documentation, product specs, and training readiness.",
    owner: "Product",
    updated: "01-29-2026",
    status: "In Review",
    statusStyle: "bg-[#DBEAFE] text-[#2563EB]",
  },
  {
    id: 2,
    title: "Release Readiness Checklist",
    category: "Launch Ops",
    description:
      "A pragmatic checklist for docs, support training, and go-live milestones.",
    owner: "PMO",
    updated: "01-27-2026",
    status: "Approved",
    statusStyle: "bg-[#DCFCE7] text-[#166534]",
  },
  {
    id: 3,
    title: "API Authentication & Key Rotation",
    category: "Platform",
    description:
      "Authentication model, key lifecycle, and operational playbooks.",
    owner: "Security",
    updated: "01-27-2026",
    status: "Draft",
    statusStyle: "bg-[#FEF3C7] text-[#B45309]",
  },
];

export default function DocumentationCards() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {docsData.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate("/documentation-details")}
          className="bg-white rounded-2xl p-6 border flex flex-col justify-between border-[#0000001a] cursor-pointer hover:shadow-md transition"
        >
          <div>
            <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-[#111827]">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B7280] mt-1">
                {item.category}
              </p>
            </div>

            <span
              className={`px-3 py-1 text-xs rounded ${item.statusStyle}`}
            >
              {item.status}
            </span>
          </div>

          <p className="text-sm text-[#4B5563] mt-4">
            {item.description}
          </p>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm text-[#6B7280]">
            <span>
              Owner: <span className="text-[#111827]">{item.owner}</span>
            </span>
            <span>Updated {item.updated}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
