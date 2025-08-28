import { CircleAlert, DollarSign, Download, Filter, Search, Shield, TrendingUp } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import { time } from "framer-motion"



const highRiskTransaction = [
  {
    title: "High Risk Detected",
    icon: <CircleAlert className="text-green-500" size={30} />,
    value: "1,234"
  },
  {
    title: "Blocked Today",
    icon: <Shield className="text-blue-500" size={30} />,
    value: "45"
  },
  {
    title: "Risk Amount",
    icon: <DollarSign className="text-purple-500" size={30} />,
    value: "₦450M"
  },
  {
    title: "Block Success Rate",
    icon: <TrendingUp className="text-blue-300" size={30} />,
    value: "98.7%"
  },
]

const riskCategoryDistribution = [
  {
    title: "Amount Anomalies",
    value: "345",
    bar: "20%"
  },
  {
    title: "Geographic Risk",
    value: "345",
    bar: "25%"
  },
  {
    title: "Velocity Patterns",
    value: "345",
    bar: "35%"
  },
  {
    title: "Recipient Risk",
    value: "345",
    bar: "15%"
  },
  {
    title: "Timing Anomalies",
    value: "345",
    bar: "35%"
  },

]

const riskScoreDistribution = [
  {
    title: "Critical (90-100)",
    transaction: "234 transactions",
  },

  {
    title: "High (80-89)",
    transaction: "456 transactions",
  },
  {
    title: "Medium (70-79)",
    transaction: "544 transactions",
  },
]

const highRiskTransactionQueue = [
  {
    id: "HRT-001",
    riskScore: "Risk Score:",
    riskScoreStatusOne: "95%",
    riskScoreStatusTwo: "Blocked",
    event: "Transaction Details:",
    value: "₦5,000,000",
    account: "****8901 → Account-****2345",
    riskFactor: "Risk Factors:",
    riskFactorStatusOne: "Unusual Amount",
    riskFactorStatusTwo: "Cross-Border",
    riskFcatorStatusThree: "New Recipient",
    location: "Lagos → London ",
    time: "2024-01-15 14:30",
    firstButton: "Review",
    secondButton: "Block"
  },
  {
    id: "HRT-002",
    riskScore: "Risk Score:",
    riskScoreStatusOne: "87%",
    riskScoreStatusTwo: "Under Review",
    event: "Transaction Details:",
    value: "₦2,500,000",
    account: "-****5678 → Account-****9012",
    riskFactor: "Risk Factors:",
    riskFactorStatusOne: "High Velocity",
    riskFactorStatusTwo: "Round Number",
    location: "Abuja → Dubai ",
    time: "2024-01-15 13:45",
    firstButton: "Review",
    secondButton: "Block"
  },
  {
    id: "HRT-003",
    riskScore: "Risk Score:",
    riskScoreStatusOne: "92%",
    riskScoreStatusTwo: "Flagged",
    event: "Transaction Details:",
    value: "₦1,800,000",
    account: "-****3456 → Account-****7890",
    riskFactor: "Risk Factors:",
    riskFactorStatusOne: "Blacklisted Recipient",
    riskFactorStatusTwo: "Unusual Time",
    location: "Port Harcourt → Unknown",
    time: "2024-01-15 12:20",
    firstButton: "Review",
    secondButton: "Block"
  },
  {
    id: "HRT-004",
    riskScore: "Risk Score:",
    riskScoreStatusOne: "92%",
    riskScoreStatusTwo: "Investigating",
    event: "Transaction Details:",
    value: "₦3,200,000",
    account: "-****2468 → Account-****1357",
    riskFactor: "Risk Factors:",
    riskFactorStatusOne: "Pattern Matching",
    riskFactorStatusTwo: "High Amount",
    location: "Kano → Singapore ",
    time: "2024-01-15 11:10",
    firstButton: "Review",
    secondButton: "Block"
  },
]



