import React, { useState } from "react";
import { useParams } from "react-router-dom";

const dummyInventory = {
  Electrical: [
    { id: 1, name: "Wire", quantity: 50, unit: "m" },
    { id: 2, name: "Bulb", quantity: 20, unit: "pcs" },
  ],
  Plumbing: [
    { id: 3, name: "Pipe", quantity: 30, unit: "m" },
    { id: 4, name: "Valve", quantity: 15, unit: "pcs" },
  ],
};

const InventoryDashboard = () => {
  const { jobSiteId } = useParams();
  const [inventory, setInventory] = useState(dummyInventory);
  const [editingItem, setEditingItem] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  const handleDoubleClick = (category, item) => {
    setEditingItem({ ...item, category });
    setEditedValues({ name: item.name, quantity: item.quantity, unit: item.unit });
  };

  const handleSave = () => {
    const updatedCategory = inventory[editingItem.category].map((item) =>
      item.id === editingItem.id ? { ...item, ...editedValues } : item
    );

    setInventory({
      ...inventory,
      [editingItem.category]: updatedCategory,
    });

    setEditingItem(null);
    setEditedValues({});
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inventory for Job Site #{jobSiteId}</h1>

      {Object.entries(inventory).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Unit</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  onDoubleClick={() => handleDoubleClick(category, item)}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.quantity}</td>
                  <td className="p-2 border">{item.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[350px] space-y-4">
            <h2 className="text-lg font-semibold">Edit Item</h2>

            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={editedValues.name}
              onChange={(e) => setEditedValues({ ...editedValues, name: e.target.value })}
            />
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              value={editedValues.quantity}
              onChange={(e) => setEditedValues({ ...editedValues, quantity: e.target.value })}
            />
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={editedValues.unit}
              onChange={(e) => setEditedValues({ ...editedValues, unit: e.target.value })}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryDashboard;
