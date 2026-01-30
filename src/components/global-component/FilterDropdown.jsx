import { useState } from "react"
import { Filter } from "lucide-react"

const FilterDropdown = ({ options = [], value = "All", onChange }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-[140px]">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 px-3 h-11 rounded-lg border border-[#D0D5DD] bg-white cursor-pointer"
      >
        <span className="text-sm">{value}</span>
        <Filter className="w-4 h-4 text-[#667085]" />
      </div>

      {open && (
        <div className="absolute top-[46px] left-0 w-full bg-white rounded-xl border border-[#E5E7EB] shadow-md z-50 overflow-hidden">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                onChange(item)
                setOpen(false)
              }}
              className="px-4 py-3 text-sm hover:bg-[#F9FAFB] cursor-pointer border-b last:border-none"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterDropdown
