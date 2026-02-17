import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Select from "../../../components/common/Select";

const RequestLaunchClearance = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [type2, setType2] = useState("");
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
              <h1 className="text-2xl font-semibold">Request Launch Clearance</h1>
              <p className="text-sm text-gray-500">
                Submit a request for product launch approval from the compliance
                team
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-2xl font-semibold text-[#111827]">
            Product Information
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            Basic details about the product being launched
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            <div>
              <label className="block text-sm mb-2">Product Name</label>
              <input className="w-full h-11 px-4 rounded-xl text-[16px] border border-[#0000001a] focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm mb-2">Version</label>
              <input className="w-full h-11 px-4 rounded-xl text-[16px] border border-[#0000001a] focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm mb-2">Target Launch Date</label>
              <input
                type="date"
                className="w-full h-11 px-4 rounded-xl text-[16px] border border-[#0000001a] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Launch Type</label>
              <Select
              value={type}
              onChange={setType}
                placeholder="Select"
                options={[
                  { value: "Major", label: "Major Release" },
                  { value: "Minor", label: "Minor Release" },
                  { value: "Patch", label: "Patch Update" },
                ]}
                inputClassName="!h-11 !rounded-xl !px-3 !text-base !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-base"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Target Markets</label>
              <input className="w-full h-11 px-4 rounded-xl text-[16px] border border-[#0000001a] focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm mb-2">Risk Level</label>
              <Select
              value={type2}
              onChange={setType2}
                placeholder="Select"
                options={[
                  { value: "Low", label: "Low" },
                  { value: "Medium", label: "Medium" },
                  { value: "High", label: "High" },
                ]}
                inputClassName="!h-11 !rounded-xl !px-3 !text-base !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-base"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Primary Contact</label>
              <input className="w-full h-11 px-4 rounded-xl text-[16px] border border-[#0000001a] focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input className="w-full h-11 px-4 rounded-xl text-[16px] border border-[#0000001a] focus:outline-none" />
            </div>
          </div>

          <div className="mt-8">
            <label className="block text-sm mb-2">
              Justification & Objectives
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#0000001a] focus:outline-none resize-none"
            />
          </div>

          <div className="border-t border-[#0000001a] my-10" />

          <h3 className="text-lg font-semibold text-[#111827]">
            Compliance Confirmations
          </h3>
          <p className="text-sm text-[#6B7280] mt-1 mb-6">
            Please confirm the following requirements have been met
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Regulatory Requirements",
                desc: "I confirm that all applicable regulatory requirements have been reviewed and addressed",
              },
              {
                title: "Data Privacy Compliance",
                desc: "I confirm that data privacy requirements (GDPR, CCPA, etc.) have been fully implemented",
              },
              {
                title: "Security Assessment",
                desc: "I confirm that a security assessment has been conducted and any findings addressed",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-b border-[#0000001a] pb-6"
              >
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 w-5 h-5 accent-[#0E1E38]"
                />
                <div>
                  <p className="font-medium text-[#111827]">{item.title}</p>
                  <p className="text-sm text-[#6B7280] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <button className="px-8 h-12 rounded-xl bg-[#0E1E38] text-white">
              Submit Clearance Request
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RequestLaunchClearance;
