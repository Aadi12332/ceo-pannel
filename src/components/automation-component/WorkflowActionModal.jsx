import { X, UploadIcon, Shield } from "lucide-react";

export default function WorkflowActionModal({ type, onClose }) {
  if (!type) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl w-[96%] max-w-[560px] p-6 relative"
      >
        <button onClick={onClose} className="absolute top-6 right-6">
          <X className="w-5 text-gray-500" />
        </button>

        {type === "Approve Publish" && (
          <>
            <h2 className="text-lg font-semibold mb-4">
              Approve Workflow for Production
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700 text-sm mb-6">
              This will publish <b>New User $10 Credit</b> <br /> to production.
              Estimated daily cost: <b>$0</b>
            </div>

            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 ml-auto">
              <UploadIcon className="w-5" />
              Approve & Publish
            </button>
          </>
        )}

        {type === "Cost Caps" && (
          <>
            <h2 className="text-lg font-semibold mb-4">
              Set Cost Caps - New User $10 Credit
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex-1 w-full">
                <label className="text-sm" htmlFor="day">Daily Cap</label>
                <input
                  value="2000"
                  className="h-11 rounded-lg bg-gray-100 text-sm px-3 flex-1 w-full focus:outline-none"
                />
              </div>

              <div className="flex-1 w-full">
                <label className="text-sm" htmlFor="month">Monthly Cap</label>
                <input
                  value="50000"
                  className="h-11 rounded-lg bg-gray-100 text-sm px-3 flex-1 w-full focus:outline-none"
                />
              </div>
            </div>

            <div className="flex-1 w-full">
              <label className="text-sm" htmlFor="action">Action</label>
              <input
                value="Alert + Pause"
                className="h-11 rounded-lg bg-gray-100 text-sm px-3 flex-1 w-full focus:outline-none mb-4"
              />
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-purple-700 mb-6">
              <b>Note:</b> Cost caps prevent budget overruns. When a cap is
              reached, the selected action will execute automatically and be
              logged in the audit trail.
            </div>

            <button className="bg-black text-white px-4 py-2 rounded-lg ml-auto flex items-center gap-2">
              <Shield className="w-5" />
              Update Cost Caps
            </button>
          </>
        )}

        {type === "Audit" && (
         <>
  <h2 className="text-[18px] font-semibold mb-1">
    Automation Audit Trail
  </h2>
  <p className="text-sm text-gray-500 mb-4">
    View audit trail for Referral Reward Processing
  </p>

  <div className="bg-[#F9FAFB] rounded-xl p-4">
    <p className="text-sm font-medium mb-3">Recent Executions</p>

    <div className="space-y-3">
      {[
        {
          id: "evt_h32qhnsm4",
          workflow: "WF-002",
          key: "idem_0836yx2iq",
        },
        {
          id: "evt_grirsvdr2",
          workflow: "WF-002",
          key: "idem_ow0nk8nit",
        },
        {
          id: "evt_dnvk4a979",
          workflow: "WF-002",
          key: "idem_j4oqmsxth",
        },
      ].map((e) => (
        <div
          key={e.id}
          className="bg-white rounded-lg px-4 py-3 flex items-center justify-between"
        >
          <div className="text-sm">
            <p>
              <span className="text-gray-500">event_id:</span>{" "}
              <span className="font-medium">{e.id}</span>
            </p>
            <p className="text-gray-500">
              workflow_id: {e.workflow} · idempotency_key: {e.key}
            </p>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
            Success
          </span>
        </div>
      ))}
    </div>
  </div>

  <p className="text-sm text-gray-500 mt-4">
    Every execution logs: event_id, workflow_id, idempotency_key,
    cost, outcome
  </p>
</>

        )}
      </div>
    </div>
  );
}
