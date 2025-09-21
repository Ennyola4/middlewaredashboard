import { Eye, Filter, NotebookPen, Plus, Search, Trash2 } from "lucide-react"
import { customerDatabase } from "../../../utils"

const CustomerDatabase = () => {
    return (
        <div>
            <div className="shadow-sm rounded-md m-2 sm:m-3 md:m-5 p-3 sm:p-4 md:p-5 dark:bg-gray-900">

                <div className=" mb-3 gap-3  sm:p-3">
                    {/* Header Title */}
                    <h1 className="text-lg sm:text-xl mb-3 sm:mb-4 md:mb-5 font-semibold text-gray-800 dark:text-white">
                        Customer Database
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap xs:flex-nowrap gap-2 sm:gap-3 w-full p-2 rounded-md  xs:w-auto ">
                        <div className="relative flex-1 min-w-[150px] xs:min-w-[180px]">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400 dark:text-gray-500 font-bold" />
                            </div>
                            <input
                                type="text"
                                className="w-full pl-10 pr-3 py-2 sm:py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-xs sm:text-sm"
                                placeholder="Search Customer here..."
                            />
                        </div>

                        {/* Filter Button */}
                        <button className="flex cursor-pointer items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-gray-100 hover:bg-gray-500 hover:text-white dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-700 text-xs sm:text-sm font-bold">
                            <Filter className="h-4 w-4" />
                            <span className="lg:inline hidden ">Filter</span>
                        </button>

                        {/* Add Customer Button */}
                        <button className="flex cursor-pointer items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-blue-100 hover:bg-blue-400 hover:text-white dark:bg-blue-900/30 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300 rounded-lg transition-colors duration-600 text-xs sm:text-sm font-medium">
                            <Plus className="h-4 w-4" />
                            <span className="lg:inline hidden ">Add Customer</span>
                        </button>
                    </div>
                </div>

                {customerDatabase.map((user, index) => (
                    <div key={index} className="shadow-sm rounded-md dark:bg-gray-950 p-3 mb-3 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="flex-1 w-full md:w-auto">
                            <div className="p-2 sm:p-3 flex flex-wrap gap-2">
                                <span className="text-xs bg-gray-300 rounded-md px-2 py-1 items-center">
                                    {user.id}
                                </span>
                                {user.status.map((stat, i) => (
                                    <span key={i} className={`text-xs px-2 py-1 rounded-md items-center ${user.bgColor[i]} ${user.textColor[i]}`}>
                                        {stat}
                                    </span>
                                ))}
                            </div>
                            <p className="p-2 sm:p-3 text-base sm:text-lg font-semibold dark:text-white">
                                {user.name}
                            </p>
                            <div className="flex flex-col sm:flex-row md:flex-col  gap-1 sm:gap-3 p-2 sm:p-3 text-xs dark:text-white">
                                <span>Email: {user.email}</span>
                                <span>Phone: {user.phone}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 p-2 sm:p-3 text-xs text-gray-400">
                                <span>Balance: {user.balance}</span>
                                <span>KYC: {user.kysStatus}</span>
                            </div>
                            <p className="p-2 sm:p-3 text-xs text-gray-400">{user.time}</p>
                        </div>
                        <div className="flex gap-2 sm:gap-3 p-2 sm:p-3 w-full md:w-auto justify-end md:justify-start">
                            <button className="dark:bg-gray-500 hover:text-white dark:text-white shadow-sm rounded-md p-1 sm:p-2 cursor-pointer hover:bg-gray-800 transition-all duration-700">
                                <Eye size={16} className="sm:w-5" />
                            </button>
                            <button className="dark:bg-gray-500 hover:text-white dark:text-white shadow-sm rounded-md p-1 sm:p-2 cursor-pointer hover:bg-gray-800 transition-all duration-700">
                                <NotebookPen size={16} className="sm:w-5" />
                            </button>
                            <button className="dark:bg-gray-500 hover:text-white dark:text-white shadow-sm rounded-md p-1 sm:p-2 cursor-pointer hover:bg-gray-800 transition-all duration-700">
                                <Trash2 size={16} className="sm:w-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerDatabase