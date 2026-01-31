import { Search, Trash2 } from "lucide-react"

const followers = [
  { name: "Mehek Nanwani", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Elisabeth Howard", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Nehal Govkar", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Yohan Simba", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Babita Khatri", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Sam Naroha", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=6" },
  { name: "Josh Perera", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=7" },
  { name: "Arya Vaz", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=8" },
  { name: "Orja Sawant", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=9" },
  { name: "Mehek Nanwani", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Elisabeth Howard", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Nehal Govkar", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Yohan Simba", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Babita Khatri", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "Sam Naroha", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=6" },
  { name: "Josh Perera", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=7" },
  { name: "Arya Vaz", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=8" },
  { name: "Orja Sawant", gender: "Male", time: "Today 14:30PM", avatar: "https://i.pravatar.cc/150?img=9" },
]

export default function FollowersList({activeTab, setActiveTab}) {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#101828]">View Followers</h2>

        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085]" />
          <input
            placeholder="search User"
            className="h-10 pl-3 pr-9 rounded-lg bg-[#EEEEEE] outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {followers.map((f, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={f.avatar} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-medium text-[#101828]">{f.name}</p>
                <p className="text-sm text-[#667085]">{f.gender}, {f.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={()=>setActiveTab(false)} className="bg-[#0E1E38] text-white px-4 h-9 rounded-lg">
                View
              </button>
              <button className="w-9 h-9 rounded-lg border border-[#DC2626] flex items-center justify-center text-[#DC2626]">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10">
        <button className="w-9 h-9 rounded-lg bg-[#0E1E38] text-white">1</button>
        <button className="w-9 h-9 rounded-lg border">2</button>
        <button className="w-9 h-9 rounded-lg border">...</button>
        <button className="w-9 h-9 rounded-lg border">&gt;</button>
      </div>
    </div>
  )
}
