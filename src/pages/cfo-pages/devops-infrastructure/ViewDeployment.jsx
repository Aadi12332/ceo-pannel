import { useState } from "react";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import SearchInput from "../common/SearchInput";
import DeploymentApprovalModal from "./DeploymentApprovalModal";
import Select from "../../../components/common/Select";

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
  const [status, setStatus] = useState("ALL");

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
          <div className="flex items-center justify-between gap-3 !mb-5 w-full flex-wrap">
          <SearchInput
            value={search}
            onChange={setSearch}
            className="!max-w-[320px]"
            placeholder="Search"
          />
          <div className="!w-[150px]">
            <Select
            value={status}
            onChange={(value) => setStatus(value)}
            placeholder="All Status"
            options={[
              { value: "Success", label: "Success" },
              { value: "Running", label: "Running" },
              { value: "Failed", label: "Failed" },
              { value: "Rolled Back", label: "Rolled Back" },
            ]}
            inputClassName="!h-10 !text-sm !rounded-lg !px-3 !bg-white !border !border-[#D0D5DD]"
            listItemClassName="!px-3 !text-sm"
            listParentClassName="!min-h-max"
          />
          </div>
        </div>
        <div className="overflow-auto scroll-hide max-h-[calc(100vh-270px)]">
          <div className="w-[calc(100vw-44px)] overflow-auto scroll-hide lg:w-[calc(100vw-390px)]">
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

<DeploymentApprovalModal
  open={openApproval}
  onClose={() => setOpenApproval(false)}
  decision={decision}
  setDecision={setDecision}
/>
    </MainLayout>
  );
};

export default ViewDeployment;
