import {
  CreditCard,
  TriangleAlert,
  Activity,
  AlertCircle,
  CheckCircle2,
  Store,
  TrendingUp,
  Wifi
} from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"


const posSystem = [
  {
    title: "Total Users",
    icon: <Store className="text-green-500" size={30} />,
    value: "89,432"
  },
  {
    title: "Active Users (24h)",
    icon: <Activity className="text-blue-500" size={30} />,
    value: "67,890"
  },
  {
    title: "Daily Transactions",
    icon: <TrendingUp className="text-purple-500" size={30} />,
    value: "34,567"
  },
  {
    title: "App Downloads",
    icon: <Wifi className="text-blue-300" size={30} />,
    value: "245,680"
  },
]

const terminalStatusRegion = [
  {
    title: "Lagos Island",
    titleStatus: "operational",
    status: "Active: 2340/2500",
    label: "Offline: 45",
    bar: "95%"
  },
  {
    title: "Victoria Island",
    titleStatus: "operational",
    status: "Active: 1890/2000",
    label: "Offline: 28",
    bar: "93%"
  },
  {
    title: "Ikeja",
    titleStatus: "operational",
    status: "Active: 1540/1700",
    label: "Offline: 22",
    bar: "96%"
  },
  {
    title: "Lekki",
    titleStatus: "degraded",
    status: "Active: 1650/1800",
    label: "Offline: 35",
    bar: "98%"
  },
  {
    title: "Mainland",
    titleStatus: "critical",
    status: "Active: 1500/2500",
    label: "Offline: 15",
    bar: "70%"
  },
  {
    title: "Ikorodu",
    titleStatus: "operational",
    status: "Active: 1500/2500",
    label: "Offline: 15",
    bar: "70%"
  },
]

const recentPosTransactions = [
  {
    id: "POS-001",
    title: "SuperMart Plaza",
    idStatus: "TRM-3401",
    points: "₦45,000",
    event: "Card Payment",
    status: "completed"
  },
  {
    id: "POS-002",
    title: "Gas Station 24/7",
    idStatus: "TRM-2108",
    points: "₦12,500",
    event: "Contactless",
    status: "Failed"
  },
  {
    id: "POS-003",
    title: "Restaurant Delight",
    idStatus: "TRM-5629",
    points: "₦8,900",
    event: "Chip & PIN",
    status: "Completed"
  },
]


const systemStats = {
  totalTerminals: 10500,
  activeTerminals: 8920,
  offlineTerminals: 145,
  errorRate: 1.88,
  transactionsToday: 245832,
  avgResponseTime: "0.8s"
}

const alerts = [
  { id: 1, message: "Mainland region experiencing connectivity issues", severity: "high" },
  { id: 2, message: "Transaction volume higher than usual in Victoria Island", severity: "medium" },
  { id: 3, message: "Scheduled maintenance tonight at 2:00 AM", severity: "low" }
]

const PosSystem = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />

      {/* Header Section */}
      <div className="flex items-center gap-3 p-4 sm:p-6">
        <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-purple-400" />
        <h1 className="text-xl sm:text-2xl md:text-3xl dark:text-purple-500 text-gray-700 font-semibold font-serif">
          POS System
        </h1>
      </div>

      {/* Alert Banner */}
      <div className="flex mx-4 sm:mx-6 rounded-md bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 items-center gap-2 p-3 sm:p-4 mb-6">
        <TriangleAlert size={20} className="text-red-500 dark:text-red-400 flex-shrink-0" />
        <p className="text-sm sm:text-base dark:text-red-300 text-red-700 font-medium">
          High Error Rate Detected: 1.88% - Immediate attention required
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 mb-5">
        {posSystem.map((item, index) => (
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

      {/* Main Content - Two Columns */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 pb-6">

        {/* Left Column - Terminal Status Cards */}
        <div className="w-full lg:w-2/3">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Terminal Status</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Activity size={16} />
              <span>Last updated: 5 min ago</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {terminalStatusRegion.map((terminal, index) => {
              const progressValue = parseFloat(terminal.bar);
              let statusColor, barColor;

              if (terminal.titleStatus === "operational") {
                statusColor = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
                barColor = "bg-green-500";
              } else if (terminal.titleStatus === "degraded") {
                statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
                barColor = "bg-yellow-500";
              } else {
                statusColor = "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
                barColor = "bg-red-500";
              }

              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-all hover:shadow-md">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {terminal.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {terminal.status}
                      </p>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColor}`}>
                      {terminal.titleStatus.charAt(0).toUpperCase() + terminal.titleStatus.slice(1)}
                    </span>
                  </div>

                  {/* Offline Count */}
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {terminal.label}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-1">
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                      <span>Capacity</span>
                      <span>{terminal.bar}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${barColor} transition-all duration-500`}
                        style={{ width: `${progressValue}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column - Stats and Alerts */}
        <div className="w-full lg:w-1/3">
          {/* System Overview Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">System Overview</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Total Terminals</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{systemStats.totalTerminals.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Active Terminals</span>
                <span className="font-semibold text-green-600 dark:text-green-400">{systemStats.activeTerminals.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Offline Terminals</span>
                <span className="font-semibold text-red-600 dark:text-red-400">{systemStats.offlineTerminals.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Error Rate</span>
                <span className="font-semibold text-red-600 dark:text-red-400">{systemStats.errorRate}%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Transactions Today</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{systemStats.transactionsToday.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Avg. Response Time</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{systemStats.avgResponseTime}</span>
              </div>
            </div>
          </div>

          {/* Alerts Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <AlertCircle size={20} />
              Recent Alerts
            </h2>

            <div className="space-y-4">
              {alerts.map(alert => (
                <div key={alert.id} className={`p-3 rounded-lg text-sm ${alert.severity === 'high'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  : alert.severity === 'medium'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                  <div className="flex items-start gap-2">
                    {alert.severity === 'high'
                      ? <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                      : <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                    }
                    <span>{alert.message}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     <div className="m-3 p-4 sm:p-5 bg-white dark:bg-gray-800/90 shadow-sm rounded-lg border border-gray-100 dark:border-gray-700">
  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
    <CreditCard className="w-5 h-5 mr-2" />
    Recent POS Transactions
  </h2>
  
  <div className="space-y-3">
    {recentPosTransactions.map((transaction, index) => (
      <div key={index} className="bg-gray-50 dark:bg-gray-900/80 p-3 rounded-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-sm">
        {/* Top row with ID, title, and points */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium">
              #{transaction.id}
            </span>
            <span className="text-sm font-medium text-gray-800 dark:text-white">
              {transaction.title}
            </span>
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${
              transaction.idStatus === 'Completed' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                : transaction.idStatus === 'Pending'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
            }`}>
              {transaction.idStatus}
            </span>
          </div>
          
          <span className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white">
            {transaction.points}
          </span>
        </div>
        
        {/* Bottom row with event and status */}
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1 xs:gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
            {transaction.event}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            transaction.status === 'Success' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
              : transaction.status === 'Failed'
              ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
          }`}>
            {transaction.status}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default PosSystem