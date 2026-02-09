import { useState } from "react";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import SearchInput from "../common/SearchInput";

const statusStyle = {
  Success: "bg-[#DCFCE7] text-[#008236]",
  Running: "bg-[#FEF3C7] text-[#B45309]",
  Failed: "bg-[#FFDDDB] text-[#CF2027]",
  "Rolled Back": "bg-[#FFEDD4] text-[#F54900]",
};

const pipelineData = [
  {
    id: "#4582",
    service: "Payments API",
    env: "Production",
    branch: "hotfix/pay-err",
    commit: "a1c9f3",
    status: "Success",
    stage: "Canary 5%",
    duration: "6m 32s",
    triggeredBy: "CI Auto",
    deployedAt: "20 Jan, 16:40",
    action: true,
  },
  {
    id: "#4581",
    service: "Orders API",
    env: "Production",
    branch: "release/v2.4",
    commit: "b7d21e",
    status: "Running",
    stage: "Full Deploy",
    duration: "--",
    triggeredBy: "Release Mgr",
    deployedAt: "--",
    action: true,
  },
  {
    id: "#4579",
    service: "Auth Service",
    env: "Stage",
    branch: "develop",
    commit: "d3f88a",
    status: "Failed",
    stage: "Integration Tests",
    duration: "4m 12s",
    triggeredBy: "Developer",
    deployedAt: "20 Jan, 15:20",
    action: true,
  },
  {
    id: "#4578",
    service: "Search API",
    env: "Development",
    branch: "feature/ranking",
    commit: "f9aa01",
    status: "Success",
    stage: "Build",
    duration: "2m 05s",
    triggeredBy: "CI Auto",
    deployedAt: "--",
    action: true,
  },
  {
    id: "#4576",
    service: "Ads Engine",
    env: "Production",
    branch: "release/v2.3",
    commit: "c1e7bb",
    status: "Rolled Back",
    stage: "Post-Deploy Check",
    duration: "9m 10s",
    triggeredBy: "Release Mgr",
    deployedAt: "19 Jan, 22:10",
    action: true,
  },
  {
    id: "#4582",
    service: "Payments API",
    env: "Production",
    branch: "hotfix/pay-err",
    commit: "a1c9f3",
    status: "Success",
    stage: "Canary 5%",
    duration: "6m 32s",
    triggeredBy: "CI Auto",
    deployedAt: "20 Jan, 16:40",
    action: true,
  },
  {
    id: "#4581",
    service: "Orders API",
    env: "Production",
    branch: "release/v2.4",
    commit: "b7d21e",
    status: "Running",
    stage: "Full Deploy",
    duration: "--",
    triggeredBy: "Release Mgr",
    deployedAt: "--",
    action: true,
  },
  {
    id: "#4579",
    service: "Auth Service",
    env: "Stage",
    branch: "develop",
    commit: "d3f88a",
    status: "Failed",
    stage: "Integration Tests",
    duration: "4m 12s",
    triggeredBy: "Developer",
    deployedAt: "20 Jan, 15:20",
    action: true,
  },
  {
    id: "#4578",
    service: "Search API",
    env: "Development",
    branch: "feature/ranking",
    commit: "f9aa01",
    status: "Success",
    stage: "Build",
    duration: "2m 05s",
    triggeredBy: "CI Auto",
    deployedAt: "--",
    action: true,
  },
  {
    id: "#4576",
    service: "Ads Engine",
    env: "Production",
    branch: "release/v2.3",
    commit: "c1e7bb",
    status: "Rolled Back",
    stage: "Post-Deploy Check",
    duration: "9m 10s",
    triggeredBy: "Release Mgr",
    deployedAt: "19 Jan, 22:10",
    action: true,
  },
  {
    id: "#4582",
    service: "Payments API",
    env: "Production",
    branch: "hotfix/pay-err",
    commit: "a1c9f3",
    status: "Success",
    stage: "Canary 5%",
    duration: "6m 32s",
    triggeredBy: "CI Auto",
    deployedAt: "20 Jan, 16:40",
    action: true,
  },
  {
    id: "#4581",
    service: "Orders API",
    env: "Production",
    branch: "release/v2.4",
    commit: "b7d21e",
    status: "Running",
    stage: "Full Deploy",
    duration: "--",
    triggeredBy: "Release Mgr",
    deployedAt: "--",
    action: true,
  },
  {
    id: "#4579",
    service: "Auth Service",
    env: "Stage",
    branch: "develop",
    commit: "d3f88a",
    status: "Failed",
    stage: "Integration Tests",
    duration: "4m 12s",
    triggeredBy: "Developer",
    deployedAt: "20 Jan, 15:20",
    action: true,
  },
  {
    id: "#4578",
    service: "Search API",
    env: "Development",
    branch: "feature/ranking",
    commit: "f9aa01",
    status: "Success",
    stage: "Build",
    duration: "2m 05s",
    triggeredBy: "CI Auto",
    deployedAt: "--",
    action: true,
  },
  {
    id: "#4576",
    service: "Ads Engine",
    env: "Production",
    branch: "release/v2.3",
    commit: "c1e7bb",
    status: "Rolled Back",
    stage: "Post-Deploy Check",
    duration: "9m 10s",
    triggeredBy: "Release Mgr",
    deployedAt: "19 Jan, 22:10",
    action: true,
  },
];

