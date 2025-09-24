import { integrationCategories } from "../../../utils"

const IntegrationCategories = () => {

    const statsData = [
        { number: "23", label: "Implemented", color: "text-green-600 dark:text-green-500", bgColor: "bg-green-400/10" },
        { number: "12", label: "Pending", color: "text-yellow-600 dark:text-yellow-500", bgColor: "bg-yellow-400/10" },
        { number: "5", label: "Rejected", color: "text-red-600 dark:text-red-500", bgColor: "bg-red-400/10" }
    ];
    return (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full p-2 sm:p-3 lg:p-4 dark:text-white">
            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-3 sm:p-4 rounded-md">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 border-gray-200 dark:border-gray-600 pb-2 p-2 sm:p-3">
                    Integration Categories
                </h3>
                <div className="space-y-2 rounded-md">
                    {integrationCategories.map((item, index) => {
                        const progressBar = parseFloat(item.bar)
                        const barColor = progressBar > 90 ? "bg-blue-500" : progressBar < 90 ? "bg-blue-500" : "bg-blue-500"

                        return (
                            <div key={index}>
                                <div className="shadow-sm rounded-md p-2 sm:p-3 mb-3 sm:mb-4 dark:bg-gray-950">
                                    <div className="p-2 flex justify-between xs:flex-row xs:justify-between xs:items-center gap-2">
                                        <div>
                                            <span className="text-sm sm:text-base">{item.title}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 sm:gap-4">
                                            <span className={`${item.textColor[0]} text-xs px-2 py-1 ${item.bgColor[0]} rounded-md`}>{item.status[0]}</span>
                                            <span className={`${item.textColor[1]} text-xs px-2 py-1 ${item.bgColor[1]} rounded-md`}>{item.status[1]}</span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2 sm:h-2.5 mt-2">
                                        <div
                                            className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                                            style={{ width: `${progressBar}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex-1 p-3 sm:p-4 dark:bg-gray-900 bg-white shadow-sm rounded-md">
                <h3 className="text-lg sm:text-xl lg:text-2xl p-3 sm:p-4 lg:p-5 font-semibold text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 pb-2">
                    System Health
                </h3>
                <div>
                    <div className="w-full flex flex-col justify-center items-center dark:text-white mt-4 sm:mt-5">
                        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-green-500 mb-4 sm:mb-5">99.7%</h1>
                    </div>
                    <p className="flex flex-col text-xs sm:text-sm justify-center items-center dark:text-white mb-4">
                        Overall Uptime
                    </p>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-2 sm:gap-3 mt-10 lg:gap-4 w-full">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`dark:${stat.bgColor} p-3 mt-3 sm:p-4 lg:p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 ${stat.bgColor}`}
                        >
                            {/* Number Display */}
                            <div className="flex justify-center items-center mb-1 sm:mb-2">
                                <h1 className={`font-semibold text-lg sm:text-xl lg:text-2xl ${stat.color}`}>
                                    {stat.number}
                                </h1>
                            </div>

                            {/* Label */}
                            <div className="flex justify-center items-center">
                                <p className={`text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center ${stat.color}`}>
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IntegrationCategories