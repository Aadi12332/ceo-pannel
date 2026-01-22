import { useState } from "react";
import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import chatIcon from "../../assets/chatwhiteicon.svg";
import plusIcon from "../../assets/plusicon.svg";
import settingblueicon from "../../assets/settingblueicon.svg";
import chatBorderIcon from "../../assets/chatbordericon.svg";
import FilterBar from "../../components/common/FilterBox";
import statusIcon from "../../assets/chaticon.svg";
import deptIcon from "../../assets/chaticon.svg";
import userIcon from "../../assets/chaticon.svg";
import calendarIcon from "../../assets/chaticon.svg";
import peopleIcon from "../../assets/chaticon.svg";
import commentIcon from "../../assets/chaticon.svg";

const discussionItems = [
  {
    title: "Request for New Analytics Tool",
    description:
      "Our team needs a better analytics tool for tracking user behavior. Current tool lacks real-time data and custom dashboards.",
    department: "Marketing",
    category: "Tools & Resources",
    owner: "Emily Carter (Marketing Manager)",
    date: "1/7/2025",
    participants: 3,
    comments: 4,
    tags: ["analytics", "tools", "budget"],
    badges: [
      { label: "in review", variant: "purple" },
      { label: "department", variant: "default" },
    ],
  },
  {
    title: "Clarification on Remote Work Policy",
    description:
      "Need clarification on the hybrid work schedule. Can we work remotely 3 days/week instead of 2?",
    department: "HR",
    category: "Policy Clarification",
    owner: "David Lee (Software Engineer)",
    date: "1/6/2025",
    participants: 3,
    comments: 4,
    tags: ["remote-work", "policy", "hr"],
    badges: [
      { label: "clarified", variant: "green" },
      { label: "company", variant: "default" },
    ],
  },
  {
    title: "Budget Overage Explanation Needed",
    description:
      "Engineering department is 15% over budget for Q4. Need explanation and corrective action plan.",
    department: "Finance",
    category: "Budget & Spending",
    owner: "Emma Davis (CFO)",
    date: "1/5/2025",
    participants: 3,
    comments: 3,
    tags: ["budget", "finance", "engineering", "urgent"],
    badges: [
      { label: "waiting response", variant: "yellow" },
      { label: "private", variant: "default" },
    ],
  },
  {
    title: "Customer Support AI Tool Suggestion",
    description:
      "Proposing AI-powered chatbot to handle tier-1 support queries and reduce response time.",
    department: "Customer Support",
    category: "Process Improvement",
    owner: "Rachel Wong (Support Lead)",
    date: "1/3/2025",
    participants: 3,
    comments: 4,
    tags: ["ai", "automation", "support", "approved"],
    badges: [
      { label: "converted to approval", variant: "orange" },
      { label: "department", variant: "default" },
      { label: "APPROVAL APR-045", variant: "purple" },
    ],
  },
  {
    title: "Product Roadmap Q1 2025 Discussion",
    description:
      "Open discussion on Q1 product priorities and feature requests from customers.",
    department: "Product",
    category: "Strategy & Planning",
    owner: "Sarah Johnson (CEO)",
    date: "1/2/2025",
    participants: 4,
    comments: 2,
    tags: ["roadmap", "strategy", "q1-2025"],
    badges: [
      { label: "open", variant: "blue" },
      { label: "company", variant: "default" },
    ],
  },
];

