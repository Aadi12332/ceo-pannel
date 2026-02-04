import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useEffect, useRef, useState } from "react";
import alertIcon from "../../assets/alertcircleicon.svg";
import arrowUp from "../../assets/alertcircleicon.svg";
import filterIcon from "../../assets/filterbigicon.svg";
import threedotsicon from "../../assets/threedotsicon.svg";

const healthItems = [
  { label: "Orders", value: 92 },
  { label: "Payments", value: 78 },
  { label: "Automation", value: 94 },
  { label: "Integrations", value: 65 },
  { label: "Support SLA", value: 88 },
];

const alerts = [
  {
    level: "CRITICAL",
    title: "Fraud Risk Spike - Refund Pattern Anomaly",
    desc: "Unusual refund request pattern detected in last 4 hours. 156% increase vs baseline.",
    tag: "Fraud",
    time: "15 min ago",
    owner: "Sarah Chen",
    role: "CFO",
    status: "Pending",
    color: "red",
  },
  {
    level: "HIGH",
    title: "SLA Breach Warning - Payment Processing",
    desc: "Payment processing time exceeded SLA threshold (>5s) for NYC region.",
    tag: "Technology",
    time: "1 hour ago",
    owner: "Michael Torres",
    role: "CTO",
    status: "Acknowledged",
    color: "orange",
  },
  {
    level: "HIGH",
    title: "Approval Queue Backlog",
    desc: "12 high-priority refund exceptions pending approval for >6 hours.",
    tag: "Operations",
    time: "3 hours ago",
    owner: "Emma Wilson",
    role: "COO",
    status: "Pending",
    color: "orange",
  },
  {
    level: "HIGH",
    title: "SLA Breach Warning - Payment Processing",
    desc: "Payment processing time exceeded SLA threshold (>5s) for NYC region.",
    tag: "Technology",
    time: "1 hour ago",
    owner: "Michael Torres",
    role: "CTO",
    status: "Acknowledged",
    color: "orange",
  },
  {
    level: "HIGH",
    title: "Approval Queue Backlog",
    desc: "12 high-priority refund exceptions pending approval for >6 hours.",
    tag: "Operations",
    time: "3 hours ago",
    owner: "Emma Wilson",
    role: "COO",
    status: "Pending",
    color: "orange",
  },
];

const revenueData = [
  { month: "Jan", lastYear: 24, thisYear: 20 },
  { month: "Feb", lastYear: 38, thisYear: 30 },
  { month: "Mar", lastYear: 32, thisYear: 26 },
  { month: "Apr", lastYear: 35, thisYear: 28 },
  { month: "May", lastYear: 48, thisYear: 24 },
  { month: "Jun", lastYear: 37, thisYear: 33 },
  { month: "Jul", lastYear: 28, thisYear: 20 },
  { month: "Aug", lastYear: 24, thisYear: 18 },
  { month: "Sep", lastYear: 34, thisYear: 24 },
  { month: "Oct", lastYear: 29, thisYear: 19 },
  { month: "Nov", lastYear: 40, thisYear: 31 },
  { month: "Dec", lastYear: 43, thisYear: 17 },
];

const performanceData = [
  { name: "Active Users", value: 820, color: "#DD7C55" },
  { name: "Total Users", value: 1549, color: "#F9EC77" },
];

const products = [
  {
    name: "Chicken Over Rice",
    price: "$12.99",
    orders: "12k orders",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
  },
  {
    name: "Chocolate Ice-Cream",
    price: "$8.99",
    orders: "10k orders",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
  },
  {
    name: "Fried Chicken",
    price: "$18.99",
    orders: "9.5k orders",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
  },
  {
    name: "Roast Chicken",
    price: "$21.99",
    orders: "9k orders",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
  },
];

