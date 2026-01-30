import { useState } from "react";
import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import chatIcon from "../../assets/chatwhiteicon.svg";
import plusIcon from "../../assets/plusicon.svg";
import settingblueicon from "../../assets/settingblueicon.svg";
import chatBorderIcon from "../../assets/chatbordericon.svg";
import FilterBar from "../../components/common/FilterBox";
import Select from "../../components/common/Select";

import {
  Eye,
  Building2,
  Tag,
  User,
  Calendar,
  Users,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Shield,
  MessageCircle,
  Send,
} from "lucide-react";
import ChatModal from "../../components/layout/ChatModal";
import CreateDiscussionModal from "../../components/communication-component/CreateDiscussionModal";
import ConvertDiscussionModal from "../../components/communication-component/ConvertDiscussionModal";

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
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [status, setStatus] = useState("In Review");
  const [conversionType, setConversionType] = useState(null);
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [newDiscussionModalOpen, setNewDiscussionModalOpen] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Communication & Discussion"
        description="Discussion talks. Approval decides. Policy executes. • No execution • Developer-ready"
        actions={[
          {
            label: "Chat/Meeting",
            icon: chatIcon,
            onClick: () => setChatModalOpen(true),
          },
          {
            label: "New Discussion",
            icon: plusIcon,
            onClick: () => setNewDiscussionModalOpen(true),
          },
        ]}
      />

      <ChatModal
        chatModalOpen={chatModalOpen}
        onClose={() => setChatModalOpen(false)}
      />

      <CreateDiscussionModal
        open={newDiscussionModalOpen}
        onClose={() => setNewDiscussionModalOpen(false)}
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
                className="flex items-center gap-3 text-[#1E1E1E] text-[16px] cursor-pointer"
              >
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  className="w-5 h-5 rounded-md accent-[#0E1E38] cursor-pointer"
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
        {discussionItems.map((item, index) => {
          const isSelected = selectedDiscussion?.title === item.title;

          return (
            <div key={index}>
              {!isSelected && (
                <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-1">
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
                                : "bg-white text-[#1E1E1E] border-[#E5E7EB]"
                            }`}
                          >
                            {badge.label}
                          </span>
                        ))}
                      </div>

                      <p className="text-[14px] text-[#475467] mt-2">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedDiscussion(item)}
                      className="flex items-center gap-2 px-4 h-9 rounded-lg border border-[#E5E7EB] text-[14px] text-[#0A0A0A] hover:bg-gray-50"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-5 text-[13px] text-[#475467]">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {item.department}
                    </span>

                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {item.category}
                    </span>

                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {item.owner}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>

                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.participants} participants
                    </span>

                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {item.comments} comments
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[12px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] text-[#1E1E1E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {isSelected && (
                <div className="space-y-6">
                  <div className="bg-white rounded-[14px] border border-[#0000001A] p-6">
                    <div className="flex justify-between items-start mb-4">
                      <button
                        onClick={() => setSelectedDiscussion(null)}
                        className="flex items-center gap-2 text-sm text-[#475467]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back to List
                      </button>

                      <div className="flex items-end gap-3">
                        <button
                          onClick={() => setConversionType("APPROVAL")}
                          className="flex items-center gap-2 px-4 h-9 rounded-lg border border-[#E5E7EB] text-sm"
                        >
                          <ArrowRight className="w-4 h-4" />
                          Convert to Approval
                        </button>

                        <button
                          onClick={() => setConversionType("POLICY")}
                          className="flex items-center gap-2 px-4 h-9 rounded-lg border border-[#E5E7EB] text-sm"
                        >
                          <Shield className="w-4 h-4" />
                          Convert to Policy
                        </button>

                        <div className="flex flex-col text-xs text-[#475467]">
                          <span className="mb-2 inline-block">Status</span>
                          <Select
                            placeholder="Select status"
                            options={[
                              { label: "All Statuses", value: "ALL" },
                              { label: "Open", value: "OPEN" },
                              { label: "In Review", value: "IN_REVIEW" },
                              { label: "Waiting Response", value: "WAITING" },
                              { label: "Clarified", value: "CLARIFIED" },
                              { label: "Closed", value: "CLOSED" },
                              {
                                label: "Converted to Approval",
                                value: "CONVERTED",
                              },
                            ]}
                            value={status}
                            onChange={setStatus}
                            inputClassName="!h-9 !px-3 !text-[14px] !bg-[#F3F3F5] !rounded-lg !w-[200px]"
                            listItemClassName="!text-[14px] !px-3 !py-1.5"
                          />
                        </div>
                      </div>
                    </div>

                    <h2 className="text-[22px] font-semibold text-[#0A0A0A]">
                      {selectedDiscussion.title}
                    </h2>

                    <div className="flex gap-2 mt-2">
                      {selectedDiscussion.badges?.map((b, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 rounded-full text-xs border ${
                            b.variant === "purple"
                              ? "bg-[#F3E8FF] text-[#7C3AED] border-[#E9D5FF]"
                              : "bg-white border-[#E5E7EB]"
                          }`}
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>

                    <p className="text-[14px] text-[#475467] mt-3">
                      {selectedDiscussion.description}
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-sm">
                      <div>
                        <p className="text-[#667085]">Department</p>
                        <p className="text-[#0A0A0A]">
                          {selectedDiscussion.department}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#667085]">Topic</p>
                        <p className="text-[#0A0A0A]">
                          {selectedDiscussion.category}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#667085]">Created By</p>
                        <p className="text-[#0A0A0A]">
                          {selectedDiscussion.owner}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#667085]">Created At</p>
                        <p className="text-[#0A0A0A]">
                          {selectedDiscussion.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-[14px] border border-[#0000001A] p-6">
                    <h3 className="flex items-center gap-2 text-[18px] font-semibold mb-6 text-[#0A0A0A]">
                      <MessageCircle className="w-5 h-5" />
                      Discussion Thread ({selectedDiscussion.comments} comments)
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          name: "Emily Carter",
                          role: "Marketing Manager",
                          time: "1/7/2025, 2:35:00 PM",
                          text: "We've been using the current tool for 2 years and it's limiting our ability to make data-driven decisions. I've researched alternatives like Mixpanel and Amplitude.",
                        },
                        {
                          name: "Michael Chen",
                          role: "CTO",
                          time: "1/7/2025, 4:00:00 PM",
                          text: "@Emily what's the estimated budget and timeline? We need to evaluate technical integration complexity.",
                        },
                        {
                          name: "Emily Carter",
                          role: "Marketing Manager",
                          time: "1/7/2025, 4:45:00 PM",
                          text: "@Michael estimated $50K/year for Mixpanel or $40K/year for Amplitude. Both have APIs that should integrate with our stack. Timeline: ideally Q1 2025.",
                        },
                        {
                          name: "Sarah Johnson",
                          role: "CEO",
                          time: "1/7/2025, 7:30:00 PM",
                          text: "This needs to go through the approval process. @Emily please prepare a detailed cost-benefit analysis. I'll convert this to an approval request once we have all the data.",
                        },
                      ].map((msg, i) => (
                        <div
                          key={i}
                          className="flex gap-3 border border-[#E5E7EB] rounded-lg p-4 bg-[#F9FAFB]"
                        >
                          <div className="w-9 h-9 rounded-md bg-[#EEF4FF] flex items-center justify-center">
                            <User className="w-5 h-5 text-[#2563EB]" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-sm font-medium text-[#0A0A0A]">
                                {msg.name}
                              </span>
                              <span className="px-2 py-0.5 text-xs rounded-full border border-[#E5E7EB] text-[#475467]">
                                {msg.role}
                              </span>
                              <span className="text-xs text-[#667085]">
                                {msg.time}
                              </span>
                            </div>

                            <p className="text-sm text-[#475467]">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <p className="text-sm text-[#0A0A0A] mb-2">Add Comment</p>

                      <textarea
                        placeholder="Type your comment here... Use @name to mention participants"
                        className="w-full h-28 rounded-lg border border-[#E5E7EB] p-3 text-sm outline-none bg-[#F9FAFB]"
                      />

                      <div className="flex justify-end mt-4">
                        <button className="flex items-center gap-2 bg-[#0E1E38] text-white px-5 py-2 rounded-lg">
                          <Send className="w-4 h-4" />
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <ConvertDiscussionModal
        conversionType={conversionType}
        onClose={() => setConversionType(null)}
        selectedDiscussion={selectedDiscussion}
      />
    </MainLayout>
  );
};

export default Communication;
