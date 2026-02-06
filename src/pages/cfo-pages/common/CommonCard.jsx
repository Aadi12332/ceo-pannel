import React from "react";

const CommonCard = ({
  title,
  value,
  subText,
  change,
  changeType,
  icon,
  iconBgClass,
  subTextValue
}) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl px-5 py-4 shadow-sm">
      <div className="flex flex-col gap-3">
        <p className="text-base text-[#1E1E1E]">{title}</p>

       <div className="flex items-end gap-2">
         <p className="text-[32px] text-[#1E1E1E] leading-[1]">{value}</p>
        {subTextValue && (
          <p className="text-sm text-[#9CA3AF]">{subTextValue}</p>
        )}
       </div>

        {change && (
          <p
            className={`text-sm mt-1 ${
              changeType === "positive"
                ? "text-[#00A63E]"
                : "text-[#CF2027]"
            }`}
          >
            {change}
          </p>
        )}
        {subText && (
          <p className="text-sm text-[#9CA3AF]">{subText}</p>
        )}
      </div>

      <div
        className={`flex items-center justify-center w-10 h-10 min-w-10 rounded-lg ${iconBgClass}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default CommonCard;
