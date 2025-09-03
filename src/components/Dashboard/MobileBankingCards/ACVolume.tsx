import { featureUsageAnalytics, systemPerformances } from "../../../utils"
import { motion } from 'framer-motion';


const ACVolume = () => {

    const getProgressValue = (rate: string): number => {
        return parseFloat(rate); // Removes the "%" and converts to float
    };
    return (
        <div>
            {/* Analytics Columns */}
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
                {/* Feature Usage Analytics */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-3 sm:p-4">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-[23px] mb-3 sm:mb-4 md:mb-5 text-gray-600 dark:text-white font-semibold">
                        Feature Usage Analytics
                    </h1>
                    <div className="space-y-2 sm:space-y-3">
                        {featureUsageAnalytics.map((item, index) => (
                            <div key={index} className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                                        {item.title}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                                        {item.value}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: item.value }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className="h-full rounded-full bg-blue-600"
                                        style={{ width: item.value }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Performance */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-3 sm:p-4 mt-3 sm:mt-0">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-[23px] mb-3 sm:mb-4 md:mb-5 text-gray-600 dark:text-white font-semibold">
                        System Performance
                    </h1>
                    <div className="space-y-2 sm:space-y-3">
                        {systemPerformances.map((item, index) => (
                            <div key={index} className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                                        {item.title}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                                        {item.rate}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                                    <div
                                        className="h-full rounded-full transition-all duration-300"
                                        style={{
                                            width: `${getProgressValue(item.rate)}%`,
                                            backgroundColor:
                                                getProgressValue(item.rate) > 90
                                                    ? '#10B981' // green
                                                    : getProgressValue(item.rate) > 70
                                                        ? '#F59E0B' // yellow
                                                        : '#EF4444' // red
                                        }}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Stats Cards */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-3 sm:mt-4">
                            <div className="shadow-sm p-3 sm:p-4 w-full dark:bg-gray-900/90 rounded-md">
                                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">Active Members</p>
                                <span className="font-semibold text-sm sm:text-[15px] dark:text-white">18,450</span>
                            </div>
                            <div className="shadow-sm p-3 sm:p-4 w-full dark:bg-gray-900/90 rounded-md">
                                <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">Avg Points/User</p>
                                <span className="font-semibold text-sm sm:text-[15px] dark:text-white">1,980</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ACVolume
