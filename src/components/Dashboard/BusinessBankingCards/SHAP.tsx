import { systemHealthAndPerfomance, systemPerformance } from "../../../utils";

const SHAP = () => {
  return (
    <div>
        {/* System Health & Performance */}
      <div className="p-2 sm:p-3 md:p-4">
        <div className="mt-4 sm:mt-6 md:mt-8 dark:bg-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 w-full">
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-[28px] font-serif text-green-500 p-2 sm:p-3 md:p-4">
            System Health & Performance
          </h1>

          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 w-full">
            {/* System Performance */}
            <div className="w-full lg:w-1/2 dark:bg-gray-950 p-3 sm:p-4 md:p-5 rounded-md sm:rounded-lg md:rounded-xl shadow">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-800 dark:text-white">
                System Performance
              </h3>
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {systemHealthAndPerfomance.map((item, index) => {
                  const progress = parseFloat(item.barValue);
                  const barColor = progress > 95 ? 'bg-green-500' : progress > 85 ? 'bg-blue-500' : 'bg-red-500';

                  return (
                    <div key={index} className="space-y-1 sm:space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                          {item.barTitle}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                          {item.barValue}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-500 rounded-full h-1.5 sm:h-2">
                        <div
                          className={`h-full rounded-full ${barColor} transition-all duration-500`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Logs */}
            <div className="w-full lg:w-1/2 mt-3 sm:mt-0">
              <div className="bg-white dark:bg-gray-950 p-3 sm:p-4 md:p-5 rounded-md sm:rounded-lg md:rounded-xl shadow h-full">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-800 dark:text-white">
                  System Logs
                </h3>
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {systemPerformance.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <div className="p-1 sm:p-[6px] bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 flex-shrink-0">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <p className="font-serif text-xs sm:text-sm text-gray-800 dark:text-gray-100 truncate">
                          {item.log}
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-gray-300 text-xs rounded-md dark:bg-gray-500 dark:text-white">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SHAP
