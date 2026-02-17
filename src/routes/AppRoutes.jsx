import { Routes, Route } from "react-router-dom";
import { RoleProvider } from "./RoleContext";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ControlTower from "../pages/dashboard/ControlTower";
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
import Users from "../components/global-component/Users";
import AddNewMerchants from "../components/global-component/AddNewMerchants";
import AddNewUser from "../components/global-component/AddNewUser";
import OederDetailPage from "../components/global-component/OederDetailPage";
import AddNewEmployee from "../components/access-control-component/AddNewEmployee";
import Dashboard from "../pages/cfo-pages/dashboard/Dashboard";
import PlatformArchitecture from "../pages/cfo-pages/platform-architecture/PlatformArchitecture";
import ProductEngineering from "../pages/cfo-pages/product-engineering/ProductEngineering";
import ApiIntegrations from "../pages/cfo-pages/api-integrations/ApiIntegrations";
import DevOpsInfrastructure from "../pages/cfo-pages/devops-infrastructure/DevOpsInfrastructure";
import ViewActionQuene from "../pages/cfo-pages/dashboard/ViewActionQuene";
import ViewRecentChange from "../pages/cfo-pages/dashboard/ViewRecentChange";
import ViewRiskRegister from "../pages/cfo-pages/platform-architecture/ViewRiskRegister";
import ViewCapacity from "../pages/cfo-pages/platform-architecture/ViewCapacity";
import ViewHealth from "../pages/cfo-pages/api-integrations/ViewHealth";
import ViewDeployment from "../pages/cfo-pages/devops-infrastructure/ViewDeployment";
import SecurityPrivacy from "../pages/cfo-pages/security-privacy/SecurityPrivacy";
import ViewAccessReview from "../pages/cfo-pages/security-privacy/ViewAccessReview";
import DataEngineering from "../pages/cfo-pages/data-engineering/DataEngineering";
import AiMlEngineering from "../pages/cfo-pages/ai-ml-engineering/AiMlEngineering";
import EngineeringQa from "../pages/cfo-pages/engineering-qa/EngineeringQa";
import ReleaseChangeManagement from "../pages/cfo-pages/release-change-management/ReleaseChangeManagement";
import TechnicalIncidentResponse from "../pages/cfo-pages/technical-incident-response/TechnicalIncidentResponse";
import IncidentDetails from "../pages/cfo-pages/technical-incident-response/IncidentDetails";
import ProductRegistry from "../pages/cfo-pages/product-registry/ProductRegistry";
import ProductDetails from "../pages/cfo-pages/product-registry/ProductDetails";
import ProductVersioningReleaseControl from "../pages/cfo-pages/product-versioning-release-control/ProductVersioningReleaseControl";
import ProductVersionDetails from "../pages/cfo-pages/product-versioning-release-control/ProductVersionDetails";
import CreateVersion from "../pages/cfo-pages/product-versioning-release-control/CreateVersion";
import ProductCapabilityDependencyControl from "../pages/cfo-pages/product-capability-dependency-control/ProductVersioningReleaseControl";
import ChangeImpactRiskControl from "../pages/cfo-pages/change-impact-risk-control/ChangeImpactRiskControl";
import ChangeImpactDetails from "../pages/cfo-pages/change-impact-risk-control/ChangeImpactDetails";
import ScoreRiskDetails from "../pages/cfo-pages/change-impact-risk-control/ScoreRiskDetails";
import ProductLifecycleManagement from "../pages/cfo-pages/product-lifecycle-management/ProductLifecycleManagement";
import ProductLifecycleDetails from "../pages/cfo-pages/product-lifecycle-management/product-lifecycle-details";
import ExperimentationFeatureGovernance from "../pages/cfo-pages/experimentation-feature-governance/ExperimentationFeatureGovernance";
import ExperimentationDetails from "../pages/cfo-pages/experimentation-feature-governance/ExperimentationDetails";
import DecisionDetails from "../pages/cfo-pages/experimentation-feature-governance/DecisionDetails";
import CreateExperimentation from "../pages/cfo-pages/experimentation-feature-governance/CreateExperimentation";
import ProductSecurityPrivacyGovernance from "../pages/cfo-pages/product-security-privacy-governance/ProductSecurityPrivacyGovernance";
import SensitiveFeatureView from "../pages/cfo-pages/product-security-privacy-governance/SensitiveFeatureView";
import PIIExposureView from "../pages/cfo-pages/product-security-privacy-governance/PIIExposureView";
import SecurityRiskView from "../pages/cfo-pages/product-security-privacy-governance/SecurityRiskView";
import EditPiiField from "../pages/cfo-pages/product-security-privacy-governance/EditPiiField";
import ProductDataAnalyticsGovernance from "../pages/cfo-pages/product-data-analytics-governance/ProductDataAnalyticsGovernance";
import AddKPI from "../pages/cfo-pages/product-data-analytics-governance/AddKPI";
import MonetizationRevenueLogic from "../pages/cfo-pages/monetization-revenue-logic/MonetizationRevenueLogic";
import AddMonetizationRule from "../pages/cfo-pages/monetization-revenue-logic/AddMonetizationRule";
import ComplianceLegalReadiness from "../pages/cfo-pages/compliance-legal-readiness/ComplianceLegalReadiness";
import RequestLaunchClearance from "../pages/cfo-pages/compliance-legal-readiness/RequestLaunchClearance";
import RegulatoryCompliance from "../pages/cfo-pages/compliance-legal-readiness/RegulatoryCompliance";
import ProductOperationalReadiness from "../pages/cfo-pages/product-operational-readiness/ProductOperationalReadiness";
import DocumentationKnowledgeManagement from "../pages/cfo-pages/documentation-knowledge-management/DocumentationKnowledgeManagement";
import DocumentDetails from "../pages/cfo-pages/documentation-knowledge-management/DocumentDetails";
import ProductLevelGlobal from "../pages/cfo-pages/product-level-global/ProductLevelGlobal";
import TrainingTracker from "../pages/cfo-pages/documentation-knowledge-management/TrainingTracker";

