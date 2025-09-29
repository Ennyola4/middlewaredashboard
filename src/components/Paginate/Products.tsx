import { Activity, Database, Monitor, Shield, TrendingUp } from "lucide-react"
import { productLists } from "../../utils"


const quickActions = [
    { label: "Performance Report", icon: TrendingUp, textColor: "text-blue-500" },
    { label: "Security Audit", icon: Shield, textColor: "text-red-500" },
    { label: "Health Check", icon: Activity, textColor: "text-green-500" },
    { label: "Backup status ", icon: Database, textColor: "text-yellow-500" },
    { label: "Monitor All ", icon: Monitor, textColor: "text-purple-500" },
]

const Products = () => {
    return (
        <div className="w-full p-4 sm:p-6">
            {/* Header Section */}
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Product Overview
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Monitor performance and metrics across all products
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
                {productLists.map((product, index) => {
                    const progressBar = parseFloat(product.bar)
                    const getProgressColor = (progress: number) => {
                        if (progress >= 90) return "bg-green-500"
                        if (progress >= 70) return "bg-blue-500"
                        if (progress >= 50) return "bg-yellow-500"
                        return "bg-red-500"
                    }

                    return (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            {/* Card Header */}
                            <div className="p-4 sm:p-5 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-700">
                                            <product.icon className={`${product.textColor} w-4 h-4`} />
                                        </div>
                                        <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white capitalize">
                                            {product.product}
                                        </h2>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className={`${product.textColor} text-xs font-medium rounded-full px-2 py-1 ${product.bgColor}`}>
                                            {product.status}
                                        </span>
                                        <div className="flex items-center justify-center w-6 h-6 bg-red-500 text-xs text-white rounded-full font-medium">
                                            {product.notification}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {product.narration}
                                </p>
                            </div>

                            {/* Card Content */}
                            <div className="p-4 sm:p-5">
                                {/* Metrics Grid */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center justify-between py-1">
                                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Active Users</span>
                                        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{product.activeUsers}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-1">
                                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Daily Transactions</span>
                                        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{product.dailyTransactions}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-1">
                                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Daily Revenue</span>
                                        <span className="text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400">{product.dailyRevenue}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-1">
                                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Uptime</span>
                                        <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">{product.uptime}</span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Performance</span>
                                        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{product.bar}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div
                                            className={`h-full rounded-full transition-all duration-500 ${getProgressColor(progressBar)}`}
                                            style={{ width: `${progressBar}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Error Rate */}
                                <div className="flex items-center justify-between py-1 mb-4">
                                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Error Rate</span>
                                    <span className={`text-xs sm:text-sm font-semibold ${product.textColor} }`}>
                                        {product.errorRate}
                                    </span>
                                </div>

                                {/* Divider */}
                                <hr className="border-gray-200 dark:border-gray-700 mb-4" />

                                {/* Action Button */}
                                <button className="w-full cursor-pointer px-4 py-2.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-600 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                                    {product.button}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full p-2 sm:p-6 bg-white dark:bg-gray-900  dark:border-gray-700 mt-6">
                {/* Header Section */}
                <div className="mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Quick Actions
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Quickly access frequently used system operations
                    </p>
                </div>

                {/* Actions Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                    {quickActions.map((action, index) => (
                        <button
                            key={index}
                            className="group cursor-pointer relative p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        >
                            {/* Icon Container */}
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className={`p-3 rounded-full bg-gray-50 dark:bg-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors duration-200`}>
                                    <action.icon className={`${action.textColor} w-5 h-5 sm:w-6 sm:h-6`} />
                                </div>

                                {/* Label */}
                                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                    {action.label}
                                </span>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-gray-50/50 dark:to-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                        </button>
                    ))}
                </div>

               
            </div>
        </div>
    )
}

export default Products