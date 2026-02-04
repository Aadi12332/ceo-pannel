import { WarningIcon } from "../../assets/icons/icons";

const EmergencyActionModal = ({ open, onClose, data }) => {
  if (!open || !data) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div onClick={(e) => e.stopPropagation()} className="bg-white max-w-[524px] w-[96%] max-h-[96vh] overflow-auto scroll-hide rounded-lg lg:rounded-xl lg:p-6 p-3 relative">
        <button
          onClick={onClose}
          className="absolute lg:right-4 lg:top-4 right-2 top-2 text-xl text-[#0A0A0A]"
        >
          ×
        </button>

        <div className="flex items-center gap-2 mb-3">
          <WarningIcon color="#E7000B" width={24} height={24} />
          <h3 className="text-[18px] font-bold text-[#0A0A0A]">{data.title}</h3>
        </div>

        <p className="text-[14px] text-[#717182] mb-3">
          {data.description}
        </p>

        <span className="inline-block text-[#0A0A0A] text-[12px] border border-[#0000001A] rounded-lg px-3 py-1 mb-4">
          {data.command}
        </span>

        <div className="border border-[#FFC9C9] bg-[#FEF2F2] rounded-lg p-4 text-red-600 text-[14px] mb-4">
          <b className="text-sm text-[#82181A] flex items-center gap-2"> <WarningIcon color="#E7000B" width={16} height={16} /> Emergency Immediate Action</b>
          <p className="mt-1 text-xs text-[#C10007]">
            This action will be executed immediately. A mandatory audit note
            is required, and this action will require a follow-up review.
          </p>
        </div>

        <label className="text-[14px] text-[#0A0A0A]">
          Audit Note <span className="text-[#E7000B]">*</span>
        </label>
        <textarea
          className="mt-2 w-full h-[90px] rounded-lg bg-[#F3F3F5] placeholder:text-[#717182] p-3 text-[14px]"
          placeholder="Provide a detailed reason for this emergency action..."
        />

        <p className="text-[12px] text-[#717182]">
          This note will be logged and reviewed by COO, CFO, and CTO.
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#0000001A] rounded-lg text-[14px] text-[#0A0A0A]"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#D4183D] text-white rounded-lg text-[14px]">
            Execute Emergency Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyActionModal;
