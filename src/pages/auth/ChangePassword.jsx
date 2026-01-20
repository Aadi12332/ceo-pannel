import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import illustration from "../../assets/loginimg.svg";
import checkedArrowIcon from "../../assets/checkedarrowicon.svg";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasLength = password.length >= 8;

  const isStrongPassword = hasUppercase && hasNumber && hasLength;
  const isMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center xl:px-[50px] xl:py-[70px] sm:p-6 p-3">
      <div className="bg-white flex items-start xl:gap-10 gap-5 w-full max-w-[1440px] overflow-hidden">
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
          <h2 className="text-[24px] font-medium text-[#1E1E1E] mt-8">
            Change Password
          </h2>
          <p className="text-[#929292] text-[18px] mt-1 mb-8 border-b border-[#00000033] pb-4">
            Update password for enhanced account security
          </p>

          <div className="space-y-8">
            <Input
              type="password"
              placeholder="Current Password*"
              showPasswordToggle
              inputClassName="pr-10"
            />

            <Input
              type="password"
              placeholder="New Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
              inputClassName="pr-10"
            />

            <Input
              type="password"
              placeholder="Confirm New Password*"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPasswordToggle
              inputClassName="pr-10"
            />
          </div>

          <div className="mt-2">
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

            <p className="text-sm text-[#929292] mb-4">
              Weak Password. Must Contain:
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-[#929292] text-sm">
                {hasUppercase ? (
                  <img
                    src={checkedArrowIcon}
                    alt="Checked"
                    className="w-5 h-5"
                  />
                ) : (
                  <span className="inline-block w-5 h-5 rounded-[3px] border-2 border-[#726D6D]" />
                )}
                At least 1 uppercase
              </li>

              <li className="flex items-center gap-2 text-[#929292] text-sm">
                {hasNumber ? (
                  <img
                    src={checkedArrowIcon}
                    alt="Checked"
                    className="w-5 h-5"
                  />
                ) : (
                  <span className="inline-block w-5 h-5 rounded-[3px] border-2 border-[#726D6D]" />
                )}
                At least 1 number
              </li>

              <li className="flex items-center gap-2 text-[#929292] text-sm">
                {hasLength ? (
                  <img
                    src={checkedArrowIcon}
                    alt="Checked"
                    className="w-5 h-5"
                  />
                ) : (
                  <span className="inline-block w-5 h-5 rounded-[3px] border-2 border-[#726D6D]" />
                )}
                At least 8 Characters
              </li>
            </ul>
          </div>

          <div className="flex gap-4 mt-16">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 lg:h-[70px] h-12 border border-gray-300 rounded-xl text-[#929292] text-[20px] font-semibold hover:bg-gray-50"
            >
              Discard
            </button>

            <Button
              disabled={!isStrongPassword || !isMatch}
              className={`flex-1 ${
                !isStrongPassword || !isMatch
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => navigate("/")}
            >
              Apply Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
