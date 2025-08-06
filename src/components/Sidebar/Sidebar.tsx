import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "./NavItem";
import { 
  TabletSmartphone, Tablets, ClipboardMinus, Camera, Building2, 
  MonitorCheck, Lock, BarChart2, ChevronDown, Activity, Menu, 
  Users, TrendingUp, Shield, TriangleAlert, RefreshCcw, Brain, 
  Globe, UserX, UserPlus, UserRoundCheck, X 
} from "lucide-react";
import { type NavSection } from "../Sidebar/types";
import imageOne from "../../image/imageOne.jpg";

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

  const navSections: NavSection[] = [
   {
      title: "Product",
      icon: < TabletSmartphone className="w-5 h-5" />,
      links: [
        { title: "Overview", href: "/", icon: < TabletSmartphone className="w-5 h-5" /> },
        { title: "Business Banking", href: "/business-banking", icon: <Building2 className="w-5 h-5" /> },
        { title: "Mobile Banking", href: "/mobile-banking", icon: < TabletSmartphone className="w-5 h-5" /> },
        { title: "Gold Bucks", href: "/gold-bucks", icon: < Tablets className="w-5 h-5" /> },
        { title: "E-cam", href: "/e-cam", icon: < Camera className="w-5 h-5" /> },
        { title: "POS system", href: "/pos", icon: < TabletSmartphone className="w-5 h-5" /> },

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
        { title: "Risk Users", href: "/reports/monthly", icon: <Users className="w-5 h-5" /> },
        { title: "Risk Transaction", href: "/reports/annual", icon: <Shield className="w-5 h-5" /> },
        { title: "Fraud Alert", href: "/reports/monthly", icon: <TriangleAlert className="w-5 h-5" /> },
        { title: "Recurring Execptions", href: "/reports/annual", icon: <RefreshCcw className="w-5 h-5" /> },
        { title: "Recommendation Board", href: "/reports/monthly", icon: <Brain className="w-5 h-5" /> },
        { title: "Unusual User Activity", href: "/reports/annual", icon: <UserX className="w-5 h-5" /> },
        { title: "Unusual User Onboarding", href: "/reports/monthly", icon: <UserPlus className="w-5 h-5" /> },

      ]
    },
    {
      title: "Management",
      icon: <BarChart2 className="w-5 h-5" />,
      links: [
        { title: "Customer Management", href: "/analytics/traffic", icon: <UserRoundCheck className="w-5 h-5" /> },
        { title: "Transaction Report", href: "/analytics/sales", icon: <ClipboardMinus className="w-5 h-5" /> },
        { title: "Third Party Integrations", href: "/analytics/sales", icon: <Globe className="w-5 h-5" /> }
      ]
    },
    {
      title: "Monitoring",
      icon: <TabletSmartphone className="w-5 h-5" />,
      links: [
        { title: "System Health", href: "/settings/profile", icon: <MonitorCheck className="w-5 h-5" /> },
        { title: "Security Overview", href: "/settings/security", icon: <Lock className="w-5 h-5" /> }
      ]
    }
  ]

  return (
    <>
      {/* Mobile hamburger button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed z-50 bottom-15 right-5 p-4  rounded-full border-gray-100 dark:border-gray-100 bg-blue-700  text-white  transition-colors dark:bg-gray-700 dark:text:white dark:hover:bg-gray-800 "
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Sidebar container */}
      <div className="flex h-screen overflow-hidden dark:bg-gray-900">
        {/* Sidebar - Desktop (always visible) / Mobile (conditional) */}
        <AnimatePresence>
          {(!isMobile || isMobileOpen) && (
            <motion.aside
              initial={isMobile ? { x: -300 } : {}}
              animate={isMobile ? { x: 0 } : {}}
              exit={isMobile ? { x: -400 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className={`flex flex-col border-r dark:border-gray-200 dark:bg-gray-900 bg-blue-700 ${
                isMobile ? "fixed inset-0 z-40 w-84" : "w-790"
              }`}
            >
              {/* Fixed header */}
              <div className="flex max-w-sm items-center gap-x-1 outline p-1 sticky top-0 z-10 bg-white  dark:bg-white ">
                <img src={imageOne} alt="" className="w-20 p-2 rounded-2xl size-20 " />
                <div>
                  <h1 className="text-xl font-semibold font-serif text-gray-900  dark:text-black">Alert Group</h1>
                  <p className="text-gray-400 dark:text-gray-400 text-xs font-serif ">Middleware Dashboard</p>
                </div>
              </div>

              {/* Scrollable content - Fixed height with overflow */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <nav className="flex-1 overflow-y-auto px-4 space-y-2 text-amber-50 dark:text-white">
                  {navSections.map((section) => (
                    <div key={section.title} className="py-1">
                      <button
                        onClick={() => toggleSection(section.title.toLowerCase())}
                        className="flex items-center justify-between w-full px-3 py-2 dark:hover:bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <span>{section.title}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedSections[section.title.toLowerCase()] ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {expandedSections[section.title.toLowerCase()] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-8 space-y-1 overflow-hidden dark:text-white"
                          >
                            {section.links.map((link) => (
                              <NavItem
                                key={link.href}
                                href={link.href}
                                icon={link.icon}
                                className="text-amber-50 dark:text-white"
                                onClick={() => isMobile && setIsMobileOpen(false)}
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
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};