import { Camera } from "lucide-react"
import { useRef } from "react"

export default function CoverPhotoUpload({ value, onChange }) {
  const inputRef = useRef(null)

  return (
    <div className="relative h-[180px] bg-[#E5E5E5] rounded-t-xl overflow-hidden">
      {value && (
        <img
          src={value}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) =>
          onChange(URL.createObjectURL(e.target.files[0]))
        }
      />

      <button
        onClick={() => inputRef.current.click()}
        className="absolute right-4 bottom-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
      >
        <Camera className="w-5 h-5" />
      </button>
    </div>
  )
}
