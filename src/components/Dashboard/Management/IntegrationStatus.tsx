import {   Plug } from "lucide-react"
import { integrationStatus } from "../../../utils"

const IntegrationStatus = () => {
    return (
        <div className="dark:text-white">
            <div className="m-2 sm:m-4 shadow-sm rounded-md p-3 sm:p-5 dark:bg-gray-900">
                {/* Header Section */}
              <div className="flex xs:flex-row xs:justify-between xs:items-center gap-3 p-2 sm:p-3 mb-4">
                    <div className="flex-1">
                        <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 dark:text-white">
                            Integration Status
                        </h1>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="flex gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded-md cursor-pointer text-blue-500 bg-blue-500/20 hover:bg-blue-700 hover:text-white dark:bg-gray-300 dark:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-700 items-center justify-center whitespace-nowrap">
                            <Plug className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className=" xs:hidden">Add Integration</span>
                        </div>
                    </div>
                </div>
                {integrationStatus.map((item, index) => (
                    <div key={index} className="p-3 sm:p-4 shadow-sm rounded-md mb-4 dark:bg-gray-950">
                        {/* Main content - stacked on mobile, side by side on larger screens */}
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                            <div className="flex-1">
                                {/* Status badges - wrap on small screens */}
                                <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
                                    <span className="px-2 py-1 text-xs bg-gray-600/50 text-white rounded-md">{item.id}</span>
                                    <span className={`${item.textColor[0]} px-2 py-1 text-xs rounded-md ${item.bgColor[0]}`}>{item.status[0]}</span>
                                    <span className={`${item.textColor[1]} px-2 py-1 text-xs rounded-md ${item.bgColor[1]}`}>{item.status[1]}</span>
                                </div>
                                
                                {/* Narration */}
                                <div className="mt-3 mb-3 text-sm dark:text-white">
                                    <span>{item.narration}</span>
                                </div>
                                
                                {/* Stats - stack on mobile, wrap on tablet */}
                                <div className="flex flex-col xs:flex-row xs:flex-wrap gap-2 xs:gap-3 text-xs text-gray-500 mb-3">
                                    <span>Uptime: {item.uptime}</span>
                                    <span>API Calls: {item.apiCalls}</span>
                                    <span className="xs:w-full sm:w-auto">Response Time: {item.responseTime}</span>
                                    <span>Error Rate: {item.errorRate}</span>
                                </div>
                                
                                {/* Timestamp */}
                                <div className="text-xs text-gray-500">
                                    <span>{item.time}</span>
                                </div>
                            </div>
                            
                            {/* Action buttons - full width on mobile, side by side on tablet+ */}
                            <div className="flex flex-col xs:flex-row lg:flex-col gap-2 xs:gap-3 lg:gap-2 text-xs lg:flex-shrink-0 lg:min-w-[120px]">
                                <button className="px-3 py-2 border cursor-pointer hover:bg-gray-700/20 hover:text-black transition-all duration-500 dark:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-black rounded-md bg-gray-100/10 w-full xs:flex-1 lg:w-full">
                                    {item.button[0]}
                                </button>
                                <button className="px-3 py-2 border cursor-pointer hover:bg-gray-700/20 hover:text-black transition-all duration-500 dark:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-black rounded-md bg-gray-100/10 w-full xs:flex-1 lg:w-full">
                                    {item.button[1]}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default IntegrationStatus