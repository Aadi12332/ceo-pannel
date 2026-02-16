import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";
import Select from "../../../components/common/Select";
import ApprovalDecisionModal from "../product-security-privacy-governance/ApprovalDecisionModal";

const AddMonetizationRule = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <MainLayout>
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 text-gray-500" />
            <div>
              <h1 className="text-2xl font-semibold">
                Paywall / feature gating editor
              </h1>
              <p className="text-sm text-gray-500">
                Capture a consistent definition so stakeholders can trust the
                metric.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-white rounded-2xl p-6 border border-[#0000001a]">
            <h2 className="text-2xl font-semibold text-[#111827]">
              Rule Configuration
            </h2>
            <p className="text-sm text-[#6B7280] mt-1">
              Make changes, save draft, then send to approval summary.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm mb-2">Rule name</label>
                <input
                  defaultValue="Growth Hybrid"
                  className="w-full h-11 px-4 rounded-xl border border-[#0000001a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Strategy</label>
                <input
                  defaultValue="Hybrid"
                  className="w-full h-11 px-4 rounded-xl border border-[#0000001a] focus:outline-none"
                />
              </div>
            </div>

            <div className="border-t border-[#0000001a] my-8" />

            <h3 className="text-lg font-semibold">Pricing</h3>
            <p className="text-sm text-[#6B7280] mb-5">
              Used by paywalls and eligibility checks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-2">Monthly ($)</label>
                <input
                  defaultValue="140"
                  className="w-full h-11 px-4 rounded-xl border border-[#0000001a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Annual ($)</label>
                <input
                  defaultValue="1680"
                  className="w-full h-11 px-4 rounded-xl border border-[#0000001a] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Trial (Days)</label>
                <input
                  defaultValue="14"
                  className="w-full h-11 px-4 rounded-xl border border-[#0000001a] focus:outline-none"
                />
              </div>
            </div>

            <div className="border-t border-[#0000001a] my-8" />

            <h3 className="text-lg font-semibold">Feature gates</h3>
            <p className="text-sm text-[#6B7280] mb-6">
              Control which features are allowed, paywalled, or usage-limited.
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-b border-[#0000001a]">
              <div>
                <p className="font-medium">API access</p>
                <p className="text-sm text-[#6B7280]">Key: api_access</p>
              </div>

              <div className="flex items-center gap-4">
                 <input
                 defaultValue="Paywall"
                    placeholder="Paywall"
                    className="w-32 h-11 px-3 rounded-xl border border-[#0000001a] focus:outline-none"
                  />

                <div className="flex items-center gap-2">
                  <span className="text-sm">Limit/mo</span>
                  <input
                    defaultValue="0"
                    className="w-20 h-11 px-3 rounded-xl border border-[#0000001a] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6">
              <div>
                <p className="font-medium">Export CSV</p>
                <p className="text-sm text-[#6B7280]">Key: export_csv</p>
              </div>

              <div className="flex items-center gap-4">
                 <input
                    placeholder="Limit"
                    defaultValue="Limit"
                    className="w-32 h-11 px-3 rounded-xl border border-[#0000001a] focus:outline-none"
                  />

                <div className="flex items-center gap-2">
                  <span className="text-sm">Limit/mo</span>
                  <input
                    defaultValue="10"
                    className="w-20 h-11 px-3 rounded-xl border border-[#0000001a] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="px-10 h-12 rounded-xl bg-[#0E1E38] text-white">
                Save Draft
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#0000001a] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Paywall Preview</h2>
              <p className="text-sm text-[#6B7280] mt-1">
                How this would appear to end users (static preview).
              </p>

              <div className="mt-8">
                <p className="text-sm text-[#6B7280]">Upgrade to unlock</p>
                <p className="text-xl font-semibold mt-2">New rule</p>
                <p className="text-sm text-[#6B7280] mt-2">
                  Includes gates for: API access, Export CSV
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between">
                    <span>Monthly</span>
                    <span className="font-semibold">$140</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual</span>
                    <span className="font-semibold">$1680</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trial</span>
                    <span className="font-semibold">14 days</span>
                  </div>
                </div>

                <button className="w-full h-12 mt-6 rounded-xl border border-blue-500 text-blue-600">
                  Upgrade Now
                </button>
              </div>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="w-full h-12 rounded-xl bg-[#0E1E38] text-white mt-10"
            >
              Approve/Reject
            </button>
            <ApprovalDecisionModal
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddMonetizationRule;
