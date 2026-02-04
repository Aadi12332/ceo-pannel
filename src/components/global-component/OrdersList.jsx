import { useEffect, useRef, useState } from "react";
import { ChevronDown, XCircle } from "lucide-react";
import yellowdress from "../../assets/yellowdress.svg"
import { useNavigate } from "react-router-dom";

const orders = [
  {
    id: "408-35522145-12522163",
    date: "13 February 2025",
    total: "$100.00",
    shipTo: "Carter George",
    statusTitle: "Delivered 31 March",
    statusDesc: "Package was handed to resident",
    product: {
      name: "Yellow dress",
      desc: "Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium purus augue malesuada metus.",
      returnText: "Return window closed on 07 April 2025",
      image:
        "https://images.unsplash.com/photo-1520975867597-0f8a1caa6c7a?w=400",
    },
  },
];

export default function OrdersList() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-6">
      {orders.map((order, i) => (
        <div
          key={i}
          className="bg-white lg:rounded-xl rounded-lg border border-[#E5E7EB] overflow-hidden"
        >
          <div className="flex sm:flex-row flex-col gap-3 sm:items-center justify-between lg:px-6 px-3 lg:py-4 py-2 border-b border-[#E5E7EB]">
            <div className="flex lg:gap-16 gap-5">
              <div>
                <p className="text-xs text-[#667085] uppercase mb-1.5">Order placed</p>
                <p className="text-sm sm:text-base font-medium text-[#101828]">{order.date}</p>
              </div>

              <div>
                <p className="text-xs text-[#667085] uppercase mb-1.5">Total</p>
                <p className="text-sm sm:text-base font-medium text-[#101828]">{order.total}</p>
              </div>

              <div>
                <p className="text-xs text-[#667085] uppercase mb-1.5">Ship to</p>
                <p className="text-sm sm:text-base font-medium text-[#101828]">{order.shipTo}</p>
              </div>
            </div>

            <div className="flex items-start flex-col gap-1.5">
              <p className="text-sm text-[#667085]">
                ORDER # <span className="font-medium">{order.id}</span>
              </p>

              <div className="flex items-center gap-4 text-sm">
                <button className="font-medium text-[#101828] border-r border-black pr-4">
                  View order details
                </button>

                <div className="relative" ref={ref}>
                  <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <span className="font-medium">Invoice</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>

                  {open && (
                    <div className="absolute right-0 mt-3 sm:w-[260px] w-[200px] bg-white rounded-xl shadow-lg border border-[#E5E7EB] sm:p-4 p-2 z-50">
                      <ul className="space-y-3 text-[#101828] relative">
                        <div className="absolute sm:-top-5 sm:-right-2 -top-4 -right-1">
                          <XCircle
                            className="w-6 h-6 cursor-pointer text-[#000]"
                            onClick={() => setOpen(false)}
                          />
                        </div>
                        <li className="cursor-pointer">• Invoice 1</li>
                        <li className="cursor-pointer">• P-slip/Warranty 1</li>
                        <li className="cursor-pointer">• Request invoice</li>
                        <li className="cursor-pointer">
                          • Printable Order Summary
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-between lg:p-6 p-3 sm:flex-row flex-col">
            <div>
              <h3 className="text-lg font-semibold text-[#101828]">
                {order.statusTitle}
              </h3>
              <p className="text-[#667085]">{order.statusDesc}</p>
            </div>

            <div className="flex sm:flex-col gap-3">
              <button onClick={() => navigate("/order-detail")} className="sm:px-10 px-2 sm:h-11 h-8 sm:text-base text-sm rounded-full w-fit border border-[#101828] font-medium">
                View details
              </button>
              <button className="sm:px-10 px-2 sm:h-11 h-8 sm:text-base text-sm rounded-full w-fit border border-[#101828] font-medium">
                Cancel this order
              </button>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-6 sm:px-6 px-3 mt-10 sm:mt-0 pb-6">
            <img
              src={yellowdress}
              className="w-[120px] h-[150px] rounded-lg object-cover"
            />

            <div className="flex-1">
              <h4 className="font-semibold text-[#1E1E1E] mb-2 text-[20px]">
                {order.product.name}
              </h4>

              <p className="text-[#B4B4B4] text-[18px] font-medium mb-6">{order.product.desc}</p>

              <p className="text-base text-[#1E1E1E]">
                {order.product.returnText}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
