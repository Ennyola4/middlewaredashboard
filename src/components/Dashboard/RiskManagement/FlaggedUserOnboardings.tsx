import { Clock4, MapPin, NotebookPen, Shield, Smartphone } from "lucide-react"
import { flaggedUserOnboardings } from "../../../utils"

const FlaggedUserOnboardings = () => {
    return (
        <div className="m-3 sm:m-4 md:m-5">
            <div className="shadow-sm rounded-md p-3 sm:p-4 md:p-5">
                <div className="flex mb-3 flex-col xs:flex-row xs:items-center xs:justify-between gap-3 p-3 ">
                    {/* Header Title */}
                    <h1 className="text-lg sm:text-xl mb-5 font-semibold text-gray-800 dark:text-white">
                       Flagged User Onboardings
                    </h1>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap xs:flex-nowrap gap-2 sm:gap-3">

                        {/* Search Button */}
                        <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200 text-sm font-medium">
                            <NotebookPen className="h-4 w-4" />
                            <span className=" sm:inline">Export Report</span>
                        </button>

                        {/* Filter Button */}
                        <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300 rounded-lg transition-colors duration-200 text-sm font-medium">
                            <Shield className="h-4 w-4" />
                            <span className=" sm:inline">Bulk Review</span>
                        </button>

                        

                    </div>
                </div>
                {flaggedUserOnboardings.map((user, index) => (
                    <div key={index} className="flex flex-col lg:flex-row gap-3 shadow-sm rounded-md mt-4 sm:mt-5 dark:bg-gray-900 p-3 sm:p-4">
                        <div className="flex-1 p-3 sm:p-4 md:p-5">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-gray-300 rounded-md text-xs">{user.id}</span>
                                <span className="text-xs px-2 py-1 text-gray-400">Risk Score:</span>
                                <span className={`${user.textColor} ${user.bgColor} px-2 py-1 rounded-md text-xs`}>{user.riskScore[0]}</span>
                                <span className={`${user.textColor} ${user.bgColor} px-2 py-1 rounded-md text-xs`}>{user.riskScore[1]}</span>
                            </div>
                            <p className="mt-3 text-sm md:text-md text-gray-600">User Information :</p>
                            <div className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3">
                                <p>Name : {user.name}</p>
                                <p>Email : {user.email}</p>
                                <p>Phone : {user.phone}</p>
                            </div>
                            <div className="mt-3">
                                <p className="text-xs sm:text-sm text-gray-500">Risk Flags:</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {user.riskFlags.map((flag, i) => (
                                    <span key={i} className={`${user.textColorTwo} ${user.bgColorTwo} px-2 py-1 rounded-md text-xs`}>
                                        {flag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 mt-3">{user.time}</p>
                        </div>
                        <div className="p-3 sm:p-4 md:p-5 text-gray-400  border-gray-200 dark:border-gray-700">
                            <h3 className="mb-2 text-sm md:text-base text-gray-700">Onboarding Details</h3>
                            <div className="flex items-center gap-1 mb-2 text-xs sm:text-sm">
                                <Clock4 className="h-3 w-3" />
                                <span>{user.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2 text-xs sm:text-sm">
                                <MapPin className="h-3 w-3" />
                                <span>{user.location}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2 text-xs sm:text-sm">
                                <Smartphone className="h-3 w-3" />
                                <span>{user.device}</span>
                            </div>
                        </div>

                        <div className="p-3 sm:p-4 md:p-5 flex flex-row lg:flex-col justify-center lg:justify-start gap-3 sm:gap-4">
                            {user.button.map((btn, i) => (
                                <div key={i} className="flex-1 lg:flex-initial">
                                    <button className="w-full px-3 py-2 sm:px-4 sm:py-2 md:px-8 md:py-1 bg-gray-400 rounded-md text-xs sm:text-sm text-white cursor-pointer hover:bg-gray-600 transition-all duration-400">
                                        {btn}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FlaggedUserOnboardings