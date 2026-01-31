import { Camera, Upload } from "lucide-react";
import { useRef, useState } from "react";
import Select from "../common/Select";
import CoverPhotoUpload from "./CoverPhotoUpload";
import EIN from "../../assets/ein.png";
import FoodLicense from "../../assets/foodlicense.png";
import ProfilePhoto from "../../assets/profileimgrest.png";

const marketingPlans = [
  {
    value: "10",
    title: "10%",
    desc: "If you choose the 10% option, and your product price is $100, the final price will be displayed as $110.",
  },
  {
    value: "15",
    title: "15%",
    desc: "If you choose the 15% option, and your product price is $100, the final price will be displayed as $115.",
  },
  {
    value: "20",
    title: "20%",
    desc: "If you choose the 20% option, and your product price is $100, the final price will be displayed as $120.",
  },
];

const subscriptionPlans = [
  {
    value: "annual",
    title: "Annual",
    desc: "First 30 days free - Then $999/Year",
    badge: "Best Value",
  },
  {
    value: "monthly",
    title: "Monthly",
    desc: "First 7 days free - Then $99/Month",
  },
];

export default function MerchantProfileForm({ isView, isEdit }) {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [Type, setType] = useState("");
  const [role, setRole] = useState("");
  const [role2, setRole2] = useState("");
  const profileRef = useRef(null);
  const [marketingPlan, setMarketingPlan] = useState("10");
  const [subscriptionPlan, setSubscriptionPlan] = useState("annual");

  const FileUploadBox = ({ label, uploadPreview: initialPreview }) => {
    const inputRef = useRef(null);
    const [uploadPreview, setUploadPreview] = useState(initialPreview || null);

    return (
      <div>
        <label className="text-[20px] text-[#000000CC] font-semibold">
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

  return (
    <div className="">
      <CoverPhotoUpload value={cover} onChange={setCover} isView={isView} isEdit={isEdit} />

      <div className="relative pb-6">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <div
            onClick={() => profileRef.current.click()}
            className="relative cursor-pointer w-28 h-28 rounded-full bg-[#D9D9D9] flex items-center justify-center border-4 border-white overflow-hidden"
          >
            {profile ? (
                <img src={profile} className="w-full h-full object-cover" />
                ) : (isEdit || isView) ? (
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

        <div className="pt-20 grid grid-cols-2 gap-5 bg-white rounded-b-xl p-6">
          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Merchant Type
            </label>
            <Select
              placeholder="Select merchant type"
              value={Type}
              onChange={setType}
              options={[
                { label: "Restaurant", value: "Restaurant" },
                { label: "Shopping", value: "Shopping" },
                { label: "Grocery", value: "Grocery" },
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Business Name
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Email Address
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
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

        <div className="grid grid-cols-2 gap-5 mt-5 bg-white p-6 rounded-xl">
          <p className="col-span-2 text-[24px] font-medium text-[#1E1E1E]">
            Tell Us About The Business
          </p>
          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              How Many Branches Do You Have?
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              How Many Employees Do You Have?
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              How Many Days Do You Open?
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5 bg-white p-6 rounded-xl">
          <p className="col-span-2 text-[24px] font-medium text-[#1E1E1E]">
            Add The Office Address
          </p>
          <div className="col-span-2">
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Address
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Street Name
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Street Number
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              City
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Country
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              State
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Zip Code
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5 bg-white p-6 rounded-xl">
          <p className="col-span-2 text-[24px] font-medium text-[#1E1E1E]">
            Upload Business Documents
          </p>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Owner’s Name
            </label>
            <input
              className="w-full h-[61px] mt-1 px-3 text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Business Type
            </label>
            <Select
              placeholder="Select business type"
              value={Type}
              onChange={setType}
              options={[
                { label: "Restaurant Dining", value: "Restaurant Dining" },
                { label: "Catering", value: "Catering" },
                {
                  label: "Food Truck for Event",
                  value: "Food Truck for Event",
                },
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>

          {isView || isEdit ? (
            <>
              <FileUploadBox
                label="Employer Identification Number (EIN)"
                uploadPreview={EIN}
              />

              <FileUploadBox
                label="Food Service License"
                uploadPreview={FoodLicense}
              />
            </>
          ) : (
            <>
              <FileUploadBox label="Employer Identification Number (EIN)" />
              <FileUploadBox label="Food Service License" />
            </>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 bg-white rounded-xl p-6 mt-5">
          <p className="col-span-2 text-[24px] font-medium text-[#1E1E1E]">
            Which Services They Need
          </p>
          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Services
            </label>
            <Select
              value={role}
              onChange={setRole}
              showCheckbox={true}
              placeholder="Select merchant type"
              options={[
                { label: "AllneedaEats", value: "AllneedaEats" },
                { label: "Website", value: "Website" },
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>
          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              3rd Party
            </label>
            <Select
              value={role2}
              onChange={setRole2}
              showCheckbox={true}
              placeholder="Select merchant type"
              options={[
                { label: "UberEats", value: "UberEats" },
                { label: "DoorDash", value: "DoorDash" },
                { label: "GrubHub", value: "GrubHub" },
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 bg-white rounded-xl p-6 mt-5">
          <p className="col-span-2 text-[24px] font-medium text-[#1E1E1E]">
            Order Method
          </p>
          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Mobile App
            </label>
            <Select
              value={role}
              onChange={setRole}
              showCheckbox={true}
              placeholder="Select merchant type"
              options={[
                { label: "Receive on Email ", value: "Receive on Email " },
                { label: "Receive on SMS", value: "Receive on SMS" },
                {
                  label: "Receive on Notification",
                  value: "Receive on Notification",
                },
                { label: "Receive on Text", value: "Receive on Text" },
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
            />
          </div>
          <div>
            <label className="text-[20px] text-[#000000CC] font-semibold">
              Tablet
            </label>
            <Select
              value={role2}
              onChange={setRole2}
              showCheckbox={true}
              placeholder="Select merchant type"
              options={[
                { label: "Receive on Email ", value: "Receive on Email " },
                { label: "Receive on SMS", value: "Receive on SMS" },
                {
                  label: "Receive on Notification",
                  value: "Receive on Notification",
                },
                { label: "Receive on Text", value: "Receive on Text" },
              ]}
              inputClassName="!h-[61px] !mt-1 !rounded-lg !px-3 !text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
            />
          </div>
        </div>

        <div className="space-y-5 mt-5">
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-[24px] font-medium text-[#1E1E1E] mb-4">
              Marketing Plan
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {marketingPlans.map((item) => {
                const active = marketingPlan === item.value;

                return (
                  <div
                    key={item.value}
                    onClick={() => setMarketingPlan(item.value)}
                    className={`cursor-pointer rounded-lg border p-4 transition
                  ${
                    active
                      ? "bg-[#0E1E38] text-white border-[#0E1E38]"
                      : "bg-white text-[#101828] border-[#D0D5DD]"
                  }`}
                  >
                    <p className="text-lg font-semibold mb-1">{item.title}</p>
                    <p
                      className={`text-sm ${
                        active ? "text-[#E4E7EC]" : "text-[#475467]"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-[24px] font-medium text-[#1E1E1E] mb-4">
              Subscription Plan{" "}
              <span className="text-[#0E1E38] text-base">
                (subscriptions ends in 6 months)
              </span>
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {subscriptionPlans.map((item) => {
                const active = subscriptionPlan === item.value;

                return (
                  <div
                    key={item.value}
                    onClick={() => setSubscriptionPlan(item.value)}
                    className={`cursor-pointer rounded-lg border p-4 transition flex justify-between items-start
                  ${
                    active
                      ? "bg-[#0E1E38] text-white border-[#0E1E38]"
                      : "bg-white text-[#101828] border-[#D0D5DD]"
                  }`}
                  >
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p
                        className={`text-sm ${
                          active ? "text-[#E4E7EC]" : "text-[#475467]"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>

                    {item.badge && (
                      <span className="text-xs bg-[#22C55E] text-white px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-4 !mt-10">
            <button className="px-8 h-[61px] rounded-lg border bg-white border-red-500 text-red-500">
              Cancel
            </button>
            <button className="px-8 h-[61px] rounded-lg bg-[#0E1E38] text-white">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
