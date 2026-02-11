import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Pencil, X } from "lucide-react";
import HistoryDrawer from "./HistoryDrawer";
import ActivationRequestModal from "../technical-incident-response/ActivationRequestModal";
import Select from "../../../components/common/Select";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openActivation, setOpenActivation] = useState(false);
  const [openOwnerModal, setOpenOwnerModal] = useState(false);
  const [selectedOwnerType, setSelectedOwnerType] = useState("");
  const [Type, setType] = useState("");
  const [currentOwner, setCurrentOwner] = useState("");
  const handleOwnerEdit = (type, ownerName) => {
    setSelectedOwnerType(type);
    setCurrentOwner(ownerName);
    setOpenOwnerModal(true);
  };

  return (
    <MainLayout>
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 text-gray-500" />
            <div>
              <h1 className="text-2xl font-semibold">Product Details</h1>
              <p className="text-sm text-gray-500">PRD-001</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setOpenModal(true)}
              className="px-6 py-3 border border-[#0000001a] rounded-lg bg-white"
            >
              History
            </button>
            <button
              onClick={() => setOpenActivation(true)}
              className="px-6 py-3 bg-[#0E1E38] text-white rounded-lg font-medium"
            >
              Activation Request
            </button>
            <HistoryDrawer openModal={openModal} setOpenModal={setOpenModal} />
            <ActivationRequestModal
              open={openActivation}
              setOpen={setOpenActivation}
            />
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-xl font-semibold mb-6">Product Summary</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500">Product Owner</p>
              <p className="font-medium mt-1">John Smith</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Business Vertical</p>
              <p className="font-medium mt-1">Banking</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Created Date</p>
              <p className="font-medium mt-1">01-15-2025</p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-xl font-semibold mb-6">Ownership</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500">Product Owner</p>
              <div
                onClick={() => handleOwnerEdit("Product Owner", "John Smith")}
                className="flex items-center gap-2 mt-1 cursor-pointer"
              >
                <p className="font-medium">John Smith</p>
                <Pencil size={14} className="text-gray-400" />
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Tech Owner</p>
              <div
                onClick={() => handleOwnerEdit("Tech Owner", "Emily Chen")}
                className="flex items-center gap-2 mt-1 cursor-pointer"
              >
                <p className="font-medium">Emily Chen</p>
                <Pencil size={14} className="text-gray-400" />
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Compliance Owner</p>
              <div
                onClick={() =>
                  handleOwnerEdit("Compliance Owner", "Michael Brown")
                }
                className="flex items-center gap-2 mt-1 cursor-pointer"
              >
                <p className="font-medium">Michael Brown</p>
                <Pencil size={14} className="text-gray-400" />
              </div>
            </div>
          </div>

          <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition ${
              openOwnerModal ? "visible" : "invisible"
            }`}
          >
            <div
              onClick={() => setOpenOwnerModal(false)}
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                openOwnerModal ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              className={`relative w-[96%] max-w-[450px] bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]
              transform transition-all duration-300 ease-in-out
              ${openOwnerModal ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-[24px] font-bold text-[#000000CC]">
                    Update Ownership
                  </h2>
                  <p className="text-[#717182] mt-2">
                    Current Owner: {currentOwner}
                  </p>
                </div>

                <button onClick={() => setOpenOwnerModal(false)}>
                  <X />
                </button>
              </div>

              <div className="mb-6">
                <Select
                  value={Type}
                  onChange={(value) => {
                    setType(value);
                  }}
                  options={[
                    { label: "John Smith", value: "John Smith" },
                    { label: "Emily Chen", value: "Emily Chen" },
                    { label: "Michael Brown", value: "Michael Brown" },
                    { label: "Sarah Johnson", value: "Sarah Johnson" },
                    { label: "David Lee", value: "David Lee" },
                  ]}
                  placeholder="Select Owner"
                  inputClassName="!h-12 !mt-1 !text-sm !rounded-lg !px-3 !bg-white !border !border-[#D0D5DD]"
                  listItemClassName="!px-3 !text-sm"
                  listParentClassName=""
                />
              </div>

              <div className="border-t border-[#0000001a] pt-5 flex gap-4">
                <button
                  onClick={() => setOpenOwnerModal(false)}
                  className="flex-1 border border-[#0000001a] text-[#0A0A0A] text-sm rounded-lg py-3"
                >
                  Cancel
                </button>

                <button className="flex-1 bg-[#0E1E38] text-white rounded-lg py-3 font-medium text-sm">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-xl font-semibold mb-4">Product Scope</h2>

          <p className="text-gray-700 mb-6">
            A comprehensive digital banking platform that enables customers to
            manage their accounts, transfer funds, pay bills, and access
            financial services through web and mobile interfaces.
          </p>

          <h3 className="font-semibold mb-3">Product Scope</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Account management and balance tracking</li>
            <li>Domestic and international fund transfers</li>
            <li>Bill payment and scheduling</li>
            <li>Transaction history and statements</li>
            <li>Security features including 2FA</li>
          </ul>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <h2 className="text-xl font-semibold mb-6">Linked Versions</h2>

          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-[#0000001a] pb-4">
              <div>
                <p className="font-medium">v2.5.0</p>
                <p className="text-sm text-gray-500">
                  Current production version
                </p>
              </div>
              <span className="px-3 py-1 text-xs rounded bg-[#DCFCE7] text-[#15803D]">
                Live
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-[#0000001a] pb-4">
              <div>
                <p className="font-medium">v2.6.0</p>
                <p className="text-sm text-gray-500">
                  Current production version
                </p>
              </div>
              <span className="px-3 py-1 text-xs rounded bg-[#FEF3C7] text-[#92400E]">
                Testing
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
