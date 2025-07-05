import React, { useState } from "react"; 
import { FaCheck, FaTimes } from "react-icons/fa";

const CreateJobSiteModal = ({
    
    isOpen,
    onClose,
    onSave,
    formData,
    setFormData,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false); 
    const [editingItem, setEditingItem] = useState(null);
    const [editedValues, setEditedValues] = useState({});

    if (!isOpen) return null;


    const statuses = ["Completed", "On Hold", "In Progress"];
    const categories = ["Sidewalk Shed", "Scaffold", "Shoring"];
  

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-2">Title</h2>
            <p className="text-sm text-gray-500 mb-4">
                Informative piece of text that can be used regarding this modal.
            </p>
    
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
                type="text"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={formData.name}
                onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />


            <label className="block text-sm font-medium mb-1">Category Included</label>
            <select
                className="w-full mb-3 px-3 py-2 border rounded"
                value={formData.category}
                onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
            }
            >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
            </select>

            {/* Status Dropdown */}
            <label className="block text-sm font-medium mb-1">Status</label>
            <div className="relative">
            <button
              className={`w-full mb-4 px-3 py-2 border rounded text-left ${
                formData.status === "Completed"
                  ? "bg-green-100"
                  : formData.status === "On Hold"
                  ? "bg-red-100"
                  : "bg-yellow-100"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
            {formData.status}
            </button>

            {dropdownOpen && (
            <div className="absolute z-10 w-full bg-white border rounded shadow-md">
            {statuses.map((status) => (
              <div
                key={status}
                onClick={() => {
                  setFormData({ ...formData, status });
                  setDropdownOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:text-white ${
                  status === "Completed"
                    ? "hover:bg-green-500"
                    : status === "On Hold"
                    ? "hover:bg-red-500"
                    : "hover:bg-yellow-400"
                }`}
              >
                {status}
            </div>
            ))}
        </div>
        )}
        </div>


        {/* Buttons */}
        <div className="flex justify-end gap-2">
            <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Cancel Changes
                <FaTimes />
            </button>
            <button
                onClick={onSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Save Changes
                <FaCheck />
            </button>
        </div>

      </div>
    </div>
  );
};

export default CreateJobSiteModal;
