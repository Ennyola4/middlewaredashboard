import { rewardCategoryUsage, systemPreference } from '../../../utils';

const RCU = () => {
  return (
    <div>
         <div className="flex flex-col lg:flex-row bg-white dark:bg-black gap-4 sm:gap-6 p-3 sm:p-4">
          {/* First Container - Redemption Stats */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 rounded-lg shadow p-3 sm:p-4">
            <h2 className="text-base sm:text-lg p-2 font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-white">
              Redemption Statistics
            </h2>
            {rewardCategoryUsage.map((gift, index) => {
              const progressBar = parseFloat(gift.totalRedemptions);
              const barColor =
                progressBar > 90 ? "bg-green-500" :
                  progressBar < 10 ? "bg-red-500" :
                    "bg-blue-500";

              return (
                <div key={index} className="mb-3 sm:mb-4 shadow-sm p-2 sm:p-3 dark:bg-gray-950 rounded-md last:mb-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs sm:text-sm md:text-[15px] font-medium text-gray-700 dark:text-white truncate">
                      {gift.title}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                      {gift.titlePoint}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-1.5 sm:h-2 mb-1">
                    <div
                      className={`h-full rounded-full ${barColor}`}
                      style={{ width: `${progressBar}%` }}
                    ></div>
                  </div>
                  <div className="text-[10px] sm:text-[9.5px] text-gray-700/50 dark:text-gray-400">
                    {gift.totalRedemptions}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Container - System Performance */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 rounded-lg shadow p-3 sm:p-4">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-white">
              System Performance
            </h2>
            {systemPreference.map((preference, index) => {
              const progressBar = parseFloat(preference.titleRate);
              const barColor = progressBar > 75 ? "bg-green-500" : "bg-red-500";

              return (
                <div key={index} className="w-full p-2 sm:p-4 mb-2 sm:mb-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs sm:text-sm dark:text-white truncate">
                      {preference.title}
                    </span>
                    <span className="text-xs sm:text-sm dark:text-white">
                      {preference.titleRate}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-1.5 sm:h-2">
                    <div
                      className={`h-full rounded-full ${barColor}`}
                      style={{ width: `${progressBar}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center mt-3 sm:mt-4">
              <div className="shadow-sm p-3 sm:p-5 w-full dark:bg-gray-950 rounded-md">
                <p className="text-[11px] sm:text-[12px] text-gray-500 dark:text-gray-300">Active Members</p>
                <span className="font-semibold text-sm sm:text-[16px] dark:text-white">18,450</span>
              </div>
              <div className="shadow-sm p-3 sm:p-5 w-full dark:bg-gray-950 rounded-md">
                <p className="text-[11px] sm:text-[12px] text-gray-500 dark:text-gray-300">Avg Points/User</p>
                <span className="font-semibold text-sm sm:text-[16px] dark:text-white">1,980</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RCU
