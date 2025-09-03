import { riskUsers } from "../../../utils"
import { MapPin, AlertTriangle, Shield, Search, Download } from 'lucide-react';

const RiskUsersCard = () => {
    return (
        <div className="p-3 sm:p-5 shadow-sm dark:text-white bg-white dark:bg-black rounded-md">

            {/* Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-6">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                    Risk Users
                </h2>
                <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 text-xs px-2 py-1 rounded-full ml-auto">
                    {riskUsers.length}
                </span>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between w-full mb-4 p-2 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-950">

                {/* Search Input with Icon */}
                <div className="relative flex-1 max-w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-sm"
                        placeholder="Search users by name, email or ID..."
                    />
                </div>

                {/* Export Button */}
                <button className="flex cursor-pointer justify-center items-center gap-2 px-3 py-2 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/40 text-green-700 dark:text-green-300 rounded-lg transition-colors duration-200 text-sm font-medium">
                    <Download className="h-4 w-4" />
                    <span className="sm:w-fit">Export Risk Reports</span>
                </button>

            </div>

            {/* User Cards */}
            {riskUsers.map((user, index) => (
                <div
                    key={index}
                    className="flex flex-col lg:flex-row gap-4 lg:gap-6 shadow-sm p-3 sm:p-4 dark:bg-gray-950 dark:border-gray-600 dark:border rounded-md mb-3 sm:mb-4 hover:shadow-md transition-shadow duration-300"
                >

                    {/* Main User Info Section */}
                    <div className="flex-1 space-y-4">

                        {/* User Header - Avatar and Basic Info */}
                        <div className="flex flex-col xs:flex-row xs:items-start gap-3 sm:gap-4">
                            <p className="text-gray-400">Risk Factors</p>
                            <div className="flex gap-3">
                                <div className="text-xs px-2 py-1 bg-red-500/20 text-red-600 rounded-md w-fit">
                                    {user.riskFactors[0]}

                                </div>
                                <div className="text-xs px-2 py-1 bg-red-500/20 text-red-600 rounded-md">
                                    {user.riskFactors[2]}
                                </div>
                                <div className="text-xs px-2 py-1 bg-red-500/20 text-red-600 rounded-md">
                                    {user.riskFactors[1]}
                                </div>
                            </div>

                            {/* Avatar */}
                            <div className="bg-gray-200 dark:bg-gray-950 text-gray-500 dark:text-gray-400 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
                                <user.icon size={24} className="sm:w-7 sm:h-7" />
                            </div>


                            {/* User Details */}
                            <div className="flex-1 space-y-2">
                                <div className="space-y-1">
                                    <div className="flex flex-col xs:flex-row xs:items-center gap-2">
                                        <h3 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
                                            {user.name}
                                        </h3>
                                        <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 text-xs px-2 py-1 rounded w-fit">
                                            High Risk
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        {user.email}
                                    </p>
                                    <div className="inline-block text-xs font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-950 rounded px-2 py-1">
                                        {user.id}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Details */}
                        <div className="space-y-3">
                            <div className="mb-2">
                                <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-600 rounded-md">{user.status}</span>
                            </div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                <Shield className="h-4 w-4" />
                                Account Details:
                            </p>

                            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3">
                                <div className=" bg-white dark:bg-gray-900 p-3 rounded-md shadow-sm space-y-1">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Balance</span>
                                    <div className="font-semibold text-sm sm:text-base text-green-600 dark:text-green-400">
                                        {user.amount}
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-3 rounded-md shadow-sm space-y-1">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Joined</span>
                                    <div className="font-mono text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                        {user.joined}
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-3 rounded-md shadow-sm space-y-1">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Devices</span>
                                    <div className="font-mono text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                                        {user.devices}
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-3 rounded-md shadow-sm space-y-1">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Last Login</span>
                                    <div className="font-mono text-xs text-gray-700 dark:text-gray-300">
                                        {user.lastLogin}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activity Info Sections */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-64">

                        {/* Location Info */}
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-md shadow-sm p-3 space-y-2  dark:border-gray-700">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                Last Login Location :
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 break-all">
                                    {user.location}
                                </span>
                            </div>
                        </div>

                        {/* Risk Status Info */}
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-md shadow-sm p-3 space-y-2">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-orange-500" />
                                Risk Status
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs sm:text-sm text-red-600 dark:text-red-400 font-medium">
                                        Flagged User
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Suspicious activity detected
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex xs:flex-row lg:flex-col lg:justify-end gap-2 lg:w-32 ">
                        <button className="flex-1 cursor-pointer  lg:flex-none bg-gray-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
                            View Details
                        </button>
                        <button className="flex-1 cursor-pointer lg:flex-none bg-gray-600 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
                            Review Risks
                        </button>
                        <button className="flex-1 cursor-pointer lg:flex-none bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
                            Block User
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RiskUsersCard