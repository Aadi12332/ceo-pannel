import { useEffect, useState } from "react";
import { X, Trash2, Paperclip, Send } from "lucide-react";
import nonotificationicon from "../../assets/nonotificationicon.svg";

const initialNotifications = [
  {
    id: 1,
    title: "CEO Wants an emergency update",
    description:
      "Currently you onboarding 2 providers/day, but CEO wants to upscale the onboarding rate to 6 provider/day",
    deletable: false,
  },
  {
    id: 2,
    title: "Headline1...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.",
    deletable: true,
  },
  {
    id: 3,
    title: "Headline2...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.",
    deletable: true,
  },
  {
    id: 4,
    title: "Headline3...",
    description:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.",
    deletable: true,
  },
];

export default function NotificationsSidebar({ open, onClose }) {
  const [visible, setVisible] = useState(open);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const deleteAll = () => {
    setNotifications([]);
  };

  if (!open && !visible) return null;

  return (
    <>
      <div className="fixed inset-0 z-[99]">
        <div className="absolute inset-0 bg-black/30" onClick={handleClose} />

        <div
          className={`absolute right-0 top-0 h-full max-w-[506px] w-[95%] bg-white shadow-xl flex flex-col transition-all duration-300 ease-in-out ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <X className="sm:w-5 w-4 sm:h-5 h-4 cursor-pointer" onClick={handleClose} />
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {notifications.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-4">
                {notifications.map((n) => (
                  <NotificationCard
                    key={n.id}
                    data={n}
                    onOpen={() => setActive(n)}
                    onDelete={(id) =>
                      setNotifications((prev) =>
                        prev.filter((x) => x.id !== id),
                      )
                    }
                  />
                ))}
              </div>
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-4 border-t">
              <button
                onClick={deleteAll}
                className="w-full border border-red-400 text-red-500 rounded-lg py-2 hover:bg-red-50"
              >
                Delete All Notifications
              </button>
            </div>
          )}
        </div>
      </div>

      {active && (
        <NotificationModal data={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}

function NotificationCard({ data, onOpen, onDelete }) {
  return (
    <div
      onClick={onOpen}
      className="bg-white rounded-xl p-4 shadow border cursor-pointer"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3
            className="font-medium break-all"
            style={{ wordWrap: "break-word" }}
          >
            {data.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-3">
            {data.description}
          </p>
        </div>

        {data.deletable && (
          <Trash2
            className="min-w-6 w-6 text-red-500 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(data.id);
            }}
          />
        )}
      </div>
    </div>
  );
}

function NotificationModal({ data, onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="bg-white max-w-[859px] w-[95%] lg:rounded-2xl rounded-lg shadow-xl relative lg:pb-5 pb-3">
        <div className="flex items-center justify-between pb-3 border-b border-[#0E1E38] lg:p-5 p-3">
          <h2 className="text-lg font-semibold">{data.title}</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        <p className="text-sm text-gray-600 lg:p-5 p-3 pb-0">{data.description}</p>

        {!data.deletable && (
          <div className="p-5 pt-2 pb-0">
            <textarea
              placeholder="Enter your reply..."
              className="w-full border rounded-xl p-3 h-32 outline-none"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100">
                <Paperclip size={16} /> Attach Document
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A] text-white" onClick={onClose}>
                <Send size={16} /> Send Reply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <img src={nonotificationicon} alt="" />
      <h3 className="font-semibold text-lg mt-12">No Notifications</h3>
      <p className="text-gray-400">Notification Inbox Empty</p>
    </div>
  );
}
