import { systemStats } from "../../../utils"

const PosSystemStats = () => {
  return (
    <div>
       <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5 mb-6">
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
    </div>
  )
}

export default PosSystemStats
