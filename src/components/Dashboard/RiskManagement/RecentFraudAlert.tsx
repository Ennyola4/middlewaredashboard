import { recentFraudAlerts } from "../../../utils"

const RecentFraudAlert = () => {
    return (
        <div className="px-4 sm:px-5 mt-6">

            <div className="p-3 sm:p-5 shadow-sm bg-white dark:bg-gray-800 rounded-md">
                <div>
                    <h3 className="text-[20px] p-5 font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                        Recent Fraud Alerts
                    </h3>
                </div>
                {recentFraudAlerts.map((alert, index) => (
                    <div key={index}>
                        <div className="rounded-md shadow-sm mb-3 p-4 dark:bg-gray-950 ">
                            <div className="flex gap-3 items-center p-2 sm:p-4 bg-white dark:bg-gray-950 rounded-md">
                                <div className="text-[10px]  text-gray-800 dark:text-white bg-gray-400/30 dark:bg-gray-600/30 px-2 py-1 rounded-md">
                                    {alert.id}
                                </div>

                                <span className={`${alert.textColor} font-semibold text-[11px] border rounded-md px-2 py-1 `}>
                                    {alert.status[0]}
                                </span>
                                <span className={`${alert.textColorTwo} font-semibold text-[11px] border rounded-md px-2 py-1 `}>
                                    {alert.status[1]}
                                </span>

                            </div>
                            <div className="text-sm text-gray-400 dark:text-gray-300">
                                {alert.account}
                            </div>
                            <span className="text-sm text-gray-400 dark:text-gray-400">{alert.time}</span>
                            <div className="mt-2">
                                <span className="px-2 py-1 bg-blue-500 cursor-pointer text-xs rounded-md hover:bg-blue-600 text-white">{alert.buttonOne}</span>
                                <span className="ml-3 px-2 py-1 bg-red-500 text-xs cursor-pointer rounded-md hover:bg-red-700 text-white">{alert.buttonTwo}</span>
                            </div>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default RecentFraudAlert
