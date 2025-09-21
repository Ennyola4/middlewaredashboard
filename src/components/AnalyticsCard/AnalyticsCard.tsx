import { Activity, TrendingUp } from "lucide-react";
import { Users } from "lucide-react";
import { Monitor } from "lucide-react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { TriangleAlert } from 'lucide-react'

const AnalyticsCard = () => {
  const stats = [
    {
      value: "1,242,300",
      icon: <Activity className="h-6 w-6 text-green-500" />,
      textChange: "Total Transactions",
      change: "+5.2%"
    },
    {
      value: "89,000",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      textChange: "Active Users",
      change: "+12.1%"
    },
    {
      value: "99.97%",
      icon: <Monitor className="h-6 w-6 text-green-500" />,
      textChange: "System Uptime",
      change: "+0.02%"
    },
    {
      value: "23",
      icon: <Shield className="h-6 w-6 text-orange-300" />,
      textChange: "Risk Events",
      change: "-8.5%"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white  lg:grid-cols-4 gap-3 dark:gap-3 p-3 dark:p-1 dark:bg-gray-950">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -4,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          className="bg-white dark:bg-gray-950  p-3 transition-all duration-200 "
        >
          <div className="flex flex-col space-y-4 rounded-xl shadow-sm p-4 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-gray-50 shadow-sm dark:bg-gray-700"
              >
                {stat.icon}
              </motion.div>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`text-sm font-medium ${index < 3 ? 'text-green-500 hover:text-green-600' : 'text-red-500 hover:text-red-600'
                  }`}
              > <div className="flex items-center  gap-1">
                  <TrendingUp className="flex" size={15} />
                  {stat.change}
                </div>

              </motion.span>
            </div>

            <div className="space-y-1">
              <motion.h3
                whileHover={{ x: 2 }}
                className="text-2xl  font-semibold text-gray-900 dark:text-white"
              >
                {stat.value}
              </motion.h3>
              <motion.p
                whileHover={{ x: 2 }}
                className="text-xs  text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {stat.textChange}
              </motion.p>
            </div>
          </div>
        </motion.div>

      ))}

      <div className="flex items-center bg-red-400/20 dark:bg-red-600/20 gap-2  px-2 py-1 rounded-md w-fit  text-red-600 dark:text-red-500 ">
        <TriangleAlert size={20} className="flex-shrink-0" />
        <span className="text-xs truncate">12 active alerts require attention.</span>
      </div>


    </div>
  );
};

export default AnalyticsCard;