import { hourlyOnboardingActivity, unusualPatternDetected } from "../../../utils"

const UnusualPatterDetected = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full p-3 sm:p-4">

            {/* Unusual Patterns Detected */}

            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-4 sm:p-5 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-gray-200 dark:border-gray-600 pb-2">
                    Unusual Patterns Detected
                </h3>
                <div className="space-y-4 rounded-md p-2">
                    {unusualPatternDetected.map((item, index) => {
                        const progressBar = parseFloat(item.bar)
                        const barColor = progressBar > 40 ? "bg-blue-500" : progressBar > 50 ? "bg-blue-500" : "bg-blue-500"

                        return (
                            <div key={index} className="space-y-2 dark:bg-gray-950 p-3 rounded-md shadow-sm">
                                <div className="flex  xs:flex-row xs:justify-between xs:items-center justify-between  gap-1">
                                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                                        {item.title}
                                    </span>
                                    <span className={`${item.textColor} text-sm sm:text-base font-semibold`}>
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

            {/* Hourly Onboarding Activity*/}

            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-4 sm:p-5 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                    Hourly Onboarding Activity
                </h3>
                <div className="space-y-3">
                    {hourlyOnboardingActivity.map((item, index) => (
                        <div key={index} className="flex dark:text-white dark:bg-gray-950 justify-between items-center shadow-sm p-2 rounded-md">
                            <div>
                                <span>
                                    {item.time}
                                </span>
                            </div>
                            <div className="flex flex-col space-x-3">
                                <div className="flex gap-8 justify-end items-end">
                                    <span className={`${item.textColor[0]} p-3 font-semibold`}>
                                        {item.value[0]}
                                    </span>
                                     <span className={`${item.textColor[1]} p-3 font-semibold`}>
                                        {item.value[1]}
                                    </span>
                                </div>
                               <div className="text-xs flex gap-2 text-gray-400">
                                 <span>
                                    {item.title[0]}
                                </span>
                                <span>
                                    {item.title[1]}
                                </span>
                               </div>
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default UnusualPatterDetected
