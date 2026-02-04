import plusicon from "../../assets/plusicon.svg";
import searchicon from "../../assets/searchicon.svg";
import employeeicon from "../../assets/sidebaricon/directoryicon.svg";
import revokeIcon from "../../assets/alertcircleicon.svg";

const revocations = [
  {
    name: "Robert Chen",
    reason: "Contract ended - automatic revocation",
    by: "System Auto",
    time: "Dec 22, 05:30 AM",
  },
  {
    name: "Lisa Park",
    reason: "Moved to different project - access no longer needed",
    by: "Sarah Johnson (CEO)",
    time: "Dec 21, 08:00 PM",
  },
  {
    name: "David Miller",
    reason: "Security review - excessive permissions",
    by: "Michael Chen (CTO)",
    time: "Dec 20, 03:30 PM",
  },
];

const roles = [
  { label: "Admin", count: 12, percent: 10 },
  { label: "Editor", count: 48, percent: 25 },
  { label: "Viewer", count: 187, percent: 65 },
];

const accessPatterns = [
  { label: "Active Today", value: "189 users" },
  { label: "Inactive 30+ days", value: "12 users" },
  { label: "Multi-device access", value: "145 users" },
  { label: "VPN usage", value: "87%" },
];

const compliance = [
  { label: "2FA Enabled", value: "96%" },
  { label: "Password Policy", value: "100%" },
  { label: "Access Reviews", value: "Current" },
  { label: "Audit Logging", value: "Active" },
];

