import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ChevronLeft, Eye, Pencil } from "lucide-react";
import MerchantProfileForm from "./MerchantProfileForm";
import EditIcon from "../../assets/editicon.svg";

export default function AddNewMerchants() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isView, setIsView] = useState(state?.view || false);
  const [isEdit, setIsEdit] = useState(state?.edit || false);
  return (
    <MainLayout>
      <div className="mb-5">
        <div
          className="text-sm sm:text-base flex items-center gap-5 mb-1 cursor-pointer"
          onClick={() => navigate("/merchants")}
        >
          <ChevronLeft className="sm:w-5 w-4 sm:h-5 h-4 cursor-pointer" />
          <h1 className="sm:text-xl text-sm font-semibold flex items-center gap-2">
            <span className="text-gray-500">Merchant</span> <span className="text-gray-500">&gt;</span>
            {isView
              ? " View Merchant"
              : isEdit
                ? " Edit Merchant"
                : " Add New Merchant"}
          </h1>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="sm:text-[20px] text-lg font-semibold text-[#101828] flex items-center sm:gap-3 gap-1.5">
            {isView
              ? " View This Merchant Account"
              : isEdit
                ? " Edit This Merchant Account"
                : " Add New Merchant"}

            {!(isView || isEdit) == false && (
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
                  Edit
                  <img src={EditIcon} alt="" className="w-4" />
                </>
              ) : (
                <>
                  View
                  <Eye className="w-4 h-4 text-[#000]" />
                </>
              )}
            </div>
            )}
          </h2>
        </div>

        <MerchantProfileForm isView={isView} isEdit={isEdit} />
      </div>
    </MainLayout>
  );
}
