const InfoModal = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    safety: {
      title: "Safety Panel",
      subtitle:
        "Actions restricted to suggest-only for sensitive workflows.",
      body: (
        <div className="border bg-[#F9FAFB] border-[#0000001a] rounded-lg p-4">
          <h3 className="font-semibold mb-2">Assistive-only rules</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>
              Support can view suggestions, but cannot auto-execute
              money/policy decisions.
            </li>
            <li>
              Only ML/CTO can deploy; high-risk models require approvals.
            </li>
            <li>Training data access is gated and audited.</li>
            <li>
              Every deployment and rollback produces an audit record.
            </li>
          </ul>
        </div>
      ),
    },

    deployment: {
      title: "Model Deployment Pipeline",
      subtitle:
        "Shadow deployments, gradual rollouts, approvals, and rollback with audit.",
      body: (
        <div className="border bg-[#F9FAFB] border-[#0000001a] rounded-lg p-4">
          <h3 className="font-semibold mb-2">
            Workflow: Deploy a new ranking model
          </h3>
          <ol className="list-decimal pl-5 text-sm text-gray-600 space-y-1">
            <li>Train + validate offline; run safety checks.</li>
            <li>Shadow deploy; compare with current model.</li>
            <li>Obtain approval token if required.</li>
            <li>Canary deploy; monitor; then promote or rollback.</li>
            <li>Write post-deploy validation record.</li>
          </ol>
        </div>
      ),
    },
  };

  const modal = content[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white w-[96%] max-w-[720px] lg:rounded-xl rounded-lg lg:p-6 p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-xl font-semibold">{modal.title}</h2>
            <p className="text-sm text-gray-500">{modal.subtitle}</p>
          </div>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        <div className="mt-4">{modal.body}</div>

        <button
          onClick={onClose}
          className="mt-6 w-full border rounded-lg py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
