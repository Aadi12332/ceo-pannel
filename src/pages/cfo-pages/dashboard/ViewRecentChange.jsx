import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MainLayout from "../../../components/layout/MainLayout";
import SearchInput from "../common/SearchInput";

const recentChangesData = [
  {
    user: "Sarah Chen",
    action: "deployed",
    highlightClass: "text-[#00A63E]",
    title: "api-service v2.4.1",
    time: "2 min ago",
    auditId: "AUD-001234",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    user: "Mike Johnson",
    action: "modified",
    highlightClass: "text-[#F54900]",
    title: "IAM policy: prod-access",
    time: "5 min ago",
    auditId: "AUD-002222",
    avatar: "https://i.pravatar.cc/40?img=32",
  },
  {
    user: "Alex Kim",
    action: "created",
    highlightClass: "text-[#3178EC]",
    title: "alert rule: cpu-threshold",
    time: "10 min ago",
    auditId: "AUD-002226",
    avatar: "https://i.pravatar.cc/40?img=48",
  },
  {
    user: "Emily Davis",
    action: "deleted",
    highlightClass: "text-[#CF2027]",
    title: "stale-feature-branch",
    time: "20 min ago",
    auditId: "AUD-002227",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    user: "James Wilson",
    action: "approved",
    highlightClass: "text-[#00A63E]",
    title: "security patch #847",
    time: "22 min ago",
    auditId: "AUD-002228",
    avatar: "https://i.pravatar.cc/40?img=60",
  },
  {
    user: "Emily Davis",
    action: "deleted",
    highlightClass: "text-[#CF2027]",
    title: "stale-feature-branch",
    time: "20 min ago",
    auditId: "AUD-002227",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    user: "James Wilson",
    action: "approved",
    highlightClass: "text-[#00A63E]",
    title: "security patch #847",
    time: "22 min ago",
    auditId: "AUD-002228",
    avatar: "https://i.pravatar.cc/40?img=60",
  },
  {
    user: "Emily Davis",
    action: "deleted",
    highlightClass: "text-[#CF2027]",
    title: "stale-feature-branch",
    time: "20 min ago",
    auditId: "AUD-002227",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    user: "James Wilson",
    action: "approved",
    highlightClass: "text-[#00A63E]",
    title: "security patch #847",
    time: "22 min ago",
    auditId: "AUD-002228",
    avatar: "https://i.pravatar.cc/40?img=60",
  },
  {
    user: "Emily Davis",
    action: "deleted",
    highlightClass: "text-[#CF2027]",
    title: "stale-feature-branch",
    time: "20 min ago",
    auditId: "AUD-002227",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    user: "James Wilson",
    action: "approved",
    highlightClass: "text-[#00A63E]",
    title: "security patch #847",
    time: "22 min ago",
    auditId: "AUD-002228",
    avatar: "https://i.pravatar.cc/40?img=60",
  },
  {
    user: "Sarah Chen",
    action: "scaled",
    highlightClass: "text-[#F54900]",
    title: "worker-pool: 5 → 8 nodes",
    time: "44 min ago",
    auditId: "AUD-002229",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    user: "Sarah Chen",
    action: "scaled",
    highlightClass: "text-[#F54900]",
    title: "worker-pool: 5 → 8 nodes",
    time: "44 min ago",
    auditId: "AUD-002229",
    avatar: "https://i.pravatar.cc/40?img=61",
  },
  {
    user: "Sarah Chen",
    action: "scaled",
    highlightClass: "text-[#F54900]",
    title: "worker-pool: 5 → 8 nodes",
    time: "44 min ago",
    auditId: "AUD-002229",
    avatar: "https://i.pravatar.cc/40?img=32",
  },
];

const ViewRecentChange = () => {
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
          Recent Change
        </h2>
      </div>
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 flex flex-col">
        <SearchInput value={search} onChange={setSearch} className="!mb-5 !max-w-[320px]" placeholder="Search" />
        <div className="overflow-auto scroll-hide max-h-[calc(100vh-270px)]">
        {recentChangesData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 justify-between py-4 last:pb-0 first:pt-0 border-b last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <p className="text-base text-[#1E1E1E]">
                    <span className="font-medium">{item.user}</span>{" "}
                    <span className={item.highlightClass}>{item.action}</span>{" "}
                    {item.title}
                  </p>
                  <p className="text-sm text-[#929292]">{item.time}</p>
                </div>
              </div>

              <span className="text-sm font-[700] text-[#3178EC] text-end">
                {item.auditId}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ViewRecentChange;
