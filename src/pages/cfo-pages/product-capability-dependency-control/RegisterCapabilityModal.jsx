import { useState } from "react";
import { X } from "lucide-react";
import Select from "../../../components/common/Select";

export default function RegisterCapabilityModal({ open, onClose }) {
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] w-[96%] max-w-[640px]">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Register Capability</h2>
            <p className="text-sm text-gray-500 mt-1">
              Keep capabilities small and composable. Add dependencies later.
            </p>
          </div>
          <button onClick={onClose}>
            <X className="text-gray-500" />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Capability Name
            </label>
            <input
              type="text"
              className="w-full h-12 rounded-lg border border-[#0000001a] px-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Owner
            </label>
            <Select
              placeholder="Select"
              value={owner}
              onChange={(value) => setOwner(value)}
              options={[
                { value: "John Smith", label: "John Smith" },
                { value: "Emily Chen", label: "Emily Chen" },
                { value: "Michael Brown", label: "Michael Brown" },
              ]}
              inputClassName="!h-12 !mt-0 lg:!rounded-xl !rounded-lg !px-3 !text-sm !bg-white !border !border-[#0000001a]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName="!min-h-max"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-2 block">
              Status
            </label>
            <Select
              placeholder="All Status"
              value={status}
              onChange={(value) => setStatus(value)}
              options={[
                { value: "Active", label: "Active" },
                { value: "Draft", label: "Draft" },
                { value: "Deprecated", label: "Deprecated" },
              ]}
              inputClassName="!h-12 !mt-0 lg:!rounded-xl !rounded-lg !px-3 !text-sm !bg-white !border !border-[#0000001a]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName="!min-h-max"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-8 pt-6 border-t border-[#0000001a]">
          <button
            onClick={onClose}
            className="flex-1 h-12 rounded-lg border border-[#0000001a] text-sm font-medium"
          >
            Cancel
          </button>
          <button className="flex-1 h-12 rounded-lg bg-[#0E1E38] text-white text-sm font-medium">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
