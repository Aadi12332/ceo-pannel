const PolicyPackSelector = ({
  title = "Policy Pack Selector",
  tabs = [],
  activeTab,
  onChange,
}) => {
  return (
    <div className="w-full bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] px-6 py-6 mb-5">

      <h2 className="text-[20px] text-[#0A0A0A] mb-6">
        {title}
      </h2>

      <div className="flex items-center gap-3 flex-wrap">
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab;

          return (
            <button
              key={tab.value}
              onClick={() => onChange(tab.value)}
              className={`px-2 py-1 rounded-lg text-[12px] transition border
                ${
                  isActive
                    ? "bg-[#DBEAFE] text-[#193CB8] border-[#0000001A]"
                    : "bg-[#F3F4F6] text-[#0E1E38] border-[#E5E7EB] hover:bg-[#F3F4F6]"
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PolicyPackSelector;
