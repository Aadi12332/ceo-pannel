import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/Heading";
import SummaryCards from "../../components/common/SummaryCard";
import MainLayout from "../../components/layout/MainLayout";
import merchanticon from "../../assets/merchanticon.svg";
import usericon from "../../assets/usericon.svg";
import toolsicon from "../../assets/toolsicon.svg";
import toolsIcon from "../../assets/toolsicon.svg";
import bellIcon from "../../assets/notificationicon.svg";
import eyeIcon from "../../assets/eyeicon.svg";
import Select from "../../components/common/Select";
import AssignedToolsModal from "../../components/global-component/AssignedToolsModal";
import UserRequestModal from "../../components/global-component/UserRequestModal";
import { BellIcon, ViewIcon } from "lucide-react";

const toolsData = [
  {
    name: "Sarah Johnson",
    role: "AAD",
    tools: "Google Meet, WhatsApp, Call, Email, Video Call, +2",
  },
  {
    name: "Mike Davis",
    role: "COO",
    tools: "Google Meet, WhatsApp, Call, Email, Video Call, +2",
  },
  {
    name: "Emily Wang",
    role: "CFO",
    tools: "Google Meet, WhatsApp, Call, Email, Video Call, +2",
  },
  {
    name: "Alex Chen",
    role: "CTO",
    tools: "Google Meet, WhatsApp, Call, Email, Video Call, +2",
  },
  {
    name: "Jessica Lee",
    role: "CMO",
    tools: "Google Meet, WhatsApp, Call, Email, Video Call, +2",
  },
];
const roles = [
  { value: "CEO", label: "CEO" },
  { value: "COO", label: "COO" },
  { value: "CTO", label: "CTO" },
  { value: "CFO", label: "CFO" },
  { value: "CMO", label: "CMO" },
  { value: "LPD", label: "LPD" },
  { value: "GSD", label: "GSD" },
  { value: "AAD", label: "AAD" },
];
const auditStats = [
  {
    label: "Total Audit Logs",
    value: 10,
    change: 8,
  },
  {
    label: "Critical Events",
    value: 8,
    change: -20,
  },
  {
    label: "Compliance Rate",
    value: 1,
    change: 2,
  },
  {
    label: "Active Investigations",
    value: "GoogleMeet",
    change: "",
  },
];
const GlobalToolRegistry = () => {
  const [role, setRole] = useState("");
  const [assignedToolsOpen, setAssignedToolsOpen] = useState(false);
  const [userRequestOpen, setUserRequestOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <MainLayout>
      <PageHeader
        title="Global Tool Registry"
        description="CEO-only view for growth and expansion decisions, gated by policy and readiness scores (not daily ops)"
        actions={[
          {
            label: "Merchants",
            icon: merchanticon,
            onClick: () => navigate("/merchants"),
          },
          {
            label: "Users",
            icon: usericon,
            onClick: () => navigate("/users"),
          },
        ]}
      />

      <SummaryCards items={auditStats} title="Global Tool Dashboard" />

      <div className="bg-white lg:rounded-[16px] rounded-lg border border-[#0000001A] lg:p-6 p-3 mb-5">
        <div className="flex items-start gap-3 mb-6">
          <img src={toolsicon} alt="" className="w-6 h-6 mt-1" />
          <div>
            <h2 className="text-[20px] text-[#0A0A0A]">Tools Access</h2>
            <p className="text-[14px] text-[#667085] mt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {toolsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F2F7FF] border border-[#B9D0FF] lg:rounded-[12px] rounded-lg lg:p-4 p-2.5"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[16px] text-[#0A0A0A]">{item.name}</p>
                  <p className="text-[14px] text-[#475467]">{item.role}</p>
                </div>

                <div className="flex sm:gap-2 gap-1">
                  <button
                    onClick={() => setAssignedToolsOpen(true)}
                    className="text-[12px] sm:px-3 px-1.5 py-1 rounded-full border border-[#E5E7EB] text-[#0A0A0A] bg-white"
                  >
                    view details
                  </button>
                  <span className="text-[12px] sm:px-3 px-1.5 py-1 rounded-full bg-[#FDECEC] text-[#D92D20]">
                    admin
                  </span>
                </div>
              </div>

              <p className="text-[14px] text-[#475467] mt-3">
                <span className="font-medium">Tools:</span> {item.tools}
              </p>
            </div>
          ))}
        </div>
      </div>

      <AssignedToolsModal
        open={assignedToolsOpen}
        onClose={() => setAssignedToolsOpen(false)}
      />

      <div className="flex flex-col gap-5">
        <div className="bg-white lg:rounded-[16px] rounded-lg border border-[#0000001A] lg:p-6 p-3">
          <div className="flex items-start gap-3 mb-6">
            <img src={toolsIcon} alt="" className="w-6 h-6 mt-1" />
            <div>
              <h2 className="text-[20px] text-[#0A0A0A]">All Tools</h2>
              <p className="text-[14px] text-[#667085]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="bg-[#EDF4FF] rounded-lg lg:rounded-[12px] lg:p-5 p-2.5 md:max-w-[50%]">
            <h3 className="text-[18px] text-[#0A0A0A] mb-1">Google Meet</h3>
            <p className="text-[14px] text-[#0A0A0A] mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <p className="text-[16px] text-[#0A0A0A] mb-2">Give Permission</p>

            <Select
              placeholder="Select departments...."
              options={roles}
              value={role}
              onChange={setRole}
              inputClassName="!h-[unset] !min-w-[100px] !bg-white !px-4 !text-base"
              listItemClassName="!px-3"
              listParentClassName=""
            />
          </div>
        </div>

        <div className="bg-white lg:rounded-[16px] rounded-lg border border-[#0000001A] lg:p-6 p-3">
          <div className="flex items-start gap-3 mb-6">
            <img src={toolsIcon} alt="" className="w-6 h-6 mt-1" />
            <div>
              <h2 className="text-[20px] text-[#0A0A0A]">Tools Requests</h2>
              <p className="text-[14px] text-[#667085]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="border border-[#0000001A] rounded-lg lg:rounded-[12px] lg:p-5 p-2.5 md:max-w-[50%]">
            <div className="flex items-start gap-3 mb-4">
              <BellIcon className="w-5 h-5 text-[#8A38F5] mt-1" />
              <div>
                <h4 className="text-[16px] text-[#0A0A0A]">Total Requests</h4>
                <p className="text-[14px] text-[#667085]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="bg-[#EDF4FF] rounded-lg lg:rounded-[10px] lg:p-4 p-2.5 flex items-center justify-between">
              <div>
                <p className="text-[16px] text-[#0A0A0A]">AI Tool</p>
                <p className="text-[14px] text-[#667085]">
                  CTO wants to use the AI Tool
                </p>
              </div>

              <button
                onClick={() => setUserRequestOpen(true)}
              >
                <ViewIcon className="w-6 cursor-pointer" />
              </button>

              <UserRequestModal
                open={userRequestOpen}
                onClose={() => setUserRequestOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
      
    </MainLayout>
  );
};

export default GlobalToolRegistry;