const auditStats = [
  {
    label: "Total Discussions",
    value: 5,
    change: 8,
  },
  {
    label: "Open",
    value: 1,
    change: -20,
  },
  {
    label: "In Review",
    value: 1,
    change: 2,
  },
  {
    label: "Converted",
    value: 1,
    change: "",
  },
];
const Communication = () => {
  const [city, setCity] = useState("");
  const [vertical, setVertical] = useState("");
  const [searchValue, setSearchValue] = useState("");
  return (
    <MainLayout>
      <PageHeader
        title="Communication & Discussion"
        description="Discussion talks. Approval decides. Policy executes. • No execution • Developer-ready"
        actions={[
          {
            label: "Chat/Meeting",
            icon: chatIcon,
            onClick: () => console.log("Chat/Meeting"),
          },
          {
            label: "New Discussion",
            icon: plusIcon,
            onClick: () => console.log("New Discussion"),
          },
        ]}
      />

      <SummaryCards
        items={auditStats}
        title="Discussion Department Dashboard"
      />

      <div className="space-y-6 mb-5">
        <div className="border border-[#7DA7FF] rounded-[16px] p-6 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <img src={settingblueicon} alt="" className="w-5 h-5" />
            <h3 className="text-[18px] text-[#0A0A0A]">
              Chat Option Visible to
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {[
              { label: "Chief Operating Officer (COO)", checked: true },
              { label: "Chief Technology Officer (CTO)", checked: true },
              { label: "Chief Financial Officer (CFO)", checked: false },
              { label: "Chief Marketing Officer (CMO)", checked: true },
              { label: "Allneeda Automation Department (AAD)", checked: false },
              { label: "Legal & Permit Director (LPD)", checked: false },
              { label: "Growth & Strategy Director (GSD)", checked: false },
              { label: "Procurement & Vendor Director (PVD)", checked: false },
            ].map((item, index) => (
              <label
                key={index}
                className="flex items-center gap-3 text-[#1E1E1E] text-[16px]"
              >
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  className="w-5 h-5 rounded-md accent-[#0E1E38]"
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

        <div className="border border-[#7DA7FF] rounded-[16px] p-6 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <img src={chatBorderIcon} alt="" className="w-5 h-5" />
            <h3 className="text-[18px] text-[#0A0A0A]">
              Core Rules: Discussion ≠ Decision
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="bg-[#EEF4FF] rounded-[14px] p-4">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-[16px] text-[#0A0A0A]">
                  ❌ What Discussion CANNOT Do
                </p>
              </div>
              <ul className="text-[14px] text-[#475467] space-y-1">
                <li>• No approve/reject buttons</li>
                <li>• No task creation</li>
                <li>• No deadlines or SLAs</li>
                <li>• No execution tracking</li>
              </ul>
            </div>

            <div className="bg-[#EEF4FF] rounded-[14px] p-4">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-[16px] text-[#0A0A0A]">
                  ✅ What Discussion CAN Do
                </p>
              </div>
              <ul className="text-[14px] text-[#475467] space-y-1">
                <li>• Communicate and clarify</li>
                <li>• Exchange ideas and feedback</li>
                <li>• Prepare for decisions</li>
                <li>• Convert to Approval/Policy</li>
              </ul>
            </div>

            <div className="bg-[#EEF4FF] rounded-[14px] p-4">
              <div className="flex items-center gap-2 mb-3">
                <p className="text-[16px] text-[#0A0A0A]">🔄 Conversion Flow</p>
              </div>
              <ul className="text-[14px] text-[#475467] space-y-1">
                <li>• Discussion → Approval (CEO/Director)</li>
                <li>• Discussion → Policy (CEO only)</li>
                <li>• Converted = Read-only</li>
                <li>• Execution starts after approval</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FilterBar
        results="5 results"
        search={{
          label: "Search",
          placeholder: "Search discussions...",
          value: searchValue,
          onChange: (e) => setSearchValue(e.target.value),
        }}
        filters={[
          {
            label: "Status",
            placeholder: "All Status",
            options: [
              { value: "delhi", label: "Delhi" },
              { value: "mumbai", label: "Mumbai" },
            ],
            value: city,
            onChange: setCity,
          },
          {
            label: "Visibility",
            placeholder: "All Visibility",
            options: [
              { value: "finance", label: "Finance" },
              { value: "health", label: "Health" },
            ],
            value: vertical,
            onChange: setVertical,
          },
        ]}
      />

      <div className="flex flex-col gap-5">
        {discussionItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] p-6 flex flex-col gap-3"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[18px] font-semibold text-[#0A0A0A]">
                    {item.title}
                  </h3>

                  {item.badges?.map((badge, i) => (
                    <span
                      key={i}
                      className={`text-[12px] px-2 py-0.5 rounded-full border ${
                        badge.variant === "purple"
                          ? "bg-[#F3E8FF] text-[#7C3AED] border-[#E9D5FF]"
                          : badge.variant === "green"
                            ? "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]"
                            : badge.variant === "yellow"
                              ? "bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]"
                              : badge.variant === "orange"
                                ? "bg-[#FFEDD5] text-[#C2410C] border-[#FED7AA]"
                                : badge.variant === "blue"
                                  ? "bg-[#E0E7FF] text-[#3730A3] border-[#C7D2FE]"
                                  : "bg-white text-[#1E1E1E] border-[#E5E7EB]"
                      }`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>

                <p className="text-[14px] text-[#475467] mt-1">
                  {item.description}
                </p>
              </div>

              <button className="px-4 h-9 rounded-lg border border-[#0000001A] text-[14px] text-[#0A0A0A] hover:bg-gray-50">
                View Details
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#475467]">
              <span className="flex items-center gap-1">
                <img src={deptIcon} alt="" className="w-4 h-4" />
                {item.department}
              </span>

              <span className="flex items-center gap-1">
                <img src={statusIcon} alt="" className="w-4 h-4" />
                {item.category}
              </span>

              <span className="flex items-center gap-1">
                <img src={userIcon} alt="" className="w-4 h-4" />
                {item.owner}
              </span>

              <span className="flex items-center gap-1">
                <img src={calendarIcon} alt="" className="w-4 h-4" />
                {item.date}
              </span>

              <span className="flex items-center gap-1">
                <img src={peopleIcon} alt="" className="w-4 h-4" />
                {item.participants} participants
              </span>

              <span className="flex items-center gap-1">
                <img src={commentIcon} alt="" className="w-4 h-4" />
                {item.comments} comments
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {item.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[12px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] text-[#1E1E1E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Communication;
