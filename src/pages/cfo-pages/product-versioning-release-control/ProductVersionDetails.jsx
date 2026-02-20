import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar } from "lucide-react";

const ProductVersionDetails = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-5 min-w-5 text-gray-500" />
            <div>
              <h1 className="text-2xl font-semibold">Version 2.4.0</h1>
              <p className="text-sm text-gray-500">Version detail view: linked features, compliance posture, and release readiness.</p>
            </div>
          </div>
        </div>

      
      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <h2 className="text-2xl font-semibold mb-4">Business Release Notes</h2>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs rounded bg-[#FEF3C7] text-[#B45309]">
            Draft
          </span>
          <span className="px-3 py-1 text-xs rounded bg-[#FEF3C7] text-[#B45309]">
            Medium
          </span>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={14} />
            <span>
              Updated on <span className="text-black">01-15-2025</span>
            </span>
          </div>
        </div>

        <div className="border border-[#00000033] bg-[#F9FAFB] rounded-lg lg:p-4 p-2 text-sm text-gray-700">
          Introduce subscription plan labels in-product and update enterprise contract copy for renewal alignment.
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <h2 className="text-2xl font-semibold mb-6">Linked Features</h2>

        <div className="flex justify-between items-start pb-5 border-b border-[#0000001a]">
          <div>
            <p className="font-semibold">Plan Labels</p>
            <p className="text-sm text-gray-500 mt-1">
              Owner: Product Ops
            </p>
          </div>
          <span className="text-sm font-bold text-[#0a0a0a]">
            feat-31
          </span>
        </div>

        <div className="flex justify-between items-start pt-5">
          <div>
            <p className="font-semibold">Contract Copy Sync</p>
            <p className="text-sm text-gray-500 mt-1">
              Owner: Legal
            </p>
          </div>
          <span className="text-sm font-bold text-[#0a0a0a]">
            feat-12
          </span>
        </div>
      </div>

      <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a]">
        <h2 className="text-2xl font-semibold mb-6">
          Compliance & Readiness
        </h2>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500 text-sm">Compliance status</p>
          <span className="px-3 py-1 text-xs rounded bg-[#DBEAFE] text-[#2563EB]">
            At Risk
          </span>
        </div>

        <div className="flex justify-between items-center text-sm mb-2">
          <p className="text-gray-700 font-medium">
            Release readiness
          </p>
          <span className="text-gray-600">70%</span>
        </div>

        <div className="w-full h-2 bg-gray-200">
          <div className="h-2 bg-blue-600" style={{ width: "70%" }} />
        </div>

        <p className="text-sm text-gray-500 mt-3">
          7/10 checks passed
        </p>
      </div>

      </div>
    </MainLayout>
  );
};

export default ProductVersionDetails;
