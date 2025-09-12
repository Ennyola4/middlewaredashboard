import { recommendationCategoriesCard } from "../../../utils"

const RecommendationCards = () => {
    const statsData = [
        { number: "23", label: "Implemented", color: "text-green-600 dark:text-green-500", bgColor: "bg-green-400/10" },
        { number: "12", label: "Pending", color: "text-yellow-600 dark:text-yellow-500", bgColor: "bg-yellow-400/10" },
        { number: "5", label: "Rejected", color: "text-red-600 dark:text-red-500",  bgColor: "bg-red-400/10" }
    ];
    return (
        <div className="w-full bg-white dark:bg-black p-2 sm:p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 dark:bg-gray-900 shadow-sm  rounded-md">
                    <div>
                        <h3 className="text-[20px] p-5 font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                            Recommendation Categories
                        </h3>
                    </div>
                    {recommendationCategoriesCard.map((ai, index) => {
                        const progressBar = parseFloat(ai.bar)
                        const barColor = progressBar < 40 ? "bg-red-500" : progressBar > 40 ? "bg-blue-500" : "bg-yellow-500"
                        return (
                            < div key={index} >
                                <div className=" mb-3 p-5 shadow-sm rounded-md bg-white dark:bg-gray-950">
                                    <div className="flex justify-between items-center dark:text-white ">
                                        <span>{ai.title}</span>
                                        <span className="text-[10px] mb-2 ">{ai.value}</span>
                                    </div>
                                    <div className="flex justify-between items-center dark:text-white ">
                                        <span className="text-[12px] text-green-600">{ai.total}</span>
                                        <span className="text-xs text-gray-400">{ai.status}</span>
                                    </div>
                                    <div className="w-full mt-2 bg-gray-100 dark:bg-gray-500 rounded-full h-1.5 sm:h-2">
                                        <div
                                            className={`h-full rounded-full ${barColor} transition-all duration-500`}
                                            style={{ width: `${progressBar}%` }}
                                        ></div>
                                    </div>

                                </div>

                            </div>
                        )
                    })

                    }
                </div>
                <div className="p-4 dark:bg-gray-900 shadow-sm  rounded-md">

                    <h3 className="text-[20px] p-5 font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                        Implementation Success
                    </h3>
                    <div>
                        <div className="w-full flex flex-col justify-center items-center dark:text-white mt-5">
                            <h1 className="font-extrabold text-6xl text-green-500 mb-5 ">62%</h1>
                        </div>
                        <p className="flex flex-col text-sm justify-center items-center dark:text-white">
                            Implementation Rate
                        </p>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
                        {statsData.map((stat, index) => (
                            <div
                                key={index}
                                className={`dark:${stat.bgColor} p-3 mt-3 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 ${stat.bgColor}`}
                            >
                                {/* Number Display */}
                                <div className="flex justify-center items-center mb-2 sm:mb-2">
                                    <h1 className={`font-semibold text-lg sm:text-2xl lg:text-2xl ${stat.color}`}>
                                        {stat.number}
                                    </h1>
                                </div>

                                {/* Label */}
                                <div className="flex justify-center items-center">
                                    <p className={`text-xs sm:text-xs text-gray-600 dark:text-gray-300 text-center ${stat.color}`}>
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RecommendationCards
