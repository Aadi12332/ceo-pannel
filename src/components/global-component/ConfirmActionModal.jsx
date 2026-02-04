const ConfirmActionModal = ({ open, type, onClose, onConfirm, viewApplication }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center !mt-0">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="bg-white max-w-[420px] w-[96%] lg:rounded-2xl rounded-lg lg:p-8 p-3 text-center z-50">
        <div className="w-20 h-20 rounded-full bg-red-600 mx-auto flex items-center justify-center text-white text-lg font-semibold">
          LOGO
        </div>

        <h3 className="text-xl font-semibold mt-6">Confirmation</h3>

        <p className="text-sm text-[#475467] mt-2">
          Are you sure you want to{" "}
          <span className="text-red-600 font-bold">
            {viewApplication ? (type === "APPROVE" ? "Approve" : "Reject") : (type === "DELETE" ? "Delete" : "Suspend")}
          </span>{" "}
          this user?
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-3 h-10 flex-1 rounded-full bg-[#4B4A5A] text-white"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-3 h-10 flex-1 rounded-full bg-red-600 text-white"
          >
            Confirm Action
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmActionModal
