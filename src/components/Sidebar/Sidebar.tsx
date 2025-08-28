import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "./NavItem";
import { 
  TabletSmartphone, Tablets, ClipboardMinus, Camera, Building2, 
  MonitorCheck, Lock, BarChart2, ChevronDown, Activity, Menu, 
  Users, TrendingUp, Shield, TriangleAlert, RefreshCcw, Brain, 
  Globe, UserX, UserPlus, UserRoundCheck, X, House
} from "lucide-react";
import { type NavSection } from "../Sidebar/types";
import imageOne from "../../assets/image/imageOne.jpg";

export const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    product: true,
    transactions: true,
    riskManagement: true,
    management: true,
    monitoring: true
  });

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNavItemClick = () => {
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  const navSections: NavSection[] = [
    {
      title: "Product",
      icon: <TabletSmartphone className="w-5 h-5" />,
      links: [
        { title: "Home", href: "/", icon: <House className="w-5 h-5" /> },
        { title: "Business Banking", href: "/business-banking", icon: <Building2 className="w-5 h-5" /> },
        { title: "Mobile Banking", href: "/mobile-banking", icon: <TabletSmartphone className="w-5 h-5" /> },
        { title: "Gold Bucks", href: "/gold-bucks", icon: <Tablets className="w-5 h-5" /> },
        { title: "E-cam", href: "/e-cam", icon: <Camera className="w-5 h-5" /> },
        { title: "POS system", href: "/pos", icon: <TabletSmartphone className="w-5 h-5" /> },
      ]
    },
    {
      title: "Transactions",
      icon: <TabletSmartphone className="w-5 h-5" />,
      links: [
        { title: "Live Transaction", href: "/live-transaction", icon: <Activity className="w-5 h-5" /> },
        { title: "High Risk Transaction", href: "/high-risk-transaction", icon: <TrendingUp className="w-5 h-5" /> }
      ]
    },
    {
      title: "Risk Management",
      icon: <Building2 className="w-5 h-5" />,
      links: [
        { title: "Risk Users", href: "/risk-users", icon: <Users className="w-5 h-5" /> },
        { title: "Risk Transaction", href: "/risk/transactions", icon: <Shield className="w-5 h-5" /> },
        { title: "Fraud Alert", href: "/risk/fraud-alert", icon: <TriangleAlert className="w-5 h-5" /> },
        { title: "Recurring Execptions", href: "/risk/exceptions", icon: <RefreshCcw className="w-5 h-5" /> },
        { title: "Recommendation Board", href: "/risk/recommendations", icon: <Brain className="w-5 h-5" /> },
        { title: "Unusual User Activity", href: "/risk/unusual-activity", icon: <UserX className="w-5 h-5" /> },
        { title: "Unusual User Onboarding", href: "/risk/unusual-onboarding", icon: <UserPlus className="w-5 h-5" /> },
      ]
    },
    {
      title: "Management",
      icon: <BarChart2 className="w-5 h-5" />,
      links: [
        { title: "Customer Management", href: "/analytics/traffic", icon: <UserRoundCheck className="w-5 h-5" /> },
        { title: "Transaction Report", href: "/management/transaction-report", icon: <ClipboardMinus className="w-5 h-5" /> },
        { title: "Third Party Integrations", href: "/management/integrations", icon: <Globe className="w-5 h-5" /> }
      ]
    },
    {
      title: "Monitoring",
      icon: <TabletSmartphone className="w-5 h-5" />,
      links: [
        { title: "System Health", href: "/system-health", icon: <MonitorCheck className="w-5 h-5" /> },
        { title: "Security Overview", href: "/settings/security", icon: <Lock className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <>
      {/* Mobile hamburger button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed z-50 bottom-20 right-8 p-4 rounded-full bg-[#0E0C60] hover:bg-blue-800 text-white shadow-sm transition-colors"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="w-66 h-screen flex flex-col bg-[#0E0C60] border-r dark:border-gray-200 dark:bg-gray-900">
          {/* Fixed header */}
          <div className="flex items-center gap-2 p-2 bg-white dark:bg-white border-b flex-shrink-0">
            <img src={imageOne} alt="Alert Group Logo" className="w-12 h-12 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <h1 className="text-sm font-semibold font-serif text-gray-900 dark:text-black truncate">
                Alert Group
              </h1>
              <p className="text-gray-400 dark:text-gray-400 text-xs font-serif">
                Middleware Dashboard
              </p>
            </div>
          </div>

          {/* Scrollable navigation */}
          <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-1 text-amber-50 dark:text-white">
            {navSections.map((section) => (
              <div key={section.title} className="py-0.5">
                <button
                  onClick={() => toggleSection(section.title.toLowerCase())}
                  className="flex items-center justify-between w-full px-2 py-1.5 text-left hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {section.icon}
                    <span className="font-medium text-sm">{section.title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSections[section.title.toLowerCase()] ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedSections[section.title.toLowerCase()] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="ml-4 mt-0.5 space-y-0.5 overflow-hidden"
                    >
                      {section.links.map((link) => (
                        <NavItem
                          key={link.href}
                          href={link.href}
                          icon={link.icon}
                          className="text-amber-50 dark:text-white hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md px-2 py-1.5 transition-colors text-sm"
                          onClick={handleNavItemClick}
                          >
                          {link.title}
                        </NavItem>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsMobileOpen(false)}
            />
            
            {/* Mobile Sidebar */}
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 150, damping: 30 }}
              className="fixed inset-y-0 left-0 w-64 z-50 bg-[#0E0C60] border-r dark:border-gray-200 dark:bg-gray-900 flex flex-col"
            >
              {/* Fixed header */}
              <div className="flex items-center gap-2 p-2 bg-white dark:bg-white border-b flex-shrink-0">
                <img src={imageOne} alt="Alert Group Logo" className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h1 className="text-sm font-semibold font-serif text-gray-900 dark:text-black truncate">
                    Alert Group
                  </h1>
                  <p className="text-gray-400 dark:text-gray-400 text-xs font-serif">
                    Middleware Dashboard
                  </p>
                </div>
              </div>

              {/* Scrollable navigation */}
              <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-1 text-amber-50 dark:text-white">
                {navSections.map((section) => (
                  <div key={section.title} className="py-0.5">
                    <button
                      onClick={() => toggleSection(section.title.toLowerCase())}
                      className="flex items-center justify-between w-full px-2 py-1.5 text-left hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {section.icon}
                        <span className="font-medium text-sm">{section.title}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedSections[section.title.toLowerCase()] ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedSections[section.title.toLowerCase()] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="ml-4 mt-0.5 space-y-0.5 overflow-hidden"
                        >                      
                          {section.links.map((link) => (
                            <div key={link.href} onClick={handleNavItemClick}>
                              <NavItem
                                href={link.href}
                                icon={link.icon}
                                className="text-amber-50 dark:text-white hover:bg-blue-800 dark:hover:bg-gray-800 rounded-md px-2 py-1.5 transition-colors text-sm"
                              >
                                {link.title}
                              </NavItem>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};