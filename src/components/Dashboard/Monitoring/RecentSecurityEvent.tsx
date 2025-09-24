import { Eye } from "lucide-react"
import { recentSecurityEvent } from "../../../utils"

const RecentSecurityEvent = () => {
    return (
        <div>
            <div className="m-3 p-3 shadow-sm rounded-md dark:bg-gray-800">
                <div className="flex xs:flex-row xs:justify-between xs:items-center gap-3 p-2 sm:p-3 mb-4">
                    <div className="flex-1">
                        <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 dark:text-white">
                            Recent Security Events
                        </h1>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="flex gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded-md cursor-pointer text-blue-500 bg-blue-500/20 hover:bg-blue-600 hover:text-white dark:bg-gray-300 dark:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-700 items-center justify-center whitespace-nowrap">
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className=" xs:hidden">View All</span>
                        </div>
                    </div>
                </div>
                {recentSecurityEvent.map((event, index) => (
                    <div key={index} className="shadow-sm rounded-md  dark:bg-gray-950 p-3 mb-3 flex justify-between items-center">
                        <div>
                            <div className="flex gap-3">
                                <span className="text-xs bg-gray-400 rounded-md px-2 py-1 mb-3 text-white dark:text-gray-200 dark:bg-gray-500">{event.id}</span>
                                <span className={`${event.textColor[0]} rounded-md px-2 py-1 mb-3 text-xs ${event.bgColor[0]} `}>{event.status[0]}</span>
                                <span className={`${event.textColor[1]} rounded-md px-2 py-1 mb-3 text-xs ${event.bgColor[1]} `}>{event.status[1]}</span>
                            </div>
                            <div className="p-2 dark:text-white font-semibold">
                                <span>{event.title}</span>
                            </div>
                            <div className="flex gap-3 mb-2 text-xs text-gray-400 dark:text-gray-300">
                                <span>Source: {event.source} → </span>
                                <span>Target: {event.target}</span>
                            </div>
                            <div className="text-xs flex gap-3 text-gray-400 dark:text-gray-200">
                                <span>Attempts: {event.attempt}</span>
                                <span> . {event.time}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs rounded-md bg-gray-100 border-gray-100 px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-all duration-500 cursor-pointer">{event.button[0]}</span>
                            <span className="text-xs rounded-md bg-red-500 border-gray-100 text-white px-3 py-2 hover:bg-red-600 dark:hover:bg-red-700 dark:hover:text-gray-100 dark:text-white transition-all duration-500 cursor-pointer">{event.button[1]}</span>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default RecentSecurityEvent