export default function EmployeeAuditLog() {
  const employees = [
    {
      name: "Maren Donin",
      email: "example@email.com",
      location: "United States",
      dept: "COO",
      date: "Dec 17",
      entry: "10:30 AM",
      break: "-- --",
      exit: "06:30 PM",
      extra: "-- --",
      total: "8 hrs",
    },
    {
      name: "Cristofer Saris",
      email: "example@email.com",
      location: "Canada",
      dept: "CTO",
      date: "Dec 17",
      entry: "10:30 AM",
      break: "1 hr",
      exit: "07:30 PM",
      extra: "-- --",
      total: "8 hrs",
    },
    {
      name: "Ruben Workman",
      email: "example@email.com",
      location: "Australia",
      dept: "CFO",
      date: "Dec 17",
      entry: "10:30 AM",
      break: "1 hr",
      exit: "07:30 PM",
      extra: "-- --",
      total: "8 hrs",
    },
    {
      name: "Carter Botosh",
      email: "example@email.com",
      location: "Germany",
      dept: "CMO",
      date: "Dec 17",
      entry: "10:30 AM",
      break: "1 hr",
      exit: "07:30 PM",
      extra: "-- --",
      total: "8 hrs",
    },
    {
      name: "Carter Mango",
      email: "example@email.com",
      location: "Japan",
      dept: "CCO",
      date: "Dec 17",
      entry: "10:30 AM",
      break: "1 hr",
      exit: "07:30 PM",
      extra: "-- --",
      total: "8 hrs",
    },
    {
      name: "Aspen Passaquindici",
      email: "example@email.com",
      location: "Brazil",
      dept: "LPD",
      date: "Dec 17",
      entry: "10:30 AM",
      break: "1 hr",
      exit: "08:30 PM",
      extra: "1 hr",
      total: "9 hrs",
    },
    {
      name: "Aspen Passaquindici",
      email: "example@email.com",
      location: "India",
      dept: "GSD",
      date: "Dec 17",
      entry: "10:30 AM",
      break: "1 hr",
      exit: "07:30 PM",
      extra: "-- --",
      total: "8 hrs",
    },
    {
      name: "Aspen Passaquindici",
      email: "example@email.com",
      location: "France",
      dept: "AAD",
      date: "Dec 17",
      entry: "10:30 AM",
      break: "-- --",
      exit: "06:30 PM",
      extra: "-- --",
      total: "8 hrs",
    },
  ];

  return (
    <>
      <div className="lg:rounded-xl rounded-lg border border-[#0000001A] bg-white lg:p-6 p-3 mb-5">
        <div className="mb-6 flex items-center justify-start gap-3">
          <img src={employeeicon} alt="" className="invert" />
          <div>
            <h2 className="text-lg font-semibold">Employee Audit Log</h2>
            <p className="text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="mb-4 flex sm:items-center gap-3 sm:flex-row flex-col">
          <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 flex-1 h-12">
            <img src={searchicon} alt="" />
            <input
              placeholder="Search employee..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white max-w-[250px]">
            <img src={plusicon} alt="" /> Add New Employee
          </button>
        </div>

        <div className="overflow-x-auto w-[calc(100vw-46px)] lg:w-full rounded-xl scroll-hide">
          <table className="w-full text-left min-w-[992px]">
            <thead>
              <tr className="border-b text-sm text-gray-600">
                <th className="py-3">Employee Details</th>
                <th>Location</th>
                <th>Department</th>
                <th>Last Active Date</th>
                <th>Entry Time</th>
                <th>Break Time</th>
                <th>Exit Time</th>
                <th>Extra Work</th>
                <th>Total Time</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr
                  key={emp.name + emp.location}
                  className="border-b last:border-b-0"
                >
                  <td className="py-4">
                    <p className="font-medium">{emp.name}</p>
                    <p className="text-sm text-gray-500">{emp.email}</p>
                  </td>
                  <td>{emp.location}</td>
                  <td>
                    <span className="rounded-full border px-3 py-1 text-xs">
                      {emp.dept}
                    </span>
                  </td>
                  <td>{emp.date}</td>
                  <td>{emp.entry}</td>
                  <td>{emp.break}</td>
                  <td>{emp.exit}</td>
                  <td>{emp.extra}</td>
                  <td className="font-medium">{emp.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-5">
        <div className="bg-white rounded-lg lg:rounded-[16px] border border-[#0000001A] lg:p-6 p-3">
          <h3 className="text-[20px] text-[#0A0A0A] mb-4">
            Recent Access Revocations
          </h3>

          <div className="space-y-4">
            {revocations.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-start bg-[#FAFAFA] rounded-lg lg:p-4 p-2.5 sm:flex-row flex-col gap-1"
              >
                <div className="flex gap-3">
                  <div className="w-9 h-9 min-w-9 flex items-center justify-center bg-[#FEE2E2] rounded-lg">
                    <img src={revokeIcon} alt="" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[16px] text-[#0A0A0A]">{item.name}</p>
                    <p className="text-[14px] text-[#475467]">{item.reason}</p>
                    <p className="text-[13px] text-[#667085] mt-1">
                      Revoked by: {item.by}
                    </p>
                  </div>
                </div>
                <span className="text-[14px] text-[#667085] pl-12 sm:pl-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid xl:grid-cols-3 grid-cols-1 gap-6">
          <div className="bg-white rounded-lg lg:rounded-[16px] border border-[#0000001A] lg:p-6 p-3">
            <h3 className="text-[18px] text-[#0A0A0A] mb-4">
              Role Distribution
            </h3>

            <div className="space-y-4">
              {roles.map((r, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[14px] mb-1">
                    <span>{r.label}</span>
                    <span>{r.count} users</span>
                  </div>
                  <div className="h-2 bg-[#E5E7EB] rounded-full">
                    <div
                      className="h-2 bg-[#4F7BFF] rounded-full"
                      style={{ width: `${r.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg lg:rounded-[16px] border border-[#0000001A] lg:p-6 p-3">
            <h3 className="text-[18px] text-[#0A0A0A] mb-4">Access Patterns</h3>

            <div className="space-y-3">
              {accessPatterns.map((a, i) => (
                <div key={i} className="flex justify-between text-[14px]">
                  <span className="text-[#475467]">{a.label}</span>
                  <span className="text-[#0A0A0A]">{a.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg lg:rounded-[16px] border border-[#0000001A] lg:p-6 p-3">
            <h3 className="text-[18px] text-[#0A0A0A] mb-4">
              Compliance Status
            </h3>

            <div className="space-y-3">
              {compliance.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-[14px]"
                >
                  <span className="text-[#475467]">{c.label}</span>
                  <span className="px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534]">
                    {c.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
