import { liveTransaction } from "../../../utils"

const LiveTransactionCard = () => {
  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 mb-5">
        {liveTransaction.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="p-2">
              {<item.icon className={`${item.textColor}`} size={30}/>}
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
    </div>
  )
}

export default LiveTransactionCard
