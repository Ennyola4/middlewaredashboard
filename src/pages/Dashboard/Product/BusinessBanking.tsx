import {
  Activity,
  TrendingUp,
  Users,
  BanknoteArrowDown,
  Building2,
  Layers,
  Database,
  Shield,
  ArrowRightLeft,
  Landmark,
  Globe
} from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"

const bBanking = [
  {
    title: "Total Accounts",
    icon: <Users className="text-blue-500" size={30} />,
    value: "15,420"
  },
  {
    title: "Active Users",
    icon: <Activity className="text-green-500" size={30} />,
    value: "12,450"
  },
  {
    title: "Daily Transactions",
    icon: <BanknoteArrowDown className="text-purple-500" size={30} />,
    value: "8,923"
  },
  {
    title: "Monthly Volume",
    icon: <TrendingUp className="text-green-500" size={30} />,
    value: "₦2.3B"
  },
]

const systemHealthAndPerfomance = [
  {
    barTitle: "System Uptime",
    barValue: "99.98%"
  },
  {
    barTitle: "Error Rate",
    barValue: "0.05%"
  },
]

const systemPerformance = [
  {
    log: "API Response Time",
    status: "120ms",
    icon: <Layers className="w-5 h-5" />
  },
  {
    log: "Database Performance",
    status: "Optimal",
    icon: <Database className="w-5 h-5" />
  },
  {
    log: "Security Status",
    status: "Secure",
    icon: <Shield className="w-5 h-5" />
  }
]

const recentHighValueTransaction = [
  {
    id: "BB-001",
    idType: "Tech Solutions Ltd",
    transactionType: "Wire Transfer",
    amount: "₦2,500,000",
    status: "completed"
  },
  {
    id: "BB-002",
    idType: "Manufacturing Corp",
    transactionType: "Bulk Payment",
    amount: "₦1,800,000",
    status: "pending"
  },
  {
    id: "BB-003",
    idType: "Trading Co",
    transactionType: "International",
    amount: "₦3,200,000",
    status: "completed"
  }
]

const BusinessBanking = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-white font-semibold font-serif">
          Business Banking
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4">
        {bBanking.map((item, index) => (
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

      {/* System Health & Performance */}
      <div className="p-3 sm:p-4">
        <div className="mt-6 sm:mt-8 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 w-full">
          <h1 className="text-xl sm:text-2xl md:text-[28px] font-serif dark:text-white p-3 sm:p-4">
            System Health & Performance
          </h1>

          <div className="flex flex-col md:flex-row gap-4 sm:gap-5 w-full">
            {/* System Performance */}
            <div className="w-full md:w-1/2 dark:bg-gray-700 p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white">
                System Performance
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {systemHealthAndPerfomance.map((item, index) => {
                  const progress = parseFloat(item.barValue);
                  const barColor = progress > 95 ? 'bg-green-500' :
                    progress > 85 ? 'bg-blue-500' : 'bg-red-500';

                  return (
                    <div key={index} className="space-y-1 sm:space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.barTitle}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                          {item.barValue}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-500 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${barColor} transition-all duration-500`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Logs */}
            <div className="w-full md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg h-full">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white">
                  System Logs
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {systemPerformance.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md sm:rounded-lg hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="p-1 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md sm:rounded-lg text-blue-600 dark:text-blue-400 flex-shrink-0">
                          {item.icon}
                        </div>
                        <p className="font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-100 truncate">
                          {item.log}
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-md flex-shrink-0 ${item.status === 'Active'
                        ? 'text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                        }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="p-3 sm:p-4">
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            Recent High Value Transactions
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {recentHighValueTransaction.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md sm:rounded-lg hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mb-2 sm:mb-0">
                  <div className="p-1 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md sm:rounded-lg text-blue-600 dark:text-blue-400 flex-shrink-0">
                    {transaction.transactionType === 'Wire Transfer' ? (
                      <ArrowRightLeft className="w-4 h-4" />
                    ) : transaction.transactionType === 'Bulk Payment' ? (
                      <Landmark className="w-4 h-4" />
                    ) : (
                      <Globe className="w-4 h-4" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm text-gray-800 dark:text-gray-100 truncate">
                      {transaction.idType}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {transaction.id} • {transaction.transactionType}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {transaction.amount}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-md min-w-[80px] text-center ${transaction.status === 'completed'
                    ? 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30'
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

export default BusinessBanking