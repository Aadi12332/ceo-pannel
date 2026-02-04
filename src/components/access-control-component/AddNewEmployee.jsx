import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ChevronLeft } from "lucide-react";
import EmployeeProfileForm from "./EmployeeProfileForm";

export default function AddNewEmployee() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isEdit, setIsEdit] = useState(state?.edit || false);
  return (
    <MainLayout>
      <div className="mb-5">
        <div
          className="text-sm sm:text-base flex items-center gap-5 mb-1 cursor-pointer"
          onClick={() => navigate("/access-control")}
        >
          <ChevronLeft className="sm:w-5 w-4 sm:h-5 h-4 cursor-pointer" />
          <h1 className="sm:text-xl text-sm font-semibold flex items-center gap-2">
            <span className="text-gray-500">Roles & Permissions</span> <span className="text-gray-500">&gt;</span>
            {isEdit ? "Edit" : "Add New Employee"}
          </h1>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Define the basic information for this role.
        </p>
      </div>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="sm:text-[20px] text-lg font-semibold text-[#101828] flex items-center sm:gap-3 gap-1.5">
            Create New Employee Account
          </h2>
        </div>

        <EmployeeProfileForm isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
    </MainLayout>
  );
}
