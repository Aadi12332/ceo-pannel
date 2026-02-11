import { useState } from "react";
import { Calendar } from "lucide-react";

const PostmortemBuilder = () => {
  const [items, setItems] = useState([
    { desc: "", due: "", owner: "", done: false },
    { desc: "", due: "", owner: "", done: false },
    { desc: "", due: "", owner: "", done: false },
  ]);

  const [checklist, setChecklist] = useState({
    mitigation: true,
    ownerAssigned: false,
  });

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { desc: "", due: "", owner: "", done: false }]);
  };

  return (
    <div className="bg-white lg:rounded-xl rounded-lg lg:p-6 p-3 border border-[#0000001a] space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Postmortem builder</h2>
        <p className="text-gray-500">
          Mandatory for Sev1. Prevention tasks required before close.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <p className="mb-2 font-medium">Summary</p>
          <textarea className="w-full border rounded-lg p-3 h-28 outline-none" />
        </div>
        <div>
          <p className="mb-2 font-medium">Customer Impact</p>
          <textarea className="w-full border rounded-lg p-3 h-28 outline-none" />
        </div>
        <div>
          <p className="mb-2 font-medium">Root Cause</p>
          <textarea className="w-full border rounded-lg p-3 h-28 outline-none" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Action items</h3>
            <p className="text-sm text-gray-500">
              Linked tasks for prevention and follow-up.
            </p>
          </div>
          <button
            onClick={addItem}
            className="px-4 py-2 border rounded-lg"
          >
            Add Item
          </button>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-t border-[#0000001a] pt-4">
              <div className="flex gap-4 items-start">
                <div className="flex-1">
                  <p className="text-sm mb-1">Action Items Description</p>
                  <input
                    type="text"
                    value={item.desc}
                    onChange={(e) =>
                      handleItemChange(index, "desc", e.target.value)
                    }
                    className="w-full border rounded-lg p-2 outline-none text-sm"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-sm mb-1">Due Date</p>
                  <div className="relative">
                    <input
                      type="date"
                      value={item.due}
                      onChange={(e) =>
                        handleItemChange(index, "due", e.target.value)
                      }
                      className="w-full border rounded-lg p-2 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-sm mb-1">Owner</p>
                  <input
                    type="text"
                    value={item.owner}
                    onChange={(e) =>
                      handleItemChange(index, "owner", e.target.value)
                    }
                    className="w-full border rounded-lg p-2 outline-none text-sm"
                  />
                </div>

                <div className="text-center">
                    <p className="text-sm mb-1">Done</p>
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={(e) =>
                      handleItemChange(index, "done", e.target.checked)
                    }
                    className="w-5 h-5 mt-2 accent-black"
                  />
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Prevention checklist</h3>
        <p className="text-sm text-gray-500 mb-4">
          Required items gate the incident close action.
        </p>

        <div className="space-y-4 border-t border-[#0000001a] pt-4">
          <div className="flex items-start gap-3 border-b border-[#0000001a] pb-4">
            <input
              type="checkbox"
              checked={checklist.mitigation}
              onChange={(e) =>
                setChecklist({ ...checklist, mitigation: e.target.checked })
              }
              className="w-5 h-5 mt-1 accent-black"
            />
            <div>
              <p className="font-medium">
                Mitigation steps documented *
              </p>
              <p className="text-sm text-gray-500">
                Prevention enforcement policy
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border-b border-[#0000001a] pb-4">
            <input
              type="checkbox"
              checked={checklist.ownerAssigned}
              onChange={(e) =>
                setChecklist({
                  ...checklist,
                  ownerAssigned: e.target.checked,
                })
              }
              className="w-5 h-5 mt-1 accent-black"
            />
            <div>
              <p className="font-medium">
                Owner assigned for fix *
              </p>
              <p className="text-sm text-gray-500">
                Prevention enforcement policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostmortemBuilder;
