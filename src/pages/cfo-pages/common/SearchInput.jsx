import { Search } from "lucide-react";

const SearchInput = ({ value, onChange, placeholder = "Search", className }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-10 pl-10 pr-3 rounded-lg border border-[#D1D5DC] text-sm focus:outline-none`}
      />
    </div>
  );
};

export default SearchInput;
