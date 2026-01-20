import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import illustration from "../../assets/loginimg.svg";
import googleIcon from "../../assets/googleicon.svg";
import facebookIcon from "../../assets/facebookicon.svg";
import OtpModal from "../../components/modal/OtpModal";

const roles = [
  { key: "CEO", label: "Chief Executive Officer (CEO)" },
  { key: "COO", label: "Chief Operating Officer (COO)" },
  { key: "CTO", label: "Chief Technology Officer (CTO)" },
  { key: "CFO", label: "Chief Financial Officer (CFO)" },
  { key: "CMO", label: "Chief Marketing Officer (CMO)" },
  { key: "LPD", label: "Lead Product Designer (LPD)" },
  { key: "GSD", label: "Growth Strategy Director (GSD)" },
  { key: "AAD", label: "Admin & Accounts Director (AAD)" },
];

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [openOtpModal, setOpenOtpModal] = useState(false);

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

        <div className="w-full md:w-1/2">
          <h2 className="lg:text-[48px] text-[32px] text-center font-medium text-[#1E1E1E]">
            Welcome Back
          </h2>
          <p className="text-[#929292] lg:text-[18px] text-base text-center">
            Please login to your account
          </p>

          <div className="mt-10 mb-5">
            {selectedRole && (
              <h3 className="text-[24px] font-medium text-[#1E1E1E] mb-2.5">
                {selectedRole.label}
              </h3>
            )}

            {!selectedRole && (
              <p className="text-[24px] font-medium text-[#1E1E1E] mb-2.5">
                Who are you?
              </p>
            )}

            <div className="flex gap-2">
              {roles.map((role) => {
                const isActive = selectedRole?.key === role.key;

                return (
                  <button
                    key={role.key}
                    onClick={() => setSelectedRole(role)}
                    className={`flex justify-center items-center lg:px-2 px-1 flex-1 lg:h-[70px] h-12 lg:text-[18px] text-sm rounded-[10px] transition
            ${
              isActive
                ? "bg-[#0E1E38] text-white"
                : "bg-[#EDEDED] text-[#929292]"
            }
          `}
                  >
                    {role.key}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="">
            <Input placeholder="Email address" className="mb-5" />

            <Input
              type="password"
              placeholder="Password"
              showPasswordToggle
              inputClassName="pr-10"
            />

            <div className="flex items-center justify-between text-sm mb-10 mt-2.5">
              <label className="flex items-center gap-3 text-[#929292] text-sm cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#0E1E38] scale-[1.7] ml-2"
                />
                Remember me
              </label>

              <span
                onClick={() => setOpenOtpModal(true)}
                className="text-[#929292] text-base hover:text-[#0E1E38] cursor-pointer"
              >
                Forget Password
              </span>

              <OtpModal
                open={openOtpModal}
                onClose={() => setOpenOtpModal(false)}
                navigateTo="/change-password"
              />
            </div>

            <Button
              disabled={!selectedRole}
              className={`mt-4 ${
                !selectedRole ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => navigate("/dashboard")}
            >
              Login
            </Button>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-3 text-gray-400 text-sm max-w-[375px] mx-auto">
              <div className="flex-1 h-px bg-gray-200" />
              or
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button className="flex items-center justify-center gap-2 h-12 lg:h-[67px] border border-[#00000033] rounded-[10px] py-2 w-full max-w-[259px] hover:bg-gray-50">
                <img src={googleIcon} alt="Google" className="w-5" />
                Google
              </button>

              <button className="flex items-center justify-center gap-2 h-12 lg:h-[67px] border border-[#00000033] rounded-[10px] py-2 w-full max-w-[259px] hover:bg-gray-50">
                <img src={facebookIcon} alt="Facebook" className="w-5" />
                Facebook
              </button>
            </div>
          </div>

          <p className="text-center text-[18px] text-[#726D6D] mt-6">
            Need an account?{" "}
            <span className="text-[#CF2027] cursor-pointer" onClick={() => navigate("/signup")}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
