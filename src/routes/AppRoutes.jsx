import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import Audits from "../pages/dashboard/Audits";
import Policies from "../pages/dashboard/Policies";
import Communication from "../pages/dashboard/Communication";
import Approvals from "../pages/dashboard/Approvals";
import ChangePassword from "../pages/auth/ChangePassword";
import GlobalToolRegistry from "../pages/dashboard/Global";
import Growth from "../pages/dashboard/Growth";
import AccessControl from "../pages/dashboard/AccessControl";
import DirectoryHealth from "../pages/dashboard/DirectoryHealth";
import Automation from "../pages/dashboard/Automation";
import Financial from "../pages/dashboard/Financial";
import Emergency from "../pages/dashboard/Emergency";
import SendMassEmail from "../components/dashboard-component/SendMassEmail";
import Merchants from "../components/global-component/Merchants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send-mass-email" element={<SendMassEmail />} />
      <Route path="/merchants" element={<Merchants />} />
      <Route path="/approvals" element={<Approvals />} />
      <Route path="/audits" element={<Audits />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/communication-discussion" element={<Communication />} />
      <Route path="/global-tool-registry" element={<GlobalToolRegistry />} />
      <Route path="/growth" element={<Growth />} />
      <Route path="/access-control" element={<AccessControl />} />
      <Route path="/directory-health" element={<DirectoryHealth />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/emergency" element={<Emergency />} />
    </Routes>
  );
};

export default AppRoutes;
