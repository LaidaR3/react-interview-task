import React from "react";

const CreateJobSiteModal = ({
  isOpen,
  onClose,
  onSave,
  formData,
  setFormData,
}) => {
  if (!isOpen) return null;

  const statuses = ["Completed", "On Hold", "In Progress"];
  const categories = ["Sidewalk Shed", "Scaffold", "Shoring"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-xl font-semibold mb-2">Title</h2>
        <p className="text-sm text-gray-500 mb-4">
            Informative piece of text that can be used regarding this modal.
        </p>

        {/* Name */}
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
            type="text"
            className="w-full mb-3 px-3 py-2 border rounded"
            value={formData.name}
            onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        {/* Category Dropdown */}
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
        <select
            className="w-full mb-4 px-3 py-2 border rounded"
            value={formData.status}
            onChange={(e) =>
            setFormData({ ...formData, status: e.target.value })
          }
        >
          {statuses.map((s) => (
                <option key={s}>{s}</option>
          ))}
        </select>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
            <button
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
            Cancel Changes
            </button>
            <button
                onClick={onSave}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobSiteModal;
