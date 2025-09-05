import { Download, Filter, Search } from "lucide-react";
import { recentRiskTransactions, riskLevelDistribution, riskPatternAnalysis } from "../../../utils";

const RiskLevelDistribution = () => {
    return (
        <div>
            <div className="p-3 sm:p-4 flex flex-col lg:flex-row gap-4 lg:gap-5 mb-5">
                <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800/90 rounded-lg shadow p-3 sm:p-4">
                    <h2 className="text-base sm:text-lg p-2 font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-white">
                        Risk Level Distribution
                    </h2>
                    {riskLevelDistribution.map((risk, index) => {
                        const progressBar = parseFloat(risk.bar);
                        const barColor =
                            progressBar > 90 ? "bg-green-500" :
                                progressBar < 10 ? "bg-red-500" :
                                    "bg-blue-500";

                        return (
                            <div key={index} className="mb-3 sm:mb-4 shadow-sm p-2 sm:p-3 dark:bg-gray-900/100 rounded-md last:mb-0">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs sm:text-sm md:text-[15px] font-medium text-gray-700 dark:text-white truncate">
                                        {risk.title}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                                        {risk.value}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-1.5 sm:h-2 mb-1">
                                    <div
                                        className={`h-full rounded-full ${barColor}`}
                                        style={{ width: `${progressBar}%` }}
                                    ></div>
                                </div>
                                <div className="text-[10px] sm:text-[9.5px] text-gray-700/50 dark:text-gray-400">
                                    {risk.bar}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800/90 rounded-lg shadow p-3 sm:p-4">
                    <h2 className="text-base sm:text-lg p-2 font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-white">
                        Risk Pattern Analysis
                    </h2>
                    {riskPatternAnalysis.map((risk, index) => {
                        const progressBar = parseFloat(risk.bar);
                        const barColor =
                            progressBar > 90 ? "bg-green-500" :
                                progressBar < 10 ? "bg-red-500" :
                                    "bg-blue-500";

                        return (
                            <div key={index} className="mb-3 sm:mb-4 shadow-sm p-2 sm:p-3 dark:bg-gray-900/100 rounded-md last:mb-0">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs sm:text-sm md:text-[15px] font-medium text-gray-700 dark:text-white truncate">
                                        {risk.title}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                                        {risk.value}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-1.5 sm:h-2 mb-1">
                                    <div
                                        className={`h-full rounded-full ${barColor}`}
                                        style={{ width: `${progressBar}%` }}
                                    ></div>
                                </div>
                                <div className="text-[10px] sm:text-[9.5px] text-gray-700/50 dark:text-gray-400">
                                    {risk.bar}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="p-3 m-3 sm:p-4 bg-white dark:bg-gray-950 rounded-md shadow-sm mb-5">
                <div className="flex mb-3 flex-col xs:flex-row xs:items-center xs:justify-between gap-3 p-3 bg-white dark:bg-gray-950">
                    {/* Header Title */}
                    <h1 className="text-lg sm:text-xl mb-5 font-semibold text-gray-800 dark:text-white">
                        Recent Risk Transactions
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap xs:flex-nowrap gap-2 sm:gap-3">

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
                {recentRiskTransactions.map((transaction, index) => (
                    <div className="flex justify-between shadow-sm rounded-md p-2 sm:p-4 mb-5 dark:bg-gray-900/50">
                        <div key={index} className="p-3 sm:p-3 mb-5">
                            <div className="flex gap-2 items-center">
                                <div className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white w-fit">
                                    {transaction.id}
                                </div>
                                <div className="text-[10px] px-2 py-1 bg-yellow-400/20 dark:bg-yellow-300/40 rounded-md text-yellow-600 dark:text-yellow-300 w-fit">
                                    {transaction.status}
                                </div>
                            </div>
                            <div className="mt-2 text-sm font-semibold text-gray-400 dark:text-gray-400">
                                {transaction.account}
                            </div>
                            <div className="mt-1 text-xs text-gray-800 dark:text-gray-400 flex items-center gap-2">
                                <p>Reason:</p>
                                <span>{transaction.action}</span>
                            </div>
                            <div className="mt-1  text-sm text-gray-800 dark:text-gray-400 flex items-center gap-2">
                                <p className="text-xs">Time</p>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    {transaction.time}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-800 dark:text-white mb-3">
                                {transaction.value}
                            </div>
                            <div className="text-xs cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-md font-medium transition-colors duration-200 text-center w-fit">
                                {transaction.button}
                            </div>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default RiskLevelDistribution
