import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import illustration from "../../assets/loginimg.svg";
import Select from "../../components/common/Select";
import OtpModal from "../../components/modal/OtpModal";

const roleOptions = [
  { value: "CEO", label: "Chief Executive Officer (CEO)" },
  { value: "COO", label: "Chief Operating Officer (COO)" },
  { value: "CTO", label: "Chief Technology Officer (CTO)" },
  { value: "CFO", label: "Chief Financial Officer (CFO)" },
  { value: "CMO", label: "Chief Marketing Officer (CMO)" },
  { value: "LPD", label: "Lead Product Designer (LPD)" },
  { value: "GSD", label: "Growth Strategy Director (GSD)" },
  { value: "AAD", label: "Admin & Accounts Director (AAD)" },
];

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [role, setRole] = useState("");
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasLength = password.length >= 8;
  const [openOtpModal, setOpenOtpModal] = useState(false);
  const isStrongPassword = hasUppercase && hasNumber && hasLength;
  const isMatch = password && confirmPassword && password === confirmPassword;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const canSubmit =
    fullName.trim() &&
    isValidEmail &&
    role &&
    isStrongPassword &&
    isMatch &&
    agree;

  return (
    <div className="min-h-screen flex items-center justify-center xl:px-[50px] xl:py-[70px] sm:p-6 p-3">
      <div className="bg-white flex xl:gap-10 gap-5 w-full max-w-[1440px] overflow-hidden">
        <div className="hidden md:flex w-1/2 bg-[#0E1E38] overflow-hidden rounded-[38px] text-white flex-col justify-between">
          <div className="xl:p-[105px] p-10 xl:pb-[114px] pb-5">
            <h1 className="lg:text-[48px] text-[32px] leading-[1.3] text-white">
              Simplify management with our dashboard.
            </h1>

            <p className="lg:text-[20px] text-base text-white mt-5 leading-[1.3]">
              Simplify your e-commerce management with our user-friendly admin
              dashboard
            </p>
          </div>

          <img
            src={illustration}
            alt="Dashboard Illustration"
            className="max-w-[518px] w-full -mb-5 mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[32px] font-medium text-[#1E1E1E] mt-8">
            Sign up
          </h2>
          <p className="text-[#929292] text-[18px] mt-1 mb-8 border-b border-[#00000033] pb-4">
            Please Signup to your account
          </p>

          <div className="space-y-2">
            <Input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="New Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
              inputClassName="pr-10"
            />

            <div>
              <div className="flex gap-6 mb-4">
                <div
                  className={`h-2 flex-1 rounded-[2px] ${
                    password ? "bg-[#0E1E38]" : "bg-[#D9D9D9]"
                  }`}
                />
                <div
                  className={`h-2 flex-1 rounded-[2px] ${
                    isStrongPassword ? "bg-[#0E1E38]" : "bg-[#D9D9D9]"
                  }`}
                />
                <div
                  className={`h-2 flex-1 rounded-[2px] ${
                    isStrongPassword ? "bg-[#0E1E38]" : "bg-[#D9D9D9]"
                  }`}
                />
              </div>
            </div>

            <Input
              type="password"
              placeholder="Confirm New Password*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPasswordToggle
              inputClassName="pr-10"
            />

            <Select
              placeholder="Role"
              options={roleOptions}
              value={role}
              onChange={setRole}
              placement="top"
            />

            <Input placeholder="Phone number (optional)" />
          </div>

          <label className="flex items-center gap-3 text-[#929292] text-sm mt-6 cursor-pointer pl-1 md:pl-0">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="accent-[#0E1E38] scale-[1.3]"
            />
            I agree to Terms & Privacy Policy
          </label>

          <Button
            disabled={!canSubmit}
            className={`mt-8 ${
              !canSubmit ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setOpenOtpModal(true)}
          >
            Signup
          </Button>

          <OtpModal
            open={openOtpModal}
            onClose={() => setOpenOtpModal(false)}
            navigateTo="/"
          />

          <p className="text-center text-[18px] text-[#726D6D] mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-[#0E1E38] cursor-pointer font-medium"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
