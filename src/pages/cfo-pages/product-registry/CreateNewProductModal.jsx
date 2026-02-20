import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function CreateNewProductModal({ open, onClose }) {
  const [productName, setProductName] = useState("");
  const [vertical, setVertical] = useState("");
  const [scope, setScope] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <div className="relative w-[96%] max-w-[640px] bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 z-10">
        
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-2xl font-semibold">Create New Product</h2>
            <p className="text-gray-500 text-sm mt-1">
              Fill in the details to register a new product
            </p>
          </div>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          
          <div>
            <label className="block font-medium mb-2">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full rounded-lg border border-[#0000001a] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Business Vertical <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <select
                value={vertical}
                onChange={(e) => setVertical(e.target.value)}
                className="w-full appearance-none rounded-lg border border-[#0000001a] px-4 py-3 outline-none bg-white"
              >
                <option value="">Select</option>
                <option>Fintech</option>
                <option>E-commerce</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Enterprise SaaS</option>
              </select>

              <ChevronDown
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Initial Scope <span className="text-red-500">*</span>
            </label>
            <textarea
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-[#0000001a] px-4 py-3 outline-none resize-none"
            />
          </div>

          <div className="pt-4 border-t border-[#0000001a] flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 border border-[#0000001a] rounded-lg py-3"
            >
              Cancel
            </button>

            <button
              className="flex-1 bg-[#0E1E38] text-white rounded-lg py-3"
            >
              Submit for Approval
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
