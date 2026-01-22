import Select from "./Select";
import filterIcon from "../../assets/filtericon.svg";
import searchIcon from "../../assets/searchicon.svg";

const FilterBar = ({
  label,
  filters = [],
  action,
  search,
  results
}) => {
  return (
    <div className="w-full bg-white lg:rounded-[14px] rounded-lg border border-[#0000001A] mb-5 p-6 flex items-center gap-3 flex-wrap justify-between">
      <div className="flex items-center xl:gap-6 gap-3 flex-wrap">
        {label &&
          <div className="flex items-center gap-2 text-[#0A0A0A] text-[14px]">
            <img src={filterIcon} alt="" />
            {label} :
          </div>
        }

        {search && (
          <div className="flex items-start flex-col gap-2">
            {search.label && (
              <span className="text-[14px] text-[#0A0A0A]">
                {search.label}
              </span>
            )}

            <div className="flex items-center gap-2 h-10 px-3 bg-[#F3F3F5] rounded-lg">
              <img src={searchIcon} alt="" className="w-4 h-4" />
              <input
                type="text"
                value={search.value}
                onChange={search.onChange}
                placeholder={search.placeholder}
                className="bg-transparent outline-none text-[14px] text-[#0A0A0A] placeholder:text-[#667085] xl:w-[350px] lg:w-[250px] w-[200px]"
              />
            </div>
          </div>
        )}

        <div className="flex items-end gap-4">
          {filters.map((filter, index) => (
            <div
              key={index}
              className={`flex ${
                filter.label ? "flex-col gap-1" : ""
              }`}
            >
              {filter.label && (
                <span className="text-[14px] text-[#0A0A0A]">
                  {filter.label}
                </span>
              )}

              <Select
                placeholder={filter.placeholder}
                options={filter.options}
                value={filter.value}
                onChange={filter.onChange}
                inputClassName="!h-10 2xl:!w-[232px] xl:!w-[180px] !w-[150px] !px-3 !text-[14px] !text-[#0A0A0A] !bg-[#F3F3F5] !rounded-lg"
                listItemClassName="!text-[14px] !px-3"
              />
            </div>
          ))}
        </div>
      {
        results && (
          <span className="text-[12px] text-[#0A0A0A] border border-[#0000001A] px-2 py-1 rounded-lg -mt-9">
            {results}
          </span>
        )
      }
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
