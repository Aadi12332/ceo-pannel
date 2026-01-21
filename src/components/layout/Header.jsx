import { useState } from "react";
import searchIcon from "../../assets/searchicon.svg";
import chatIcon from "../../assets/chaticon.svg";
import bellIcon from "../../assets/notificationicon.svg";
import arrowDown from "../../assets/downarrow.svg";
import avatar from "../../assets/profileimg.svg";
import Select from "../common/Select";

const roles = [
  { value: "CEO", label: "CEO" },
  { value: "COO", label: "COO" },
  { value: "CTO", label: "CTO" },
  { value: "CFO", label: "CFO" },
  { value: "CMO", label: "CMO" },
  { value: "LPD", label: "LPD" },
  { value: "GSD", label: "GSD" },
  { value: "AAD", label: "AAD" },
];

const Header = ({ onMenuClick }) => {
  const [role, setRole] = useState("CEO");

  return (
    <header className="w-full bg-white p-2.5 flex items-center justify-between gap-5">
      <div className="flex gap-3 items-center">
        <svg 
          onClick={onMenuClick}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="lg:hidden"
        >
          <path
            d="M3 6H21"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M3 12H21"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M3 18H21"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <div className="flex items-center bg-[#EEF4FF] rounded-full px-4 py-3 w-full max-w-[322px]">
          <img src={searchIcon} alt="Search" className="w-5 h-5 mr-3" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-base outline-none text-[#0E1E38] font-medium placeholder:text-[#6B7280] w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <img src={chatIcon} alt="Chat" className="min-w-6 w-6 h-6" />
        </button>

        <button className="relative">
          <img src={bellIcon} alt="Notifications" className="min-w-6 w-6 h-6" />
          {/* <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" /> */}
        </button>

        <div className="flex items-center gap-2.5 cursor-pointer">
          <img
            src={avatar}
            alt="Profile"
            className="w-14 h-14 min-w-14 rounded-full object-cover"
          />
          <Select
            placeholder="Role"
            options={roles}
            value={role}
            onChange={setRole}
            inputClassName="!bg-transparent !text-[20px] !gap-8 !px-0 !text-[#1E1E1E] !h-[unset] !min-w-[100px]"
            listItemClassName="!px-3"
            listParentClassName="!max-h-[unset] !w-[150px] !right-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
