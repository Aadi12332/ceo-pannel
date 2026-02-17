import { useState, useRef } from "react";
import { Check, Download, FileText } from "lucide-react";

const statusStyles = {
  Completed: "bg-[#DCFCE7] text-[#15803D]",
  "In Progress": "bg-[#DBEAFE] text-[#2563EB]",
  Pending: "bg-[#FEF3C7] text-[#B45309]",
};

export default function ComplianceTabs() {
  const [activeTab, setActiveTab] = useState("checklist");
  const [files, setFiles] = useState([
    { name: "doc1.pdf", size: "2.4 MB", date: "01-15-2026" },
    { name: "doc2.eml", size: "2.4 MB", date: "01-15-2026" },
  ]);

  const fileInputRef = useRef(null);

  const checklistItems = [
    {
      title: "FDA Pre-Market Notification (510(k)) Review",
      desc: "Complete review of FDA 510(k) submission requirements and documentation",
      assigned: "Sarah Chen",
      due: "01-15-2026",
      status: "Completed",
      checked: true,
    },
    {
      title: "EU MDR Compliance Assessment",
      desc: "Ensure compliance with European Medical Device Regulation (EU 2017/745)",
      assigned: "Michael Roberts",
      due: "02-15-2026",
      status: "In Progress",
    },
    {
      title: "Clinical Evaluation Report",
      desc: "Prepare clinical evaluation report for regulatory submission",
      assigned: "Michael Roberts",
      due: "02-15-2026",
      status: "In Progress",
    },
    {
      title: "Quality Management System Audit",
      desc: "Internal audit of QMS procedures per ISO 13485 standards",
      assigned: "Michael Roberts",
      due: "02-15-2026",
      status: "Pending",
    },
    {
      title: "Risk Management File Review",
      desc: "Complete risk management file per ISO 14971 requirements",
      assigned: "Lisa Thompson",
      due: "01-20-2026",
      status: "Pending",
    },
  ];

  const timelineItems = [
    {
      title: "FDA 510(k) Documentation Approved",
      desc: "All required documentation has been reviewed and approved by the regulatory team",
      assigned: "Sarah Chen",
      due: "01-15-2026",
    },
    {
      title: "EU MDR Assessment Started",
      desc: "Beginning comprehensive assessment of EU Medical Device Regulation requirements",
      assigned: "Michael Roberts",
      due: "02-15-2026",
    },
    {
      title: "Additional Documentation Requested",
      desc: "Clinical data supplements needed for EU MDR technical documentation",
      assigned: "Michael Roberts",
      due: "02-15-2026",
    },
    {
      title: "Quality Audit Scheduled",
      desc: "Internal QMS audit scheduled for February 10th, 2026",
      assigned: "Michael Roberts",
      due: "02-15-2026",
    },
  ];

  const handleFiles = (newFiles) => {
    const mapped = Array.from(newFiles).map((file) => ({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      date: new Date().toLocaleDateString("en-CA"),
    }));
    setFiles((prev) => [...prev, ...mapped]);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        {["checklist", "timeline", "documents"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-full text-base font-medium transition ${
              activeTab === tab
                ? "bg-[#0E1E38] text-white"
                : "bg-[#fff] text-[#374151]"
            }`}
          >
            {tab === "checklist"
              ? "Check List"
              : tab === "timeline"
              ? "Activity Timeline"
              : "Documents"}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#0000001a]">
        {activeTab === "checklist" && (
          <div className="space-y-5">
            {checklistItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between border-b border-[#0000001a] pb-6"
              >
                <div className="flex gap-4">
                  <input type="checkbox" className="w-5 h-5 accent-[#0E1E38]" defaultChecked={item.checked} />
                  <div>
                    <p className="font-semibold text-[#111827]">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#6B7280] mt-1">
                      {item.desc}
                    </p>
                    <p className="text-sm text-[#6B7280] mt-2">
                      Assigned to:{" "}
                      <span className="text-[#111827] font-medium">
                        {item.assigned}
                      </span>{" "}
                      &nbsp; Due: {item.due}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="space-y-5">
            <div className="text-[24px] text-[#0A0A0A]">
                Activity Timeline
            </div>
            {timelineItems.map((item, i) => (
              <div
                key={i}
                className="border-b border-[#0000001a] pb-6"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold text-[#111827]">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#6B7280] mt-1">
                      {item.desc}
                    </p>
                  </div>
                  <p className="text-sm text-[#6B7280]">
                    Assigned to:{" "}
                    <span className="text-[#111827] font-medium">
                      {item.assigned}
                    </span>{" "}
                    &nbsp; Due: {item.due}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "documents" && (
          <div className="space-y-5">
            <div className="text-[24px] text-[#0A0A0A]">
                Documents
            </div>
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-[#F9FAFB] border border-[#00000033] rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#fff] border border-[#00000033] flex items-center justify-center">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-[#111827]">
                      {file.name}
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      {file.size} • {file.date}
                    </p>
                  </div>
                </div>
                <Download size={18} className="text-[#6B7280]" />
              </div>
            ))}

            <div
              onClick={() => fileInputRef.current.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFiles(e.dataTransfer.files);
              }}
              className="border-2 border-dashed border-[#D1D5DB] bg-[#F9FAFB] rounded-xl p-10 text-center cursor-pointer"
            >
              <FileText className="mx-auto mb-3 text-[#9CA3AF]" />
              <p className="text-[#374151] font-medium">
                Drop files here to upload
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
