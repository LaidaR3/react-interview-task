import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobSiteList from "./Pages/JobSiteList";
import InventoryDashboard from "./Pages/InventoryDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobSiteList />} />
        <Route path="/inventory/:jobSiteId" element={<InventoryDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
