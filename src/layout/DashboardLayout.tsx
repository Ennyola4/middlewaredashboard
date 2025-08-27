import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { useEffect } from 'react';

const DashboardLayout = () => {
  const location = useLocation();
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]); 
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <div className=" ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;