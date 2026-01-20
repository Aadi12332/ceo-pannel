const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`w-full bg-[#0E1E38] lg:h-[70px] h-12 text-white py-2 rounded-[10px] text-[20px] font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
