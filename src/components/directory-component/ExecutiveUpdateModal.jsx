import { useState } from "react";
import { X } from "lucide-react";
import Select from "../common/Select";

export default function ExecutiveUpdateModal({ open, onClose }) {
  if (!open) return null;

  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[96%] max-w-[596px] max-h-[96vh] overflow-auto scroll-hide lg:rounded-xl rounded-lg lg:p-6 p-3 relative"
      >
        <button onClick={onClose} className="absolute lg:top-4 top-3 lg:right-4 right-3">
          <X />
        </button>

        <h2 className="text-[18px] font-bold font-[Arial] mb-1">
          Executive Update
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 text-sm mb-5 space-y-1">
          <p><b>Directory:</b> CEO</p>
          <p><b>Executive:</b> Sarah Johnson</p>
          <p><b>Current Health:</b> 92</p>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium block mb-1">Update Type</label>
          <Select
            value={type}
            onChange={setType}
            placeholder="Select type..."
            options={[
              { label: "Performance Update", value: "performance" },
              { label: "Risk Update", value: "risk" },
              { label: "Strategic Update", value: "strategy" },
            ]}
            inputClassName="!h-[44px] !rounded-lg !bg-white !border !border-[#D0D5DD] !text-sm !px-3"
            listItemClassName="!text-sm !px-3"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium block mb-1">Priority</label>
          <Select
            value={priority}
            onChange={setPriority}
            placeholder="Select priority..."
            options={[
              { label: "Low", value: "low" },
              { label: "Medium", value: "medium" },
              { label: "High", value: "high" },
            ]}
                        inputClassName="!h-[44px] !rounded-lg !bg-white !border !border-[#D0D5DD] !text-sm !px-3"
            listItemClassName="!text-sm !px-3"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium block mb-1">
            Specific Questions / Focus Areas
          </label>
          <textarea
            placeholder="What specific information do you need?..."
            className="w-full h-28 rounded-lg border border-[#D0D5DD] p-3 outline-none"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-[#0A0A0A] text-white h-11 rounded-lg text-sm">
            Send Request
          </button>
          <button
            onClick={onClose}
            className="flex-1 border h-11 rounded-lg text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
