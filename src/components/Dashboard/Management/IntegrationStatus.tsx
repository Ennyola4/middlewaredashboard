import {  Plug } from "lucide-react"
import { integrationStatus } from "../../../utils"

const IntegrationStatus = () => {
    return (
        <div className="dark:text-white">
            <div className="m-4 shadow-sm rounded-md p-5 dark:bg-gray-900">
                {/* Header Section */}
                <div className="flex xs:flex-row xs:justify-between xs:items-center gap-3 p-2 sm:p-3 mb-4">
                    <div className="flex-1">
                        <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 dark:text-white">
                            Integration Status
                        </h1>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="flex gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded-md cursor-pointer text-blue-500 bg-blue-500/20 hover:bg-blue-600 hover:text-white dark:bg-gray-300 dark:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-700 items-center justify-center whitespace-nowrap">
                            <Plug className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className=" xs:hidden">Add Integration</span>
                        </div>
                    </div>
                </div>
                {integrationStatus.map((item, index) => (
                    <div key={index} className="p-4 shadow-sm rounded-md mb-4 flex justify-between dark:bg-gray-950">
                        <div>
                            <div className="flex gap-3">
                                <span className="px-2 py-1 text-xs bg-gray-600/50 text-white rounded-md">{item.id}</span>
                                <span className={`${item.textColor[0]} px-2 py-1 text-xs rounded-md ${item.bgColor[0]}`}>{item.status[0]}</span>
                                <span className={`${item.textColor[1]} px-2 py-1 text-xs rounded-md ${item.bgColor[1]}`}>{item.status[1]}</span>
                            </div>
                            <div className="mt-3 mb-1 text-sm dark:text-white">
                                <span>{item.narration}</span>
                            </div>
                            <div className="flex gap-3 text-xs text-gray-500">
                                <span>Uptime :{item.uptime}</span>
                                <span>API Calls :{item.apiCalls}</span>
                                <span>Response Time :{item.responseTime}</span>
                                <span>Error Rate: {item.errorRate}</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                <span>{item.time}</span>
                            </div>
                        </div>
                        <div className=" flex gap-3 text-xs">
                            <span>
                                <button className="px-2 py-1 border cursor-pointer hover:bg-gray-700/20 hover:text-black transition-all duration-500 dark:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-black rounded-md bg-gray-100/10">{item.button[0]}</button>
                            </span>
                            <span>
                                <button className="px-2 py-1 border cursor-pointer hover:bg-gray-700/20 hover:text-black transition-all duration-500 dark:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-black rounded-md bg-gray-100/10">{item.button[1]}</button>
                            </span>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default IntegrationStatus
