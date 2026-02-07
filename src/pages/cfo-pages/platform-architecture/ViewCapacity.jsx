import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import SearchInput from "../common/SearchInput";

const cpuBg = (cpu) => {
  const value = parseInt(cpu);
  if (value > 80) return "bg-[#FFDDDB] text-[#CF2027]";
  if (value > 50) return "bg-[#FFEDD4] text-[#F54900]";
  return "bg-[#DCFCE7] text-[#008236]";
};

const percentBg = (val) =>
  val >= 70 ? "bg-[#DCFCE7] text-[#008236]" : "bg-[#FFDDDB] text-[#F54900]";

const errorBg = (error) => {
  const value = parseFloat(error);
  return value <= 0.1
    ? "bg-[#DCFCE7] text-[#008236]"
    : "bg-[#FFDDDB] text-[#F54900]";
};

const kpiData = [
  {
    service: "Identity",
    traffic: "12.5K/s",
    cpu: "72%",
    memory: "62%",
    latency: "12ms",
    error: "0.01%",
  },
  {
    service: "Orders",
    traffic: "8.2K/s",
    cpu: "38%",
    memory: "78%",
    latency: "45ms",
    error: "0.03%",
  },
  {
    service: "Payments",
    traffic: "3.1K/s",
    cpu: "88%",
    memory: "55%",
    latency: "89ms",
    error: "0.01%",
  },
  {
    service: "Ads",
    traffic: "45.8K/s",
    cpu: "45%",
    memory: "82%",
    latency: "156ms",
    error: "0.12%",
  },
  {
    service: "Identity",
    traffic: "12.5K/s",
    cpu: "72%",
    memory: "62%",
    latency: "12ms",
    error: "0.01%",
  },
  {
    service: "Identity",
    traffic: "12.5K/s",
    cpu: "72%",
    memory: "62%",
    latency: "12ms",
    error: "0.01%",
  },
  {
    service: "Identity",
    traffic: "12.5K/s",
    cpu: "72%",
    memory: "62%",
    latency: "12ms",
    error: "0.01%",
  },
  {
    service: "Identity",
    traffic: "12.5K/s",
    cpu: "72%",
    memory: "62%",
    latency: "12ms",
    error: "0.01%",
  },
  {
    service: "Orders",
    traffic: "8.2K/s",
    cpu: "38%",
    memory: "78%",
    latency: "45ms",
    error: "0.03%",
  },
  {
    service: "Payments",
    traffic: "3.1K/s",
    cpu: "88%",
    memory: "55%",
    latency: "89ms",
    error: "0.01%",
  },
  {
    service: "Ads",
    traffic: "45.8K/s",
    cpu: "45%",
    memory: "82%",
    latency: "156ms",
    error: "0.12%",
  },
  {
    service: "Identity",
    traffic: "12.5K/s",
    cpu: "72%",
    memory: "62%",
    latency: "12ms",
    error: "0.01%",
  },
  {
    service: "Orders",
    traffic: "8.2K/s",
    cpu: "38%",
    memory: "78%",
    latency: "45ms",
    error: "0.03%",
  },
  {
    service: "Payments",
    traffic: "3.1K/s",
    cpu: "88%",
    memory: "55%",
    latency: "89ms",
    error: "0.01%",
  },
  {
    service: "Ads",
    traffic: "45.8K/s",
    cpu: "45%",
    memory: "82%",
    latency: "156ms",
    error: "0.12%",
  },
];

const ViewCapacity = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <MainLayout>
      <div>
        <h2
          onClick={() => navigate("/platform-architecture")}
          className="text-[28px] font-bold text-[#0A0A0A] mb-5 flex items-center gap-2 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
          Capacity & Scaling KPIs
        </h2>
      </div>
      <div className="bg-white lg:rounded-xl lg:p-6 rounded-lg p-3 flex flex-col">
        <SearchInput
          value={search}
          onChange={setSearch}
          className="!mb-5 !max-w-[320px]"
          placeholder="Search"
        />
        <div className="overflow-auto scroll-hide max-h-[calc(100vh-270px)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-3">Service</th>
                <th>Traffic</th>
                <th>CPU</th>
                <th>Memory</th>
                <th>p95 Latency</th>
                <th>Error Rate</th>
              </tr>
            </thead>
            <tbody>
              {kpiData.map((row, i) => (
                <tr key={i} className="border-b last:border-b-0">
                  <td className="py-4">{row.service}</td>
                  <td>{row.traffic}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-sm ${cpuBg(row.cpu)}`}
                    >
                      {row.cpu}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-sm ${percentBg(
                        parseInt(row.memory),
                      )}`}
                    >
                      {row.memory}
                    </span>
                  </td>
                  <td>{row.latency}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-sm ${errorBg(row.error)}`}
                    >
                      {row.error}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default ViewCapacity;
