import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import StatusUpdatesDrawer from "./StatusUpdatesDrawer";

const Mitigation = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const data = location.state;

  const {
    id,
    sev = "SEV1",
    title = "Authentication outage",
    owner = "Sam",
    elapsed = "26m 15s",
  } = location.state || {};

  const sevStyle = {
    SEV1: "bg-[#FFDDDB] text-[#CF2027]",
    SEV2: "bg-[#FFEDD4] text-[#F54900]",
    SEV3: "bg-[#DBEAFE] text-[#1D4ED8]",
  };

  const actions = [
    {
      title: "Toggle feature flag",
      desc: "Standard action. • Approved",
    },
    {
      title: "Rollback last deploy",
      desc: "Standard action. • No approval",
    },
    {
      title: "Throttle expensive endpoints",
      desc: "Standard action. • No approval",
    },
    {
      title: "Scale service",
      desc: "Standard action. • No approval",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center gap-3 mb-5 flex-wrap">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/technical-incident-response")}
        >
          <ChevronLeft className="cursor-pointer text-gray-500 w-5" />
          <h1
            onClick={() => setOpenModal("deployment")}
            className="text-[28px] font-bold text-[#0A0A0A]"
          >
            {data.title}
          </h1>
        </div>
        <button onClick={() => setOpenModal(true)} className="bg-[#0E1E38] text-white flex items-center gap-2 sm:px-5 px-2 lg:h-[62px] sm:h-12 h-10 min-w-max rounded-lg text-[15px] sm:text-[18px] font-medium transition">
          Status Updates
        </button>
      </div>

      <StatusUpdatesDrawer openModal={openModal} setOpenModal={setOpenModal} />

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] flex items-center justify-between mb-5 flex-wrap gap-3">
        <div className="flex items-center gap-4">
          <span className={`px-2 py-0.5 text-xs rounded ${sevStyle[sev]}`}>
            {sev}
          </span>
          <span className="font-medium">{title}</span>
        </div>

        <div className="text-sm text-gray-600">
          Owners: <span className="font-medium text-black">{owner}</span>
        </div>

        <div className="text-sm text-gray-600">
          Elapsed <span className="text-black">{elapsed}</span>
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] mb-5">
        <h2 className="text-[24px] text-[#0A0A0A]">Mitigation actions</h2>
        <p className="text-[#717182] mb-6">
          Toggle, rollback, throttle, scale — with approvals & audit.
        </p>

        <div className="space-y-4">
          {actions.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-[#0000001a] pb-4 gap-3 flex-wrap"
            >
              <div>
                <p className="font-bold text-[#1E1E1E]">{item.title}</p>
                <p className="text-sm text-[#929292]">{item.desc}</p>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 text-sm border rounded-lg border-[#0000001A]">
                  Execute
                </button>
                <button className="px-4 py-2 text-sm bg-[#0E1E38] text-white rounded-lg">
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mitigation;
