const PageHeader = ({ title, description, filter, actions = [] }) => {
  return (
    <div className="w-full flex lg:flex-row flex-col lg:items-center justify-between gap-5 mb-5">
      <div>
        <h1 className="text-[28px] font-bold text-[#0A0A0A]">{title}</h1>

        {description && (
          <p className="text-[16px] text-[#4A5565] mt-2.5">{description}</p>
        )}
      </div>

      {actions.length > 0 && (
        <div className="flex items-center gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={`flex items-center gap-2 px-5 lg:h-[62px] h-12 min-w-[180px] rounded-lg text-[18px] font-medium transition
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
                  className={`w-7 h-7 ${action.filter ? "filter invert" : ""}`}
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
