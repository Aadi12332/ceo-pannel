import { useState } from "react";
import { Power, ChevronDown, AlertTriangle } from "lucide-react";

const autoscalingData = [
  {
    name: "API-gateway",
    instances: "8 / 20",
    cpu: 65,
    target: 70,
  },
  {
    name: "Auth-service",
    instances: "8 / 20",
    cpu: 65,
    target: 70,
  },
  {
    name: "Payment-processor",
    instances: "8 / 20",
    cpu: 65,
    target: 70,
  },
];

const sloData = [
  {
    title: "API Availability",
    remaining: 86,
    consumed: 14,
    target: "99.95",
    current: "99.97",
    budget: "21.6",
  },
  {
    title: "P99 Latency",
    remaining: 72,
    consumed: 28,
    target: "200",
    current: "142",
    budget: "432",
  },
  {
    title: "Error Rate",
    remaining: 92,
    consumed: 8,
    target: "0.1",
    current: "0.02",
    budget: "4320",
  },
  {
    title: "Throughput",
    remaining: 100,
    consumed: 0,
    target: "10000",
    current: "12500",
    budget: "100",
  },
];

export default function AutoscalingAndBudget() {
  const [enabled, setEnabled] = useState({
    "API-gateway": true,
    "Auth-service": true,
    "Payment-processor": true,
  });

  const toggle = (key) => setEnabled((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-3">Autoscaling</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
        {autoscalingData.map((s) => (
          <div key={s.name} className="bg-white rounded-xl p-5 border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">{s.name}</h3>
              <button
                onClick={() => toggle(s.name)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  enabled[s.name] ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    enabled[s.name] ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="grid grid-cols-3 text-sm mb-4">
              <div>
                <p className="text-gray-400">Instances</p>
                <p className="font-medium">{s.instances}</p>
              </div>
              <div>
                <p className="text-gray-400">CPU Usage</p>
                <p className="font-medium">{s.cpu}%</p>
              </div>
              <div>
                <p className="text-gray-400">Target CPU</p>
                <p className="font-medium">{s.target}%</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-1">Instance Range: 3 - 20</p>
            <div className="relative h-2 bg-gray-200 rounded mb-4">
              <div
                className="absolute left-1 top-0 h-2 bg-blue-600 rounded"
                style={{ width: "45%" }}
              />
              <div
                className="absolute top-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white -translate-y-1/2"
                style={{ left: "44%" }}
              />
            </div>

            <p className="text-xs text-gray-400 mb-1">
              Target CPU: {s.target}%
            </p>
            <div className="relative h-2 bg-gray-200 rounded mb-4">
              <div
                className="absolute left-0 top-0 h-2 bg-blue-600 rounded"
                style={{ width: `${s.target}%` }}
              />
              <div
                className="absolute top-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white -translate-y-1/2"
                style={{ left: `${s.target - 1}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border mb-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Budget Utilisation</h3>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm">
            Today <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-500">Budget Utilisation</p>
          <p className="text-green-500">66% Used</p>
        </div>

        <div className="relative h-2 bg-gray-200 mb-3">
          <div className="absolute h-2 bg-green-500 w-[66%]" />
        </div>

        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>$0</span>
          <span className="text-green-600">$29,850 spent</span>
          <span className="text-yellow-700">$42,500 forecast</span>
          <span>$45,000</span>
        </div>

        <div className="flex items-start gap-3 bg-[#FFFBE6] border border-yellow-200 rounded-lg p-4">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-700">
              Monthly compute spending at 78% of budget
            </p>
            <p className="text-sm text-yellow-600">
              $28,500 / $35,000 about 1 year ago
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-3">Service Level Objectives</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sloData.map((item, i) => (
          <div
            key={i}
            className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <span className="px-3 py-1 rounded-lg text-sm bg-[#DCFCE7] text-[#008236]">
                {item.remaining}% remaining
              </span>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Error Budget Consumed</span>
              <span>{item.consumed}%</span>
            </div>

            <div className="relative h-2 bg-gray-200 mb-3">
              <div
                className="absolute left-0 top-0 h-2 bg-[#2E7D32]"
                style={{ width: `${item.consumed}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-400 mb-4">
              <span>0%</span>
              <span>50% (warning)</span>
              <span>80% (critical)</span>
              <span>100%</span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm pt-5 border-t mt-2">
              <div>
                <p className="text-gray-500">Target</p>
                <p className="font-semibold">{item.target}</p>
              </div>
              <div>
                <p className="text-gray-500">Current</p>
                <p className="font-semibold">{item.current}</p>
              </div>
              <div>
                <p className="text-gray-500">Budget (min)</p>
                <p className="font-semibold">{item.budget}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
