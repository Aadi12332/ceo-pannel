import { useState, useRef, useEffect } from "react";
import {
  Mic,
  Hand,
  VideoIcon,
  MonitorUp,
  Smile,
  MoreVertical,
  Settings,
  Users,
  MessageSquare,
  Grid,
  CopyIcon,
} from "lucide-react";
import videoIcon from "../../assets/chatboxicon/videoicon.svg";
import callIcon from "../../assets/chatboxicon/callicon.svg";
import searchIcon from "../../assets/chatboxicon/searchicon.svg";
import closeIcon from "../../assets/chatboxicon/closeicon.svg";
import emojiIcon from "../../assets/chatboxicon/emojiicon.svg";
import sendIcon from "../../assets/chatboxicon/sendicon.svg";
import attachIcon from "../../assets/chatboxicon/attachicon.svg";
import micIcon from "../../assets/chatboxicon/audioicon.svg";
import menuIcon from "../../assets/chatboxicon/hamburgericon.svg";
import threeDotIcon from "../../assets/chatboxicon/threedotverticalicon.svg";
import chatBg from "../../assets/chatboxicon/chatboxbgimg.png";
import linkIcon from "../../assets/linkicon.svg";
import plusIcon from "../../assets/plusicon.svg";
import copyicon from "../../assets/chatboxicon/copyicon.svg";
import callblueicon from "../../assets/chatboxicon/callblueicon.svg";
import shareblueicon from "../../assets/chatboxicon/shareblueicon.svg";
import videoofficon from "../../assets/chatboxicon/videocall/videoofficon.svg";
import mikeofficon from "../../assets/chatboxicon/videocall/mikeofficon.svg";
import usersIcon from "../../assets/chatboxicon/videocall/usersicon.svg";
import lockicon from "../../assets/chatboxicon/videocall/lockicon.svg";
import backarrowicon from "../../assets/chatboxicon/videocall/backarrowicon.svg";
import chatmsgicon from "../../assets/chatboxicon/videocall/msgicon.svg";

