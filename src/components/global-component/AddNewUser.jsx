import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ChevronLeft, Eye, Pencil, Filter } from "lucide-react";
import UserProfileForm from "./UserProfileForm";
import FollowersList from "./FollowersList";
import OrdersList from "./OrdersList";
import ContentList from "./ContentList";

export default function AddNewUser() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isView, setIsView] = useState(state?.view || false);
  const [isEdit, setIsEdit] = useState(state?.edit || false);
  const [viewApplication, setViewApplication] = useState(state?.viewApplication || false);
  const [isAddUser, setIsAddUser] = useState(state?.adduser || false);
  const [activeTab, setActiveTab] = useState(false);
  const [contentType, setContentType] = useState("photo");
  const [orderFilter, setOrderFilter] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    "This Month",
    "This Year",
    "Year 2025–2026",
    "Year 2023–2024",
  ];
console.log({viewApplication,isView,isEdit},"viewApplication==========")
  return (
    <MainLayout>
      <div className="mb-5">
        {!activeTab && <div
          className="text-sm sm:text-base flex items-center gap-5 mb-1 cursor-pointer"
          onClick={() => navigate("/users")}
        >
          <ChevronLeft className="sm:w-5 w-4 sm:h-5 h-4 cursor-pointer" />
          <h1 className="sm:text-xl text-sm font-semibold flex items-center gap-2">
            <span className="text-gray-500">Users</span>  <span className="text-gray-500">&gt;</span>
            {isView ? " View User" : isEdit ? " Edit User" : " Add New User"}
          </h1>
        </div>}

        {activeTab &&  <div
          className="text-sm sm:text-base flex items-center gap-5 mb-1 cursor-pointer"
          onClick={() => navigate("/users")}
        >
          <ChevronLeft className="sm:w-5 w-4 sm:h-5 h-4 cursor-pointer" />
          <h1 className="sm:text-xl text-sm font-semibold flex items-center gap-2">
            <span className="text-gray-500">Users</span> <span className="text-gray-500">&gt;</span>
            {isView ? <span className="text-gray-500">View</span> : isEdit ? <span className="text-gray-500">Edit</span> : <span className="text-gray-500">Add New User</span>}
            {activeTab && <span className="text-gray-500">&gt;</span>}
            {
              activeTab === "followers" && <span className="">All Followers</span>
            }
            {
              activeTab === "content" &&  <span className="">All Contents</span>
            }
            {
              activeTab === "orders" && <span className="">All Orders</span>
            }
          </h1>
        </div>}

        <p className="text-sm text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {!activeTab && (
            <h2 className="sm:text-[20px] text-lg font-semibold text-[#101828] flex items-center sm:gap-3 gap-1.5">
              {viewApplication ? "Influencer's Application" : isView
                ? " View This User Account"
                : isEdit
                  ? " Edit This User Account"
                  : " Create New User Account"}

              {
                !viewApplication && 
                !(isView || isEdit) == false && (
                  <div
                    onClick={() => {
                      if (isView) {
                        setIsView(false);
                        setIsEdit(true);
                      } else {
                        setIsView(true);
                        setIsEdit(false);
                      }
                    }}
                    className="flex items-center cursor-pointer gap-2 text-sm border border-[#D0D5DD] px-2 py-1 rounded-[10px] bg-white"
                  >
                    {isView ? (
                      <>
                        <Pencil className="w-4 h-4 text-[#667085]" />
                        Edit
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 text-[#667085]" />
                        View
                      </>
                    )}
                  </div>
                )
              }
            </h2>
          )}

          {activeTab && (
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-[20px] font-semibold text-[#101828]">
                {activeTab === "content" && "Contents"}
                {activeTab === "orders" && "Orders"}
                {activeTab === "followers" && "Followers"}
              </h2>

              {activeTab === "content" && (
                <div className="flex rounded-lg overflow-hidden border border-[#D0D5DD]">
                  <button
                    onClick={() => setContentType("photo")}
                    className={`px-6 h-10 text-sm ${
                      contentType === "photo"
                        ? "bg-[#4CAF50] text-white"
                        : "bg-white text-[#667085]"
                    }`}
                  >
                    Photo
                  </button>

                  <button
                    onClick={() => setContentType("video")}
                    className={`px-6 h-10 text-sm ${
                      contentType === "video"
                        ? "bg-[#4CAF50] text-white"
                        : "bg-white text-[#667085]"
                    }`}
                  >
                    Video
                  </button>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex items-center justify-between gap-3 px-4 h-10 rounded-lg border border-[#D0D5DD] bg-white min-w-[160px]"
                  >
                    <span className="text-sm text-[#101828]">
                      {orderFilter || "Select"}
                    </span>
                    <Filter className="w-4 h-4 text-[#667085]" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-[180px] bg-white border border-[#D0D5DD] rounded-lg overflow-hidden z-10">
                      {options.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setOrderFilter(item);
                            setDropdownOpen(false);
                          }}
                          className={`px-4 py-3 text-sm cursor-pointer ${
                            orderFilter === item
                              ? "bg-[#EEF4FF] text-[#101828]"
                              : "hover:bg-[#F9FAFB] text-[#667085]"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        {!viewApplication && !isAddUser && (
            <div className="flex items-center sm:gap-3 gap-1">
              <button
                onClick={() => setActiveTab("content")}
                className={`text-white text-sm sm:text-base rounded-lg sm:px-3 px-2 h-10 ${
                  activeTab === "content" ? "bg-[#0E1E38]" : "bg-[#0E1E3880]"
                }`}
              >
                See Content
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`text-white text-sm sm:text-base rounded-lg sm:px-3 px-2 h-10 ${
                  activeTab === "orders" ? "bg-[#0E1E38]" : "bg-[#0E1E3880]"
                }`}
              >
                See All Orders
              </button>

              <button
                onClick={() => setActiveTab("followers")}
                className={`text-white text-sm sm:text-base rounded-lg sm:px-3 px-2 h-10 ${
                  activeTab === "followers" ? "bg-[#0E1E38]" : "bg-[#0E1E3880]"
                }`}
              >
                See All Followers
              </button>
            </div>
          )}
        </div>

        {!activeTab && (
          <UserProfileForm
          viewApplication={viewApplication}
            isView={isView}
            isEdit={isEdit}
            isAddUser={isAddUser}
          />
        )}

        {activeTab === "followers" && (
          <FollowersList activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        {activeTab === "content" && <ContentList contentType={contentType} />}
        {activeTab === "orders" && <OrdersList filter={orderFilter} />}
      </div>
    </MainLayout>
  );
}
