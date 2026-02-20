import { useState } from "react";
import { X } from "lucide-react";
import Select from "../../../components/common/Select";

export default function AddEditTrainingMaterialModal({
  open,
  onClose,
  onSubmit,
}) {
  const [audience, setAudience] = useState("");
  const [status, setStatus] = useState("");

  if (!open) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div onClick={(e)=>e.stopPropagation()} className="w-[96%] max-w-3xl bg-white lg:rounded-xl rounded-lg border border-[#0000001a] p-3 lg:p-6 relative">
        <button
          onClick={onClose}
          className="absolute sm:top-5 top-3 sm:right-5 right-3"
        >
          <X className="w-5 h-5 text-[#111827]" />
        </button>

        <h2 className="text-2xl font-semibold text-[#111827] mb-6 mt-5 sm:mt-0">
          Add/Edit Training Material
        </h2>

        <div className="md:space-y-6 space-y-3">
          <div>
            <label className="block text-sm text-[#111827] mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full h-11 px-4 rounded-xl border border-[#0000001a] outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Audience
              </label>
              <Select
                placeholder="Select"
                value={audience}
                onChange={(val) => setAudience(val)}
                options={[
                  { value: "Engineering", label: "Engineering" },
                  { value: "Product", label: "Product" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "All", label: "All Employees" },
                ]}
                inputClassName="!h-11 !rounded-xl !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-sm"
                listParentClassName=""
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Status
              </label>
              <Select
                placeholder="Select"
                value={status}
                onChange={(val) => setStatus(val)}
                options={[
                  { value: "Draft", label: "Draft" },
                  { value: "Published", label: "Published" },
                  { value: "Archived", label: "Archived" },
                ]}
                inputClassName="!h-11 !rounded-xl !px-3 !text-sm !bg-white !border !border-[#0000001a]"
                listItemClassName="!px-3 !text-sm"
                listParentClassName=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Owner
              </label>
              <input
                type="text"
                className="w-full h-11 px-4 rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm text-[#111827] mb-2">
                Due date
              </label>
              <input
                type="date"
                className="w-full h-11 px-4 rounded-xl border border-[#0000001a] outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#111827] mb-2">
              Notes <span className="text-[#6B7280]">(optional)</span>
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#0000001a] outline-none text-sm resize-none"
            />
          </div>
        </div>

        <div className="border-t border-[#0000001a] mt-5 pt-6 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 h-11 rounded-xl border border-[#0000001a] text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 h-11 rounded-xl bg-[#0E1E38] text-white text-sm font-medium"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
