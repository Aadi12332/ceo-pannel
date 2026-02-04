import { useEffect, useRef, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import filterIcon from "../../assets/filterbigicon.svg";
import { InfoCircleIcon } from "../../assets/icons/icons";

const chartData = [
  { date: "Jun 1", newYork: 350, la: 300, chicago: 150, houston: 120 },
  { date: "Jun 5", newYork: 420, la: 330, chicago: 155, houston: 125 },
  { date: "Jun 10", newYork: 480, la: 360, chicago: 240, houston: 130 },
  { date: "Jun 15", newYork: 550, la: 380, chicago: 260, houston: 135 },
  { date: "Jun 20", newYork: 500, la: 360, chicago: 220, houston: 130 },
  { date: "Jun 25", newYork: 600, la: 400, chicago: 180, houston: 140 },
];

const progress = [
  { name: "New York", value: 70 },
  { name: "Les Angeles", value: 45 },
  { name: "Chicago", value: 25 },
  { name: "Houston", value: 10 },
];

const CityPerformance = () => {
  const [openDots, setOpenDots] = useState(false);
  const [selectedDots, setSelectedDots] = useState("Yearly");
  const dotsRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dotsRef.current && !dotsRef.current.contains(e.target)) {
        setOpenDots(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const revenueOptions = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"];
  return (
    <div className="grid lg:grid-cols-2 gap-5 mb-5">
      <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[20px] font-semibold">City Performance</h3>
          <div className="relative inline-block" ref={dotsRef}>
            <span
              className="cursor-pointer"
              onClick={() => setOpenDots((prev) => !prev)}
            >
              <img src={filterIcon} alt="menu" />
            </span>

            {openDots && (
              <div className="absolute right-0 mt-2 w-[200px] bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50">
                {revenueOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedDots(item);
                      setOpenDots(false);
                    }}
                    className="w-full px-4 py-2 text-[14px] text-left hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span>{item}</span>
                    {item === selectedDots && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {progress.map((p, i) => (
            <div key={i}>
              <div className="flex justify-between text-[14px] mb-1">
                <span>{p.name}</span>
              </div>
              <div className="w-full h-3 bg-[#E0E0E0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1F3B64] rounded-full"
                  style={{ width: `${p.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
              <XAxis dataKey="date" tick={{ fill: "#6B7280", fontSize: 12 }} />
              <YAxis
                tick={{ fill: "#6B7280", fontSize: 12 }}
                tickFormatter={(v) => `$${v}K`}
              />
              <Line
                type="monotone"
                dataKey="houston"
                stroke="#2EAF4A"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="chicago"
                stroke="#E2C41A"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="la"
                stroke="#2962FF"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="newYork"
                stroke="#D32F2F"
                strokeWidth={2}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center gap-6 text-[14px] mt-4">
          <span className="text-[#2EAF4A]">• Houston</span>
          <span className="text-[#E2C41A]">• Chicago</span>
          <span className="text-[#2962FF]">• Les Angeles</span>
          <span className="text-[#D32F2F]">• New York</span>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-2 sm:gap-4 gap-2">
          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <h3 className="sm:text-[20px] text-base font-semibold text-[#1E1E1E] mb-2">Profit/Burn Rate</h3>
            <div className="sm:text-[40px] text-[32px] text-[#1E1E1E] font-bold">335000</div>
          </div>

          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <h3 className="sm:text-[20px] text-base font-semibold text-[#1E1E1E] mb-2">Platform Uptime</h3>
            <div className="sm:text-[40px] text-[32px] text-[#1E1E1E] font-bold">99,9%</div>
          </div>

          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <h3 className="text-[20px] font-semibold text-[#1E1E1E]">Alerts</h3>
          </div>

          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3 flex items-center gap-3">
            <InfoCircleIcon color="#1E1E1E" width={20} height={20} />
            <span className="text-[20px] font-semibold text-[#1E1E1E]">API failure detected</span>
          </div>
          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <div className="text-[20px] font-semibold text-[#1E1E1E] mb-1">New York</div>
            <div className="sm:text-[40px] text-[32px] text-[#1E1E1E] font-bold">+$600K</div>
          </div>
          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <div className="text-[20px] font-semibold text-[#1E1E1E] mb-1">Les Angeles</div>
            <div className="sm:text-[40px] text-[32px] text-[#1E1E1E] font-bold">$525K</div>
          </div>
          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <div className="text-[20px] font-semibold text-[#1E1E1E] mb-1">Chicago</div>
            <div className="sm:text-[40px] text-[32px] text-[#1E1E1E] font-bold">$200K</div>
          </div>
          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <div className="text-[20px] font-semibold text-[#1E1E1E] mb-1">Houston</div>
            <div className="sm:text-[40px] text-[32px] text-[#1E1E1E] font-bold">$145K</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:gap-4 gap-2">
          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <div className="text-[16px] font-medium mb-1">
              Total Target Revenue
            </div>
            <div className="text-[36px] font-bold">$1,470K</div>
          </div>
          <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
            <div className="text-[16px] font-medium mb-1">
              Total Revenue from Cities
            </div>
            <div className="text-[36px] font-bold">$2,500K</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPerformance;