const HighRiskTransaction = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-700 dark:text-green-500 font-semibold font-serif">
          High Risk Transactions
        </h1>
      </div>

      <div className="grid grid-cols-1 dark:bg-black bg-white sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 mb-5">
        {highRiskTransaction.map((item, index) => (
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

      <div className="flex flex-col lg:flex-row bg-white dark:bg-black gap-4 sm:gap-6 p-3 sm:p-4">
        {/* Risk Category Distribution Section */}
        <div className="flex-1 p-3 shadow-sm dark:bg-gray-800 sm:p-5 bg-white rounded-lg">
          <h2 className="text-lg font-bold mb-4 dark:text-white">Risk Category Distribution</h2>
          <div className="space-y-4">
            {riskCategoryDistribution.map((riskDistribution, index) => {
              const progressBar = parseFloat(riskDistribution.bar)
              const barColor = progressBar < 40 ? "bg-blue-500" : progressBar > 20 ? "bg-green-500" : "bg-red-500"

              return (
                <div key={index} className="dark:text-white dark:bg-gray-950 shadow-sm p-3 rounded-md">
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 mb-3">
                    <span className="font-semibold text-sm sm:text-base">
                      {riskDistribution.title}
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      {riskDistribution.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2 sm:h-2.5">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                      style={{ width: `${progressBar}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Risk Score Distribution Section */}
        <div className="flex-1 p-3 dark:bg-gray-800 shadow-sm sm:p-5 bg-white  rounded-lg">
          <h2 className="text-lg font-bold mb-4 dark:text-white">Risk Score Distribution</h2>
          <div className="space-y-3 sm:space-y-4">
            {riskScoreDistribution.map((riskScore, index) => (
              <div
                key={index}
                className="flex dark:bg-gray-950 flex-col xs:flex-row xs:justify-between xs:items-center gap-2 p-3 shadow-sm rounded-md border-l-4 border-blue-400 dark:text-white"
              >
                <span className="font-semibold text-sm sm:text-base">
                  {riskScore.title}
                </span>
                <span className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400">
                  {riskScore.transaction}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-3  dark:text-white shadow-sm dark:bg-gray-800 m-3 rounded-xl">
        <div className="flex mb-3 flex-col xs:flex-row xs:items-center xs:justify-between gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          {/* Header Title */}
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
            High Risk Transaction Queue
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap xs:flex-nowrap gap-2 sm:gap-3">

            {/* Search Button */}
            <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200 text-sm font-medium">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Filter Button */}
            <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300 rounded-lg transition-colors duration-200 text-sm font-medium">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>

            {/* Export Button */}
            <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/40 text-green-700 dark:text-green-300 rounded-lg transition-colors duration-200 text-sm font-medium">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </button>

          </div>
        </div>
        {/* High Risk Transaction Queue Section */}
        {highRiskTransactionQueue.map((transaction, index) => (
          <div key={index} className="p-3 sm:p-4 flex flex-col lg:flex-row lg:gap-6 shadow-sm rounded-md mb-3 sm:mb-4 dark:bg-gray-950">
            <div className="flex-1 space-y-3">

              {/* Header with ID, Risk Score and Status */}
              <div className="flex flex-col xs:flex-row xs:items-center gap-2 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono dark:bg-gray-700 dark:text-gray-200 px-2 py-1 bg-gray-100 rounded-md shadow-sm">
                    {transaction.id}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {transaction.riskScore}
                  </span>
                  <span className="text-xs px-2 py-1 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                    {transaction.riskScoreStatusOne}
                  </span>
                </div>
                <span className="text-xs px-2 sm:px-3 py-1 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-full font-medium w-fit">
                  {transaction.riskScoreStatusTwo}
                </span>
              </div>

              {/* Transaction Details */}
              <div className="space-y-2">
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {transaction.event}
                </div>
                <div className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                  {transaction.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-mono break-all">
                  Account {transaction.account}
                </div>
              </div>

              {/* Risk Factors */}
              <div className="space-y-2">
                <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {transaction.riskFactor}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-yellow-400 px-2 py-1 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-medium">
                    {transaction.riskFactorStatusOne}
                  </span>
                  <span className="border border-yellow-400 px-2 py-1 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-medium">
                    {transaction.riskFactorStatusTwo}
                  </span>
                  {transaction.riskFcatorStatusThree && (
                    <span className="border border-yellow-400 px-2 py-1 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-medium">
                      {transaction.riskFcatorStatusThree}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Location & Time Section */}
            <div className="flex-shrink-0 lg:w-48 mt-10 lg:mt-0">
              <div className="space-y-2 p-3  rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  Location and Time
                </span>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {transaction.location}
                </div>
                <span>{transaction.time}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 mt-4 lg:mt-0 lg:flex-col lg:justify-center lg:w-32">
              <button className="flex-1 dark:text-black cursor-pointer lg:flex-none bg-gray-200 hover:bg-blue-600 hover:text-white text-black px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200">
                {transaction.firstButton}
              </button>
              <button className="flex-1 cursor-pointer  lg:flex-none bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200">
                {transaction.secondButton}
              </button>
            </div>

          </div>

        ))}
      </div>
    </div>
  )
}

export default HighRiskTransaction
