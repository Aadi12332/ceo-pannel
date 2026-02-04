import Select from "../common/Select";
import { useState } from "react";

const tabStyles = {
  global: {
    text: "text-[#193CB8]",
    bg: "bg-[#DBEAFE]",
  },
  city: {
    text: "text-[#6E11B0]",
    bg: "bg-[#F3E8FF]",
  },
  vertical: {
    text: "text-[#372AAC]",
    bg: "bg-[#E0E7FF]",
  },
  department: {
    text: "text-[#A3004C]",
    bg: "bg-[#FCE7F3]",
  },
  year: {
    text: "text-[#9F2D00]",
    bg: "bg-[#FFEDD4]",
  },
};

const optionsMap = {
  city: [
    { label: "Delhi", value: "delhi" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Bangalore", value: "bangalore" },
  ],
  vertical: [
    { label: "Food", value: "food" },
    { label: "Grocery", value: "grocery" },
    { label: "Services", value: "services" },
  ],
  department: [
    { label: "Finance", value: "finance" },
    { label: "Operations", value: "operations" },
    { label: "HR", value: "hr" },
  ],
  year: [
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
  ],
};

const PolicyPackSelector = ({
  title = "Policy Pack Selector",
  tabs = [],
  activeTab,
  onChange,
}) => {
  const [value, setValue] = useState("");

  const showSelect = activeTab !== "global";
  const options = optionsMap[activeTab] || [];

  return (
    <div className="w-full bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3 mb-5">
      <h2 className="text-[20px] text-[#0A0A0A] mb-6">{title}</h2>

      <div className="flex items-center sm:gap-3 gap-1.5 flex-wrap mb-4">
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab;
          const styles = tabStyles[tab.value] || {};

          return (
            <button
              key={tab.value}
              onClick={() => {
                onChange(tab.value);
                setValue("");
              }}
              className={`
              px-3 py-1 rounded-lg text-[12px] transition
              border border-[#D1D5DB]
              ${
                isActive
                  ? `${styles.bg} ${styles.text}`
                  : "bg-[#F3F4F6] text-[#0E1E38]"
              }
            `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {showSelect && (
        <Select
          placeholder={`Select ${activeTab}...`}
          options={options}
          value={value}
          onChange={setValue}
          inputClassName="!h-10 !w-full !px-3 !text-[14px] !rounded-lg !bg-[#F3F3F5] !border !border-[#E5E7EB]"
          listItemClassName="!text-[14px] !px-3 !py-2"
          listParentClassName="!max-h-[260px]"
        />
      )}
    </div>
  );
};

export default PolicyPackSelector;
