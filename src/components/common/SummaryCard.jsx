const SummaryCards = ({ items = [], title }) => {
  const isSixItems = items.length === 6;
  return (
    <div>
    {title && <h2 className="text-[22px] font-bold mb-5 text-[#0A0A0A]">{title}</h2>}
    <div   className={`grid ${
    isSixItems ? "xl:grid-cols-6" : "xl:grid-cols-4"
  } lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-6 gap-3 mb-5`}>
      {items.map((item, index) => {
        const isUp = item.change > 0;
        const isDown = item.change < 0;

        return (
          <div
            key={index}
            className="bg-white border border-[#0000001A] rounded-lg lg:rounded-[14px] px-5 py-6 flex flex-col justify-between min-h-[120px]"
          >
            <p className="text-[14px] text-[#4A5565]">
              {item.label}
            </p>

            <div className="flex items-end justify-between gap-2 mt-3">
              <span className="2xl:text-[30px] text-[24px] font-bold text-[#0A0A0A]">
                {item.value}
              </span>

              <span
                className={`flex items-center gap-1 text-[14px] min-w-max
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
                {!isUp && !isDown && "–"} {Math.abs(item.change)}%
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
