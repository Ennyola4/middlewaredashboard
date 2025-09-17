import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Home from "./pages/Home.js";
import DashboardLayout from './layout/DashboardLayout.js';
// import {  Routes, Route } from 'react-router-dom';
import BusinessBanking from './pages/Dashboard/Product/BusinessBanking.js';
import MobileBanking from './pages/Dashboard/Product/MobileBanking.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Navbar from './components/Navbar/Navbar.js';
import GoldBucks from './pages/Dashboard/Product/GoldBucks.js';
import Ecam from './pages/Dashboard/Product/Ecam.js';
import PosSystem from './pages/Dashboard/Product/PosSystem.js';
import LiveTransaction from './pages/Dashboard/Transaction/LiveTransaction.js';
import HighRiskTransaction from './pages/Dashboard/Transaction/HighRiskTransaction.js';
import RiskUsers from './pages/Dashboard/RiskManagement/RiskUsers.js';
import RiskTransaction from './pages/Dashboard/RiskManagement/RiskTransaction.js';
import FraudAlert from './pages/Dashboard/RiskManagement/FraudAlert.js';
import RecurringExceptions from './pages/Dashboard/RiskManagement/RecurringExceptions.js';
import RecommendationBoard from './pages/Dashboard/RiskManagement/RecommendationBoard.js';
import UnusualUserActivity from './pages/Dashboard/RiskManagement/UnusualUserActivity.js';
import UnusualUserOnboarding from './pages/Dashboard/RiskManagement/UnusualUserOnboarding.js';
import CustomerManagement from './pages/Dashboard/Management/CustomerManagement.js';
import TransactionReport from './pages/Dashboard/Management/TransactionReport.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />, // This will persist across all child routes
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/business-banking',
        element: <BusinessBanking />,
      },
      {
        path: '/mobile-banking',
        element: <MobileBanking />,
      },
      {
        path: 'navbar',
        element: <Navbar />
      },
      {
        path: "/gold-bucks",
        element: <GoldBucks />
      },
      {
        path: "/e-cam",
        element: <Ecam />
      },
      {
        path: "/pos",
        element: <PosSystem />
      },
      {
        path: "/live-transaction",
        element: <LiveTransaction />
      },
      {
        path: "/high-risk-transaction",
        element: <HighRiskTransaction />
      },
      {
        path: "/risk-users",
        element: <RiskUsers />
      },
      {
        path: "/risk-transactions",
        element: <RiskTransaction />
      },
      {
        path: "/fraud-alert",
        element: <FraudAlert />
      },
      {
        path: "/recurring-exceptions",
        element: <RecurringExceptions />
      },
      {
        path: "/recommendation-board",
        element: <RecommendationBoard/>
      },
       {
        path: "/unusual-activities",
        element: <UnusualUserActivity/>
      },
       {
        path: "/unusual-onboarding",
        element: <UnusualUserOnboarding/>
      },
       {
        path: "/customer-management",
        element: <CustomerManagement/>
      },
       {
        path: "/transaction-report",
        element: <TransactionReport/>
      },
    ]
  }
])



export function App() {
  return <RouterProvider router={router} />;
}