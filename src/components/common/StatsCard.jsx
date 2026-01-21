const StatsCards = ({ stats = [] }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-3 mb-5">
      {stats.map((item, index) => {
        const isPositive = item.change >= 0;

        return (
          <div
            key={index}
            className="bg-white border border-[#0000001A] rounded-lg lg:rounded-[20px] py-6 px-4 flex items-center gap-4"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: item.iconBg }}
            >
              <img src={item.icon} alt="" className="w-11 h-11" />
            </div>

            <div className="flex-1">
              <p className="text-[18px] text-[#1E1E1E]">
                {item.label}
              </p>

              <p className="text-[26px] font-semibold text-[#1E1E1E]">
                {item.value}
              </p>

              {item.changeText && (
                <p
                  className={`text-[16px] mt-1.5 ${
                    isPositive ? "text-[#00A63E]" : "text-[#CF2027]"
                  }`}
                >
                  {isPositive ? "+" : ""}
                  {item.changeText}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
