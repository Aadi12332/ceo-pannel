import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar } from "lucide-react";
import Select from "../../../components/common/Select";

const CreateVersion = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("");

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
              <h1 className="text-2xl font-semibold">Create Version</h1>
              <p className="text-sm text-gray-500">
                Capture the business intent first: what changed, why it matters,
                and the risk posture before requesting approval.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-[24px] text-[#000000CC] mb-6">
                Draft Details
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Version Number
                  </label>
                  <input
                    type="text"
                    className="w-full h-12 rounded-lg border border-[#0000001a] px-3 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 mb-2 block">
                    Risk Level
                  </label>
                  <Select
                    placeholder="Select"
                    value={type}
                    onChange={(value) => {
                      setType(value);
                      setIsEdit(true);
                    }}
                    options={[
                      { value: "Draft", label: "Draft" },
                      { value: "Approved", label: "Approved" },
                      { value: "Released", label: "Released" },
                      { value: "Roll Back", label: "Roll Back" },
                    ]}
                    inputClassName="!h-12 !mt-0 lg:!rounded-xl !rounded-lg !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                    listItemClassName="!px-3 !text-sm"
                    listParentClassName="!min-h-max"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 block">
                    Release Notes
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-[#0000001a] p-3 text-sm outline-none resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-3 pt-5 border-t border-[#0000001a]">
                <button onClick= {() => navigate("/product-versioning-release-control")} className="flex-1 h-12 rounded-lg border border-[#0000001a] text-sm">
                  Cancel
                </button>
                <button onClick= {() => navigate("/product-versioning-release-control")} className="flex-1 h-12 rounded-lg bg-[#0E1E38] text-white text-sm font-medium">
                  Save Draft
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-[24px] text-[#000000CC] mb-6">
                Governance Checklist
              </h2>

              <div className="border border-[#00000033] rounded-xl p-6 bg-[#F9FAFB]">
                <h3 className="font-semibold text-lg mb-3">
                  Before requesting approval, ensure you can answer
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>
                    What changed (business terms, pricing, policy, messaging)?
                  </li>
                  <li>Who signs off (Legal, Finance, Security, PMO)?</li>
                  <li>What’s the rollback plan and business impact?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateVersion;
