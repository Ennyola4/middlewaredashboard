import { Download, NotebookPen, NotepadText } from "lucide-react"
import { scheduledReports } from "../../../utils"

const ScheduledReports = () => {
    return (
        <div className="p-2 sm:p-3 lg:p-4 shadow-sm m-1 sm:m-2 lg:m-3 dark:bg-gray-900 bg-white rounded-md">
            <div className="p-2 sm:p-3 lg:p-4">
                {/* Header Section */}
                <div className="flex xs:flex-row xs:justify-between xs:items-center gap-3 p-2 sm:p-3 mb-4">
                    <div className="flex-1">
                        <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 dark:text-white">
                            Customer Database
                        </h1>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="flex gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2 rounded-md cursor-pointer text-blue-500 bg-blue-500/20 hover:bg-blue-700 hover:text-white dark:bg-gray-300 dark:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-700 items-center justify-center whitespace-nowrap">
                            <NotepadText className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className=" xs:hidden">Create Report</span>
                        </div>
                    </div>
                </div>

                {/* Reports List */}
                <div className="space-y-3 sm:space-y-4">
                    {scheduledReports.map((item, index) => (
                        <div key={index} className="flex flex-col lg:flex-row lg:justify-between lg:items-start shadow-sm  dark:bg-gray-950 rounded-md p-3 sm:p-4 lg:p-5 gap-4 lg:gap-6 border  border-gray-200 dark:border-gray-700">

                            {/* Main Content */}
                            <div className="flex-1 min-w-0">
                                {/* Status Badges */}
                                <div className="flex flex-wrap gap-1 sm:gap-2 lg:gap-3 mb-3">
                                    <span className="bg-gray-300 dark:bg-gray-800 dark:text-white px-2 py-1 rounded-md text-xs font-mono">
                                        {item.id}
                                    </span>
                                    <span className={`${item.textColor[0]} px-2 py-1 text-xs rounded-md ${item.bgColor[0]} font-medium`}>
                                        {item.status[0]}
                                    </span>
                                    <span className={`${item.textColor[1]} px-2 py-1 text-xs rounded-md ${item.bgColor[1]} font-medium`}>
                                        {item.status[1]}
                                    </span>
                                </div>

                                {/* Narration */}
                                <div className="mb-3 sm:mb-4">
                                    <p className="dark:text-white text-gray-800 font-semibold text-sm sm:text-base lg:text-lg">
                                        {item.narration}
                                    </p>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-3">
                                    <div className="text-gray-500 text-xs sm:text-sm">
                                        <span className="font-medium">Frequency:</span> {item.frequency}
                                    </div>
                                    <div className="text-gray-500 text-xs sm:text-sm">
                                        <span className="font-medium">Format:</span> {item.format}
                                    </div>
                                    <div className="text-gray-500 text-xs sm:text-sm col-span-1 sm:col-span-2 lg:col-span-1">
                                        <span className="font-medium">Recipient:</span> {item.recipients}
                                    </div>
                                </div>

                                {/* Last Generated */}
                                <div className="text-gray-500 text-xs mb-0 lg:mb-2">
                                    <span className="font-medium">Last Generated:</span> {item.time}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col xs:flex-row lg:flex-col xl:flex-row gap-2 sm:gap-3 lg:gap-2 xl:gap-3 lg:min-w-[200px] xl:min-w-[240px]">
                                <button className="flex gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:bg-gray-100 hover:border-gray-400 dark:hover:bg-gray-800 dark:hover:border-gray-500 transition-all duration-300 items-center text-xs sm:text-sm justify-center text-gray-700 dark:text-gray-300">
                                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>{item.button[0]}</span>
                                </button>
                                <button className="flex gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:bg-gray-100 hover:border-gray-400 dark:hover:bg-gray-800 dark:hover:border-gray-500 transition-all duration-300 items-center text-xs sm:text-sm justify-center text-gray-700 dark:text-gray-300">
                                    <NotebookPen className="h-3 w-3 sm:h-4 sm:w-4" />
                                    <span>{item.button[1]}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ScheduledReports