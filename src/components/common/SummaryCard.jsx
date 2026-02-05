const SummaryCards = ({ items = [], title }) => {
  const isSixItems = items.length === 6;
  return (
    <div>
      {title && (
        <h2 className="text-[22px] font-bold mb-5 text-[#0A0A0A]">{title}</h2>
      )}
      <div
        className={`grid ${
          isSixItems ? "xl:grid-cols-6" : "xl:grid-cols-4"
        } lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 2xl:gap-6 lg:gap-3 gap-2 mb-5`}
      >
        {items.map((item, index) => {
          const isUp = item.change > 0;
          const isDown = item.change < 0;

          return (
            <div
              key={index}
              className="bg-white border border-[#0000001A] rounded-lg lg:rounded-[14px] lg:px-5 px-3 lg:py-6 py-3 flex flex-col justify-between lg:min-h-[120px] min-h-[80px]"
            >
              <p className="text-[14px] text-[#4A5565]">{item.label}</p>

              <div className="flex items-end justify-between gap-2 mt-3">
                <span className="2xl:text-[30px] sm:text-[24px] text-lg font-bold text-[#0A0A0A]">
                  {item.value}
                </span>

                <span
                  className={`flex items-center gap-1 sm:text-[14px] text-[12px] min-w-max
                  ${
                    isUp
                      ? "text-[#00A63E]"
                      : isDown
                        ? "text-[#E7000B]"
                        : "text-[#4A5565]"
                  }`}
                >
                  {isUp && "↑"}
                  {isDown && "↓"}
                  {item.value === "GoogleMeet"
                    ? ""
                    : `${!isUp && !isDown ? "–" : ""}${Math.abs(item.change)}%`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummaryCards;