const ViewDeployment = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
    const [openApproval, setOpenApproval] = useState(false);
  const [decision, setDecision] = useState("approve");

  return (
    <MainLayout>
      <div>
        <h2
          onClick={() => navigate("/devops-infrastructure")}
          className="text-[28px] font-bold text-[#0A0A0A] mb-5 flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          Deployment Pipeline
        </h2>
      </div>
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 flex flex-col">
        <SearchInput
          value={search}
          onChange={setSearch}
          className="!mb-5 !max-w-[320px]"
          placeholder="Search"
        />
        <div className="overflow-auto scroll-hide max-h-[calc(100vh-270px)]">
          <div className="overflow-x-auto lg:w-[calc(100vw-390px)] scroll-hide">
            <table className="min-w-[1600px] w-full text-sm">
              <thead className="border-b">
                <tr className="text-left text-gray-500">
                  <th className="py-3">Build ID</th>
                  <th>Service</th>
                  <th>Environment</th>
                  <th>Branch</th>
                  <th>Commit</th>
                  <th>Status</th>
                  <th>Stage</th>
                  <th>Duration</th>
                  <th>Triggered By</th>
                  <th>Deployed At</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pipelineData.map((r, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="py-4">{r.id}</td>
                    <td>{r.service}</td>
                    <td>{r.env}</td>
                    <td>{r.branch}</td>
                    <td>{r.commit}</td>
                    <td>
                      <span
                        className={`px-2 py-0.5 text-xs rounded ${statusStyle[r.status]}`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td>{r.stage}</td>
                    <td>{r.duration}</td>
                    <td>{r.triggeredBy}</td>
                    <td>{r.deployedAt}</td>
                    <td className="text-right">
                      {r.action && (
                        <button
                          onClick={() => setOpenApproval(true)}
                          className="px-4 py-2 bg-[#0E1E38] text-white rounded-lg"
                        >
                          Approve
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {openApproval && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpenApproval(false)}
        >
          <div
            className="bg-white w-[520px] rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Deployment Approval</h2>
              <button onClick={() => setOpenApproval(false)}>✕</button>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-3">Approval Progress</p>

              <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                <span className="text-[#22C55E] font-medium">CI Auto</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-gray-300" />
                <span>You (CTO)</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-medium mb-3">Select Option</p>

              <div className="flex items-center gap-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={decision === "approve"}
                    onChange={() => setDecision("approve")}
                    className="hidden"
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      decision === "approve"
                        ? "border-[#22C55E]"
                        : "border-gray-300"
                    }`}
                  >
                    {decision === "approve" && (
                      <span className="w-2.5 h-2.5 bg-[#22C55E] rounded-full" />
                    )}
                  </span>
                  <span className="text-[#22C55E] font-medium">Approve</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={decision === "reject"}
                    onChange={() => setDecision("reject")}
                    className="hidden"
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      decision === "reject"
                        ? "border-[#EF4444]"
                        : "border-gray-300"
                    }`}
                  >
                    {decision === "reject" && (
                      <span className="w-2.5 h-2.5 bg-[#EF4444] rounded-full" />
                    )}
                  </span>
                  <span className="text-[#EF4444] font-medium">Reject</span>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t pt-4">
              <button
                onClick={() => setOpenApproval(false)}
                className="flex-1 border rounded-lg py-2"
              >
                Cancel
              </button>

              <button
                onClick={() => setOpenApproval(false)}
                className="flex-1 bg-[#0E1E38] text-white rounded-lg py-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ViewDeployment;
