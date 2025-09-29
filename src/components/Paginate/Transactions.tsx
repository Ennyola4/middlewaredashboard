import { Activity, TrendingUp } from "lucide-react"
import { transactionMonitor } from "../../utils"


const Transactions = () => {
  return (
    <div>
      <div className="w-full  space-y-4 p-2 sm:p-6 rounded-md  dark:bg-gray-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            <h2 className="text-lg font-semibold dark:text-white">Transaction Monitor</h2>
          </div>
          <div className="flex bg-green-400/20 px-2 py-1 rounded-md items-center gap-1 ">
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            <p className="text-sm text-green-600 text-[12px] dark:text-gray-300">+42.8B vol</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:flex  lg:justify-evenly lg:items-center w-full gap-2 xs:gap-3 sm:gap-4 mb-6 p-3 sm:p-4 dark:bg-gray-900 dark:text-white rounded-md shadow-sm bg-white">
          <div className="flex animate-pulse flex-col items-center">
            <h1 className="text-sm xs:text-base sm:text-lg lg:text-xl font-extrabold text-green-400">2,449,877</h1>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-serif text-center">Info Logs</p>
          </div>
          <div className="flex animate-pulse flex-col items-center">
            <h1 className="text-sm xs:text-base sm:text-lg lg:text-xl font-extrabold text-yellow-500">5,678</h1>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-serif text-center">Warnings</p>
          </div>
          <div className="flex animate-pulse flex-col items-center">
            <h1 className="text-sm xs:text-base sm:text-lg lg:text-xl font-extrabold text-red-400">1,234</h1>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-serif text-center">Errors</p>
          </div>
          <div className="flex animate-pulse flex-col items-center">
            <h1 className="text-sm xs:text-base sm:text-lg lg:text-xl font-extrabold dark:text-white text-gray-900">145ms</h1>
            <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-serif text-center">Average Response</p>
          </div>
        </div>

        {/* Transactions List */}
        <div>
          {transactionMonitor.map((transaction, index) => (
            <div
              key={`transaction-${index}`}
              className="bg-white dark:bg-gray-900 p-3 sm:p-4 rounded-md shadow-sm border-l-2 border-blue-400 mb-3"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium px-2 py-1 bg-gray-200 shadow-sm rounded-md text-gray-700 dark:text-gray-400 dark:bg-gray-800">
                    {transaction.id}
                  </span>
                  <span className={`px-2 py-1 text-[10px] rounded-md ${transaction.status.trim() === 'success'
                    ? 'bg-green-400/20 text-green-900 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                    {transaction.status.trim()}
                  </span>
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                  {transaction.amount}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                    {transaction.via.trim()} • {transaction.action}
                  </span>
                  <span className={`px-2 py-1 text-[10px] rounded-md ${parseFloat(transaction.risk) > 50
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                    Risk: {transaction.risk}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                  {transaction.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions
