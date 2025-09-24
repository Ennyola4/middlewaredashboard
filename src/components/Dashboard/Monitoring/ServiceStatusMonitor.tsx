import { Activity } from "lucide-react"
import { serviceStatusMonitor } from "../../../utils"

const ServiceStatusMonitor = () => {
    return (
        <div className="m-3 shadow-sm p-3">
            <div>
                <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
                    <Activity className="w-4 h-4 sm:w-8 sm:h-8 text-green-500" />
                    <h1 className=" sm:text-sm md:text-sm text-gray-600 dark:text-gray-200 font-semibold font-serif">
                        Service Status Monitor
                    </h1>
                </div>
                {serviceStatusMonitor.map((status, index) => (
                    
                        <div key={index} className="shadow-md rounded-md dark:bg-gray-900">
                            <div className="p-3 flex justify-between items-center gap-2 ">
                                <div className="flex items-center gap-2">
                                    <div className={`${status.dot} w-3 h-3 rounded-full animate-pulse`}></div>
                                    <div>
                                        <span className="dark:text-white font-semibold" >{status.title}</span>
                                    </div>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-md ${status.bgColor} ${status.textColor[2]}`}>{status.status}</span>
                            </div>
                            <p className="text-xs text-gray-500 ml-5">Last checked: {status.time}</p>
                            <div className="grid  grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 items-center p-3 shadow-md mb-5 rounded-md">
                                <div className="space-y-1">
                                    <span className="flex justify-between items-center p-3">
                                        <p className="text-sm text-gray-500 dark:text-white">Uptime</p>
                                        <span className={`text-xs dark:text-white whitespace-nowrap ${status.textColor[0]}`}>{status.uptimeRate}</span>
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-white">
                                            <div
                                                className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${parseFloat(status.uptimeRate)}%` }}
                                            ></div>
                                        </div>

                                    </div>
                                </div>


                                <div className="space-y-1">

                                    <span className="flex justify-between items-center p-3">
                                        <p className="text-xs text-gray-500 dark:text-white">CPU</p>
                                        <span className={`text-xs dark:text-white whitespace-nowrap ${status.textColor[1]}`}>{status.cpuRate}</span>
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-white">
                                            <div
                                                className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${parseFloat(status.cpuRate)}%` }}
                                            ></div>
                                        </div>

                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <span className="flex justify-between items-center p-3">
                                        <p className="text-xs text-gray-500 dark:text-white">Memory</p>
                                        <span className={`text-xs dark:text-white whitespace-nowrap ${status.textColor[2]}`}>{status.memoryRate}</span>
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-white">
                                            <div
                                                className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${parseFloat(status.memoryRate)}%` }}
                                            ></div>
                                        </div>

                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <span className="flex justify-between items-center p-3">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Response Time</p>
                                        <p className="text-sm font-medium dark:text-white">{status.responseTime}</p>
                                    </span>

                                </div>
                                <div className="flex gap-3 items-center text-sm text-gray-600 dark:text-gray-200">
                                    <span>Requests per minute : </span>
                                    <span>{status.RPM}</span>
                                </div>
                            </div>

                        </div>
                    
                ))

                }
            </div>
        </div>
    )
}

export default ServiceStatusMonitor
