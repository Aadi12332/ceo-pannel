import { useState } from "react";
import NotificationsSidebar from "./NotificationsSidebar";
import searchIcon from "../../assets/searchicon.svg";
import chatIcon from "../../assets/chaticon.svg";
import bellIcon from "../../assets/notificationicon.svg";
import avatar from "../../assets/profileimg.svg";
import Select from "../common/Select";
import ChatModal from "./ChatModal";
import { useRole } from "../../routes/RoleContext";
import { useNavigate } from "react-router-dom";

const roles = [
  { value: "CEO", label: "CEO",path:"/control-tower" },
  { value: "COO", label: "COO" },
  { value: "CTO", label: "CTO" },
  { value: "CFO", label: "CFO" ,path:"/dashboard"},
  { value: "CMO", label: "CMO" },
  { value: "LPD", label: "LPD" },
  { value: "GSD", label: "GSD" },
  { value: "AAD", label: "AAD" },
];

const Header = ({ onMenuClick }) => {
  const { role, setRole } = useRole();
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const navigate=useNavigate()
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

        <div className="flex items-center bg-[#EEF4FF] rounded-full sm:px-4 px-2 sm:py-3 py-1.5 w-full xl:w-[322px] max-w-[322px]  ">
          <img src={searchIcon} alt="Search" className="w-5 h-5 mr-3" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent sm:text-base text-sm outline-none text-[#0E1E38] font-medium placeholder:text-[#6B7280] w-full"
          />
        </div>
      </div>

      <div className="flex items-center sm:gap-6 gap-2">
        <button className="relative" onClick={() => setChatModalOpen(true)}>
          <img src={chatIcon} alt="Chat" className="min-w-6 w-6 h-6" />
        </button>

        <button className="relative" onClick={() => setOpenNotifications(true)}>
          <img src={bellIcon} alt="Notifications" className="min-w-6 w-6 h-6" />
          {/* <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" /> */}
        </button>

        <div className="flex items-center gap-2.5 cursor-pointer">
          <img
            src={avatar}
            alt="Profile"
            className="sm:w-14 sm:h-14 w-10 h-10 sm:min-w-14 min-w-10 rounded-full object-cover"
          />
          <Select
            placeholder="Role"
            options={roles}
            value={role}
            onChange={(e)=>{setRole(e);

              if(e==="CFO"){
                navigate("/dashboard");
                return
              }else if(e==="CEO"){
                navigate("/control-tower");
                return
              }
            }}
            inputClassName="!bg-transparent sm:!text-[20px] !text-sm sm:!gap-8 !gap-3 !px-0 !text-[#1E1E1E] !h-[unset] sm:!min-w-[100px] !min-w-[60px]"
            listItemClassName="!px-3"
            listParentClassName="!max-h-[unset] !w-[150px] !right-0"
          />
        </div>
      </div>

      <ChatModal
        chatModalOpen={chatModalOpen}
        onClose={() => setChatModalOpen(false)}
      />

      <NotificationsSidebar
        open={openNotifications}
        onClose={() => setOpenNotifications(false)}
      />
    </header>
  );
};

export default Header;
