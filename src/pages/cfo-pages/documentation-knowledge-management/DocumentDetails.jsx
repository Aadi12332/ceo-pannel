import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Select from "../../../components/common/Select";

const DocumentDetails = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [type2, setType2] = useState("");
  const [openModal, setOpenModal] = useState(false);

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
              <h1 className="text-2xl font-semibold">Documentation Portal v1</h1>
              <p className="text-sm text-gray-500">
                Docs Platform • Owner: Product • Updated 2026-01-29
              </p>
            </div>
          </div>
        </div>

            <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
      <p className="text-sm text-[#6B7280]">
        Single place for launch-critical documentation, product specs, and training readiness.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-[#111827]">Overview</h2>
        <p className="text-[#374151] mt-4 leading-7">
          This spec defines the launch-ready documentation experience: a portal
          for product specs + a tracker for training materials.
          <br />
          The goal is fast discoverability, clear ownership, and a single source of truth.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#111827]">Requirements</h2>
        <ul className="mt-4 space-y-3 text-[#374151] leading-7 list-disc pl-5">
          <li>Portal view with search, status filters, and clear ownership</li>
          <li>Spec detail with structured sections, decision log, and risk list</li>
          <li>Training tracker with due dates and status</li>
          <li>Light-mode only UI, high contrast, keyboard-friendly navigation</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#111827]">Decisions</h2>
        <ul className="mt-4 space-y-3 text-[#374151] leading-7 list-disc pl-5">
          <li>Use simple status taxonomy (Draft / In Review / Approved)</li>
          <li>Keep data client-only for now; swap to Cloud tables later</li>
          <li>Route structure: /docs, /docs/:specId, /training</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-[#111827]">Risks</h2>
        <ul className="mt-4 space-y-3 text-[#374151] leading-7 list-disc pl-5">
          <li>Without enforcement, ownership can drift</li>
          <li>Too much content in one spec can reduce scanability</li>
          <li>Launch pressure may create incomplete training materials</li>
        </ul>
      </div>
    </div>
      </div>
    </MainLayout>
  );
};

export default DocumentDetails;