const AppRoutes = () => {
  return (
    <RoleProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/control-tower" element={<ControlTower />} />
        <Route path="/send-mass-email" element={<SendMassEmail />} />
        <Route path="/merchants" element={<Merchants />} />
        <Route path="/add-new-merchant" element={<AddNewMerchants />} />
        <Route path="/add-new-employee" element={<AddNewEmployee />} />
        <Route path="/add-new-user" element={<AddNewUser />} />
        <Route path="/order-detail" element={<OederDetailPage />} />
        <Route path="/users" element={<Users />} />
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

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-action-quene" element={<ViewActionQuene />} />
        <Route path="/view-recent-change" element={<ViewRecentChange />} />
        <Route path="/view-risk-register" element={<ViewRiskRegister />} />
        <Route path="/view-capacity" element={<ViewCapacity />} />
        <Route path="/view-health" element={<ViewHealth />} />
        <Route path="/view-development" element={<ViewDeployment />} />
        <Route path="/view-access-review" element={<ViewAccessReview />} />
        <Route path="/platform-architecture" element={<PlatformArchitecture />} />
        <Route path="/product-engineering" element={<ProductEngineering />} />
        <Route path="/api-integrations" element={<ApiIntegrations />} />
        <Route path="/devops-infrastructure" element={<DevOpsInfrastructure />} />
        <Route path="/security-privacy" element={<SecurityPrivacy />} />
        <Route path="/data-engineering" element={<DataEngineering />} />
        <Route path="/ai-ml-engineering" element={<AiMlEngineering />} />
        <Route path="/engineering-qa" element={<EngineeringQa />} />
        <Route path="/release-change-management" element={<ReleaseChangeManagement />} />
        <Route path="/technical-incident-response" element={<TechnicalIncidentResponse />} />
        <Route path="/incident-details" element={<IncidentDetails />} />
        <Route path="/product-registration" element={<ProductRegistry />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-versioning-release-control" element={<ProductVersioningReleaseControl />} />
        <Route path="/product-version-details" element={<ProductVersionDetails />} />
        <Route path="/create-version" element={<CreateVersion />} />
        <Route path="/product-capability-dependency-control" element={<ProductCapabilityDependencyControl />} />
        <Route path="/change-impact-risk-control" element={<ChangeImpactRiskControl />} />
        <Route path="/change-impact-details" element={<ChangeImpactDetails />} />
        <Route path="/score-risk-details" element={<ScoreRiskDetails />} />
        <Route path="/product-lifecycle-management" element={<ProductLifecycleManagement />} />
        <Route path="/product-lifecycle-details" element={<ProductLifecycleDetails />} />
        <Route path="/experimentation-feature-governance" element={<ExperimentationFeatureGovernance />} />
        <Route path="/experimentation-details" element={<ExperimentationDetails />} />
        <Route path="/create-experimentation" element={<CreateExperimentation />} />
        <Route path="/decision-details" element={<DecisionDetails />} />
        <Route path="/product-security-privacy-governance" element={<ProductSecurityPrivacyGovernance />} />
        <Route path="/sensitive-feature-view" element={<SensitiveFeatureView />} />
        <Route path="/pii-exposure-view" element={<PIIExposureView />} />
        <Route path="/pii-exposure-edit" element={<EditPiiField />} />
        <Route path="/security-risk-view" element={<SecurityRiskView />} />
        <Route path="/product-data-analytics-governance" element={<ProductDataAnalyticsGovernance />}/>
        <Route path="/add-kpi" element={<AddKPI />}/>
        <Route path="/monetization-revenue-logic" element={<MonetizationRevenueLogic />} />
        <Route path="/add-monetization-rule" element={<AddMonetizationRule />} />
        <Route path="/compliance-legal-readiness" element={<ComplianceLegalReadiness />} />
        <Route path="/request-launch-clearance" element={<RequestLaunchClearance />} />
        <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} />
        <Route path="/product-operational-readiness" element={<ProductOperationalReadiness />} />
        <Route path="/documentation-knowledge-management" element={<DocumentationKnowledgeManagement />} />
        <Route path="/documentation-details" element={<DocumentDetails />} />
        <Route path="/training-tracker" element={<TrainingTracker />} />
        <Route path="/product-level-global" element={<ProductLevelGlobal />} />


      </Routes>
    </RoleProvider>
  );
};

export default AppRoutes;
