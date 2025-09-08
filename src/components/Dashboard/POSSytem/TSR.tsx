import { terminalStatusRegion } from "../../../utils";

const TSR = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {terminalStatusRegion.map((terminal, index) => {
                    const progressValue = parseFloat(terminal.bar);
                    let statusColor, barColor;

                    if (terminal.titleStatus === "operational") {
                        statusColor = "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
                        barColor = "bg-green-500";
                    } else if (terminal.titleStatus === "degraded") {
                        statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
                        barColor = "bg-yellow-500";
                    } else {
                        statusColor = "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
                        barColor = "bg-red-500";
                    }

                    return (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-all hover:shadow-md">
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        {terminal.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {terminal.status}
                                    </p>
                                </div>
                                <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColor}`}>
                                    {terminal.titleStatus.charAt(0).toUpperCase() + terminal.titleStatus.slice(1)}
                                </span>
                            </div>

                            {/* Offline Count */}
                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {terminal.label}
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-1">
                                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                                    <span>Capacity</span>
                                    <span>{terminal.bar}</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div
                                        className={`h-2.5 rounded-full ${barColor} transition-all duration-500`}
                                        style={{ width: `${progressValue}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TSR
