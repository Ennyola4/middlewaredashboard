import { Download } from "lucide-react"
import { recentDownload, transactionChannels } from "../../../utils"

const TransactionChannels = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full p-3 sm:p-4">
            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-4 sm:p-2 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-gray-200 dark:border-gray-600 pb-2 p-3">
                    Transaction Channels
                </h3>
                <div className="space-y-2 rounded-md">
                    {transactionChannels.map((report, index) => {
                        const progressBar = parseFloat(report.bar)
                        const barColor = progressBar < 50 ? "bg-green-500" : progressBar > 50 ? "bg-green-500" : "bg-green-500"

                        return (
                            <div key={index}>
                                <div className="p-2 shadow-sm rounded-md dark:bg-gray-950 dark:text-white">
                                    <div className="flex  xs:flex-row justify-between">
                                        <span className="p-2">
                                            {report.title}
                                        </span>
                                        <div className="flex gap-1 items-center">
                                            <span className="font-semibold">{report.value}</span>
                                            <span className="text-xs">{report.performance}</span>
                                        </div>
                                    </div>
                                    <span className="p-2 text-sm text-gray-400">Volume :{report.volume}</span>
                                    <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2 sm:h-2.5">
                                        <div
                                            className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                                            style={{ width: `${progressBar}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex-1 bg-white dark:bg-gray-900 shadow-sm p-2 sm:p-2 rounded-md">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 border-gray-200 dark:border-gray-600 pb-2 p-3">
                    Recent Downloads
                </h3>
                <div className="p-3">
                    {recentDownload.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 mt-2 shadow-sm rounded-md dark:bg-gray-950 dark:text-white mb-5">
                            <div className="mb-1 sm:mb-0">
                                <div>
                                    <div>
                                        <p className="text-sm sm:text-base">{item.title}</p>
                                    </div>
                                    <div className="flex flex-col xs:flex-row gap-2 text-sm text-gray-400" >
                                        <span>{item.time}</span>
                                        <span>{item.size}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row sm:flex-col items-end sm:items-end gap-2 sm:gap-0 sm:p-2 w-full sm:w-auto mt-2 sm:mt-0">
                                <div className="text-blue-400 text-xs p-0 sm:p-2">
                                    {item.downloads}
                                </div>
                                <div className="px-2 py-1 text-xs  border flex gap-2 rounded-md text-black dark:text-black dark:bg-gray-200 dark:border items-center justify-center cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-500">
                                    <Download size={16} className="text-sm" />
                                    {item.button}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TransactionChannels