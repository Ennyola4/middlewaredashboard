import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Pagination = () => {
  const pageData = [
    { label: "Overview", path: "/" },
    { label: "Transactions", path: "/transactions" },
    { label: "System Health", path: "/systems-health" },
    { label: "Active Alerts", path: "/active-alerts" },
    { label: "AI Recommendations", path: "/ai-recommendations" },
    { label: "Control Center", path: "/control-center" },
    { label: "Products", path: "/products" }
  ];
  
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const totalPages = pageData.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisiblePages = (): (number | string)[] => {
    if (windowWidth < 640) { // Mobile
      if (currentPage <= 2) return [0, 1, 2, '...', totalPages - 1];
      if (currentPage >= totalPages - 3) return [0, '...', totalPages - 3, totalPages - 2, totalPages - 1];
      return [0, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages - 1];
    } else { // Desktop
      if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i);
      if (currentPage <= 3) return [0, 1, 2, 3, 4, '...', totalPages - 1];
      if (currentPage >= totalPages - 4) return [0, '...', totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
      return [0, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages - 1];
    }
  };

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const visiblePages = getVisiblePages();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center  justify-center gap-1 sm:gap-2 p-4 flex-wrap bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-sm  dark:border-gray-800"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handlePageChange(Math.max(currentPage - 1, 0))}
        disabled={currentPage === 0}
        className="p-1 dark:text-white rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </motion.button>

      <AnimatePresence mode="popLayout">
        {visiblePages.map((pageIndex, index) => (
          <motion.div
            key={`${pageIndex}-${index}`}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {pageIndex === '...' ? (
              <motion.span 
                className="flex items-center justify-center h-8 w-8 text-xs"
                whileHover={{ scale: 1.1 }}
              >
                <MoreHorizontal className="h-4 w-4 text-gray-500" />
              </motion.span>
            ) : (
              <motion.div
                onHoverStart={() => setIsHovered(pageIndex as number)}
                onHoverEnd={() => setIsHovered(null)}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={pageData[pageIndex as number].path}
                  onClick={() => handlePageChange(pageIndex as number)}
                  className={`relative flex items-center  justify-center min-w-[90px] sm:min-w-[110px] h-7 px-2 rounded-md text-xs font-medium transition-all duration-300 ${
                    currentPage === pageIndex
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm'
                  }`}
                >
                  {pageData[pageIndex as number].label}
                  {isHovered === pageIndex && (
                    <motion.span 
                      className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-blue-400 rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      animate={{ width: "50%", x: "-50%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages - 1))}
        disabled={currentPage === totalPages - 1}
        className="p-2 rounded-full dark:text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
};

export default Pagination;