const chats = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "COO",
    imgsrc: "",
    unread: 2,
    messages: [
      { from: "them", text: "Hey! How are you doing?", time: "10:00 AM" },
      { from: "me", text: "Hi Sarah! I'm doing great, thanks!", time: "10:05 AM" },
      { from: "them", text: "Are we still on for the meeting tomorrow?", time: "10:20 AM" },
      { from: "me", text: "Yes, absolutely!", time: "10:25 AM" },
      { from: "them", text: "See you tomorrow! 👋", time: "10:30 AM" },
    ],
  },
  {
    id: 2,
    name: "Team Discussion",
    role: "CTO",
    imgsrc: "",
    unread: 0,
    messages: [
      {
        from: "them",
        text: "Let me check and get back to you",
        time: "9:15 AM",
      },
    ],
  },
  {
    id: 3,
    name: "Alex Martinez",
    role: "CMO",
    imgsrc: "",
    unread: 0,
    messages: [
      {
        from: "them",
        text: "Thanks for your help!",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 4,
    name: "Emily Cher",
    role: "LPD",
    imgsrc: "",
    unread: 1,
    messages: [
      {
        from: "them",
        text: "Can we reschedule the meeting?",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 5,
    name: "Project Team",
    role: "GSD",
    imgsrc: "",
    unread: 0,
    messages: [
      {
        from: "them",
        text: "Files uploaded successfully",
        time: "Tuesday",
      },
    ],
  },
  {
    id: 6,
    name: "David Wilson",
    role: "AAD",
    imgsrc: "",
    unread: 0,
    messages: [
      {
        from: "them",
        text: "Looking forward to it!",
        time: "Monday",
      },
    ],
  },
]

export default function ChatModal({ onClose,chatModalOpen }) {
const chatRef = useRef(null);
const [search, setSearch] = useState("")
  const [active, setActive] = useState(chats[0]);
  const [activeChat, setActiveChat] = useState(false);
  const [text, setText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [instantMeetOpen, setInstantMeetOpen] = useState(false);
  const [createDiscussionOpen, setCreateDiscussionOpen] = useState(true);

useEffect(() => {
  if (!chatRef.current) return
  chatRef.current.scrollTop = chatRef.current.scrollHeight
}, [active.messages])

const filteredChats = chats.filter((c) => {
  const q = search.toLowerCase()
  return (
    c.name.toLowerCase().includes(q) ||
    c.role.toLowerCase().includes(q)
  )
})

  const send = () => {
    if (!text.trim()) return;
    setActive({
      ...active,
      messages: [...active.messages, { from: "me", text, time: "Now" }],
    });
    setText("");
  };

  if(!chatModalOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="max-w-[1100px] w-[95%] h-[600px] bg-white rounded-2xl overflow-hidden flex">
        <div className={`md:w-[340px] w-full border-r bg-white ${activeChat ? "hidden" : ""}`}>
          <div className="flex items-center justify-between gap-3 relative p-4 cursor-pointer">
            <div onClick={onClose}>
              <img
                src={closeIcon}
              />
            </div>
            <div onClick={() => setMenuOpen((p) => !p)}>
              <img src={menuIcon} className="cursor-pointer" />
            </div>
            {menuOpen && (
              <div
                className="absolute right-4 top-12 bg-white rounded-xl overflow-hidden shadow-lg border border-[#00000033] z-50"
              >
                <div className="">
                  <div
                    className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setJoinModalOpen(true);
                    }}
                  >
                    <img src={linkIcon} className="w-4 brightness-0" />
                    <span className="text-sm">Create a meeting for later</span>
                  </div>
                  <div
                    className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setMenuOpen(false);
                      setInstantMeetOpen(true);
                    }}
                  >
                    <img src={plusIcon} className="w-4 invert" />
                    <span className="text-sm">Start an instant meeting</span>
                  </div>
                </div>
              </div>
            )}

            {joinModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative w-[330px] bg-white rounded-2xl p-5 z-10">
                  <img
                    src={plusIcon}
                    className="absolute top-5 right-5 w-6 cursor-pointer opacity-90 hover:opacity-100 rotate-45 invert"
                    onClick={() => setJoinModalOpen(false)}
                  />

                  <h2 className="text-xl font-semibold mb-2">
                    Here’s your joining info
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Send this to people you want to meet with. Be sure to save
                    it so you can use it later, too.
                  </p>

                  <div className="bg-[#E8F1FF] rounded-xl p-4">
                    <div className="flex items-center justify-between bg-white rounded-lg pl-3 py-2 mb-3">
                      <span className="text-sm">
                        meet.google.com/vim-xzay-n
                      </span>
                      <img src={copyicon} alt="" className="cursor-pointer" />
                    </div>

                    <p className="text-sm text-gray-700 mb-2">
                      Dial-in: (US) +1 401-584-3501
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      PIN: 408 659 995#
                    </p>

                    <p className="text-sm cursor-pointer text-[#155DFC] flex items-center gap-2 mb-2">
                      <img src={callblueicon} alt="" />
                      More phone numbers
                    </p>
                    <p className="text-sm cursor-pointer text-[#155DFC] flex items-center gap-2">
                      <img src={shareblueicon} alt="" />
                      Share full details
                    </p>
                  </div>
                </div>
              </div>
            )}

            {instantMeetOpen && (
              <div className="fixed inset-0 z-50 flex justify-center items-center">
                <div className="lg:p-5 p-3 bg-[#0F172B] lg:rounded-2xl rounded-lg max-w-[1100px] w-[95%] md:h-[682px] h-[600px]">
                  <div className="bg-[linear-gradient(135deg,#8B0836_0%,#A50036_50%,#A3004C_100%)] relative lg:rounded-xl rounded-lg h-[470px] md:h-[574px]">
                    <div className="absolute top-4 left-4">
                      <button
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                        onClick={() => {setInstantMeetOpen(false);setCreateDiscussionOpen(true)}}
                      >
                        <img src={backarrowicon} alt="" />
                      </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center h-full">
                      <div className="w-fit h-fit">
                        <div className="w-[128px] h-[128px] rounded-full bg-[#EC003F] border-[20px] border-[#C7003680] flex items-center justify-center text-white text-3xl">
                        👤
                      </div>
                      <div className="flex items-center justify-between rounded-full px-2.5 py-1 gap-5 max-w-[100px] mt-1 mx-auto bg-[#0F172B]">
                        <VideoIcon className="w-4 text-white" />
                        <CopyIcon className="w-3 text-white" />
                        <MoreVertical className="text-white w-[15px] cursor-pointer" />
                      </div>
                      </div>
                    </div>

                    {
                      createDiscussionOpen &&
                    <div className="absolute left-4 bottom-4">
                      <div className="relative w-[280px] bg-white rounded-xl p-3">
                        <img 
                          onClick={() => setCreateDiscussionOpen(false)}
                          src={plusIcon}
                          className="absolute top-4 right-4 w-5 cursor-pointer rotate-45 invert"
                        />

                        <h2 className="text-lg mb-2">Your meeting's ready</h2>

                        <button className="w-full bg-[#155DFC] text-sm text-white rounded-lg py-2 mb-3 flex items-center gap-2 justify-center mt-5">
                          <img
                            src={usersIcon}
                            className="w-4 cursor-pointer relative"
                          />
                          Add others
                        </button>

                        <p className="text-sm text-gray-600 mb-3">
                          Or share this joining info with others you want in the
                          meeting
                        </p>

                        <div className="">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm bg-[#E8F1FF] rounded-lg px-1.5 py-2 inline-block">
                              meet.google.com/vim-xzay-n
                            </span>
                            <img src={copyicon} className="cursor-pointer" />
                          </div>

                          <p className="text-sm mb-1">
                            Dial-in: (US) +1 401-584-3501
                          </p>
                          <p className="text-sm mb-3">PIN: 408 659 995#</p>

                          <p className="text-sm text-[#155DFC] flex items-center gap-2 mb-2 cursor-pointer">
                            <img src={callblueicon} />
                            More phone numbers
                          </p>

                          <p className="text-sm text-[#155DFC] flex items-center gap-2 cursor-pointer">
                            <img src={shareblueicon} />
                            Share full details
                          </p>
                          <p className="text-xs text-gray-600 mt-2 border-t border-[#E2E8F0] pt-2">
                            Joined as varunkumar@fyweb.technology
                          </p>
                        </div>
                      </div>
                    </div>
                    }
                  </div>
                  <div className="flex items-center justify-center h-[117px] md:h-[88px] gap-3 md:flex-row flex-col">
                    <div className="flex items-center lg:gap-4 gap-2.5 text-sm text-white">
                      <span>10:44 AM</span>
                      <span className="opacity-50">|</span>
                      <span>vim-xzay-gnn</span>
                    </div>

                    <div className="md:flex-1 flex justify-center items-center lg:gap-6 gap-3.5">
                      <MoreVertical className="text-white w-5 cursor-pointer" />
                      <Mic className="text-white w-5 cursor-pointer" />
                      <img src={videoofficon} className="w-10 cursor-pointer" />
                      <Hand className="text-white w-5 cursor-pointer" />
                      <img src={chatmsgicon} className="cursor-pointer" />
                      <MonitorUp className="text-white w-5 cursor-pointer" />
                      <Smile className="text-white w-5 cursor-pointer" />
                      <MoreVertical className="text-white w-5 cursor-pointer" />
                      <img src={mikeofficon} className="w-10 cursor-pointer" onClick={() => setInstantMeetOpen(false)} />
                    </div>

                    <div className="flex items-center lg:gap-5 gap-4 text-white">
                      <Settings className="w-5 cursor-pointer" />
                      <div className="relative">
                        <Users className="w-5 cursor-pointer" />
                        <span className="absolute -top-2 -right-2 bg-blue-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                          1
                        </span>
                      </div>
                      <MessageSquare className="w-5 cursor-pointer" />
                      <Grid className="w-5 cursor-pointer" />
                      <img src={lockicon} className="cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 pb-3">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
              <img src={searchIcon} className="w-4 opacity-60" />
              <input value={search}
              onChange={(e) => setSearch(e.target.value)}
                placeholder="Search or start new chat"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>

          <div className="overflow-auto h-[480px] scroll-hide">
            {filteredChats.map((c) => (
              <div
                key={c.id}
                onClick={() => {setActive(c);setActiveChat(true)}}
                className={`px-4 py-3 cursor-pointer flex justify-between hover:bg-gray-100 ${
                  active.id === c.id && "bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 min-w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {c.imgsrc ? (
                      <img
                        src={c.imgsrc}
                        className="w-full h-full object-cover"
                        alt={c.name}
                      />
                    ) : (
                      <span className="text-xs font-semibold text-gray-600">
                        {c.role}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="font-medium text-sm">{c.name}</div>
                    <div className="text-xs text-gray-500 truncate w-52">
                      {c.messages.at(-1)?.text}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-gray-400 min-w-max">
                    10:30 AM
                  </div>
                  {c.unread > 0 && (
                    <div className="ml-auto mt-1 w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                      {c.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`flex-1 md:flex flex-col ${activeChat ? "" : "hidden"}`}>
          <div className="flex justify-between items-center px-2 py-4 border-b bg-[#F0F2F5] border-[#E5E7EB]">
            <div className="flex items-center sm:gap-3 gap-1.5">
              <img src={backarrowicon} className="cursor-pointer sm:w-10 w-6" onClick={() => setActiveChat(false)} />

              <div className="w-10 h-10 min-w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {active.imgsrc ? (
                  <img
                    src={active.imgsrc}
                    alt={active.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-semibold text-gray-600">
                    {active.role}
                  </span>
                )}
              </div>

              <div>
                <div className="font-semibold sm:text-base text-sm">{active.name}</div>
                <div className="text-xs text-gray-500">online</div>
              </div>
            </div>

            <div className="flex sm:gap-5 gap-2">
              <img src={videoIcon} className="sm:w-5 w-4" />
              <img src={callIcon} className="sm:w-5 w-4" />
              <img src={searchIcon} className="sm:w-5 w-4" />
              <img src={threeDotIcon} className="sm:w-5 w-4" />
            </div>
          </div>

          <div ref={chatRef}
            className="flex-1 p-2 overflow-y-auto bg-cover bg-center scroll-hide h-[455px]"
            style={{
              backgroundImage: `url(${chatBg})`,
            }}
          >
            {active.messages.map((m, i) => (
              <div
                key={i}
                className={`mb-2 last:mb-0 max-w-[520px] w-fit px-3 py-2 rounded-lg text-sm ${
                  m.from === "me" ? "ml-auto bg-[#e7f7cf]" : "bg-white"
                }`}
              >
                <div className="word-break" style={{ wordBreak: "break-word" }}>
                  {m.text}
                </div>
                <div className="text-[11px] text-gray-400 text-right mt-1">
                  {m.time}
                </div>
              </div>
            ))}
          </div>

          <div className="px-2 py-4 border-t bg-[#F0F2F5] border-[#E5E7EB] flex items-center gap-2">
            <img src={emojiIcon} className="w-5 cursor-pointer" />
            <img src={attachIcon} className="w-5 cursor-pointer" />
            <div className="bg-white rounded-lg px-2 py-1.5 flex-1 flex items-center gap-2 h-10">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message"
                className="flex-1 text-sm outline-none"
              />
              <img src={micIcon} className="w-5 cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 justify-center p-2 bg-white rounded-lg h-10 w-10">
              <img
                src={sendIcon}
                className="w-5 cursor-pointer"
                onClick={send}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
