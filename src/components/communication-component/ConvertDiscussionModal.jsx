import { X, ArrowRight, Shield } from "lucide-react"

const ConvertDiscussionModal = ({
  conversionType,
  onClose,
  selectedDiscussion,
}) => {
  if (!conversionType) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative bg-white w-[480px] rounded-xl p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">
            {conversionType === "APPROVAL"
              ? "Convert Discussion to Approval"
              : "Convert Discussion to Policy"}
          </h3>

          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <p className="text-sm text-[#475467] mb-4">
          {conversionType === "APPROVAL"
            ? "This will convert the discussion to an approval request and make it read-only. No further comments can be added."
            : "This will convert the discussion to a policy and make it read-only. No further comments can be added."}
        </p>

        <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-lg p-3 text-sm text-[#92400E] mb-4">
          <strong>Warning:</strong> Once converted, this discussion will become
          read-only.{" "}
          {conversionType === "APPROVAL"
            ? "The approval process will begin in the respective module."
            : "The policy process will begin in the respective module."}
        </div>

        <div className="text-sm space-y-1 mb-6">
          <p>
            <strong>Discussion:</strong> {selectedDiscussion?.title}
          </p>
          <p>
            <strong>Department:</strong> {selectedDiscussion?.department}
          </p>
          <p>
            <strong>Comments:</strong> {selectedDiscussion?.comments}
          </p>
        </div>

        <button className="ml-auto flex items-center gap-2 px-4 h-10 bg-[#0E1E38] text-white rounded-lg">
          {conversionType === "APPROVAL" ? (
            <>
              <ArrowRight className="w-4 h-4" />
              Convert to Approval
            </>
          ) : (
            <>
              <Shield className="w-4 h-4" />
              Convert to Policy
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default ConvertDiscussionModal
