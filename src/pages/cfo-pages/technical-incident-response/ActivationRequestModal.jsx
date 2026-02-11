import { X } from "lucide-react";

export default function ActivationRequestModal({ open, setOpen }) {
  const items = [
    {
      title: "Documentation Complete",
      desc: "All technical and user documentation has been completed",
      checked: false,
    },
    {
      title: "Testing Completed",
      desc: "All test cases passed including UAT",
      checked: true,
    },
    {
      title: "Security Review",
      desc: "Security audit completed with no critical issues",
      checked: true,
    },
    {
      title: "Compliance Check",
      desc: "All regulatory requirements met",
      checked: true,
    },
    {
      title: "Dependencies Met",
      desc: "All external dependencies and integrations verified",
      checked: false,
    },
    {
      title: "Team Training",
      desc: "Support and operations teams trained",
      checked: false,
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative w-[96%] max-h-[96vh] overflow-auto scroll-hide max-w-[840px] bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]
        transform transition-all duration-300 ease-in-out
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Activation Request</h2>
            <p className="text-sm text-gray-500 mt-1">
              Complete the checklist to activate this product
            </p>
          </div>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="space-y-5">
          {items.map((item, i) => (
            <div key={i}>
              <div className="flex gap-4 items-start">
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-1 accent-black"
                />

                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>

              {i !== items.length - 1 && (
                <div className="border-t border-[#0000001a] mt-5" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="font-medium mb-2">Comments (Optional)</p>
          <textarea className="w-full h-24 rounded-lg border border-[#0000001a] p-3 outline-none" />
        </div>

        <div className="flex justify-between gap-4 mt-3 border-t border-[#0000001a] pt-5">
          <button
            onClick={() => setOpen(false)}
            className="flex-1 border border-[#0000001a] rounded-lg py-3"
          >
            Cancel
          </button>

          <button className="flex-1 bg-[#0E1E38] text-white rounded-lg py-3 font-medium">
            Submit for Approval
          </button>
        </div>
      </div>
    </div>
  );
}
