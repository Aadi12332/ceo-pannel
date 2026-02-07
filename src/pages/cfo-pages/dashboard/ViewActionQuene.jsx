import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import SearchInput from "../common/SearchInput";

const approvalsData = [
  {
    level: "High",
    type: "approval",
    title: "Production deploy: v2.4.1",
    meta: "Requested by Sarah Chen",
    status: "Waiting: 2 approvers",
  },
  {
    level: "High",
    type: "approval",
    title: "IAM role modification",
    meta: "Requested by Mike Johnson",
    status: "Waiting: Security review",
  },
  {
    level: "Medium",
    type: "execution",
    title: "Database migration: users table",
    status: "Waiting: Scheduled window",
  },
  {
    level: "Low",
    type: "approval",
    title: "Weekly backup verification",
    meta: "Today, 3:00 PM",
  },
  {
    level: "Medium",
    type: "execution",
    title: "Database migration: users table",
    status: "Waiting: Scheduled window",
  },
  {
    level: "Low",
    type: "approval",
    title: "Weekly backup verification",
    meta: "Today, 3:00 PM",
  },
  {
    level: "Medium",
    type: "scheduled",
    title: "SSL certificate renewal",
    meta: "Tomorrow, 9:00 AM",
  },
  {
    level: "Low",
    type: "approval",
    title: "New API endpoint: /v2/analytics",
    meta: "Requested by Alex Kim",
    status: "Waiting: Code review",
  },
];

const levelStyles = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-orange-100 text-orange-600",
  Low: "bg-green-100 text-green-600",
};

const ViewActionQuene = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <MainLayout>
      <div>
        <h2
          onClick={() => navigate("/dashboard")}
          className="text-[28px] font-bold text-[#0A0A0A] mb-5 flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          Active Quene
        </h2>
      </div>
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 flex flex-col">
        <SearchInput value={search} onChange={setSearch} className="!mb-5 !max-w-[320px]" placeholder="Search" />
        <div className="overflow-auto scroll-hide max-h-[calc(100vh-270px)]">
          {approvalsData.map((item, index) => (
            <div
              key={index}
              className="py-4 last:pb-0 first:pt-0 border-b last:border-b-0 flex flex-col gap-1"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded font-medium ${levelStyles[item.level]}`}
                >
                  {item.level}
                </span>
                <span className="text-xs text-[#9CA3AF]">{item.type}</span>
              </div>

              <p className="text-sm font-medium text-[#111827]">{item.title}</p>

              {item.meta && (
                <p className="text-sm text-[#9CA3AF]">{item.meta}</p>
              )}

              {item.status && (
                <p className="text-sm text-blue-600">{item.status}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ViewActionQuene;
