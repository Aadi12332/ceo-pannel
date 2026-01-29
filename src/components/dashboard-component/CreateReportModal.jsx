import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import Select from "../common/Select";
import calendarIcon from "../../assets/calendaricon.svg";

const REPORT_TYPES = [
  { value: "total_users", label: "Total Users" },
  { value: "total_providers", label: "Total Providers" },
  { value: "total_revenue", label: "Total Revenue" },
  { value: "avg_rating", label: "Avg Rating" },
  { value: "total_influencers", label: "Total Influencers" },
  { value: "total_cost", label: "Total Cost" },
  { value: "total_videos", label: "Total Videos" },
  { value: "total_orders", label: "Total Orders" },
];

const FORMATS = ["PDF", "Excel", "CSV"];

const CreateReportModal = ({ open, onClose }) => {
  const [type, setType] = useState(REPORT_TYPES[0]);
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [formatType, setFormatType] = useState("PDF");

  if (!open) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-[720px] rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E5E7EB]">
          <h2 className="text-[18px] text-[#101828]">Create Report</h2>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label className="block text-[14px] text-[#4A5565] mb-1">Report Type</label>
            <Select
              placeholder="Select report"
              options={REPORT_TYPES}
              value={type}
              onChange={setType}
              inputClassName="!h-11 !px-4 !text-[14px] !rounded-xl !bg-white !border !border-[#E5E7EB]"
              listItemClassName="!text-[14px] !px-4 !py-2"
              listParentClassName="!max-h-[200px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="text-[14px] text-[#4A5565] mb-1 block">Date From *</label>

              <div
                onClick={() => {
                  setFromOpen(!fromOpen);
                  setToOpen(false);
                }}
                className="h-11 px-4 flex items-center justify-between border rounded-xl cursor-pointer text-[14px] !border-[#E5E7EB]"
              >
                <span className={from ? "text-[#101828]" : "text-[#98A2B3]"}>
                  {from ? format(from, "dd / MM / yyyy") : "dd / mm / yyyy"}
                </span>
                <span>
                    <img src={calendarIcon} alt="" />
                </span>
              </div>

              {fromOpen && (
                <div className="absolute z-20 mt-2 bg-white border rounded-xl shadow-lg p-2">
                  <DayPicker
                    mode="single"
                    selected={from}
                    onSelect={(date) => {
                      setFrom(date);
                      setFromOpen(false);
                    }}
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <label className="text-[14px] text-[#4A5565] mb-1 block">Date To *</label>

              <div
                onClick={() => {
                  setToOpen(!toOpen);
                  setFromOpen(false);
                }}
                className="h-11 px-4 flex items-center justify-between border rounded-xl cursor-pointer text-[14px] !border-[#E5E7EB]"
              >
                <span className={to ? "text-[#101828]" : "text-[#98A2B3]"}>
                  {to ? format(to, "dd / MM / yyyy") : "dd / mm / yyyy"}
                </span>
                <span>
                    <img src={calendarIcon} alt="" />
                </span>
              </div>

              {toOpen && (
                <div className="absolute z-20 mt-2 bg-white border !border-[#E5E7EB] rounded-xl shadow-lg p-2">
                  <DayPicker
                    mode="single"
                    selected={to}
                    onSelect={(date) => {
                      setTo(date);
                      setToOpen(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-[14px] text-[#4A5565] mb-2">Export Format *</label>
            <div className="flex gap-3">
              {FORMATS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFormatType(f)}
                  className={`px-6 py-2 rounded-xl border  text-[16px] flex-1 font-medium transition
                    ${
                      formatType === f
                        ? "bg-[#101828] text-white border-[#E5E7EB]"
                        : "border-[#D1D5DC] text-[#101828]"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <p className="text-[#364153] text-[14px] mt-2">
                <label
                className="flex items-center gap-3 text-[#1E1E1E] text-[16px]"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-md accent-[#0E1E38]"
                />
                Include charts and visualizations
              </label>
            </p>
          </div>

          <div className="border rounded-xl p-4 bg-[#F9FAFB]">
            <h4 className="font-medium text-[14px] mb-2">Report Preview</h4>
            <ul className="text-[12px] text-[#4A5565] space-y-1.5">
              <li>• Type: {type.label}</li>
              <li>
                • Period:{" "}
                {from && to
                  ? `${format(from, "dd MMM yyyy")} → ${format(
                      to,
                      "dd MMM yyyy",
                    )}`
                  : "Not set"}
              </li>
              <li>• Format: {formatType}</li>
              <li>• Charts: Included</li>
            </ul>
          </div>
        </div>

        <div className="px-6 py-4 border-t flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-[#E5E7EB] !text-[#101828] text-base"
          >
            Cancel
          </button>
          <button onClick={onClose} className="px-6 py-2 rounded-xl bg-[#101828] text-white text-base">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateReportModal;
