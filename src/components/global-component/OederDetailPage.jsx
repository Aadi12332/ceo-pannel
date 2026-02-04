import { useNavigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ChevronLeft, Printer } from "lucide-react";

export default function OederDetailPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="mb-5">
        <div
          className="text-sm sm:text-base flex items-center gap-5 mb-1 cursor-pointer"
          onClick={() => navigate("/add-new-user")}
        >
          <ChevronLeft className="sm:w-5 w-4 sm:h-5 h-4 cursor-pointer" />
          <h1 className="sm:text-xl text-sm font-semibold flex items-center gap-2">
            <span className="text-gray-500">User</span> <span className="text-gray-500">&gt;</span>{" "}
            <span className="text-gray-500">View</span> <span className="text-gray-500">&gt;</span>
            <span className="text-gray-500">All Orders</span> <span className="text-gray-500">&gt;</span> Order Details
          </h1>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="space-y-5">
        <div className="bg-white lg:rounded-xl rounded-lg border border-[#D0D5DD] lg:p-6 p-3 flex items-start justify-between">
          <div className="space-y-6">
            <div>
              <p className="text-[18px] font-semibold text-[#101828]">
                Order ID
              </p>
              <p className="text-sm sm:text-[16px] text-[#101828]">123456</p>
            </div>

            <div>
              <p className="text-[18px] font-semibold text-[#101828]">
                Date & Time
              </p>
              <p className="text-sm sm:text-[16px] text-[#101828]">14 Aug 2025 14:45</p>
            </div>
          </div>

          <div className="flex flex-col items-end sm:gap-10 gap-7">
            <span className="sm:px-6 px-2.5 py-2 rounded-lg bg-[#EAF2FF] text-[#101828]">
              Pending
            </span>

            <button className="flex items-center gap-2 bg-[#0E1E38] text-white sm:px-5 px-2.5 h-11 rounded-lg">
              <Printer className="w-5 h-5" />
              Print Invoice
            </button>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg border border-[#D0D5DD] p-3 lg:p-6">
          <h3 className="text-[20px] font-semibold text-[#101828] mb-6">
            Order Summary
          </h3>

          <div className="grid grid-cols-2 gap-y-5 text-[16px]">
            <p className="text-[#667085]">Customer Info</p>
            <p className="text-[#667085]">Restaurant / seller info</p>

            <p className="text-[#667085]">Name</p>
            <p className="text-[#101828]">John Doe</p>

            <p className="text-[#667085]">Contact</p>
            <p className="text-[#101828]">+91 98765 43210</p>

            <p className="text-[#667085]">Address:</p>
            <p className="text-[#101828]">12 MG Road, Chennai</p>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg border border-[#D0D5DD] p-3 lg:p-6">
          <h3 className="text-[20px] font-semibold text-[#101828] mb-8">
            TimeLine
          </h3>

          <div className="relative flex items-start justify-between w-fit sm:flex-row flex-col gap-12 sm:gap-0">
            {["Order Placed", "Accepted", "Prepared", "Delivered"].map(
              (label, index) => (
                <div
                  key={label}
                  className="relative flex flex-col items-center w-fit min-w-[130px]"
                >
                  <div className="relative z-10 w-4 h-4 rounded-full bg-[#C92A2A]" />

                  {index !== 3 && (
                    <div className="absolute top-[7px] left-1/2 w-full h-[2px] bg-[#D0D5DD] hidden sm:block" />
                  )}

                  <p className="mt-4 text-[15px] font-medium text-[#101828]">
                    {label}
                  </p>
                  <p className="text-[13px] text-[#667085]">10.11 am</p>
                  {index !== 3 && (
                    <div className="absolute -bottom-[44px] left-1/2 w-[2px] h-[40px] bg-[#D0D5DD] sm:hidden block" />
                  )}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg border border-[#D0D5DD] p-3 lg:p-6">
          <h3 className="text-[20px] font-semibold text-[#101828] mb-6">
            Payment Info
          </h3>

          <div className="grid grid-cols-2 gap-y-5 text-[16px]">
            <p className="text-[#667085]">Method</p>
            <p className="text-[#101828]">Transaction ID</p>

            <p className="text-[#667085]">Transaction ID:</p>
            <p className="text-[#101828]">TXN56789</p>

            <p className="text-[#667085]">Status</p>
            <p className="text-[#101828]">Paid</p>

            <p className="text-[#667085]">Amount:</p>
            <p className="text-[#101828]">₹1,250</p>
          </div>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold text-[#101828] mb-1">
            Order Items
          </h3>

          <div className="bg-white rounded-xl border border-[#D0D5DD] overflow-auto w-[calc(100vw-24px)] lg:w-full">
            <div className="min-w-[767px]">
              <table className="w-full text-[16px]">
              <thead>
                <tr className="border-b border-[#D0D5DD]">
                  <th className="px-6 py-4 text-left font-semibold text-[#101828]">
                    Item Name
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-[#101828]">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-[#101828]">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-[#101828]">
                    Subtotal
                  </th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3].map((_, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#D0D5DD] last:border-none"
                  >
                    <td className="px-6 py-5 text-[#101828]">Item Name</td>
                    <td className="px-6 py-5 text-[#101828]">1</td>
                    <td className="px-6 py-5 text-[#101828]">1223</td>
                    <td className="px-6 py-5 text-[#101828]">13356</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end p-6">
              <div className="space-y-2 text-[16px] sm:w-[280px] w-[200px]">
                <div className="flex justify-between gap-16">
                  <span className="font-bold text-[#101828]">Sub total</span>
                  <span className="text-[#101828]">₹50</span>
                </div>

                <div className="flex justify-between gap-16">
                  <span className="font-bold text-[#101828]">Total</span>
                  <span className="text-[#101828]">₹50</span>
                </div>

                <div className="flex justify-between gap-16">
                  <span className="font-bold text-[#101828]">Delivery fee</span>
                  <span className="text-[#101828]">₹50</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
