import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";
import Select from "../../../components/common/Select";
import ExperimentPerformance from "./ExperimentPerformance";

const ExperimentationDetails = () => {
  const navigate = useNavigate();
  const [type2, setType2] = useState("");

  return (
    <MainLayout>
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 text-gray-500" />
            <div>
              <h1 className="text-2xl font-semibold">Experiment Performance</h1>
              <p className="text-sm text-gray-500">
                DeBusiness KPIs only — use this view for executive
                decision-making.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-2xl font-semibold text-[#111827]">
                Simplify navigation labels
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Owner: Maya · Segment: New users (web)
              </p>
            </div>

            <span className="px-3 py-1 text-xs rounded-lg bg-[#DBEAFE] text-[#1D4ED8]">
              Running
            </span>
          </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="bg-white lg:rounded-xl rounded-lg lg:p-4 p-2 border border-[#0000001a]">
                    <p className="text-sm text-gray-500 mb-2">
                      Primary KPI: Conversion rate
                    </p>
                    <h3 className="text-2xl font-medium text-[#111827] mb-2">
                      +5.58% lift
                    </h3>
                    <p className="text-sm text-gray-500">
                      Latest variant vs baseline (recommendation: Scale)
                    </p>
                  </div>
          
                  <div className="bg-white lg:rounded-xl rounded-lg lg:p-4 p-2 border border-[#0000001a]">
                    <p className="text-sm text-gray-500 mb-2">
                      Traffic allocation
                    </p>
                    <h3 className="text-2xl font-medium text-[#111827] mb-2">
                      50%
                    </h3>
                    <p className="text-sm text-gray-500">
                      Start date: 01-27-2026
                    </p>
                  </div>
                </div>

          <ExperimentPerformance />
        </div>
      </div>
    </MainLayout>
  );
};

export default ExperimentationDetails;
