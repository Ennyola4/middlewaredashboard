import { AlertOctagon, Download, Filter, Pen, Search } from 'lucide-react'
import { highRiskTransactionQueue } from '../../../utils'

const HighRiskTransactionQueue = () => {
  return (
    <div>
      <div className="p-3  dark:text-white shadow-sm dark:bg-gray-800 m-3 rounded-xl">
        <div className="flex mb-3 flex-col xs:flex-row xs:items-center xs:justify-between gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          {/* Header Title */}
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
            High Risk Transaction Queue
          </h1>

          {/* Action Buttons */}
          <div className="flex  flex-wrap xs:flex-nowrap gap-2 sm:gap-3">

            {/* Search Button */}
            <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200 text-sm font-medium">
              <Search className="h-4 w-4" />
              <span className=" sm:inline">Search</span>
            </button>

            {/* Filter Button */}
            <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300 rounded-lg transition-colors duration-200 text-sm font-medium">
              <Filter className="h-4 w-4" />
              <span className=" sm:inline">Filter</span>
            </button>

            {/* Export Button */}
            <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/40 text-green-700 dark:text-green-300 rounded-lg transition-colors duration-200 text-sm font-medium">
              <Download className="h-4 w-4" />
              <span className=" sm:inline">Export</span>
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
                  <span className="text-[9px] px-2 py-1 bg-blue-400/40  text-blue-800 dark:text-blue-400 rounded-md font-medium">
                    {transaction.riskScoreStatusOne}
                  </span>
                </div>
                <span className="text-[9px] px-2 py-1 bg-blue-400/40  text-blue-800 dark:text-blue-400 rounded-md font-medium w-fit">
                  {transaction.riskScoreStatusTwo}
                </span>
              </div>

              {/* Transaction Details */}
              <div className="space-y-2">
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {transaction.event}
                </div>
                <div className="text-lg sm:text-xl font-semibold text-green-500  dark:text-green-500">
                  {transaction.value}
                </div>
                <div className="">
                  <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 font-mono break-all"> Account {transaction.account}</span>
                </div>
              </div>

              {/* Risk Factors */}
              <div className="space-y-2">
                <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {transaction.riskFactor}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className=" px-1 py-1 dark:bg-yellow-500/30 bg-yellow-500/30 text-yellow-800 dark:text-yellow-400 rounded-md text-[10px] font-medium">
                    {transaction.riskFactorStatusOne}
                  </span>
                  <span className=" px-1 py-1 dark:bg-yellow-500/30 bg-yellow-500/30 text-yellow-800 dark:text-yellow-400 rounded-md text-[10px] font-medium">
                    {transaction.riskFactorStatusTwo}
                  </span>
                  {transaction.riskFcatorStatusThree && (
                    <span className=" px-1 py-1 dark:bg-yellow-500/30 bg-yellow-500/30 text-yellow-800 dark:text-yellow-400 rounded-md text-[10px] font-medium">
                      {transaction.riskFcatorStatusThree}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Location & Time Section */}
            <div className="mt-5">
              <div className="flex-shrink-0 lg:w-48 lg:mt-0">
                <div className="space-y-1 p-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Location and Time
                  </span>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {transaction.location}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-[12px]">{transaction.time}</span>
                </div>
                {/* Action Buttons */}
                <div className="flex  xs:flex-row gap-2 sm:gap-3 mt-4 lg:mt-0 lg:flex-col lg:justify-center lg:w-32 w-fit">
                  <button className="flex cursor-pointer items-center gap-2 lg:gap-3 px-2 py-1 bg-gray-400 hover:bg-blue-500 dark:bg-blue-900/80 dark:hover:bg-blue-800/20 text-white dark:text-blue-500 rounded-md transition-colors duration-200 text-[14px] font-medium">
                    <Pen className="h-4 w-4 ml-2" />
                    <span className="sm:inline">{transaction.firstButton}</span>
                  </button>
                  <button className="flex cursor-pointer items-center gap-3 px-2 py-1 bg-red-500 hover:bg-red-300 dark:bg-red-900/60 dark:hover:bg-red-800/40 text-white dark:text-red-300 rounded-md transition-colors duration-200 text-[14px] font-medium">
                    <AlertOctagon className="h-4 w-4 ml-2" />
                    <span className=" sm:inline">{transaction.secondButton}</span>
                  </button>
                </div>
              </div>
            </div>



          </div>

        ))}
      </div>
    </div>
  )
}

export default HighRiskTransactionQueue
