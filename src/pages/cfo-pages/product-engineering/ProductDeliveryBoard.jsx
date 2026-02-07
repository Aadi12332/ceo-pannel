import {
  LayoutGrid,
  Clock,
  Code,
  ClipboardCheck,
  Rocket,
  Bug,
} from "lucide-react";

const columns = [
  {
    key: "backlog",
    title: "Backlog",
    count: 3,
    icon: <LayoutGrid className="w-4 h-4" />,
    items: [
      {
        id: "FEAT-1234",
        title: "Provider bulk import API",
        tags: ["Business Suite"],
        priority: "High",
        user: "MK",
        days: "5d in column",
      },
      {
        id: "FEAT-1235",
        title: "Studio video templates",
        tags: ["Studio"],
        priority: "Medium",
        user: "JP",
        days: "3d in column",
      },
      {
        id: "FEAT-1236",
        title: "Food delivery tracking v2",
        tags: ["Food"],
        priority: "High",
        user: "AS",
        days: "2d in column",
      },
    ],
  },
  {
    key: "progress",
    title: "In Progress",
    count: 3,
    icon: <Clock className="w-4 h-4 text-blue-600" />,
    items: [
      {
        id: "FEAT-1234",
        title: "Home services booking flow",
        tags: ["Home Services", "Critical", "Blocked"],
        user: "RK",
        days: "5d in column",
      },
      {
        id: "FEAT-1231",
        title: "Payment retry logic",
        tags: ["Shopping"],
        priority: "High",
        user: "VL",
        days: "2d in column",
      },
      {
        id: "FEAT-1231",
        title: "Provider analytics dashboard",
        tags: ["Business Suite"],
        priority: "Medium",
        user: "LW",
        days: "2d in column",
      },
    ],
  },
  {
    key: "review",
    title: "Code Review",
    count: 3,
    icon: <Code className="w-4 h-4 text-orange-600" />,
    items: [
      {
        id: "FEAT-1225",
        title: "IT ticketing integration",
        tags: ["IT"],
        priority: "High",
        user: "DP",
        days: "5d in column",
      },
      {
        id: "FEAT-1232",
        title: "Viral content scheduler",
        tags: ["Viral"],
        priority: "Medium",
        user: "AS",
        days: "1d in column",
      },
    ],
  },
  {
    key: "qa",
    title: "QA",
    count: 2,
    icon: <Bug className="w-4 h-4 text-purple-600" />,
    items: [
      {
        id: "FEAT-1220",
        title: "Studio asset library",
        tags: ["Studio"],
        priority: "High",
        user: "NK",
        days: "5d in column",
      },
      {
        id: "FEAT-1221",
        title: "Multi-vendor cart",
        tags: ["Shopping"],
        priority: "Critical",
        user: "AM",
        days: "2d in column",
      },
    ],
  },
  {
    key: "ready",
    title: "Ready",
    count: 2,
    icon: <ClipboardCheck className="w-4 h-4 text-orange-600" />,
    items: [
      {
        id: "FEAT-1215",
        title: "Provider signup v2",
        tags: ["Business Suite"],
        priority: "High",
        user: "NK",
        days: "1d in column",
      },
    ],
  },
  {
    key: "released",
    title: "Released",
    count: 1,
    icon: <Rocket className="w-4 h-4 text-green-600" />,
    items: [
      {
        id: "FEAT-1210",
        title: "Push notification system",
        tags: ["Food"],
        priority: "High",
        user: "BT",
        days: "0d in column",
      },
    ],
  },
];

const tagStyle = {
  "Business Suite": "bg-purple-100 text-purple-600",
  Studio: "bg-orange-100 text-orange-600",
  Food: "bg-orange-100 text-orange-600",
  Shopping: "bg-green-100 text-[#00A63E]",
  IT: "bg-blue-100 text-blue-600",
  Viral: "bg-red-100 text-[#F54900]",
  Critical: "bg-red-100 text-[#CF2027]",
  Blocked: "bg-red-100 text-[#CF2027]",
};

const priorityStyle = {
  High: "bg-orange-100 text-[#F54900]",
  Medium: "bg-yellow-100 text-yellow-700",
  Critical: "bg-red-100 text-[#CF2027]",
};

export default function ProductDeliveryBoard() {
  return (
    <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 mb-5">
      <h2 className="text-lg font-semibold mb-4">
        Product Delivery Board <span className="text-sm text-gray-500">(Sprint 47 · 14 items)</span>
      </h2>

      <div className="flex md:gap-5 gap-2 overflow-x-auto scroll-hide lg:w-[calc(100vw-388px)] w-[calc(100vw-44px)]">
        {columns.map((col) => (
          <div key={col.key} className="md:min-w-[370px] min-w-[240px]">
            <div className="flex items-center gap-2 mb-3">
              {col.icon}
              <span className="font-medium">{col.title}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-yellow-100">
                {col.count}
              </span>
            </div>

            <div className="md:space-y-5 space-y-2">
              {col.items.map((item, i) => (
                <div
                  key={i}
                  className="border lg:rounded-xl rounded-lg md:p-4 p-2 bg-white"
                >
                  <p className="text-xs text-gray-500 mb-1">{item.id}</p>
                  <p className="font-medium mb-2 truncate md:text-base text-sm">{item.title}</p>

                  <div className="flex flex-wrap sm:gap-2 gap-1 mb-4">
                    {item.tags?.map((t, idx) => (
                      <span
                        key={idx}
                        className={`sm:px-2 px-1 py-0.5 text-xs rounded ${tagStyle[t]}`}
                      >
                        {t}
                      </span>
                    ))}
                    {item.priority && (
                      <span
                        className={`px-2 py-0.5 text-xs rounded ${priorityStyle[item.priority]}`}
                      >
                        {item.priority}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center">
                      {item.user}
                    </div>
                    <span>{item.days}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
