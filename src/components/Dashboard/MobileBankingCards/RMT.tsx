import { recentMobileTransanction } from '../../../utils'
import { ArrowRightLeft, Globe, Landmark } from 'lucide-react'

const RMT = () => {
  return (
    <div>
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

export default RMT
