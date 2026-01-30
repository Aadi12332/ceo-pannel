import { X } from "lucide-react"

const UserRequestModal = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white max-w-[672px] w-[96%] rounded-2xl border border-[#E5E7EB]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
          <h3 className="text-[18px] font-medium text-[#0A0A0A]">
            User Request
          </h3>
          <X className="cursor-pointer text-[#475467]" onClick={onClose} />
        </div>

        <div className="px-6 py-4 space-y-1.5">
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 text-[18px] text-[#475467]">
            <p className="text-[14px] font-medium text-[#101828] mb-3">CTO</p>
            <p className="text-[12px] text-[#4A5565]">• Name: Omar Curtis</p>
            <p className="text-[12px] text-[#4A5565]">• Email: omar.curtis@gmail.com</p>
            <p className="text-[12px] text-[#4A5565]">• Tool: AI Tool</p>
            <p className="text-[12px] text-[#4A5565]">• Date: 19/12/2025</p>
            <p className="text-[12px] text-[#4A5565]">• Time: 11:00 AM</p>
          </div>

          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 text-[12px] text-[#4A5565]">
            Omar Curtis wants to use the AI Tool
          </div>
        </div>

        <div className="flex justify-end gap-2 px-6 py-4 border-t border-[#E5E7EB]">
          <button
            onClick={onClose}
            className="px-3 h-10 rounded-lg border border-[#D0D5DD] text-[16px] text-[#0A0A0A]"
          >
            Cancel
          </button>

          <button className="px-3 h-10 rounded-lg bg-[#D92D20] text-white text-[16px]">
            Reject Request
          </button>

          <button className="px-3 h-10 rounded-lg bg-[#4CA64C] text-white text-[16px]">
            Approve Request
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserRequestModal
