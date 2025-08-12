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
        element : <Navbar/>
      },
      {
        path: "/gold-bucks",
        element : <GoldBucks/>
      },
    ]
  }
])



export function App() {
  return <RouterProvider router={router} />;
}