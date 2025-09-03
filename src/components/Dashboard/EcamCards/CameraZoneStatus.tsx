import { cameraZonesStatus, systemResourse } from "../../../utils";

const CameraZoneStatus = () => {
  return (
    <div>
          <div className="flex flex-col lg:flex-row py-3 sm:py-5 px-3 sm:px-5 gap-4 sm:gap-6 bg-white dark:bg-black">
          {/* First Column - Camera Zones Status */}
          <div className="bg-white shadow-sm rounded-md p-3 sm:p-5 dark:bg-gray-900 w-full lg:w-1/2">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-white">
              Camera Zones Status
            </h2>
            {cameraZonesStatus.map((camera, index) => (
              <div key={index} className="w-full p-2 sm:p-3 mb-3 rounded-md shadow-sm dark:bg-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm md:text-base font-medium dark:text-white truncate">
                      {camera.title}
                    </span>
                    <p className="text-[10px] sm:text-xs text-gray-400 truncate">
                      {camera.event}
                    </p>
                  </div>
                  <div className={`text-[10px] w-fit sm:text-xs px-2 py-1 rounded-md ${camera.status.toLowerCase() === "maintenance" ? "bg-yellow-400/40 text-yellow-800 dark:text-yellow-400" :
                    camera.status.toLowerCase() === "degraded" ? "bg-red-400/40 text-red-800 dark:text-red-400" :
                      "bg-green-400/40 text-green-800 dark:text-green-400"
                    }`}>
                    {camera.status}
                  </div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 mt-2">
                  <div
                    className={`h-full rounded-full ${parseFloat(camera.bar) > 90 ? "bg-green-500" :
                      parseFloat(camera.bar) < 40 ? "bg-red-500" : "bg-blue-500"
                      }`}
                    style={{ width: `${parseFloat(camera.bar)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Column - System Resources */}
          <div className="bg-white shadow-sm rounded-md p-3 sm:p-5 dark:bg-gray-900 w-full lg:w-1/2">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-white">
              System Resources
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {systemResourse.map((resource, index) => {
                const progressBar = parseFloat(resource.value);
                const barColor = progressBar > 70
                  ? "bg-green-500"
                  : progressBar < 10
                    ? "bg-red-500"
                    : "bg-blue-500";

                return (
                  <div key={index} className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-200 truncate pr-2">
                        {resource.title}
                      </span>
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 dark:text-gray-100 whitespace-nowrap">
                        {resource.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <div
                        className={`h-full rounded-full ${barColor} transition-all duration-500`}
                        style={{ width: `${progressBar}%` }}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="flex  sm:flex-row gap-3 sm:gap-6 items-center mt-3 sm:mt-4">
                <div className="shadow-sm p-3 sm:p-5 w-full dark:bg-gray-800/70 rounded-md">
                  <p className="text-[11px] sm:text-[12px] text-gray-500 dark:text-gray-300">Eroor Rate</p>
                  <span className="font-semibold text-sm sm:text-[16px] dark:text-white">0.5%</span>
                </div>
                <div className="shadow-sm p-3 sm:p-5 w-full dark:bg-gray-800/70 rounded-md">
                  <p className="text-[11px] sm:text-[12px] text-gray-500 dark:text-gray-300">Uptime</p>
                  <span className="font-semibold text-sm sm:text-[16px] dark:text-white">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CameraZoneStatus

