import boltIcon from "../../assets/greendollaricon.svg";
import dollarIcon from "../../assets/greendollaricon.svg";

const AutomationAndRevenue = () => {
  const workflows = [
    {
      name: "Order Confirmation & Tracking",
      tag: "Food",
      tagClass: "bg-orange-100 text-orange-600",
      triggers: "23,456 triggers",
      cost: "$12,345.67",
    },
    {
      name: "Payment Processing & Reconciliation",
      tag: "Pay",
      tagClass: "bg-yellow-100 text-yellow-700",
      triggers: "18,234 triggers",
      cost: "$9,876.54",
    },
    {
      name: "Inventory Sync & Alerts",
      tag: "Shop",
      tagClass: "bg-blue-100 text-blue-600",
      triggers: "15,678 triggers",
      cost: "$8,765.43",
    },
    {
      name: "Customer Support Routing",
      tag: "IT",
      tagClass: "bg-purple-100 text-purple-600",
      triggers: "12,345 triggers",
      cost: "$6,543.21",
    },
    {
      name: "Viral Campaign Analytics",
      tag: "Viral",
      tagClass: "bg-pink-100 text-pink-600",
      triggers: "9,876 triggers",
      cost: "$5,432.10",
    },
  ];

  const verticals = [
    {
      name: "Food",
      dot: "bg-orange-500",
      today: "$245K",
      mtd: "$6.8M",
      ytd: "$78.5M",
      trend: "+12.5%",
      trendClass: "text-green-600",
    },
    {
      name: "Shopping",
      dot: "bg-blue-500",
      today: "$198K",
      mtd: "$5.3M",
      ytd: "$62.1M",
      trend: "+8.3%",
      trendClass: "text-green-600",
    },
    {
      name: "Home",
      dot: "bg-green-500",
      today: "$156K",
      mtd: "$4.1M",
      ytd: "$48.9M",
      trend: "-2.1%",
      trendClass: "text-red-600",
    },
    {
      name: "IT",
      dot: "bg-purple-500",
      today: "$89K",
      mtd: "$2.5M",
      ytd: "$29.8M",
      trend: "+15.7%",
      trendClass: "text-green-600",
    },
    {
      name: "Viral",
      dot: "bg-pink-500",
      today: "$67K",
      mtd: "$1.9M",
      ytd: "$22.3M",
      trend: "+22.4%",
      trendClass: "text-green-600",
    },
    {
      name: "Pay",
      dot: "bg-yellow-500",
      today: "$132K",
      mtd: "$3.7M",
      ytd: "$45.7M",
      trend: "+6.8%",
      trendClass: "text-green-600",
    },
  ];

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mb-5">
      <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
        <div className="flex items-center gap-2 mb-6">
          <img src={boltIcon} className="w-5 h-5" />
          <h3 className="text-[20px] font-semibold">Automation Snapshot</h3>
        </div>

        <div className="mb-6">
          <div className="text-[#667085] mb-3">Trigger Volume</div>
          <div className="grid grid-cols-3 gap-4 text-[14px]">
            <div>
              <div className="text-[#667085]">Today</div>
              <div className="text-[18px] font-semibold">45,678</div>
            </div>
            <div>
              <div className="text-[#667085]">MTD</div>
              <div className="text-[18px] font-semibold">1,234,567</div>
            </div>
            <div>
              <div className="text-[#667085]">Trend</div>
              <div className="text-[18px] font-semibold text-green-600">
                +8.3%
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-[#667085] mb-3">Automation Costs</div>
          <div className="grid grid-cols-2 sm:gap-4 gap-2">
            <div className="bg-[#F2F4F7] rounded-lg lg:p-4 p-2.5">
              <div className="text-[#667085] text-[14px] mb-1">Today</div>
              <div className="text-[18px] font-semibold">$3,456.78</div>
            </div>
            <div className="bg-[#F2F4F7] rounded-lg lg:p-4 p-2.5">
              <div className="text-[#667085] text-[14px] mb-1">MTD</div>
              <div className="text-[18px] font-semibold">$89,234.56</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[#667085] mb-4">Top 5 Expensive Workflows</div>
          <div className="space-y-3">
            {workflows.map((w, i) => (
              <div
                key={i}
                className="border rounded-lg lg:p-4 p-2.5 flex justify-between gap-3 sm:items-center sm:flex-row flex-col"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{w.name}</span>
                    <span
                      className={`text-[12px] px-2 py-0.5 rounded-full ${w.tagClass}`}
                    >
                      {w.tag}
                    </span>
                  </div>
                  <div className="text-[13px] text-[#667085]">
                    {w.triggers}
                  </div>
                </div>
                <div className="font-medium">{w.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg lg:rounded-[14px] lg:p-6 p-3">
        <div className="flex items-center gap-2 mb-6">
          <img src={dollarIcon} className="w-5 h-5" />
          <h3 className="text-[20px] font-semibold">Revenue by Vertical</h3>
        </div>

        <div className="bg-[#F2F4F7] rounded-lg lg:p-4 p-2.5 grid grid-cols-3 gap-4 mb-6">
          <div>
            <div className="text-[#667085] text-[14px]">Today</div>
            <div className="text-[20px] font-semibold">$887K</div>
          </div>
          <div>
            <div className="text-[#667085] text-[14px]">MTD</div>
            <div className="text-[20px] font-semibold">$24.3M</div>
          </div>
          <div>
            <div className="text-[#667085] text-[14px]">YTD</div>
            <div className="text-[20px] font-semibold">$287.3M</div>
          </div>
        </div>

        <div className="space-y-3">
          {verticals.map((v, i) => (
            <div
              key={i}
              className="border rounded-lg lg:p-4 p-2.5 flex justify-between items-start"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-3 h-3 rounded-full ${v.dot}`} />
                  <span className="font-medium">{v.name}</span>
                </div>
                <div className="grid grid-cols-3 gap-6 text-[14px]">
                  <div>
                    <div className="text-[#667085]">Today</div>
                    <div className="font-medium">{v.today}</div>
                  </div>
                  <div>
                    <div className="text-[#667085]">MTD</div>
                    <div className="font-medium">{v.mtd}</div>
                  </div>
                  <div>
                    <div className="text-[#667085]">YTD</div>
                    <div className="font-medium">{v.ytd}</div>
                  </div>
                </div>
              </div>
              <div className={`text-[14px] font-medium ${v.trendClass}`}>
                {v.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomationAndRevenue;
