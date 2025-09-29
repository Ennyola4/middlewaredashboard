import { aiRecommendation } from "../../utils"

const AiRecommendation = () => {
    return (
        <div>
            <div>
                {aiRecommendation.map((ai, index) => (
                    <div
                        key={`alert-${index}`}
                        className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border-l-2 mb-3 ${
                                                ai.actionStatus === 'CRITICAL' ? 'border-red-500' :
                                                ai.actionStatus === 'WARNING' ? 'border-yellow-500' :
                                                ai.actionStatus === 'MEDIUM' ? 'border-orange-500' : 'border-blue-400/10'
                                              }"
                    >
                        {/* Action and Status */}
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-gray-800 dark:text-white">{ai.action}</h3>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${ai.actionStatus === 'CRITICAL' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                                ai.actionStatus === 'WARNING' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                    ai.actionStatus === 'MEDIUM' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                                        'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                                }`}>
                                {ai.actionStatus}
                            </span>
                        </div>

                        {/* Description and Status */}
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-[12px] text-gray-600 dark:text-gray-300">{ai.desc}</p>
                            <span className={`px-2 py-1 rounded-md text-[10px] border ${ai.descStatus === 'Active' ? 'text-green-500 border-green-300 dark:bg-green-900/50 dark:text-green-400' :
                                ai.descStatus === 'investigating' ? 'text-blue-500 border-blue-300 dark:bg-blue-900/50 dark:text-blue-400' :
                                    ai.descStatus === 'resolved' ? 'text-gray-500 border-gray-300 dark:bg-gray-600 dark:text-gray-300' :
                                        'text-purple-500 border-purple-300 dark:bg-purple-900/50 dark:text-purple-400txt text-[8px]'
                                }`}>
                                {ai.descStatus}
                            </span>
                        </div>

                        <div className="flex justify-between items-start mb-3">
                            <p className="text-[11px] text-sm text-gray-600 dark:text-gray-300">Impact: {ai.impact}</p>
                            <p className="text-[11px] text-sm text-gray-600 dark:text-gray-300">Action: {ai.action}</p>

                        </div>

                        {/* Buttons */}
                        {(ai.buttonOne || ai.buttonTwo) && (
                            <div className="flex flex-row w-fit lg:flex-row xs:flex-row gap-2 xs:gap-3 xs:justify-start">
                                {ai.buttonOne && (
                                    <button className="w-full xs:w-auto px-3 sm:px-4 py-2 cursor-pointer dark:text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
                                        {ai.buttonOne}
                                    </button>
                                )}
                                {ai.buttonTwo && (
                                    <button className="w-full xs:w-auto px-3 sm:px-4 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
                                        {ai.buttonTwo}
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Source and Time */}
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-3">
                            <span>Source: {ai.source}</span>
                            <span>{ai.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AiRecommendation
