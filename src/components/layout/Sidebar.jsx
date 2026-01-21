import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
import homeIcon from "../../assets/sidebaricon/controltowericon.svg";
import policiesIcon from "../../assets/sidebaricon/policiesicon.svg";
import approvalsIcon from "../../assets/sidebaricon/approvalsicon.svg";
import auditIcon from "../../assets/sidebaricon/auditicon.svg";
import emergencyIcon from "../../assets/sidebaricon/emergencycontrolicon.svg";
import financialIcon from "../../assets/sidebaricon/financialicon.svg";
import automationIcon from "../../assets/sidebaricon/automationicon.svg";
import directoryIcon from "../../assets/sidebaricon/directoryicon.svg";
import accessIcon from "../../assets/sidebaricon/accesscontrolicon.svg";
import growthIcon from "../../assets/sidebaricon/growthicon.svg";
import globalToolRegistryIcon from "../../assets/sidebaricon/globalicon.svg";
import communicationIcon from "../../assets/sidebaricon/communicationicon.svg";
import activeSidebarImg from "../../assets/sidebaricon/activesidebarimg.svg";
import logoutIcon from "../../assets/logouticon.svg";
import EditIcon from "../../assets/editicon.svg";

const menuItems = [
  { label: "Control Tower", path: "/dashboard", icon: homeIcon },
  { label: "Policies", path: "/policies", icon: policiesIcon },
  { label: "Approvals", path: "/approvals", icon: approvalsIcon },
  { label: "Audit", path: "/audits", icon: auditIcon },
  { label: "Emergency Control", path: "/emergency", icon: emergencyIcon },
  { label: "Financial", path: "/financial", icon: financialIcon },
  { label: "Automation", path: "/automation", icon: automationIcon },
  { label: "Directory Health", path: "/directory-health", icon: directoryIcon },
  { label: "Access Control", path: "/access-control", icon: accessIcon },
  { label: "Growth & Strategy", path: "/growth", icon: growthIcon },
  {
    label: "Global Tool Registry",
    path: "/global-tool-registry",
    icon: globalToolRegistryIcon,
  },
  {
    label: "Communication & Discussion",
    path: "/communication-discussion",
    icon: communicationIcon,
  },
];

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
      <div
        className={`fixed lg:static z-50 top-0 left-0 h-full bg-[#0E1E38] text-white bg-gradient-to-b from-[#fff] to-[#E8F1FF] rounded-r-[30px] lg:rounded-r-[0px]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <aside
          className="w-[320px] h-screen overflow-hidden scroll-hide bg-[#0E1E38]
          text-white pl-6 py-4 rounded-r-[30px] flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col items-center pb-3">
              <div className="relative">
                <img src={logo} alt="Logo" className="mb-3" />
                <img
                  src={EditIcon}
                  alt="Logo"
                  className="absolute top-1/2 -right-12 cursor-pointer transform -translate-y-1/2 bg-white rounded-full p-2"
                />
              </div>
              <p
                title="CEO Governance & Control Tower"
                className="text-[24px] font-semibold text-white mt-1 px-6 line-clamp-1"
              >
                CEO Governance & Control Tower
              </p>
            </div>

            <nav className="h-[calc(100vh-244px)] overflow-auto scroll-hide">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-3 px-6 py-4 transition  font-semibold
                    ${
                      isActive
                        ? "text-[#0E1E38] -my-7 h-[136px] first:mt-0"
                        : "text-white first:pt-10"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <img
                          src={activeSidebarImg}
                          alt=""
                          className="absolute left-0 right-0 top-0 bottom-0 z-0 h-[136px]"
                        />
                      )}

                      <div className="flex items-center gap-3 z-10">
                        <img
                          src={item.icon}
                          alt=""
                          className={`relative ${isActive ? "invert" : ""}`}
                        />

                        <span
                          title={item.label}
                          className={`text-[16px] relative max-w-[200px] font-semibold truncate ${isActive ? "text-[#0E1E38]" : "text-white"}`}
                        >
                          {item.label}
                        </span>
                      </div>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="relative overflow-hidden group flex items-center gap-3
              w-full max-w-[280px] rounded-full self-start p-2
              transition-all duration-300 group"
          >
            <span
              className="absolute inset-0 bg-red-500
                -translate-x-full group-hover:translate-x-0
                transition-transform duration-300 ease-out"
            />

            <img src={logoutIcon} alt="Logout" className="relative z-10" />
            <span className="relative z-10 text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
