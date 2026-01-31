import { Heart, Bookmark, Send, Play, ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1520975867597-0f8a1caa6c7a",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

export default function ContentGrid({contentType}) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-6">
        {posts.map((item) => (
          <div key={item.id} className="relative h-[230px] rounded-2xl overflow-hidden">
            <img src={item.image} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute top-4 left-4 space-y-2 text-white text-sm">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-white" />
                <span>19.6k</span>
              </div>
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 fill-white" />
                <span>16.6k</span>
              </div>
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 fill-white" />
                <span>6.6k</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white/80 text-xs px-3 py-1 rounded-full">
              4 Hours ago
            </div>

            {contentType === "video" && (
              <div className="flex items-center gap-2 absolute bottom-4 left-4 right-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Play className="w-5 h-5 text-black ml-1" />
                </div>
                <div className=" text-white">
                  <p className="text-base font-semibold leading-snug">
                    Gorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.
                  </p>
                  <p className="text-xs opacity-80 mt-1">London, united States</p>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2 text-sm text-[#667085]">
        <span>1–10 of 1,247</span>
        <button className="w-9 h-9 rounded-lg border flex items-center justify-center">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-[#0E1E38] text-white">
          1
        </button>
        <button className="w-9 h-9 rounded-lg border">2</button>
        <button className="w-9 h-9 rounded-lg border">3</button>
        <button className="w-9 h-9 rounded-lg border flex items-center justify-center">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
