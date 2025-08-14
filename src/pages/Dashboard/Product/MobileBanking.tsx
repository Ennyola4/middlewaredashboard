import Navbar from "../../../components/Navbar/Navbar"
import { motion } from 'framer-motion';
import { TabletSmartphoneIcon, Landmark, Globe, Download, Users, CreditCard, Activity, ArrowRightLeft, } from "lucide-react"

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

const recentMobileTransanction = [
  {
    id: "MB-1",
    name: "Sarah Banks",
    type: "Fund Transfer",
    value: "₦250,000",
    status: "Completed"
  },
  {
    id: "MB-2",
    name: "Abel Bammy",
    type: "Bill Payment",
    value: "₦75,000",
    status: "Completed"
  },
  {
    id: "MB-3",
    name: " Diogo Jota",
    type: "Airtime Purchase",
    value: "₦250,00",
    status: "Pending"
  },
]

const systemPerformance = [
  {
    title: "App Uptime",
    rate: "99.95%"
  },
  {
    title: "Error Rate",
    rate: "1.5%"
  },
]

const MobileBanking = () => {

  const getProgressValue = (rate: string): number => {
    return parseFloat(rate); // Removes the "%" and converts to float
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <TabletSmartphoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 dark:text-green-400" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] dark:text-green-500  text-gray-700 font-semibold font-serif">
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
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
        {/* Feature Usage Analytics */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-3 sm:p-4">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-[23px] mb-3 sm:mb-4 md:mb-5 text-gray-600 dark:text-white font-semibold">
            Feature Usage Analytics
          </h1>
          <div className="space-y-2 sm:space-y-3">
            {featureUsageAnalytics.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.value }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: item.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Performance */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-3 sm:p-4 mt-3 sm:mt-0">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-[23px] mb-3 sm:mb-4 md:mb-5 text-gray-600 dark:text-white font-semibold">
            System Performance
          </h1>
          <div className="space-y-2 sm:space-y-3">
            {systemPerformance.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                    {item.title}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    {item.rate}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${getProgressValue(item.rate)}%`,
                      backgroundColor:
                        getProgressValue(item.rate) > 90
                          ? '#10B981' // green
                          : getProgressValue(item.rate) > 70
                            ? '#F59E0B' // yellow
                            : '#EF4444' // red
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Stats Cards */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-3 sm:mt-4">
              <div className="shadow-sm p-3 sm:p-4 w-full dark:bg-gray-900/90 rounded-md">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">Active Members</p>
                <span className="font-semibold text-sm sm:text-[15px] dark:text-white">18,450</span>
              </div>
              <div className="shadow-sm p-3 sm:p-4 w-full dark:bg-gray-900/90 rounded-md">
                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">Avg Points/User</p>
                <span className="font-semibold text-sm sm:text-[15px] dark:text-white">1,980</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            Recent High Value Transactions
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {recentMobileTransanction.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md sm:rounded-lg hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mb-2 sm:mb-0">
                  <div className="p-1 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md sm:rounded-lg text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {transaction.type === 'Wire Transfer' ? (
                      <ArrowRightLeft className="w-4 h-4" />
                    ) : transaction.type === 'Bulk Payment' ? (
                      <Landmark className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-gray-800 dark:text-gray-100 truncate">
                      {transaction.type}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {transaction.id} • {transaction.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {transaction.value}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-md min-w-[80px] text-center ${transaction.status === 'completed'
                    ? 'text-white bg-green-500 dark:text-white dark:bg-green-600'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
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