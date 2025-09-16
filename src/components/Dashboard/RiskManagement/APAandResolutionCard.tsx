import { activityPatternAnalysis, resolutionStatus } from "../../../utils"

const APAandResolutionCard = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full p-3 sm:p-4">
            
            {/* Activity Pattern Analysis Section */}
            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-4 sm:p-5 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                    Activity Pattern Analysis
                </h3>
                <div className="space-y-4 rounded-md p-2">
                    {activityPatternAnalysis.map((item, index) => {
                        const progressBar = parseFloat(item.bar)
                        const barColor = progressBar > 40 ? "bg-blue-500" : progressBar > 50 ? "bg-red-500" : "bg-green-500"

                        return (
                            <div key={index} className="space-y-2 dark:bg-gray-950 p-4 rounded-md">
                                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center  gap-1">
                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                                        {item.title}
                                    </span>
                                    <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
                                        {item.value}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 sm:h-2.5">
                                    <div
                                        className={`h-full rounded-full ${barColor} transition-all duration-500 ease-out`}
                                        style={{ width: `${progressBar}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {progressBar}%
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Resolution Status Section */}
            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-4 sm:p-5 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                    Resolution Status
                </h3>
                <div className="space-y-3">
                    {resolutionStatus.map((item, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-950 rounded-md p-5 sm:p-4 border-r-2 border-blue-400">
                            <div className="flex  justify-between xs:flex-row xs:justify-between xs:items-center gap-2">
                                <span className={`text-sm sm:text-base font-medium ${item.textColor}`}>
                                    {item.title}
                                </span>
                                <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
                                    {item.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default APAandResolutionCard