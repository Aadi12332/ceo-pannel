import { useEffect, useRef, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import filterbigicon from "../../assets/filterbigicon.svg";

const donutData = [
  { name: "Delivered", value: 182.8, color: "#8B7CF6" },
  { name: "Processing", value: 161.13, color: "#F59E8B" },
  { name: "Pending", value: 215.41, color: "#63C3DD" },
  { name: "Shipped", value: 236.02, color: "#F7B767" },
  { name: "Cancelled", value: 186.24, color: "#5C7AEA" },
];

const appData = [
  { name: "Restaurant", Orders: 30, Revenue: 50, Users: 75 },
  { name: "Grocery", Orders: 92, Revenue: 18, Users: 38 },
  { name: "Shopping", Orders: 74, Revenue: 28, Users: 43 },
  { name: "Social Media", Orders: 15, Revenue: 32, Users: 86 },
  { name: "Home Service", Orders: 38, Revenue: 65, Users: 46 },
  { name: "IT Service", Orders: 36, Revenue: 8, Users: 16 },
];

const engagementData = [
  {
    month: "Jan",
    Facebook: 3200,
    Instagram: 4500,
    Twitter: 1800,
    LinkedIn: 2100,
  },
  {
    month: "Feb",
    Facebook: 3800,
    Instagram: 5200,
    Twitter: 2100,
    LinkedIn: 2400,
  },
  {
    month: "Mar",
    Facebook: 4200,
    Instagram: 6100,
    Twitter: 1900,
    LinkedIn: 2800,
  },
  {
    month: "Apr",
    Facebook: 3900,
    Instagram: 5800,
    Twitter: 2300,
    LinkedIn: 3100,
  },
  {
    month: "May",
    Facebook: 4500,
    Instagram: 6900,
    Twitter: 2400,
    LinkedIn: 3400,
  },
  {
    month: "Jun",
    Facebook: 5100,
    Instagram: 7700,
    Twitter: 2700,
    LinkedIn: 3800,
  },
];

const RevenueEngagementSection = () => {
  const [openDots, setOpenDots] = useState(false);
  const [selectedDots, setSelectedDots] = useState("Yearly");
  const dotsRef = useRef(null);
  const [openDots2, setOpenDots2] = useState(false);
  const [selectedDots2, setSelectedDots2] = useState("Yearly");
  const dotsRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dotsRef.current && !dotsRef.current.contains(e.target)) {
        setOpenDots(false);
      }
      if (dotsRef2.current && !dotsRef2.current.contains(e.target)) {
        setOpenDots2(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const revenueOptions = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"];

  return (
    <div className="space-y-5 mb-5">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-white rounded-lg lg:rounded-[14px] p-6">
          <h3 className="text-[18px] font-medium">
            Revenue Trend (Last 30 Days)
          </h3>
          <p className="text-[14px] text-[#667085] mb-4">
            Revenue generated over the past week
          </p>

          <div className="flex items-center">
            <div className="w-1/2 h-[260px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={donutData}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={2}
                  >
                    {donutData.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="w-1/2 space-y-3 text-[14px]">
              <div className="text-center text-[22px] font-semibold">981.6</div>
              {donutData.map((d, i) => (
                <div key={i} className="flex justify-between">
                  <span style={{ color: d.color }}>{d.name}</span>
                  <span>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] p-6">
          <div className="flex items-center justify-between mb-4 gap-3">
            <div>
              <h3 className="text-[18px] font-medium">
                Applications Performance
              </h3>
              <p className="text-[14px] text-[#667085]">
                Revenue generated over the past week
              </p>
            </div>
            <div className="relative inline-block" ref={dotsRef}>
              <span
                className="cursor-pointer"
                onClick={() => setOpenDots((prev) => !prev)}
              >
                <img src={filterbigicon} alt="menu" />
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

          <div className="h-[300px]">
            <ResponsiveContainer>
              <BarChart data={appData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  tick={{ fontSize: 12, fill: "#111827" }}
                  dataKey="name"
                />
                <YAxis tick={{ fontSize: 12, fill: "#111827" }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Orders" fill="#8B7CF6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Revenue" fill="#F59E8B" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Users" fill="#63C3DD" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg lg:rounded-[14px] p-6">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="text-[18px] font-medium">Engagement Performance</h3>
            <p className="text-[14px] text-[#667085]">
              Monthly engagement metrics across all social platforms
            </p>
          </div>
          <div className="relative inline-block" ref={dotsRef2}>
            <span
              className="cursor-pointer"
              onClick={() => setOpenDots2((prev) => !prev)}
            >
              <img src={filterbigicon} alt="menu" />
            </span>

            {openDots2 && (
              <div className="absolute right-0 mt-2 w-[200px] bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50">
                {revenueOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedDots2(item); // Only updates this dropdown
                      setOpenDots2(false);
                    }}
                    className="w-full px-4 py-2 text-[14px] text-left hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span>{item}</span>
                    {item === selectedDots2 && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="h-[320px]">
          <ResponsiveContainer>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis tick={{ fontSize: 12, fill: "#111827" }} dataKey="month" />
              <YAxis tick={{ fontSize: 12, fill: "#111827" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Facebook" fill="#3B73E0" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Instagram" fill="#D04E63" radius={[4, 4, 0, 0]} />
              <Bar dataKey="LinkedIn" fill="#2A5CAA" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Twitter" fill="#4EA1E3" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueEngagementSection;
