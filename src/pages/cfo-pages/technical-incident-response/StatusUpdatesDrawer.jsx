import { useState } from "react";
import { X, Bell, Clock, MessageSquare } from "lucide-react";

export default function StatusUpdatesDrawer({openModal, setOpenModal}) {
  const [activeTab, setActiveTab] = useState("internal");

  return (
    <>
<div
  className={`fixed inset-0 z-50 transition-opacity duration-300 ${
    openModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>
  <div
    onClick={() => setOpenModal(false)}
    className="absolute inset-0 bg-black/40"
  />

  <div
    className={`absolute right-0 top-0 h-full w-full sm:w-[480px] bg-white
      transform transition-transform duration-300 ease-in-out
      ${openModal ? "translate-x-0" : "translate-x-full"}
      flex flex-col`}>
          <div className="px-5 py-3 border-b border-[#0000001a]">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Status Updates</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Internal notes + optional customer-facing banner.
                </p>
              </div>
              <button onClick={() => setOpenModal(false)}>
                <X />
              </button>
            </div>
          </div>

          <div className="flex border-b border-[#0000001a]">
            <button
              onClick={() => setActiveTab("internal")}
              className={`flex-1 py-3 font-medium text-sm ${
                activeTab === "internal"
                  ? "bg-[#0E1E38] text-white"
                  : "text-[#0E1E38]"
              }`}
            >
              Internal
            </button>
            <button
              onClick={() => setActiveTab("customer")}
              className={`flex-1 py-3 font-medium text-sm ${
                activeTab === "customer"
                  ? "bg-[#0E1E38] text-white"
                  : "text-[#0E1E38]"
              }`}
            >
              Customer
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4">
            <div className="space-y-3">
              <div className="flex gap-3">
                <Bell className="mt-1 text-gray-500" size={16} />
                <div>
                  <p className="font-bold text-[#1E1E1E]">
                    Alert: p95 latency elevated • <span className="font-normal">17:05:17</span>
                  </p>
                  <p className="text-sm text-[#1E1E1E]">Metrics/alerting</p>
                  <p className="text-sm text-[#929292]">
                    p95 &gt; 2.5s for 10m
                  </p>
                </div>
              </div>

              <div className="border-t border-[#0000001a]" />

              <div className="flex gap-3">
                <Bell className="mt-1 text-gray-500" size={16} />
                <div>
                  <p className="font-semibold">
                    Auto-incident created + assigned • <span className="font-normal">17:05:17</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Incident management
                  </p>
                  <p className="text-sm text-gray-400">
                    On-call + Incident Commander paged
                  </p>
                </div>
              </div>

              <div className="border-t border-[#0000001a]" />

              <div className="flex gap-3">
                <Clock className="mt-1 text-gray-500" size={16} />
                <div>
                  <p className="font-semibold">
                    Deploy detected • <span className="font-normal">17:05:17</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    auth-api v2.8.14 → v2.8.15
                  </p>
                </div>
              </div>

              <div className="border-t border-[#0000001a]" />

              <div className="flex gap-3">
                <MessageSquare className="mt-1 text-gray-500" size={16} />
                <div>
                  <p className="font-semibold">
                    Customer banner published • 20:05:17
                  </p>
                  <p className="text-sm text-gray-500">
                    Incident Commander
                  </p>
                  <p className="text-sm text-gray-400">
                    Banner updated
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
            <textarea
                placeholder={activeTab === "internal" ? "Add a note..." : "Customer banner"}
                className="w-full h-28 rounded-lg border border-[#0000001a] p-3 text-sm outline-none"
            />

            <div className="flex justify-end">
                <button className="border border-[#0000001a] text-sm rounded-lg py-2 w-fit min-w-[150px]">
                {activeTab === "internal" ? "Add Note" : "Publish"}
                </button>
            </div>
            </div>

          </div>

          <div className="px-5 py-3 border-t border-[#0000001a]">
            <button className="w-full bg-[#0E1E38] text-sm text-white py-3 rounded-lg font-medium">
              Mark Resolved
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
