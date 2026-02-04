const InsightCards = ({ items = [] }) => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3 flex flex-col justify-between min-h-[150px]"
        >
          <div className="flex items-center gap-2">
            {item.icon && (
              <img
                src={item.icon}
                alt=""
                className="w-5"
              />
            )}

            <span
              className="text-[16px] text-[#0A0A0A]"
            >
              {item.title}
            </span>
          </div>

          <div className="mt-5">
            <p
              className="text-[30px] font-bold"
              style={{ color: item.color }}
            >
              {item.value}
            </p>

            {item.subtitle && (
              <p className="text-[14px] text-[#4A5565] mt-1">
                {item.subtitle}
              </p>
            )}
          </div>

          {item.footer && (
            <p className="text-[14px] text-[#4A5565] mt-1">
              {item.footer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default InsightCards;
