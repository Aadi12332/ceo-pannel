import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import { ChevronLeft, Trash2 } from "lucide-react";
import Select from "../common/Select";

export default function SendMassEmail() {
  const navigate = useNavigate();
  const [sendTo, setSendTo] = useState("all");
  const [group, setGroup] = useState("Restaurants");
  const [individual, setIndividual] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [history, setHistory] = useState([
    {
      id: 1,
      title: "Notification Title Display Here",
      content: "Your Notification Message Display Here...",
      status: "Unread",
      date: "27 Aug 2024",
    },
    {
      id: 2,
      title: "Notification Title Display Here",
      content: "Your Notification Message Display Here...",
      status: "Unread",
      date: "27 Aug 2024",
    },
    {
      id: 3,
      title: "Notification Title Display Here",
      content: "Your Notification Message Display Here...",
      status: "Unread",
      date: "27 Aug 2024",
    },
    {
      id: 4,
      title: "Notification Title Display Here",
      content: "Your Notification Message Display Here...",
      status: "Unread",
      date: "27 Aug 2024",
    },
  ]);

  return (
    <MainLayout>
      <div className="mb-5">
        <div
          className="text-sm sm:text-base flex items-center gap-5 mb-1 cursor-pointer"
          onClick={() => navigate("/control-tower")}
        >
          <ChevronLeft className="sm:w-5 w-4 sm:h-5 h-4 cursor-pointer" />
          <h1 className="sm:text-xl text-sm font-semibold">
            <span className="text-gray-500">My Dashboard</span> &gt; Send Mass
            Email
          </h1>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="bg-white lg:rounded-xl rounded-lg border lg:p-4 p-2.5">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-2 sm:col-span-4 col-span-12">
              <label className="block text-[20px] text-[#232323] font-medium mb-2">
                Send To
              </label>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setSendTo("all")}
                  className={`h-10 rounded-lg border ${
                    sendTo === "all" ? "bg-[#0E1E38] text-white" : "bg-white"
                  }`}
                >
                  All
                </button>

                <button
                  onClick={() => setSendTo("single")}
                  className={`h-10 rounded-lg border ${
                    sendTo === "single" ? "bg-[#0E1E38] text-white" : "bg-white"
                  }`}
                >
                  Single
                </button>
              </div>
            </div>

            <div className="lg:col-span-3 sm:col-span-4 col-span-6">
              <label className="block text-[20px] text-[#232323] font-medium mb-2">
                To Whom Would You Send
              </label>
              <Select
                placeholder="Select"
                options={[
                  { label: "All", value: "all" },
                  { label: "Users", value: "users" },
                  { label: "Restaurants", value: "restaurants" },
                  { label: "Grocery Stores", value: "grocery" },
                  { label: "Shopping Stores", value: "shopping" },
                  { label: "Home Services", value: "home" },
                  { label: "IT Services", value: "it" },
                ]}
                value={group}
                onChange={setGroup}
                inputClassName="!h-10 !w-full !px-3 !text-[14px] !bg-white !border !border-[#D1D5DB] !rounded-lg"
                listItemClassName="!text-[14px] !px-3 !py-2"
                listParentClassName="!max-h-[260px]"
              />
            </div>

            <div className="lg:col-span-3 sm:col-span-4 col-span-6">
              <label className="block text-[20px] text-[#232323] font-medium mb-2">
                Select The Individual
              </label>
              <div className={sendTo === "all" ? "pointer-events-none" : ""}>
                <Select
                  placeholder="Select..."
                  options={[
                    { label: "Lorem Ipsum", value: "1" },
                    { label: "John Doe", value: "2" },
                  ]}
                  value={individual}
                  onChange={setIndividual}
                  disabled={sendTo === "all"}
                  inputClassName={`!h-10 !w-full !px-3 !text-[14px] !rounded-lg ${
                    sendTo === "all"
                      ? "!bg-[#F3F3F5] !border !border-[#E5E7EB] cursor-not-allowed"
                      : "!bg-white !border !border-[#D1D5DB]"
                  }`}
                  listItemClassName="!text-[14px] !px-3 !py-2"
                  listParentClassName="!max-h-[260px]"
                />
              </div>
            </div>

            <div className="lg:col-span-4 sm:col-span-6 col-span-12">
              <label className="block text-[20px] text-[#232323] font-medium mb-2">
                Notification Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Write here"
                className="h-10 w-full rounded-lg border border-[#D1D5DB] px-3 text-sm outline-none"
              />
            </div>

            <div className="lg:col-span-4 sm:col-span-6 col-span-12 lg:col-start-9">
              <label className="block text-[20px] text-[#232323] font-medium mb-2">
                Notification Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write here"
                className="h-40 w-full rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm outline-none resize-none"
              />
              <div className="text-right text-xs text-gray-400 mt-1">
                {content.length}/10000
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="h-11 w-40 bg-[#0E1E38] text-white rounded-lg">
              Send
            </button>
            <button className="h-11 w-40 border border-red-400 text-red-500 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-auto scroll-hide w-[calc(100vw-24px)] lg:w-full shadow-sm">
        <div className="lg:min-w-[650px] min-w-[900px]">
          <div className="grid grid-cols-12 bg-[#0E1E38] text-white text-sm font-medium rounded-t-xl">
            <div className="col-span-3 px-4 py-3 font-bold">
              NOTIFICATION TITLE
            </div>
            <div className="col-span-4 px-4 py-3 font-bold">
              NOTIFICATION CONTENT
            </div>
            <div className="col-span-2 px-4 py-3 font-bold">
              NOTIFICATION STATUS
            </div>
            <div className="col-span-2 px-4 py-3 font-bold">DATE</div>
            <div className="col-span-1 px-4 py-3 font-bold">ACTION</div>
          </div>

          <div className="min-h-[150px]">
            {history.map((row, index) => (
              <div
                key={row.id}
                className={`grid grid-cols-12 text-sm items-center border-b border-[#E5E7EB] ${
                  index !== history.length - 1 ? "" : ""
                }`}
              >
                <div className="col-span-3 border-r px-4 py-3">{row.title}</div>

                <div className="col-span-4 border-r px-4 py-3 text-gray-500 truncate">
                  {row.content}
                </div>

                <div className="col-span-2 border-r px-4 py-3">
                  {row.status}
                </div>

                <div className="col-span-2 border-r px-4 py-3">{row.date}</div>

                <div className="col-span-1 px-4 py-3 flex justify-start">
                  <Trash2
                    className="w-5 h-5 text-red-500 cursor-pointer"
                    onClick={() =>
                      setHistory((prev) => prev.filter((x) => x.id !== row.id))
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={() => setHistory([])}
            disabled={history.length === 0}
            className={`px-6 py-2 rounded-lg ${
              history.length === 0
                ? "bg-[#0E1E38]/50 cursor-not-allowed"
                : "bg-[#0E1E38]"
            } text-white`}
          >
            Delete All
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
