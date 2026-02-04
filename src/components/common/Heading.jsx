const PageHeader = ({ title, description, filter, actions = [] }) => {
  return (
    <div className="w-full flex xl:flex-row flex-col xl:items-center justify-between gap-5 mb-5">
      <div>
        <h1 className="text-[28px] font-bold text-[#0A0A0A]">{title}</h1>

        {description && (
          <p className="text-[16px] text-[#4A5565] mt-2.5">{description}</p>
        )}
      </div>

      {actions.length > 0 && (
        <div className="flex items-center sm:gap-4 gap-2 flex-wrap lg:flex-nowrap">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={`flex items-center gap-2 sm:px-5 px-2 lg:h-[62px] sm:h-12 h-10 min-w-max rounded-lg text-[15px] sm:text-[18px] font-medium transition
                ${
                  action.variant === "secondary"
                    ? "bg-white border border-[#0E1E38] text-[#0E1E38]"
                    : "bg-[#0E1E38] text-white"
                }`}
            >
              {action.icon && (
                <img
                  src={action.icon}
                  alt=""
                  className={`sm:w-7 w-4 h-7 ${action.filter ? "filter invert" : ""}`}
                />
              )}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
