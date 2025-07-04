const JobSiteStatusSummary = ({ counts }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-yellow-400 text-white font-semibold text-center py-4 rounded">
        {counts.onRoad} On Road
      </div>
      <div className="bg-green-500 text-white font-semibold text-center py-4 rounded">
        {counts.completed} Completed
      </div>
      <div className="bg-red-500 text-white font-semibold text-center py-4 rounded">
        {counts.onHold} On Hold
      </div>
    </div>
  );
};

export default JobSiteStatusSummary;
