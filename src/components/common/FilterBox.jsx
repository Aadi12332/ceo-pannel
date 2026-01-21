import Select from "./Select";
import filterIcon from "../../assets/filtericon.svg";

const FilterBar = ({
  label = "Filters:",
  filters = [],
  action, 
}) => {
  return (
    <div className="w-full bg-white lg:rounded-[14px] rounded-lg border border-[#0000001A] mb-5 p-6 flex items-center gap-3 flex-wrap justify-between">

      <div className="flex items-center xl:gap-6 gap-3 flex-wrap">

        <div className="flex items-center gap-2 text-[#0A0A0A] text-[14px]">
            <img src={filterIcon} alt="" />
          {label}
        </div>

        <div className="flex items-center gap-4 ">
          {filters.map((filter, index) => (
            <Select
              key={index}
              placeholder={filter.placeholder}
              options={filter.options}
              value={filter.value}
              onChange={filter.onChange}
              inputClassName="!h-10 2xl:!w-[232px] xl:!w-[180px] !w-[150px] !px-3 !text-[14px] !text-[#0A0A0A] !bg-[#F3F3F5] !rounded-lg"
              listItemClassName="!text-[14px] !px-3"
            />
          ))}
        </div>
      </div>

      {action && (
        <button
          onClick={action.onClick}
          className="flex items-center gap-2 px-5 h-10 rounded-lg border border-[#0000001A] cursor-pointer hover:bg-gray-50 transition text-[#1E1E1E]"
        >
          {action.icon && (
            <img src={action.icon} alt="" className="w-5 h-5" />
          )}
          <span className="text-[14px] text-[#0A0A0A]">
            {action.label}
          </span>
        </button>
      )}
    </div>
  );
};

export default FilterBar;
