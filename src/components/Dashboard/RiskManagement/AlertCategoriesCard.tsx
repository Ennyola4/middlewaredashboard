import { alertCategoriesCard, alertDistribution } from "../../../utils"
import { AlertTriangle } from 'lucide-react';

const AlertCategoriesCard = () => {
    return (
        <div className="w-full bg-white dark:bg-black p-2 sm:p-4 rounded-lg">

            {/* Header */}
            <div className="flex p-2 items-center gap-2 mb-4 sm:mb-6">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                    Categories
                </h2>
                <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 text-xs px-2 py-1 rounded-full ml-auto">
                    {alertCategoriesCard.length}
                </span>
            </div>

            <div className="flex flex-col p-2 lg:flex-row gap-4 sm:gap-6 w-full">

                {/* Alert Categories*/}
                <div className="flex-1 p-5 space-y-3 sm:space-y-4 shadow-sm bg-white dark:bg-gray-900 rounded-md">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                        Alert Categories
                    </h3>
                    {alertCategoriesCard.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-950 rounded-md p-2 sm:p-4 shadow-sm hover:shadow-md border-l-2 border-gray-400 transition-all duration-300">
                            <div className="flex justify-between items-start gap-3">
                                {/* Title and Value */}
                                <div className="flex-1">
                                    <h4 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="lg:text-[10px] sm:text-sm text-gray-400 dark:text-gray-400 ">
                                        {item.value}
                                    </p>
                                </div>

                                {/* Status Badge */}
                                <div className="flex-shrink-0">
                                    <span className={`px-2 py-1 border text-[11px] rounded-full font-small ${item.textColor} whitespace-nowrap`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Alert Distribution */}
                <div className="flex-1 space-y-3 dark:bg-gray-900 p-4 rounded-md shadow-sm sm:space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                        Alert Distribution
                    </h3>
                    {alertDistribution.map((item, index) => {
                        const progressBar = parseFloat(item.bar)
                        const barColor = progressBar < 30 ? "bg-red-500" : progressBar < 50 ? "bg-yellow-500" : progressBar > 60 ? "bg-green-500" : "bg-green-500"

                        return (
                            <div key={index} className="bg-white dark:bg-gray-950 rounded-md p-4 shadow-sm border-r-2 border-gray-400 dark:text-white">
                                <div className="flex justify-between xs:flex-row xs:justify-between xs:items-center gap-2 mb-3">
                                    <span className={`${item.textColor} font-semibold text-sm sm:text-base`}>
                                        {item.title}
                                    </span>
                                    <span className="text-sm sm:text-base font-bold">
                                        {item.value}
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
                    })

                    }
                </div>

            </div>
           
        </div>
    )
}

export default AlertCategoriesCard