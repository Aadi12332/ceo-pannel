import { useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useRole } from "../../routes/RoleContext";
import logo from "../../assets/logo.svg";
import activeSidebarImg from "../../assets/sidebaricon/activesidebarimg.svg";
import logoutIcon from "../../assets/logouticon.svg";
import EditIcon from "../../assets/editicon.svg";
import {
  LayoutGrid,
  Network,
  Cpu,
  Plug,
  Server,
  Shield,
  Database,
  Brain,
  Bug,
  GitBranch,
  AlertTriangle,
  Package,
  ClipboardCheck,
  Boxes,
  Sliders,
  RefreshCcw,
  FlaskConical,
  ShieldCheck,
  BarChart3,
  Wallet,
  Scale,
  Gauge,
  FileText,
  Globe,
  Home,
  CheckSquare,
  ShieldAlert,
  DollarSign,
  Bot,
  Users,
  Lock,
  TrendingUp,
  GitPullRequestArrow
} from "lucide-react";

const menuItemsCEO = [
  {
    label: "Control Tower",
    path: "/control-tower",
    icon: <Home />,
  },
  {
    label: "Policies",
    path: "/policies",
    icon: <FileText />,
  },
  {
    label: "Approvals",
    path: "/approvals",
    icon: <CheckSquare />,
  },
  {
    label: "Audit",
    path: "/audits",
    icon: <Shield />,
  },
  {
    label: "Emergency Control",
    path: "/emergency",
    icon: <ShieldAlert />,
  },
  {
    label: "Financial",
    path: "/financial",
    icon: <DollarSign />,
  },
  {
    label: "Automation",
    path: "/automation",
    icon: <Bot />,
  },
  {
    label: "Directory Health",
    path: "/directory-health",
    icon: <Users />,
  },
  {
    label: "Access Control",
    path: "/access-control",
    icon: <Lock />,
  },
  {
    label: "Growth & Strategy",
    path: "/growth",
    icon: <TrendingUp />,
  },
  {
    label: "Global Tool Registry",
    path: "/global-tool-registry",
    icon: <Globe />,
  },
  {
    label: "Communication & Discussion",
    path: "/communication-discussion",
    icon: <GitPullRequestArrow />,
  },
];

const menuItemsCFO = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <LayoutGrid />,
  },
  {
    label: "Platform Architecture",
    path: "/platform-architecture",
    icon: <Network />,
  },
  {
    label: "Product Engineering",
    path: "/product-engineering",
    icon: <Cpu />,
  },
  {
    label: "API & Integrations",
    path: "/api-integrations",
    icon: <Plug />,
  },
  {
    label: "DevOps & Infrastructure",
    path: "/devops-infrastructure",
    icon: <Server />,
  },
  {
    label: "Security & Privacy",
    path: "/security-privacy",
    icon: <Shield />,
  },
  {
    label: "Data Engineering",
    path: "/data-engineering",
    icon: <Database />,
  },
  {
    label: "AI/ML Engineering",
    path: "/ai-ml-engineering",
    icon: <Brain />,
  },
  {
    label: "Engineering QA",
    path: "/engineering-qa",
    icon: <Bug />,
  },
  {
    label: "Release & Change Management",
    path: "/release-change-management",
    icon: <GitBranch />,
  },
  {
    label: "Technical Incident Response",
    path: "/incident-response",
    icon: <AlertTriangle />,
  },
  {
    label: "Product Registration",
    path: "/product-registration",
    icon: <Package />,
  },
  {
    label: "Product Versioning & Release Control",
    path: "/product-versioning",
    icon: <ClipboardCheck />,
  },
  {
    label: "Product Capability & Dependency Control",
    path: "/product-capability",
    icon: <Boxes />,
  },
  {
    label: "Change Impact & Risk Control",
    path: "/change-impact-risk",
    icon: <Sliders />,
  },
  {
    label: "Product Lifecycle Management",
    path: "/product-lifecycle",
    icon: <RefreshCcw />,
  },
  {
    label: "Experimentation & Feature Governance",
    path: "/experimentation-governance",
    icon: <FlaskConical />,
  },
  {
    label: "Product Security & Privacy Governance",
    path: "/product-security-privacy",
    icon: <ShieldCheck />,
  },
  {
    label: "Product Data & Analytics Governance",
    path: "/product-data-analytics",
    icon: <BarChart3 />,
  },
  {
    label: "Monetization & Revenue Logic",
    path: "/monetization-revenue",
    icon: <Wallet />,
  },
  {
    label: "Compliance & Legal Readiness",
    path: "/compliance-legal",
    icon: <Scale />,
  },
  {
    label: "Product Operational Readiness",
    path: "/product-operational-readiness",
    icon: <Gauge />,
  },
  {
    label: "Documentation & Knowledge Management",
    path: "/documentation-knowledge",
    icon: <FileText />,
  },
  {
    label: "Product-Level Global",
    path: "/product-global",
    icon: <Globe />,
  },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
const activeRef = useRef(null);
  const { role } = useRole();
  const visibleItems = role === "CEO" ? menuItemsCEO : menuItemsCFO;

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
useEffect(() => {
  activeRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}, [location.pathname]);


  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
      <div
        className={`fixed lg:static z-50 top-0 left-0 h-full bg-[#0E1E38] text-white bg-gradient-to-b from-[#fff] to-[#E8F1FF] rounded-r-[30px] lg:rounded-r-[0px]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <aside
          className="w-[320px] h-screen overflow-hidden scroll-hide bg-[#0E1E38]
          text-white pl-6 py-4 rounded-r-[30px] flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col items-center pb-3">
              <div className="relative">
                <img src={logo} alt="Logo" className="mb-3" />
                <img
                  src={EditIcon}
                  alt="Logo"
                  className="absolute top-1/2 -right-12 cursor-pointer transform -translate-y-1/2 bg-white rounded-full p-2"
                />
              </div>
              <p
                title="CEO Governance & Control Tower"
                className="sm:text-[24px] text-[20px] font-semibold text-white mt-1 px-6 line-clamp-1"
              >
                CEO Governance & Control Tower
              </p>
            </div>

            <nav className="h-[calc(100vh-244px)] overflow-auto scroll-hide">
              {visibleItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    ref={isActive ? activeRef : null}
                    className={({ isActive }) =>
                      `relative flex items-center gap-3 px-6 py-4 transition  font-semibold
                      ${
                        isActive
                          ? "text-[#0E1E38] -my-7 h-[136px] first:mt-0"
                          : "text-white first:pt-10"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <img
                            src={activeSidebarImg}
                            alt=""
                            className="absolute left-0 right-0 top-0 bottom-0 z-0 h-[136px]"
                          />
                        )}
  
                        <div className="flex items-center gap-5 z-10">
                          <span
                            className={`w-5 h-5 ${isActive ? "text-[#0E1E38]" : "text-white"}`}
                          >
                            {item.icon}
                          </span>
                          <span
                            title={item.label}
                            className={`text-[16px] relative max-w-[200px] font-semibold line-clamp-2 ${isActive ? "text-[#0E1E38]" : "text-white"}`}
                          >
                            {item.label}
                          </span>
                        </div>
                      </>
                    )}
                  </NavLink>
                )
              }
              
              )}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="relative overflow-hidden group flex items-center gap-3
              w-full max-w-[280px] rounded-full self-start p-2
              transition-all duration-300 group"
          >
            <span
              className="absolute inset-0 bg-red-500
                -translate-x-full group-hover:translate-x-0
                transition-transform duration-300 ease-out"
            />

            <img src={logoutIcon} alt="Logout" className="relative z-10" />
            <span className="relative z-10 text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
