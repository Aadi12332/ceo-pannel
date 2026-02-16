import { useState } from "react";
import { X } from "lucide-react";

export const ReviewSchemaModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[96%] max-h-[96vh] overflow-auto scroll-hide max-w-3xl lg:rounded-xl rounded-lg lg:p-6 p-3 !pb-3 relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold mb-2">Review Schema</h2>
        <p className="text-sm text-gray-500 mb-6">
          checkout_started (v3) • Payments Squad
        </p>

        <p className="text-sm text-[#111827] mb-3">
          Adds payment_method + discounts array
        </p>

        <div className="border border-[#0000001a] rounded-xl bg-[#F9FAFB] p-2 text-sm text-gray-700">
            <pre>
          {`{
            "type": "object",
            "required": ["event_id","occurred_at","user_id","cart_id"],
            "properties": {
                "event_id": { "type": "string" },
                "occurred_at": {
                "type": "string",
                "format": "date-time"
                },
                "user_id": { "type": "string" },
                "cart_id": { "type": "string" },
                "payment_method": {
                "type": "string",
                "enum": ["card","bank","wallet"]
                },
                "discounts": {
                "type": "array",
                "items": {
                    "type": "object",
                    "required": ["code","amount"],
                    "properties": {
                    "code": { "type": "string" },
                    "amount": { "type": "number" }
                    }
                }
                }
            }
            }`}
            </pre>
        </div>

        <div className="mt-3">
          <p className="text-sm text-[#111827] mb-3">Select Option</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="decision"
                defaultChecked
                className="h-4 w-4 accent-[#16A34A]"
              />
              <span className="text-sm text-green-600">Approve</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="decision"
                className="h-4 w-4 accent-[#DC2626]"
              />
              <span className="text-sm text-red-600">Reject</span>
            </label>
          </div>
        </div>

        <div className="border-t border-[#0000001a] mt-3 pt-3 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="h-11 px-6 rounded-xl border border-[#0000001a] text-sm"
          >
            Cancel
          </button>

          <button className="h-11 px-6 rounded-xl bg-[#0E1E38] text-white text-sm">
            Request Changes
          </button>

          <button className="h-11 px-6 rounded-xl bg-[#0E1E38] text-white text-sm">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};
