import { recentPosTransactions } from "../../../utils"

const RecentPosTrans = () => {
  return (
    <div>
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
  )
}

export default RecentPosTrans
