import { activityPatternAnalysis } from "../../../utils"

const APAandResolutionCard = () => {
    return (
        <div>
            {activityPatternAnalysis.map((item, index) => {
                const progressBar = parseFloat(item.bar)
                const barColor = progressBar > 40 ? "bg-blue-500" : progressBar > 50 ? "bg-red-500" : "bg-green-500"

                return (
                    <div key={index} className="p-5">
                        <div className="flex justify-between">
                            <span>
                                {item.title}
                            </span>
                            <span>
                                {item.value}
                            </span>
                        </div>
                        <div className="w-full mt-2 bg-gray-100 dark:bg-gray-500 rounded-full h-1.5 sm:h-2">
                            <div
                                className={`h-full rounded-full ${barColor} transition-all duration-500`}
                                style={{ width: `${progressBar}%` }}
                            ></div>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default APAandResolutionCard
