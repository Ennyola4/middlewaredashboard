import { transactionChannels } from "../../../utils"

const TransactionChannels = () => {
    return (
        <div>
            <div>
                {transactionChannels.map((report, index) => {
                    const progressBar = parseFloat(report.bar)
                    const barColor = progressBar < 50 ? "bg-green-500" : progressBar > 50 ? "bg-green-500" : "bg-green-500"

                    return (
                        <div>
                            <div key={index} className="m-3 p-3">
                                <div className="m-3 p-3 flex justify-between">
                                    <span>
                                        {report.title}
                                    </span>
                                    <div className="flex gap-1 items-center">
                                        <span className="font-semibold">{report.value}</span>
                                        <span className="text-xs">{report.performance}</span>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2 sm:h-2.5">
                                    <div
                                        className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                                        style={{ width: `${progressBar}%` }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default TransactionChannels
