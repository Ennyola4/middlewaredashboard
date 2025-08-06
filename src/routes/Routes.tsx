import type { RouteProps } from "../interfaces/Global";
// import  Home  from "../pages/Dashboard/Home";
import BusinessBanking from "../pages/Dashboard/Product/BusinessBanking";
import Ecam from "../pages/Dashboard/Product/Ecam";
import PosSystem from "../pages/Dashboard/Product/PosSystem";
import GoldBucks from "../pages/Dashboard/Product/GoldBucks";
import MobileBanking from "../pages/Dashboard/Product/MobileBanking";
import HighRiskTransaction from "../pages/Dashboard/Transaction/HighRiskTransaction";
import LiveTransaction from "../pages/Dashboard/Transaction/LiveTransaction";
import RiskUsers from "../pages/Dashboard/RiskManagement/RiskUsers";
import RiskTransaction from "../pages/Dashboard/RiskManagement/RiskTransaction";
import FraudAlert from "../pages/Dashboard/RiskManagement/FraudAlert";
import RecurringExceptions from "../pages/Dashboard/RiskManagement/RecurringExceptions";
import RecommendationBoard from "../pages/Dashboard/RiskManagement/RecommendationBoard";
import UnusualUserActivity from "../pages/Dashboard/RiskManagement/UnusualUserActivity";
import UnusualUserOnboarding from "../pages/Dashboard/RiskManagement/UnusualUserOnboarding";
import CustomerManagement from "../pages/Dashboard/Management/CustomerManagement";
import TransactionReport from "../pages/Dashboard/Management/TransactionReport";
import ThirdPartyIntegrations from "../pages/Dashboard/Management/ThirdPartyIntegrations";
import SystemHealth from "../pages/Dashboard/Monitoring/SystemHealth";
import SecurityOverview from "../pages/Dashboard/Monitoring/SecurityOverview";



// Define the routes for the dashboard

export const dashboardRoutes: RouteProps[] = [
  // {
  //   path: "/",
  //   name: "Overview",
  //   element: <Home/>,
  // },
  {
    path: "/business-banking",
    name: "Business Banking",
    element: <BusinessBanking />,
  },
  {
    path: "/mobile-banking",
    name: "Mobile Banking",
    element: <MobileBanking />,
  },
  {
    path: "/gold-bucks",
    name: "Gold Bucks",
    element: <GoldBucks />,
  },
  {
    path: "/e-cam",
    name: "E-cam",
    element: <Ecam />,
  },
  {
    path: "/pos",
    name: "POS system",
    element: <PosSystem />,
  },
  {
    path: "/live-transaction",
    name: "Live Transaction",
    element: <LiveTransaction />,
  },
  {
    path: "/high-risk-transaction",
    name: "High Risk Transaction",
    element: <HighRiskTransaction />,
  },
  {
    path: "/risk-users",
    name: "Risk Users",
    element: <RiskUsers />,
  },
  {
    path: "/risk-transaction",
    name: "Risk Transaction",
    element: <RiskTransaction />,
  },
  {
    path: "/fraud-alert",
    name: "Fraud Alert",
    element: <FraudAlert />,
  },
  {
    path: "/recurring-exceptions",
    name: "Recurring Exceptions",
    element: <RecurringExceptions />,
  },
  {
    path: "/recommendation-board",
    name: "Recommendation Board",
    element: <RecommendationBoard />,
  },
  {
    path: "/unusual-user-activity",
    name: "Unusual User Activity",
    element: <UnusualUserActivity />,
  },
  {
    path: "/unusual-user-onboarding",
    name: "Unusual User Onboarding",
    element: <UnusualUserOnboarding />,
  },
  {
    path: "/customer-management",
    name: "Customer Management",
    element: <CustomerManagement />,
  },
  {
    path: "/transaction-report",
    name: "Transaction Report",
    element: <TransactionReport />,
  },
  {
    path: "/third-party-integrations",
    name: "Third Party Integrations",
    element: <ThirdPartyIntegrations />,
  },
  {
    path: "/system-health",
    name: "System Health",
    element: <SystemHealth />,
  },
  {
    path: "/security-overview",
    name: "Security Overview",
    element: <SecurityOverview />,
  },
];