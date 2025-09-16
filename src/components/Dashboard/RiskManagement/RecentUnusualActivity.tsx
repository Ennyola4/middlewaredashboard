import { Clock4, Download, Funnel, MapPin } from "lucide-react"
import { recentUnusualActivity } from "../../../utils"

const RecentUnusualActivity = () => {
    return (
        <div className="mt-5">
            <div className="m-3 p-4 rounded-md dark:bg-gray-950 shadow-sm">
                <div>
                    <h3 className="text-lg sm:text-[20px] sm:p-5 font-semibold text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 pb-2">
                        Recurring Exception Patterns
                    </h3>

                </div>
                <div className="flex gap-3 self-start sm:self-start items-center w-full sm:w-auto mb-5">
                    <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-blue-500/10 hover:bg-blue-500 hover:text-white dark:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-blue-500 dark:text-gray-800 rounded-md transition-colors duration-200 text-sm font-medium">
                        <Funnel className="h-4 w-4" />
                        <span className="sm:inline"> Filter</span>
                    </button>
                    <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-blue-500/10 hover:bg-blue-500 hover:text-white dark:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-blue-500 dark:text-gray-800 rounded-md transition-colors duration-200 text-sm font-medium">
                        <Download className="h-4 w-4" />
                        <span className="sm:inline">Export</span>
                    </button>
                </div>
                {recentUnusualActivity.map((item, index) => (
                    <div key={index} className="shadow-sm flex flex-col sm:flex-row justify-between rounded-md dark:bg-gray-900 p-3 mb-3">
                        <div className="flex-1 mb-3 sm:mb-0">
                            <div className="gap-3 flex flex-wrap mb-3">
                                <div>
                                    <span className="px-2 py-1 rounded-md bg-gray-700/20 text-white text-xs">{item.id}</span>
                                </div>
                                <span className={`${item.bgColor} px-2 py-1 text-[10px] mb-2 rounded-md items-center ${item.textColor}`}>{item.status[0]}</span>
                                <span className={`${item.bgColor} px-2 py-1 text-[10px] mb-2 rounded-md ${item.textColor}`}>{item.status[1]}</span>
                            </div>
                            <div className="mb-3">
                                <p className="text-sm text-gray-400 dark:text-gray-400">{item.userName}</p>
                            </div>
                            <div className="text-xs text-gray-500 flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    <span>{item.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock4 className="h-3 w-3" />
                                    <span>{item.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className="self-start sm:self-start">
                            <button className="items-center bg-blue-500 px-3 py-2 rounded-md text-sm cursor-pointer text-white hover:bg-blue-600 transition-all duration-100 w-full sm:w-auto">Investigate</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RecentUnusualActivity