import Navbar from "../../../components/Navbar/Navbar"
import { motion } from 'framer-motion';
import { TabletSmartphoneIcon, Download, Users, CreditCard, Activity } from "lucide-react"

const mBanking = [
  {
    title: "Total Users",
    icon: <Users className="text-green-500" size={30} />,
    value: "89,432"
  },
  {
    title: "Active Users (24h)",
    icon: <Activity className="text-blue-500" size={30} />,
    value: "67,890"
  },
  {
    title: "Daily Transactions",
    icon: <CreditCard className="text-purple-500" size={30} />,
    value: "34,567"
  },
  {
    title: "App Downloads",
    icon: <Download className="text-blue-300" size={30} />,
    value: "245,680"
  },
]

const featureUsageAnalytics = [
  {
    title: "Fund Transfer",
    value: "85%"
  },
  {
    title: "Bill Payment",
    value: "72%"
  },
  {
    title: "Airtime/Data",
    value: "68%"
  },
  {
    title: "Account Balance",
    value: "95%"
  },
  {
    title: "Transaction History",
    value: "58%"
  },
]

// const recentMobileTransanction = [
//   {
//     id : "MB-1",
//     name : "Sarah Banks",
//     type : "Fund Transfer",
//     value : "₦250,000"
//   },
//    {
//     id : "MB-2",
//     name : "Abel Bammy",
//     type : "Bill Payment",
//     value : "₦75,000"
//   },
//    {
//     id : "MB-3",
//     name : " Diogo Jota",
//     type : "Airtime Purchase",
//     value : "₦250,00"
//   },
// ]

const MobileBanking = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      
      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <TabletSmartphoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-700 dark:text-white font-semibold font-serif">
          Mobile Banking
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4">
        {mBanking.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="p-2">
              {item.icon}
            </div>
            <div className="ml-auto text-right">
              <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Columns */}
      <div className="flex flex-col md:flex-row gap-4 p-4 sm:p-5">
        {/* Feature Usage Analytics */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-5">
          <h1 className="text-lg sm:text-xl md:text-[23px] mb-4 sm:mb-6 text-gray-600 dark:text-white font-semibold font-serif">
            Feature Usage Analytics
          </h1>
          <div className="space-y-3 sm:space-y-4">
            {featureUsageAnalytics.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.value }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: item.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Performance */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-5">
          <h1 className="text-lg sm:text-xl md:text-[23px] mb-4 sm:mb-6 text-gray-600 dark:text-white font-semibold font-serif">
            System Performance
          </h1>
          <div className="space-y-3 sm:space-y-4">
            {featureUsageAnalytics.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.value }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: item.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileBanking