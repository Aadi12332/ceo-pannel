const QuickActions = ({ title, actions = [] }) => {
  const isFourItems = actions.length === 4;

  return (
    <div className="w-full bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] p-6 mb-5">
      {title && (
        <h2 className="text-[20px] text-[#0A0A0A] mb-8">
          {title}
        </h2>
      )}

      <div
        className={`${
          isFourItems
            ? "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
            : "grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"
        }`}
      >
        {actions.map((action, index) => {
          const isDanger = action.variant === "danger";

          return (
            <button
              key={index}
              type="button"
              onClick={action.onClick}
              className={`rounded-lg cursor-pointer flex-1 py-4 px-2 text-center flex justify-start items-center flex-col transition border border-[#0000001A]
                ${
                  isDanger
                    ? "bg-[#C5313F] text-white border-[#C5313F]"
                    : "bg-white text-[#1E1E1E] border-[#E5E7EB] hover:shadow-sm"
                }`}
            >
              {action.icon && (
                <img
                  src={action.icon}
                  alt=""
                  className="mb-4 w-5"
                />
              )}

              <p
                className={`text-[14px] font-medium ${
                  isDanger ? "text-white" : "text-[#0A0A0A]"
                }`}
              >
                {action.label}
              </p>

              {action.command && (
                <p
                  className={`text-[14px] mt-1 break-all ${
                    isDanger ? "text-white/80" : "text-[#717182]"
                  }`}
                >
                  {action.command}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
