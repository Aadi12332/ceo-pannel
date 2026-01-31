import { useState } from "react";
import { MoreVertical } from "lucide-react";

const RowActionMenu = ({
  onView,
  onEdit,
  onSuspend,
  onDelete,
  onApprove,
  onReject,
  viewApplication,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <MoreVertical
        className="w-5 h-5 text-[#667085] cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute right-0 top-6 w-[160px] bg-white rounded-xl border border-[#E5E7EB] shadow-md z-50 overflow-hidden">
          <div
            onClick={onView}
            className="px-4 py-3 text-sm hover:bg-[#F9FAFB] cursor-pointer border-b"
          >
            View
          </div>
          {!viewApplication && (
            <div
              onClick={onEdit}
              className="px-4 py-3 text-sm hover:bg-[#F9FAFB] cursor-pointer border-b"
            >
              Edit
            </div>
          )}
          <div
            onClick={viewApplication ? onApprove : onSuspend}
            className="px-4 py-3 text-sm hover:bg-[#F9FAFB] cursor-pointer border-b"
          >
            {!viewApplication ? "Suspend" : "Approve"}
          </div>
          <div
            onClick={viewApplication ? onReject : onDelete}
            className="px-4 py-3 text-sm hover:bg-[#F9FAFB] cursor-pointer text-red-600"
          >
            {!viewApplication ? "Delete" : "Reject"}
          </div>
        </div>
      )}
    </div>
  );
};

export default RowActionMenu;
