import { RefreshCcw } from "lucide-react"
import { recurringExceptionPattern } from "../../../utils"

const REP = () => {
    return (

        <div className="px-4 sm:px-5 mt-6">

            <div className="p-3 sm:p-5 shadow-sm bg-white dark:bg-gray-900 rounded-md">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[20px]  p-5 font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                        Recurring Exception Patterns
                    </h3>
                    <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-gray-700 dark:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-100 dark:text-gray-800 rounded-md transition-colors duration-200 text-sm font-medium">
                        <RefreshCcw className="h-4 w-4" />
                        <span className=" sm:inline">Refresh Rules</span>
                    </button>
                </div>
                {recurringExceptionPattern.map((item, index) => (
                    <div key={index}>
                        <div className="rounded-md shadow-sm mb-3 p-4 dark:bg-gray-950 ">
                            <div className="flex gap-3 items-center p-2 sm:p-2 bg-white dark:bg-gray-950 rounded-md">
                                <div className="text-[10px]  text-gray-800 dark:text-white bg-gray-400/30 dark:bg-gray-600/30 px-2 py-1 rounded-md">
                                    {item.id}
                                </div>

                                <span className={`${item.textColor} font-semibold text-[11px] border rounded-md px-2 py-1 `}>
                                    {item.status[0]}
                                </span>
                                <span className={`${item.textColor} font-semibold text-[11px] border rounded-md px-2 py-1 `}>
                                    {item.status[1]}
                                </span>


                            </div>
                            <div className="text-sm text-gray-400 dark:text-gray-300">
                                {item.event}
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Frequency: {item.frequency}</p>
                                <p className="text-xs text-gray-400 mb-1">Ocuurance: {item.occurances}</p>
                                <p className="text-xs text-gray-400 mb-1">Last: {item.time}</p>

                            </div>
                            <div className="mt-2">
                                <span className="px-2 py-1 bg-gray-500 cursor-pointer text-xs rounded-md hover:bg-gray-600 text-white">{item.button}</span>
                                <span className="ml-3 px-2 py-1 bg-blue-500 text-xs cursor-pointer rounded-md hover:bg-blue-700 text-white">{item.buttonTwo}</span>
                            </div>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default REP
