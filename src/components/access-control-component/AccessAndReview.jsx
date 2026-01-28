import plusicon from "../../assets/plusicon.svg";
import searchicon from "../../assets/searchicon.svg";
import downArrowIcon from "../../assets/downarrow.svg";
import editicon from "../../assets/editicon.svg";

function AccessControlOverview() {
  const users = [
    { name: "Emma Rivers", email: "alice@example.com", role: "COO" },
    { name: "Jake Mason", email: "alice@example.com", role: "CTO" },
    { name: "Liam Carter", email: "alice@example.com", role: "CFO" },
    { name: "Sophia Bennett", email: "alice@example.com", role: "CMO" },
    { name: "Olivia Taylor", email: "alice@example.com", role: "CCO" },
    { name: "Noah Johnson", email: "alice@example.com", role: "LPD" },
    { name: "Liam Johnson", email: "alice@example.com", role: "GSD" },
    { name: "Emma Williams", email: "alice@example.com", role: "PVD" }
  ]

  return (
    <div className="rounded-xl border border-[#] bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Access Control Overview</h2>
        <div className="flex items-center gap-3">
          <select className="rounded-lg border px-3 py-2 text-sm">
            <option>Active</option>
          </select>
          <button className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">
            <img src={plusicon} alt="" className="w-5" /> Add New Employee
          </button>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg border px-3 py-2">
          <img src={searchicon} alt="" />
          <input className="w-full text-sm outline-none" placeholder="Search by users, roles, or permissions..." />
        </div>
        <button className="rounded-lg border px-4 py-2 text-sm">Filter by User</button>
        <button className="rounded-lg border px-4 py-2 text-sm">Filter by Role</button>
        <button className="rounded-lg border px-4 py-2 text-sm">Filter by Permission</button>
      </div>

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left">
          <thead className="border-b">
            <tr className="text-sm text-gray-600">
              <th className="px-4 py-3">User’s Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Permissions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.name} className="border-b last:border-b-0">
                <td className="px-4 py-4 font-medium">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs text-sky-600">Full Access</span>
                </td>
                <td className="text-right pr-4">
                  <img src={editicon} alt="" className="w-5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <span>1–10 of 1,247</span>
        <div className="flex items-center gap-2">
          <button className="rounded h-10 w-10 border p-2"><img src={downArrowIcon} alt="arrow" className="rotate-90" /></button>
          <button className="rounded h-10 w-10 bg-slate-900 px-3 py-1 text-white">1</button>
          <button className="rounded h-10 w-10 border px-3 py-1">2</button>
          <button className="rounded h-10 w-10 border px-3 py-1">3</button>
          <button className="rounded h-10 w-10 border p-2"><img src={downArrowIcon} alt="arrow" className="-rotate-90" /></button>
        </div>
      </div>
    </div>
  )
}

function QuarterlyAccessReviewWorkflow() {
  const items = [
    { title: "CEO Directory", owner: "Sarah Johnson", done: 0, total: 5, status: "upcoming", due: "1/15/2025" },
    { title: "COO Directory", owner: "Mike Davis", done: 0, total: 23, status: "upcoming", due: "1/15/2025" },
    { title: "CFO Directory", owner: "Emily Wang", done: 0, total: 12, status: "upcoming", due: "1/15/2025" },
    { title: "CTO Directory", owner: "Alex Chen", done: 15, total: 35, status: "in progress", due: "12/31/2024" },
    { title: "CMO Directory", owner: "Jessica Lee", done: 0, total: 18, status: "upcoming", due: "1/15/2025" },
    { title: "GSD Directory", owner: "Tom Rodriguez", done: 0, total: 14, status: "upcoming", due: "1/15/2025" },
    { title: "LPD Directory", owner: "Emma Wilson", done: 4, total: 8, status: "in progress", due: "12/28/2024" },
    { title: "Automation Directory", owner: "System", done: 0, total: 3, status: "upcoming", due: "1/15/2025" }
  ]

  return (
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold">Quarterly Access Review Workflow</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map(i => (
          <div key={i.title} className="rounded-xl border p-4">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="font-medium">{i.title}</p>
                <p className="text-sm text-gray-500">{i.owner}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs ${i.status === "in progress" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}>
                {i.status}
              </span>
            </div>
            <div className="mb-1 flex justify-between text-sm">
              <span>Progress</span>
              <span>{i.done} / {i.total} accounts</span>
            </div>
            <div className="h-2 rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-blue-600" style={{ width: `${(i.done / i.total) * 100}%` }} />
            </div>
            <p className="mt-2 text-sm text-gray-500">Due: {i.due}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-700">
        <strong>Note:</strong> Tasks are auto-created each quarter for directory owners. Reviews verify access is still needed, scopes are appropriate, and temporary access has been revoked.
      </div>
    </div>
  )
}

export default function AccessAndReview() {
  return (
    <div className="space-y-5 mb-5">
      <AccessControlOverview />
      <QuarterlyAccessReviewWorkflow />
    </div>
  )
}
