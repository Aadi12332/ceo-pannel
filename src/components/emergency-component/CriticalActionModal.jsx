import {
  X,
  AlertTriangle,
  Shield,
  Lock,
  PauseCircle,
  Ban,
  XCircle,
  LinkIcon,
  LockIcon,
  Radio,
} from "lucide-react";
import killSwitchesIcon from "../../assets/killswitchicon.svg";
import { FreezeIcon } from "../../assets/icons/icons";

export default function CriticalActionModal({ type, onClose }) {
  const config = {
    safeMode: {
      title: "🔒 Enable Safe Mode",
      subtitle: "Platform Read-Only Mode",
      dangerhead: "⚠️ Critical Action - Requires Authorization",
      dangerText:
        "This will enable read-only mode for the entire platform. All write operations will be disabled.",
      button: "Enable Safe Mode",
      btnIcon: <Lock className="w-5 text-white" />,
      requiresApproval: true,
      showRuntimeInfo: true,
      showAudit: true,
    },

    killSwitch: {
      title: "🔴 Activate Kill Switch",
      subtitle: "Global Payout Freeze",
      dangerhead: "⚠️ Critical Action - Requires Authorization",
      dangerText:
        "This action will immediately freeze operations. Estimated impact: 2,340 providers, 850 transactions/day",
      button: "Confirm Kill Switch Activation",
      btnIcon: <img src={killSwitchesIcon} alt="" />,
      requiresApproval: true,
      showRuntimeInfo: true,
      showAudit: true,
      showKillSwitchMeta: true,
    },

    pausePromotions: {
      title: "Pause Promotions",
      dangerText:
        "This action will execute immediately and cannot be undone without manual intervention.",
      integration: true,
      button: "Pause Promotions Immediately",
      icon: <PauseCircle className="text-red-600" />,
      btnIcon: <PauseCircle className="text-white w-5" />,
      showAudit: true,
    },

    freezePayouts: {
      title: "Freeze Payouts",
      dangerText:
        "This action will execute immediately and cannot be undone without manual intervention.",
      integration: true,
      button: "Freeze Payouts Immediately",
      icon: <Ban className="text-red-600" />,
      btnIcon: <FreezeIcon className="text-white w-5" />,
      showAudit: true,
    },

    lockOnboarding: {
      title: "Lock Onboarding",
      dangerText:
        "This action will execute immediately and cannot be undone without manual intervention.",
      integration: true,
      button: "Lock Onboarding",
      icon: <Lock className="text-red-600" />,
      btnIcon: <LockIcon className="text-white w-5" />,
      showAudit: true,
    },

    disableIntegration: {
      title: "Disable Integration",
      dangerText:
        "This action will execute immediately and cannot be undone without manual intervention.",
      integration: true,
      button: "Disable Integration",
      icon: <Ban className="text-red-600" />,
      btnIcon: <XCircle className="text-white w-5" />,
      showAudit: true,
    },

    requirePolicy: {
      title: "Require Prevention Policy",
      dangerText:
        "Prevention policy must be created and linked before incident can be closed.",
      policy: true,
      button: "Link Prevention Policy",
      icon: <Shield className="text-red-600 w-5" />,
      btnIcon: <LinkIcon className="text-white w-5" />,
      showPolicyBlock: true,
    },
  };

  const c = config[type];
  if (!c) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 !mt-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg lg:rounded-xl p-3 lg:p-6 w-[96%] max-w-[512px] max-h-[96vh] overflow-auto relative"
      >
        <button onClick={onClose} className="absolute top-5 right-5">
          <X className="text-gray-500 w-5" />
        </button>

        <div className="flex items-center gap-2 mb-5">
          {c.icon}
          <h2 className="text-[18px] font-bold font-[Arial]">{c.title}</h2>
        </div>

        {c.subtitle && (
          <p className="text-sm text-gray-500 mb-4">{c.subtitle}</p>
        )}

        <div className="border border-red-300 bg-red-50 rounded-lg p-3 text-sm text-red-700 mb-4">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-5 relative bottom-[2px]" />
            <div>
              {c.dangerhead && (
                <p className="text-sm text-red-500 mb-1">{c.dangerhead}</p>
              )}
              <p>{c.dangerText}</p>
            </div>
          </div>
        </div>

        {c.showPolicyBlock && (
          <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm mb-5">
            <p className="text-red-700 font-semibold mb-1">
              Sev1 Closure Requirement:
              <span className="font-normal">
                {" "}
                Prevention policy must be created and linked before incident can
                be closed.
              </span>
            </p>

            <p className="text-red-700">
              <span className="font-semibold">Incident:</span> INC-2024-087 -
              Fraud Detection System Outage
            </p>
          </div>
        )}

        {c.integration && (
          <div className="border border-[#FFD6A7] bg-[#FFF7ED] text-[#9F2D00] rounded-lg p-3 text-sm mb-4">
            <p className="mb-1">
              <b>Integration:</b> MealMe Menu Sync
            </p>
            <p>
              <b>Current Errors (24h):</b> 3
            </p>
          </div>
        )}

        {c.policy && (
          <>
            <label className="text-sm font-medium mb-1 block">
              Prevention Policy Created
            </label>
            <input
              className="w-full bg-[#F2F4F7] rounded-lg p-2 mb-4 focus:outline-none"
              placeholder="POL-XXX-XXX"
            />

            <label className="text-sm font-medium mb-1 block">
              Policy Summary
            </label>
            <textarea
              className="w-full h-24 bg-[#F2F4F7] rounded-lg p-3 mb-4 focus:outline-none"
              placeholder="Brief description of how this policy prevents recurrence..."
            />
          </>
        )}

        {c.showAudit && !c.requiresApproval && (
          <>
            <label className="text-sm font-medium mb-1 block">
              Justification (Required for Audit)
            </label>
            <textarea
              className="w-full h-24 bg-[#F2F4F7] rounded-lg p-3 mb-4 focus:outline-none"
              placeholder="Explain why this kill switch action is necessary..."
            />

            <label className="text-sm font-medium mb-1 block">
              Link to Incident (Optional)
            </label>
            <input
              className="w-full bg-[#F2F4F7] rounded-lg p-2 mb-3 focus:outline-none"
              placeholder="POL-XXX-XXX"
            />
          </>
        )}

        {c.showKillSwitchMeta && (
          <div className="rounded-lg bg-gray-50 p-4 text-sm space-y-2 mb-5">
            <div className="flex justify-between">
              <span className="text-gray-600">Policy:</span>
              <span className="font-semibold text-gray-900">
                EMERGENCY-PAYOUT-FREEZE
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Runtime Flag:</span>
              <span className="font-semibold text-gray-900">
                RUNTIME_FLAG_PAYOUT_FREEZE_GLOBAL
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Scope:</span>
              <span className="font-semibold text-gray-900">global</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Requires Approval:</span>
              <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600 font-medium">
                Yes - CEO
              </span>
            </div>
          </div>
        )}

        {c.requiresApproval && (
          <>
            <label className="text-sm font-medium mb-1 block">
              Justification (Required for Audit)
            </label>
            <textarea
              className="w-full h-24 bg-[#F2F4F7] rounded-lg p-3 mb-4 focus:outline-none"
              placeholder="Explain why this kill switch action is necessary..."
            />

            <label className="text-sm font-medium mb-1 block text-red-600">
              CEO Approval Code (Required)
            </label>
            <input
              className="w-full bg-[#F2F4F7] rounded-lg p-2 mb-2 focus:outline-none"
              placeholder="Enter CEO approval code..."
            />

            <p className="text-xs text-gray-500 mb-4">
              This action requires CEO authorization. Enter code:{" "}
              <b>CEO-OVERRIDE-2024</b>
            </p>

            {c.showRuntimeInfo && (
              <div className="mt-4 mb-5 rounded-xl border border-blue-300 bg-blue-50 p-4 text-blue-700 text-sm">
                <div className="flex items-start gap-2">
                  <Radio className="w-7" />
                  <p>
                    <b>Runtime Flag Control:</b> This action changes a runtime
                    flag.
                    No deployment needed – effect is immediate.
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        <button className="ml-auto bg-red-600 text-white py-2 rounded-lg flex items-center gap-2 px-3 w-fit">
          {c.btnIcon}
          {c.button}
        </button>
      </div>
    </div>
  );
}
