import { useState } from "react";
import Select from "../common/Select";

const departmentsData = [
  { name: "Onboarding Department", actions: true },
  { name: "Customer Service Department", actions: true },
  { name: "Human Resources Department", actions: true },
  { name: "Training Development Department", actions: true },
  { name: "Quality Assurance Department", actions: true },
];

export default function EmployeeProfileForm({ isEdit, setIsEdit }) {
  const [Type, setType] = useState("");
  const [Type2, setType2] = useState("");
  const [departments, setDepartments] = useState(departmentsData);

  const handleToggle = (index) => {
    setDepartments((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, actions: !item.actions } : item,
      ),
    );
  };

  return (
    <div className="">
      <div className="relative pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white lg:rounded-xl lg:p-6 p-3 rounded-lg">
          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Full Name
            </label>
            <input
              className="w-full sm:h-[61px] h-12 mt-1 px-3 text-base sm:text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Email Address
            </label>
            <input
              className="w-full sm:h-[61px] h-12 mt-1 px-3 text-base sm:text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Password
            </label>
            <input
              className="w-full sm:h-[61px] h-12 mt-1 px-3 text-base sm:text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Confirm Password
            </label>
            <input
              className="w-full sm:h-[61px] h-12 mt-1 px-3 text-base sm:text-[18px] rounded-lg border border-[#D0D5DD] focus:outline-none"
              placeholder="Enter"
            />
          </div>

          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Assign Role
            </label>
            <Select
              placeholder="Select merchant type"
              value={Type}
              onChange={(value) => {
                setType(value);
                setIsEdit(true);
              }}
              options={[
                { value: "CEO", label: "Chief Executive Officer (CEO)" },
                { value: "COO", label: "Chief Operating Officer (COO)" },
                { value: "CTO", label: "Chief Technology Officer (CTO)" },
                { value: "CFO", label: "Chief Financial Officer (CFO)" },
                { value: "CMO", label: "Chief Marketing Officer (CMO)" },
                { value: "LPD", label: "Lead Product Designer (LPD)" },
                { value: "GSD", label: "Growth Strategy Director (GSD)" },
                { value: "AAD", label: "Admin & Accounts Director (AAD)" },
              ]}
              inputClassName="!h-12 sm:!h-[61px] !mt-1 !rounded-lg !px-3 !text-base sm:!text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>

          <div>
            <label className="sm:text-[20px] text-base text-[#000000CC] font-semibold">
              Tools Permission
            </label>
            <Select
              placeholder="Select merchant type"
              value={Type2}
              onChange={setType2}
              options={[
                { label: "Google Meet", value: "Google Meet" },
                { label: "Whatsapp", value: "Whatsapp" },
                { label: "Google Map", value: "Google Map" },
                { label: "Google Earth", value: "Google Earth" },
                { label: "Open AI", value: "Open AI" },
                { label: "Call Access", value: "Call Access" },
                { label: "Email Access", value: "Email Access" },
                { label: "Push Notification", value: "Push Notification" },
              ]}
              inputClassName="!h-12 sm:!h-[61px] !mt-1 !rounded-lg !px-3 !text-base sm:!text-[18px] !bg-white !border !border-[#D0D5DD]"
              listItemClassName="!px-3 !text-sm"
              listParentClassName=""
            />
          </div>
        </div>

        {isEdit && (
          <div className="bg-[#EEF4FF] mt-5 space-y-5">
            <h2 className="text-xl font-semibold text-[#101828]">
              Role Details
            </h2>

            <div className="bg-white lg:rounded-xl rounded-lg border border-[#D0D5DD] lg:p-6 p-3">
              <h3 className="text-lg font-medium mb-3">Description</h3>
              <textarea
                className="w-full min-h-32 rounded-lg border border-[#D0D5DD] sm:p-4 p-2.5 text-sm outline-none focus:outline-none focus-visible:outline-none"
                defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#101828] mb-1">
                Permission Assignments
              </h2>
              <p className="text-sm text-gray-500">Permission Assignments</p>
            </div>

            <div className="bg-white lg:rounded-xl rounded-lg border border-[#D0D5DD]">
              <div className="lg:px-6 px-3 lg:py-4 py-2 border-b border-[#D0D5DD]">
                <h3 className="text-lg font-medium">Permission Assignments</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-6 p-3">
                {departments.map((item, index) => (
                  <div
                    key={item.name}
                    className="border border-[#D0D5DD] rounded-lg lg:p-4 p-2"
                  >
                    <p className="font-medium text-[#101828] mb-2">
                      {item.name}
                    </p>

                    <div className="flex items-center gap-3 h-10 mt-5">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={item.actions}
                          onChange={() => handleToggle(index)}
                        />
                        <div className="w-9 h-5 bg-blue-200 rounded-full peer-checked:bg-blue-500 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:h-4 after:w-4 after:rounded-full after:transition-all peer-checked:after:translate-x-4" />
                      </label>

                      {item.actions && (
                        <div className="flex gap-2 items-center flex-wrap">
                          <button className="bg-green-500 hover:bg-white border-green-500 hover:text-green-500 border text-white px-4 py-1 rounded-md text-sm">
                            View
                          </button>
                          <button className="bg-green-500 hover:bg-white border-green-500 hover:text-green-500 border text-white px-4 py-1 rounded-md text-sm">
                            Edit
                          </button>
                          <button className="bg-green-500 hover:bg-white border-green-500 hover:text-green-500 border text-white px-4 py-1 rounded-md text-sm">
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-5 !mt-10">
          <div className="flex justify-center gap-4">
            <button className="px-8 h-[61px] rounded-lg border bg-white border-red-500 text-red-500">
              Cancel
            </button>
            <button className="px-8 h-[61px] rounded-lg bg-[#0E1E38] text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
