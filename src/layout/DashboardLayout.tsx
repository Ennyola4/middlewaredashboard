import { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import Dashboard from '../pages/Dashboard/Dashboard';
// import { Menu, X } from 'lucide-react';

const DashboardLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Close sidebar when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsMobileSidebarOpen(false);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Sidebar - responsive behavior */}
      <div className={`${isMobile ? 'fixed inset-y-0 z-40' : 'sticky top-0'} 
        w-64 bg-gray-800 text-white h-screen overflow-y-auto transition-all duration-300
        ${isMobile ? (isMobileSidebarOpen ? 'left-0' : '-left-64') : 'left-0'}`}>
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className={`flex-1 overflow-y-auto transition-all duration-300
        ${isMobile && isMobileSidebarOpen ? 'ml-64' : ''}`}>
        {/* Mobile header spacer */}
        {isMobile && <div className="h-5"></div>}
        
        <Dashboard />

      </div>
    </div>
  );
};

export default DashboardLayout;