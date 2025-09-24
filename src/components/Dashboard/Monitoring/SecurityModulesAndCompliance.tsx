import { complianceStatus, securityModuleStatus } from "../../../utils"

const SecurityModulesAndCompliance = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full p-3 sm:p-4">
            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm sm:p-2 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-gray-200 dark:border-gray-600 pb-2 p-3">
                    Security Modules Status
                </h3>
                <div className=" p-3">
                    {securityModuleStatus.map((item, index) => {
                        const progressBar = parseFloat(item.bar)
                        const barColor = progressBar < 90 ? "bg-yellow-500" : progressBar > 90 ? "bg-green-500" : "bg-blue-500"
                        return (
                            <div>
                                <div key={index} className="p-2 shadow-sm rounded-md mb-3 dark:bg-gray-950">
                                    <div className="flex p-2 justify-between">
                                        <div>
                                            <p className="dark:text-white font-semibold">{item.title}</p>
                                            <p className="text-gray-400 text-xs dark:text-gray-400">Last Updated{item.date}</p>
                                        </div>
                                        <div className="flex gap-2 mb-3 items-center">
                                            <span className={`${item.textColor} px-2 py-1 text-xs rounded-md ${item.bgColor}`}>{item.status}</span>
                                            <span className="text-xs text-gray-400 dark:text-gray-100">{item.bar}</span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-500 rounded-full h-1.5 sm:h-2">
                                        <div
                                            className={`h-full rounded-full ${barColor} transition-all duration-500`}
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

            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm sm:p-2 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-gray-200 dark:border-gray-600 pb-2 p-3">
                    Compliance Status
                </h3>
                <div className="p-3">
                    {complianceStatus.map((item, index) => {
                        const progressBar = parseFloat(item.value)
                        const barColor = progressBar < 90 ? "bg-yellow-500" : progressBar > 90 ? "bg-green-500" : "bg-blue-500"
                        return (
                            <div>
                                <div key={index} className="p-2 shadow-sm rounded-md mb-3 dark:bg-gray-950">
                                    <div className="flex p-2 justify-between">
                                        <div>
                                            <p className="dark:text-white font-semibold">{item.id}</p>
                                            <p className="text-sm font-medium dark:text-gray-200">{item.title}</p>
                                        </div>
                                        <div className="flex gap-2 mb-3 items-center">
                                            <span className={`${item.textColor} px-2 py-1 text-xs rounded-md ${item.bgColor}`}>{item.status}</span>
                                            <span className="text-xs text-gray-400 dark:text-gray-100">{item.value}</span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-500 rounded-full h-1.5 sm:h-2">
                                        <div
                                            className={`h-full rounded-full ${barColor} transition-all duration-500`}
                                            style={{ width: `${progressBar}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-gray-400 p-2 text-xs dark:text-gray-400">Last Audit{item.date}</p>

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

export default SecurityModulesAndCompliance
