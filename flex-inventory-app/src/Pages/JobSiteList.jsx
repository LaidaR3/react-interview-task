import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobSiteStatusSummary from "../Components/JobSiteStatusSummary";
import CreateJobSiteModal from "../Components/CreateJobSiteModal";


const initialJobSites = [
    { id: 1, name: "1658 E 23rd St, Brooklyn, NY 11229, USA", status: "Completed" },
    { id: 2, name: "1705 E 22nd St, Brooklyn, NY 11229, USA", status: "On Hold" },
    { id: 3, name: "86-04 Shore Pkwy, Jamaica, NY 11414, USA", status: "In Progress" },
];

const JobSiteList = () => {
    const [jobSites, setJobSites] = useState(initialJobSites);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        category: "Sidewalk Shed",
        status: "In Progress",
    });

  const navigate = useNavigate();

  const counts = {
        onRoad: jobSites.filter(j => j.status === "In Progress").length,
        completed: jobSites.filter(j => j.status === "Completed").length,
        onHold: jobSites.filter(j => j.status === "On Hold").length,
  };

  const filteredSites = jobSites.filter(site =>
        site.name.toLowerCase().includes(search.toLowerCase())
  );

  const statusBadge = (status) => {
    const colors = {
        "Completed": "bg-green-500",
        "On Hold": "bg-red-500",
        "In Progress": "bg-yellow-400",
    };
    return (
        <span className={`text-white text-sm px-2 py-1 rounded ${colors[status]}`}>
            {status}
        </span>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Status of Jobsite */}
      <JobSiteStatusSummary counts={counts} />


      <div className="flex justify-between items-center mb-4">
        <input
            type="text"
            placeholder="Search a driver"
            className="w-1/2 px-3 py-2 border rounded shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-1"
        >
            Create <span className="text-xl">+</span>
        </button>

      </div>

      {/* Job Site Table */}
      <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-3 border-b font-semibold">Jobsite Name</th>
                        <th className="p-3 border-b font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody>
                {filteredSites.map(site => (
                    <tr
                      key={site.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => navigate(`/inventory/${site.id}`)}
                    >
                      <td className="p-3 border-b text-blue-700 underline">{site.name}</td>
                      <td className="p-3 border-b">{statusBadge(site.status)}</td>
                    </tr>
                ))}
                <CreateJobSiteModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSave={() => {
                      const newSite = {
                        id: jobSites.length + 1,
                        name: formData.name,
                        category: formData.category,
                        status: formData.status,
                      };
                      setJobSites([...jobSites, newSite]);
                      setFormData({ name: "", category: "Sidewalk Shed", status: "In Progress" });
                      setShowModal(false);
                    }}
                    formData={formData}
                    setFormData={setFormData}
                />

                </tbody>
            </table>
        </div>
    </div>
  );
};

export default JobSiteList;
