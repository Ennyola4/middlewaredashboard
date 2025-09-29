import { BellRing } from "lucide-react"
import { activeAlerts } from "../../utils"

const ActiveAlerts = () => {
    return (
        <div>
            <div className=" w-full  sm:p-2 bg-white rounded-md shadow-sm dark:bg-gray-900">
                <div className="flex p-3 items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <BellRing className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                        <h1 className="font-bold text-base sm:text-lg dark:text-white">Active Alerts</h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <p className="text-[10px]  bg-red-400/100 rounded-md text-white px-2 py-1 dark:text-white">1 Critical</p>
                        <p className="text-[11px] bg-yellow-400/100 rounded-md px-2 py-1 text-black dark:text-white">2 Alerts</p>
                    </div>
                </div>

                <div >
                    {activeAlerts.map((alert, index) => (
                        <div
                            key={`alert-${index}`}
                            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border-l-2 mb-3 ${
                                             alert.actionStatus === 'CRITICAL' ? 'border-red-500' :
                                             alert.actionStatus === 'WARNING' ? 'border-yellow-500' :
                                             alert.actionStatus === 'MEDIUM' ? 'border-orange-500' : 'border-blue-400/10'
                                              }"
                        >
                            {/* Action and Status */}
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-gray-800 dark:text-white">{alert.action}</h3>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${alert.actionStatus === 'CRITICAL' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                                    alert.actionStatus === 'WARNING' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                        alert.actionStatus === 'MEDIUM' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                                            'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                                    }`}>
                                    {alert.actionStatus}
                                </span>
                            </div>

                            {/* Description and Status */}
                            <div className="flex justify-between items-start mb-3">
                                <p className="text-[12px] text-gray-600 dark:text-gray-300">{alert.desc}</p>
                                <span className={`px-2 py-1 rounded-md text-[10px] border ${alert.descStatus === 'Active' ? 'text-green-500 border-green-300 dark:bg-green-900/50 dark:text-green-400' :
                                    alert.descStatus === 'investigating' ? 'text-blue-500 border-blue-300 dark:bg-blue-900/50 dark:text-blue-400' :
                                        alert.descStatus === 'resolved' ? 'text-gray-500 border-gray-300 dark:bg-gray-600 dark:text-gray-300' :
                                            'text-purple-500 border-purple-300 dark:bg-purple-900/50 dark:text-purple-400'
                                    }`}>
                                    {alert.descStatus}
                                </span>
                            </div>

                            {/* Source and Time */}
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                                <span>Source: {alert.source}</span>
                                <span>{alert.time}</span>
                            </div>

                            {/* Conditionally render buttons only if they exist */}
                            {(alert.buttonOne || alert.buttonTwo) && (
                                <div className="flex flex-row w-fit lg:flex-row xs:flex-row gap-2 xs:gap-3 xs:justify-start">
                                    {alert.buttonOne && (
                                        <button className="w-full xs:w-auto px-3 sm:px-4 py-2 cursor-pointer dark:text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
                                            {alert.buttonOne}
                                        </button>
                                    )}
                                    {alert.buttonTwo && (
                                        <button className="w-full xs:w-auto px-3 sm:px-4 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
                                            {alert.buttonTwo}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ActiveAlerts