const QuickActionModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div onClick={(e) => e.stopPropagation()} className="max-w-[600px] w-[96%] bg-white rounded-lg lg:p-6 p-4 relative">
        <button
          onClick={onClose}
          className="absolute lg:top-6 lg:right-6 top-3 right-3 text-[#6B7280] text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-[#111827]">
          Quick Action
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          Frequently Used Actions
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="bg-[#0E1E38] text-white py-3 rounded-lg">
            Create Ticket
          </button>
          <button className="bg-[#0E1E38] text-white py-3 rounded-lg">
            Start Incident
          </button>
          <button className="bg-[#0E1E38] text-white py-3 rounded-lg">
            Run Diagnostics
          </button>
          <button className="bg-[#0E1E38] text-white py-3 rounded-lg">
            Request Approval
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActionModal;
