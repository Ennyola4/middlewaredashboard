import { RefreshCcw } from "lucide-react"
import { generatedRecommendations } from "../../../utils"

const GeneratedRecommendations = () => {
    return (
        <div className="p-3 sm:p-5 m-2 sm:m-5 shadow-sm rounded-md dark:bg-gray-900">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-[20px]  p-5 font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                    Recurring Exception Patterns
                </h3>
                <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-gray-700 dark:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-100 dark:text-gray-800 rounded-md transition-colors duration-200 text-sm font-medium">
                    <RefreshCcw className="h-4 w-4" />
                    <span className=" sm:inline">Generate New</span>
                </button>
            </div>
            {generatedRecommendations.map((item, index) => (
                <div key={index}>
                    <div className="shadow-sm rounded-md dark:bg-gray-950">
                        <div className="flex flex-wrap gap-2 sm:gap-4 items-center p-3 sm:p-5 mt-3 sm:mt-5">
                            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md text-[10px]">
                                {item.id}
                            </span>
                            <span className={`px-2 py-1 ${item.textColor[0]} rounded-md text-[10px] ${item.bgColor[0]}`}>
                                {item.status[0]}
                            </span>
                            <span className={`px-2 py-1 ${item.textColor[1]} rounded-md text-[10px] ${item.bgColor[1]}`}>
                                {item.status[1]}
                            </span>
                            <span className={`px-2 py-1 ${item.textColor[2]} rounded-md text-[10px] ${item.bgColor[2]}`}>
                                {item.status[2]}
                            </span>
                        </div>
                        <div>
                            <span className="p-2 m-2 text-gray-400 text-xs sm:text-sm block">
                                {item.purpose}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs p-2 sm:p-3">
                            <span className="text-green-500">{item.high}</span>
                            <span className="text-blue-500">{item.confidence}</span>
                            <span className="text-yellow-500">{item.annually}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs p-2 sm:p-3">
                            <span className="px-2 py-1 cursor-pointer rounded-md bg-blue-400 text-white hover:bg-blue-500 transition-all duration-300">{item.button[0]}</span>
                            <span className="px-2 py-1 cursor-pointer rounded-md bg-gray-400 text-gray-200 hover:bg-gray-500 transition-all duration-300">{item.button[1]}</span>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default GeneratedRecommendations
