import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpModal = ({ open, onClose, navigateTo }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  useEffect(() => {
    if (open) {
      inputsRef.current[0]?.focus();
    }
  }, [open]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.join("").length === 6) {
      onClose();
      if (navigateTo) {
        navigate(navigateTo);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white lg:rounded-[50px] flex flex-col items-center rounded-[10px] w-[96%] max-w-[883px] px-16 py-10 relative">

        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-2xl text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-[24px] text-center mb-10">
          Enter Code
        </h2>

        <div className="flex justify-center gap-4 mb-20">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="xl:w-[100px] lg:w-[70px] w-12 xl:h-[100px] lg:h-[70px] h-12 border-2 border-gray-300 rounded-xl text-center text-xl focus:border-[#0E1E38] outline-none"
            />
          ))}
        </div>

        <button
          disabled={otp.join("").length !== 6}
          onClick={handleSubmit}
          className={`w-full max-w-[432px] mx-auto lg:h-[70px] h-12 rounded-[10px] text-white text-[20px] font-semibold transition
            ${
              otp.join("").length === 6
                ? "bg-[#0E1E38]"
                : "bg-[#0E1E38]/50 cursor-not-allowed"
            }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
