import { X } from "lucide-react"
import Select from "../common/Select"

const CreateDiscussionModal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white w-[560px] rounded-xl p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-[#0A0A0A]">
            Create New Discussion
          </h2>

          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <p className="text-sm text-[#475467] mb-5">
          Start a discussion to communicate, clarify, or gather feedback.
          Discussions do NOT create approvals or tasks.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Brief, descriptive title"
              className="h-10 w-full rounded-lg border border-[#E5E7EB] px-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Detailed description of the discussion topic"
              className="w-full h-24 rounded-lg border border-[#E5E7EB] p-3 text-sm outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">
                Topic
              </label>
              <Select
              placement="top"
                placeholder="Select topic"
                options={[
                  { label: "Tools & Resources", value: "TOOLS" },
                  { label: "Policy Clarification", value: "POLICY" },
                  { label: "Budget & Spending", value: "BUDGET" },
                  { label: "Process Improvement", value: "PROCESS" },
                ]}
                inputClassName="!h-10 !px-3 !text-sm !bg-[#F3F3F5] !rounded-lg"
                listItemClassName="!text-[14px] !px-3 !py-1.5"
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">
                Department <span className="text-red-500">*</span>
              </label>
              <Select
                placeholder="Select department"
                placement="top"
                options={[
                  { label: "Marketing", value: "MARKETING" },
                  { label: "Finance", value: "FINANCE" },
                  { label: "HR", value: "HR" },
                  { label: "Product", value: "PRODUCT" },
                ]}
                inputClassName="!h-10 !px-3 !text-sm !bg-[#F3F3F5] !rounded-lg"
                listItemClassName="!text-[14px] !px-3 !py-1.5"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Visibility
            </label>
            <Select
              placeholder="Select visibility..."
              placement="top"
              options={[
                { label: "Department", value: "DEPARTMENT" },
                { label: "Company", value: "COMPANY" },
                { label: "Private", value: "PRIVATE" },
              ]}
              inputClassName="!h-10 !px-3 !text-sm !bg-[#F3F3F5] !rounded-lg"
              listItemClassName="!text-[14px] !px-3 !py-1.5"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-6 h-10 rounded-lg border border-[#E5E7EB] text-sm"
          >
            Cancel
          </button>

          <button className="px-6 h-10 rounded-lg bg-[#0E1E38] text-white text-sm">
            Create Discussion
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateDiscussionModal
