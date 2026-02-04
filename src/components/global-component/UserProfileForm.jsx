import { Camera, Upload } from "lucide-react";
import { useRef, useState } from "react";
import Select from "../common/Select";
import CoverPhotoUpload from "./CoverPhotoUpload";
import EIN from "../../assets/ein.png";
import FoodLicense from "../../assets/foodlicense.png";
import ProfilePhoto from "../../assets/profileimgrest.png";
import { useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { Image as ImageIcon } from "lucide-react";
import calendarIcon from "../../assets/calendaricon.svg";
import SendIssueModal from "./SendIssueModal";
import ConfirmActionModal from "./ConfirmActionModal";

export default function MerchantProfileForm({
  isView,
  isEdit,
  isAddUser,
  viewApplication,
}) {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [Type, setType] = useState("");
  const [openIssue, setOpenIssue] = useState(false);
  const [confirmType, setConfirmType] = useState(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [pickerOpen, setPickerOpen] = useState(false);

  const FileUploadBox = ({ label, uploadPreview: initialPreview }) => {
    const inputRef = useRef(null);
    const [uploadPreview, setUploadPreview] = useState(initialPreview || null);

    return (
      <div>
        <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
          {label}
        </label>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setUploadPreview(URL.createObjectURL(file));
            }
          }}
        />

        {!uploadPreview ? (
          <div
            onClick={() => inputRef.current.click()}
            className="w-full h-[61px] mt-1 px-4 rounded-lg border border-[#D0D5DD] flex items-center justify-between cursor-pointer"
          >
            <span className="text-[18px] text-[#667085]">Upload here</span>
            <Upload className="w-5 h-5 text-[#0E1E38]" />
          </div>
        ) : (
          <div
            onClick={() => inputRef.current.click()}
            className="mt-2 cursor-pointer relative rounded-lg overflow-hidden border border-[#D0D5DD]"
          >
            <img
              src={uploadPreview}
              className="w-full h-[160px] object-cover"
            />
          </div>
        )}
      </div>
    );
  };

  const DocumentUploadBox = ({ label }) => {
    const inputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    return (
      <div>
        <p className="sm:text-[18px] text-base font-semibold text-[#101828] mb-2">{label}</p>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPreview(URL.createObjectURL(file));
          }}
        />

        <div
          onClick={() => inputRef.current.click()}
          className="h-[220px] rounded-xl border border-dashed border-[#D0D5DD] bg-[#F9FAFB] flex items-center justify-center cursor-pointer overflow-hidden"
        >
          {preview ? (
            <img src={preview} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center text-[#98A2B3]">
              <ImageIcon className="w-8 h-8 mb-2" />
              <span className="text-sm">Upload</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <CoverPhotoUpload
        value={cover}
        onChange={setCover}
        isView={isView}
        isEdit={isEdit}
      />

      <div className="relative">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <div
            onClick={() => profileRef.current.click()}
            className="relative cursor-pointer w-28 h-28 rounded-full bg-[#D9D9D9] flex items-center justify-center border-4 border-white overflow-hidden"
          >
            {profile ? (
              <img src={profile} className="w-full h-full object-cover" />
            ) : isEdit || isView ? (
              <img src={ProfilePhoto} className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-1">
                <Camera className="w-6 h-6 text-[#000]" />
                <p className="text-xs text-[#000]">Profile Photo</p>
              </div>
            )}

            <input
              ref={profileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setProfile(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>
        </div>

        <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white rounded-b-xl lg:p-6 p-3">
          <div className="sm:col-span-2 lg:!max-w-[49%] mx-auto w-full">
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              User Type
            </label>
            <Select
              placeholder="Select user type"
              value={Type}
              onChange={setType}
              options={[
                { label: "Normal User", value: "Normal User" },
                { label: "Influencer", value: "Influencer" },
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>

          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              First Name
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>
          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Last Name
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div className="mb-4 relative">
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Date of Birth
            </label>

            <div
              onClick={() => setPickerOpen((v) => !v)}
              className="mt-1 h-[61px] w-full rounded-lg bg-white px-3 flex items-center justify-between cursor-pointer border border-[#D0D5DD]"
            >
              <span
                className={`text-[18px] ${date ? "text-black" : "text-[#667085]"}`}
              >
                {date ? format(date, "dd/MM/yyyy") : "DD/MM/YYYY"}
              </span>
              <img src={calendarIcon} alt="calendar icon" className="w-5 h-5" />
            </div>

            {pickerOpen && (
              <div className="absolute bottom-16 z-50 mt-2 bg-white rounded-xl shadow-lg p-3">
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    setPickerOpen(false);
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Phone Number
            </label>

            <div className="mt-1 flex items-center gap-3">
              <div className="flex items-center gap-2 h-[61px] px-3 rounded-lg border border-[#D0D5DD] bg-white cursor-pointer">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="US"
                  className="w-8 h-5 object-cover rounded-sm"
                />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-black"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <input
                className="flex-1 h-[61px] px-4 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
                placeholder="Enter"
              />
            </div>
          </div>
        </div>

        {!isAddUser && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 bg-white lg:p-6 p-3 lg:rounded-xl rounded-lg">
            <p className="sm:col-span-2 sm:text-[24px] text-xl font-medium text-[#1E1E1E]">
              Upload Documents
            </p>

            <div>
              <div className="w-full">
                <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
                  Identity Verification{" "}
                  <span className="text-sm">
                    (upload any of the following documents)
                  </span>
                </label>
                <Select
                  placeholder="Select Identity Verification"
                  value={Type}
                  onChange={setType}
                  options={[
                    { label: "Passport", value: "Passport" },
                    { label: "Driver's License", value: "Driver's License" },
                    { label: "National Id Card", value: "National Id Card" },
                  ]}
                  inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
                  listItemClassName="!px-3 !text-sm"
                  listParentClassName=""
                />
              </div>
              <FileUploadBox uploadPreview={EIN} />
            </div>

            <div>
              <div className="w-full">
                <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
                  Tax Information{" "}
                  <span className="text-sm">(required for earning)</span>
                </label>
                <Select
                  placeholder="Select Tax Information"
                  value={Type}
                  onChange={setType}
                  options={[
                    {
                      label: "Tax Identification Number (TIN)",
                      value: "Tax Identification Number (TIN)",
                    },
                    {
                      label: "Social Security Number (SSN)",
                      value: "Social Security Number (SSN)",
                    },
                  ]}
                  inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
                  listItemClassName="!px-3 !text-sm"
                  listParentClassName=""
                />
              </div>
              <FileUploadBox uploadPreview={FoodLicense} />
            </div>
          </div>
        )}

        {!isAddUser && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 bg-white lg:p-6 p-3 lg:rounded-xl rounded-lg">
            <p className="sm:col-span-2 sm:text-[24px] text-xl font-medium text-[#1E1E1E] sm:flex-row flex-col gap-3 flex">
              Add Your Bank Account Details{" "}
              <span className="text-sm">
                (To receive payments, you’ll need to link your bank account.)
              </span>
            </p>
            <div className="sm:col-span-2">
              <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
                Bank Name
              </label>
              <input
                className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
                placeholder="Enter"
              />
            </div>

            <div>
              <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
                Account Number
              </label>
              <input
                className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
                placeholder="Enter"
              />
            </div>

            <div>
              <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
                Account Type
              </label>
              <input
                className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
                placeholder="Enter"
              />
            </div>

            <div>
              <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
                Account Holder’s Name
              </label>
              <input
                className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
                placeholder="Enter"
              />
            </div>

            <div>
              <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
                Routing Number
              </label>
              <input
                className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
                placeholder="Enter"
              />
            </div>
          </div>
        )}

        {!isAddUser && (
          <div className="bg-white lg:rounded-xl rounded-lg border border-[#E5E7EB] lg:p-6 p-3 mt-5">
            <h2 className="sm:text-[24px] text-xl font-semibold text-[#101828] mb-5 flex flex-col sm:flex-row gap-3">
              Upload Business Documents{" "}
              <span className="text-sm text-[#475467]">
                (If applying as a company or agency. For brands or agencies
                managing creators.)
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DocumentUploadBox label="Business registration certificate" />
              <DocumentUploadBox label="Tax registration certificate" />
              <DocumentUploadBox label="Proof of business address" />
            </div>
          </div>
        )}

        {(isEdit || isAddUser) && (
          <div className="space-y-5 mt-5">
            <div className="flex justify-end gap-4 !mt-10">
              <button
                onClick={() => navigate("/users")}
                className="sm:px-8 px-3 h-[61px] rounded-lg border bg-white border-red-500 text-red-500"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/users")}
                className="sm:px-8 px-3 h-[61px] rounded-lg bg-[#0E1E38] text-white"
              >
                Save
              </button>
            </div>
          </div>
        )}
        {viewApplication && !isEdit && (
          <div className="space-y-5 mt-5">
            <div className="flex justify-end gap-4 !mt-10">
              <button
                onClick={() => setOpenIssue(true)}
                className="sm:px-8 px-3 h-[61px] rounded-lg border bg-white border-red-500 text-red-500"
              >
                Send Issue
              </button>
              <button
                onClick={() => {
                  setConfirmType("REJECT");
                }}
                className="sm:px-8 px-3 h-[61px] rounded-lg border border-red-500 bg-red-500 text-white"
              >
                Reject
              </button>
              <button
                onClick={() => {
                  setConfirmType("APPROVE");
                }}
                className="sm:px-8 px-3 h-[61px] rounded-lg bg-green-500 text-white"
              >
                Approve
              </button>
            </div>
          </div>
        )}

        <SendIssueModal open={openIssue} onClose={() => setOpenIssue(false)} />

        <ConfirmActionModal
          viewApplication={true}
          open={!!confirmType}
          type={confirmType}
          onClose={() => setConfirmType(null)}
          onConfirm={() => {
            setConfirmType(null);
          }}
        />
      </div>
    </div>
  );
}
