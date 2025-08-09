import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home.js";
// import DashboardLayout from './layout/DashboardLayout.js';
import {  Routes, Route } from 'react-router-dom';
import BusinessBanking from './pages/Dashboard/Product/BusinessBanking.js';
import MobileBanking from './pages/Dashboard/Product/MobileBanking.js';



export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/business-banking' element={<BusinessBanking />}></Route>
        <Route path='mobile-banking' element={<MobileBanking/>}></Route>
      </Routes>
    </Router>
  );
}