const RevenuePerformanceSection = ({ id }) => {
  const [openRevenue, setOpenRevenue] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openDots, setOpenDots] = useState(false);

  const [selectedRevenue, setSelectedRevenue] = useState("Yearly");
  const [selectedCategory, setSelectedCategory] = useState("Overall");
  const [selectedDots, setSelectedDots] = useState("Restaurant");

  const dotsRef = useRef(null);
  const revenueRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (revenueRef.current && !revenueRef.current.contains(e.target)) {
        setOpenRevenue(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setOpenCategory(false);
      }
      if (dotsRef.current && !dotsRef.current.contains(e.target)) {
        setOpenDots(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const dotsOptions = ["Restaurant", "Shopping", "Grocery", "Social Media"];

  const revenueOptions = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"];

  const categoryOptions = [
    "Overall",
    "Restaurant",
    "Shopping",
    "Grocery",
    "Social Media",
  ];
  return (
    <div className="space-y-5 mb-5">
      <div className="flex gap-5 xl:flex-row flex-col">
        <div className="flex flex-1 sm:flex-row flex-col gap-5 sm:gap-0">
          <div className="bg-white rounded-l-lg rounded-lg sm:round-[unset] sm:rounded-l-[14px] border border-[#0000001A] lg:p-6 p-3 w-full">
            <div className="flex justify-between mb-4">
              <h3 className="text-[20px]">Total Revenue</h3>
              <div className="flex items-center gap-7">
                <div className="relative inline-block" ref={revenueRef}>
                  <img
                    src={filterIcon}
                    alt="filter"
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenRevenue((prev) => !prev);
                      setOpenCategory(false);
                    }}
                  />

                  {openRevenue && (
                    <div className="absolute right-0 mt-2 w-[180px] bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50">
                      {revenueOptions.map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setSelectedRevenue(item);
                            setOpenRevenue(false);
                          }}
                          className="w-full px-4 py-2 text-[14px] text-left hover:bg-gray-100 flex items-center justify-between"
                        >
                          <span>{item}</span>
                          {item === selectedRevenue && <span>✓</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative inline-block" ref={categoryRef}>
                  <img
                    src={filterIcon}
                    alt="filter"
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenCategory((prev) => !prev);
                      setOpenRevenue(false);
                    }}
                  />

                  {openCategory && (
                    <div className="absolute right-0 mt-2 w-[200px] bg-white border border-[#E5E7EB] rounded-lg shadow-lg z-50">
                      {categoryOptions.map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setSelectedCategory(item);
                            setOpenCategory(false);
                          }}
                          className="w-full px-4 py-2 text-[14px] text-left hover:bg-gray-100 flex items-center justify-between"
                        >
                          <span>{item}</span>
                          {item === selectedCategory && <span>✓</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="h-[330px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={revenueData}
                  barCategoryGap={24}
                  barGap={6}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    vertical={false}
                    strokeDasharray="3 3"
                    stroke="#9CA3AF"
                  />

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#111827" }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}K`}
                    tick={{ fontSize: 12, fill: "#111827" }}
                  />

                  <Legend
                    verticalAlign="bottom"
                    iconType="square"
                    wrapperStyle={{ paddingTop: 20 }}
                  />

                  <Bar
                    dataKey="lastYear"
                    fill="#EEF4FF"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={32}
                  />
                  <Bar
                    dataKey="thisYear"
                    fill="#1F4FBF"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={32}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-r-lg rounded-lg sm:round-[unset] sm:rounded-r-[14px] border border-[#0000001A] lg:p-6 p-3 flex flex-col items-center sm:w-[500px]">
            <div className="flex justify-between w-full mb-2">
              <h3 className="text-[20px]">Performance</h3>
              <span>
                <img src={threedotsicon} alt="" />
              </span>
            </div>

            <div className="h-[220px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={performanceData}
                    startAngle={180}
                    endAngle={0}
                    innerRadius="65%"
                    outerRadius="90%"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {performanceData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute inset-0 flex flex-col items-center justify-center mt-12">
                <p className="text-[14px] text-[#667085]">Total Count</p>
                <p className="text-[28px] font-semibold">2,369</p>
              </div>
            </div>

            <p className="text-[13px] text-[#667085] text-center mt-4 max-w-[260px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="flex gap-6 mt-4 text-[14px]">
              {performanceData.map((i) => (
                <span key={i.name} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: i.color }}
                  />
                  {i.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3 min-w-[320px]">
          <div className="flex justify-between mb-4">
            <h3 className="text-[20px]">Most Popular Products</h3>
            <div className="relative inline-block" ref={dotsRef}>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setOpenDots((prev) => !prev);
                  setOpenRevenue(false);
                  setOpenCategory(false);
                }}
              >
                <img src={threedotsicon} alt="menu" />
              </span>

              {openDots && (
                <div className="absolute right-0 mt-2 w-[200px] bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-50">
                  {dotsOptions.map((item) => (
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

          <div className="space-y-1">
            {products.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 border border-[#E5E7EB] rounded-lg p-3"
              >
                <img
                  src={item.img}
                  className="w-14 h-14 rounded-full object-cover"
                  alt=""
                />

                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-[#667085]">{item.price}</p>
                </div>

                <p className="text-[14px] text-[#667085]">{item.orders}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-y-5 xl:gap-x-5">
        <div
          className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3"
          id={id}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[20px]">Platform Health Score</h3>
            <span className="flex items-center gap-1 text-green-600 text-[14px]">
              <img src={arrowUp} className="w-4" /> +3
            </span>
          </div>

          <p className="text-[20px] mb-3">
            <span className="text-green-600">87</span>
            <span className="text-[#667085]"> / 100</span>
          </p>

          <div className="h-2 bg-[#E5E7EB] mb-6">
            <div className="h-2 bg-green-600 w-[87%]" />
          </div>

          <div className="space-y-4">
            {healthItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-4">
                <p className="w-[120px] text-[#667085] text-[14px]">
                  {item.label}
                </p>

                <div className="flex gap-5 items-center">
                  <div className="flex-1 h-2 bg-[#E5E7EB] max-w-[100px] min-w-[100px]">
                    <div
                      className="h-2 bg-[#0A0A0A]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>

                  <p
                    className={`text-[14px] ${
                      item.value >= 85 ? "text-green-600" : "text-orange-500"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg lg:rounded-[14px] border border-[#0000001A] lg:p-6 p-3 col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <img src={alertIcon} className="w-5" />
              <h3 className="text-[20px]">Top Alerts</h3>
            </div>

            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[12px]">
              2 Unacknowledged
            </span>
          </div>

          <div className="space-y-4 h-[450px] overflow-auto scroll-hide">
            {alerts.map((alert, i) => (
              <div key={i} className="border border-[#E5E7EB] rounded-lg lg:p-4 p-2.5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[12px] text-white ${
                      alert.color === "red" ? "bg-red-600" : "bg-orange-500"
                    }`}
                  >
                    {alert.level}
                  </span>
                  <p className="font-medium">{alert.title}</p>
                </div>

                <p className="text-[#667085] text-[14px] mb-2">{alert.desc}</p>

                <div className="flex gap-3 text-[12px] text-[#667085] mb-3">
                  <span className="px-2 py-1 bg-[#F3F4F6] rounded">
                    {alert.tag}
                  </span>
                  <span>{alert.time}</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-[12px]">
                      {alert.role}
                    </div>
                    <span className="text-[14px]">
                      {alert.owner} ({alert.role})
                    </span>
                  </div>

                  <span
                    className={`text-[14px] ${
                      alert.status === "Acknowledged"
                        ? "text-green-600"
                        : "text-[#667085]"
                    }`}
                  >
                    {alert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePerformanceSection;
