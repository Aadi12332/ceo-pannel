import { useState } from "react";
import EyeIcon from "../../assets/eyeicon.svg";

const Input = ({
  label,
  labelClassName = "",
  type = "text",
  value,
  name,
  onChange,
  placeholder,
  className = "",
  inputClassName = "",
  rightIcon,
  onRightIconClick,
  showPasswordToggle = false,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType =
    isPassword && showPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          className={`block mb-1 text-sm font-medium text-gray-700 ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full py-2 border lg:h-[70px] h-12 placeholder:text-[#929292] lg:text-[18px] text-base px-8 bg-[#EDEDED] rounded-[10px] focus:outline-none
            ${
              error
                ? "border-red-500"
                : "border-transparent"
            }
            ${inputClassName}`}
          {...props}
        />

        {isPassword && showPasswordToggle && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            <img src={EyeIcon} alt="" className={`${showPassword ? "opacity-80" : "opacity-40"}`} />
          </span>
        )}

        {!showPasswordToggle && rightIcon && (
          <span
            onClick={onRightIconClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
