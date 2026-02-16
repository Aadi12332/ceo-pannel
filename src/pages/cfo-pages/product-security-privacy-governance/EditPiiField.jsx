import { useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react";
import Select from "../../../components/common/Select";

const EditPiiField = () => {
  const navigate = useNavigate();
  const [dataType, setDataType] = useState("String");
  const [sensitivity, setSensitivity] = useState("High");
  const [encryption, setEncryption] = useState(true);
  const [anonymisation, setAnonymisation] = useState(true);

  const [purposes, setPurposes] = useState({
    Marketing: true,
    Analytics: true,
    Personalisation: true,
    Compliance: false,
    Billing: false,
    Support: false,
  });

  const togglePurpose = (key) => {
    setPurposes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
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
              <h1 className="text-2xl font-semibold">Edit PII Field: email</h1>
              <p className="text-sm text-gray-500">
                Configure allowed purposes, retention, and protection settings
              </p>
            </div>
          </div>
        </div>

    <div className="bg-white lg:rounded-2xl rounded-lg lg:p-6 p-4 border border-[#0000001a]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Field Name */}
        <div>
          <label className="block text-sm text-[#111827] mb-2">
            Field Name
          </label>
          <input
            type="text"
            defaultValue="email"
            className="w-full h-11 px-4 rounded-xl border border-[#0000001a] outline-none text-sm"
          />
        </div>

        {/* Data Type */}
        <div>
          <label className="block text-sm text-[#111827] mb-2">
            Data Type
          </label>
          <Select
            value={dataType}
            onChange={(value) => setDataType(value)}
            options={[
              { value: "String", label: "String" },
              { value: "Number", label: "Number" },
              { value: "Boolean", label: "Boolean" },
            ]}
            inputClassName="!h-11 !rounded-xl !px-3 !text-sm !bg-white !border !border-[#0000001a]"
            listItemClassName="!px-3 !text-sm"
            listParentClassName="!min-h-max"
          />
        </div>

        {/* Sensitivity */}
        <div>
          <label className="block text-sm text-[#111827] mb-2">
            Sensitivity Level
          </label>
          <Select
            value={sensitivity}
            onChange={(value) => setSensitivity(value)}
            options={[
              { value: "Low", label: "Low" },
              { value: "Medium", label: "Medium" },
              { value: "High", label: "High" },
            ]}
            inputClassName="!h-11 !rounded-xl !px-3 !text-sm !bg-white !border !border-[#0000001a]"
            listItemClassName="!px-3 !text-sm"
            listParentClassName="!min-h-max"
          />
        </div>

        {/* Retention */}
        <div>
          <label className="block text-sm text-[#111827] mb-2">
            Retention Period (days)
          </label>
          <input
            type="number"
            defaultValue={365}
            className="w-full h-11 px-4 rounded-xl border border-[#0000001a] outline-none text-sm"
          />
        </div>
      </div>

      {/* Allowed Purposes */}
      <div className="mt-8">
        <p className="text-sm font-medium mb-4">Allowed Purposes</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
          {Object.keys(purposes).map((key) => (
            <label
              key={key}
              className="flex items-center gap-3 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={purposes[key]}
                onChange={() => togglePurpose(key)}
                className="w-5 h-5 rounded accent-[#0E1E38]"
              />
              {key}
            </label>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="mt-10 space-y-6">

        {/* Encryption */}
        <div className="flex items-center justify-between border-t border-[#0000001a] pt-6">
          <div>
            <p className="font-medium">Encryption at Rest</p>
            <p className="text-sm text-gray-500">
              Encrypt this field when stored in database
            </p>
          </div>

          <button
            onClick={() => setEncryption(!encryption)}
            className={`relative w-12 h-6 rounded-full transition ${
              encryption ? "bg-[#3B5CCC]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                encryption ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Anonymisation */}
        <div className="flex items-center justify-between border-t border-[#0000001a] pt-6">
          <div>
            <p className="font-medium">Anonymisation</p>
            <p className="text-sm text-gray-500">
              Apply anonymisation for analytics use
            </p>
          </div>

          <button
            onClick={() => setAnonymisation(!anonymisation)}
            className={`relative w-12 h-6 rounded-full transition ${
              anonymisation ? "bg-[#3B5CCC]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                anonymisation ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-10 border-t border-[#0000001a] pt-6">
        <button className="h-11 px-8 rounded-xl bg-[#0E1E38] text-white text-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
      </div>
    </MainLayout>
  );
};

export default EditPiiField;
