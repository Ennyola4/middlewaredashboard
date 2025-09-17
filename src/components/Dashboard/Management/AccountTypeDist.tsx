import { accountTypeDistribution, customerStatusOverview } from "../../../utils"

const AccountTypeDist = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full p-3 sm:p-4">

            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-4 sm:p-2 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-gray-200 dark:border-gray-600 pb-2 p-3">
                    Account Type Distribution
                </h3>

                <div className="space-y-2 rounded-md">
                    {accountTypeDistribution.map((item, index) => {
                        const progressBar = parseFloat(item.bar)
                        const barColor = progressBar > 90 ? "bg-green-500" : progressBar < 90 ? "bg-green-500" : "bg-green-500"

                        return (
                            <div>
                                <div key={index} className="m-3 p-4 mb-5 shadow-sm rounded-md dark:bg-gray-950">
                                    <div className="flex justify-between mb-1">
                                        <span className="dark:text-white font-semibold">{item.title}</span>
                                        <div className="flex gap-1 p-1 items-center">
                                            <span className="text-sm dark:text-white">{item.value}</span>
                                            <span className="text-xs text-gray-500">{item.performance}</span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2 sm:h-2.5">
                                        <div
                                            className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                                            style={{ width: `${progressBar}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    }
                </div>
            </div>

            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-4 sm:p-5 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-gray-200 dark:border-gray-600 pb-2">
                    Customer Status Overview
                </h3>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 w-full mt-10">
                    {customerStatusOverview.map((stat, index) => (
                        <div
                            key={index}
                            className={` p-3 mt-3 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 ${stat.bgColor}`}
                        >
                            {/* Number Display */}
                            <div className="flex justify-center items-center mb-2 sm:mb-2">
                                <h1 className={`font-bold text-lg sm:text-2xl lg:text-2xl  ${stat.textColor}`}>
                                    {stat.value}
                                </h1>
                            </div>

                            {/* Label */}
                            <div className="flex justify-center items-center">
                                <p className={`${stat.textColor} text-xs sm:text-xs text-center`}>
                                    {stat.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AccountTypeDist
