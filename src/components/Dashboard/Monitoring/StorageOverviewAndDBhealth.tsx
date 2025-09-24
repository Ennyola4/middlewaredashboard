const storageOverview = [
    {
        title: "Primary Storage",
        value: "78%",
        size: "2.8TB of 3.6TB"
    }
]

const StorageOverviewAndDBhealth = () => {
    return (
        <div className="m-2 sm:m-3 p-2 sm:p-3">
            {storageOverview.map((storage, index) => {
                const progressBar = parseFloat(storage.value)
                const barColor = progressBar > 90 ? "bg-gray-500" : progressBar < 90 ? "bg-gray-500" : "bg-gray-500"

                return (
                    <div key={index} className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">

                        {/* First Div - Storage Overview */}
                        <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 pb-2 border-gray-200 dark:border-gray-600">
                                Storage Overview
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between xs:flex-row xs:justify-between xs:items-center gap-2">
                                    <span className="text-sm sm:text-base text-gray-800 dark:text-white font-medium">
                                        {storage.title}
                                    </span>
                                    <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                                        {storage.value}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 sm:h-2.5">
                                    <div
                                        className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                                        style={{ width: `${progressBar}%` }}
                                    ></div>
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    {storage.size} used
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-3 sm:mt-4">
                                <div className="shadow-sm p-3 sm:p-4 w-full dark:bg-gray-950 rounded-md">
                                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">Backup Success</p>
                                    <span className="font-semibold text-sm sm:text-[15px] dark:text-green-500 text-green-500">99.9%</span>
                                </div>
                                <div className="shadow-sm p-3 sm:p-4 w-full dark:bg-gray-950 rounded-md">
                                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">Daily Backup Size</p>
                                    <span className="font-semibold text-sm sm:text-[15px] dark:text-blue-500 text-blue-500">12GB</span>
                                </div>
                            </div>
                        </div>

                        {/* Second Div - Database Health */}
                        <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 pb-2 border-gray-200 dark:border-gray-600">
                                Database Health
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-3 sm:mt-4">
                                <div className="shadow-sm p-3 sm:p-4 w-full dark:bg-gray-950 rounded-md">
                                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">Active Connections</p>
                                    <span className="font-semibold text-sm sm:text-[15px] dark:text-green-500 text-green-500">245</span>
                                </div>
                                <div className="shadow-sm p-3 sm:p-4 w-full dark:bg-gray-950 rounded-md">
                                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">Query Response</p>
                                    <span className="font-semibold text-sm sm:text-[15px] dark:text-blue-500 text-blue-500">0.8ms</span>
                                </div>
                            </div>
                            <div className="p-3 m-3 text-sm">
                                <div className="flex justify-between mb-3">
                                    <span className="text-gray-500 dark:text-gray-300">Primary DB</span>
                                    <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-md text-xs">Online</span>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-gray-500 dark:text-gray-300">Replica DB</span>
                                    <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-md text-xs">Synced</span>
                                </div>
                                <div className="flex justify-between mb-3">
                                    <span className="text-gray-500 dark:text-gray-300">Backup Status</span>
                                    <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-md text-xs">success</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default StorageOverviewAndDBhealth