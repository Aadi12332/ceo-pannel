import { useEffect, useRef, useState } from "react";
import downArrowIcon from "../../assets/downarrow.svg";

const Select = ({
  label,
  labelClassName = "",
  options = [],
  value,
  onChange,
  placeholder = "Select option",
  className = "",
  inputClassName = "",
  placement = "bottom",
}) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  const dropdownPosition =
    placement === "top"
      ? "bottom-full mb-2"
      : "top-full mt-2";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className={`w-full relative ${className}`}>
      {label && (
        <label
          className={`block mb-1 text-sm font-medium text-gray-700 ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <div
        onClick={() => setOpen(true)}
        className={`w-full px-8 py-2 lg:text-[18px] text-base
          rounded-[10px] lg:h-[70px] h-12 bg-[#EDEDED] cursor-pointer
          flex items-center justify-between
          ${inputClassName}`}
      >
        <span
          className={`lg:text-[18px] text-base ${
            value ? "text-[#1E1E1E]" : "text-[#929292]"
          }`}
        >
          {selectedLabel}
        </span>

        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <img src={downArrowIcon} alt="arrow" />
        </span>
      </div>

      {open && (
        <ul
          className={`absolute z-20 w-full bg-white border rounded-md shadow-md
            overflow-auto max-h-[150px] scroll-hide
            ${dropdownPosition}`}
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={(e) => {
                e.stopPropagation();
                onChange(opt.value);
                setOpen(false);
              }}
              className={`px-8 py-3 cursor-pointer lg:text-[18px] text-base
                hover:bg-[#F2F2F2]
                ${
                  value === opt.value
                    ? "bg-[#0E1E38] text-white"
                    : "text-[#1E1E1E]"
                }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
