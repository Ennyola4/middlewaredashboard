import { Camera, Shield, TrendingUp, TriangleAlert, Video } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"


const eCam = [
  {
    title: "Active Cameras",
    value: "156/180",
    icon: <Video className="text-blue-500" size={30} />
  },
  {
    title: "Recording Hours (24h)",
    value: "3240",
    icon: <TrendingUp className="text-green-500" size={30} />
  },
  {
    title: "Alerts Today",
    value: "55",
    icon: <TriangleAlert className="text-yellow-500" size={30} />
  },
  {
    title: "System Uptime",
    value: "99.99%",
    icon: <Shield className="text-blue-500" size={30} />
  },
]

const cameraZonesStatus = [
  {
    title: "ATM Areas",
    event: "45/50 Active",
    status: "operational",
    bar: "99%"
  },
  {
    title: "Banking Hall",
    event: "38/40 Active",
    status: "operational",
    bar: "95%"
  },
  {
    title: "Vault Areas",
    event: "28/30 Active",
    status: "maintainance",
    bar: "70%"
  },
  {
    title: "Parking Lots",
    event: "25/30 Active",
    status: "operational",
    bar: "90%"
  },
  {
    title: "Perimeter",
    event: "20/30  Active",
    status: "degraded",
    bar: "10%"
  },

]

const Ecam = () => {
  return (
    <div>
      <div>
        <Navbar />
        {/* Header */}
        <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
          <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-blue-300" />
          <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-700 dark:text-blue-300 font-semibold font-serif">
            E-Cam Security
          </h1>
        </div>

        <div className="grid grid-cols-1 bg-white dark:bg-black  sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-4">
          {eCam.map((cam, index) => (
            <div
              key={index}
              className="flex items-center p-4 sm:p-5 bg-white dark:bg-gray-800  rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="p-2">
                {cam.icon}
              </div>
              <div className="ml-auto text-right">
                <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  {cam.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {cam.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row py-3 sm:py-5 px-3 sm:px-5 gap-3 bg-white dark:bg-black">
          {/* First Column */}
          <div className="bg-white shadow-sm rounded-md p-3 sm:p-5 dark:bg-gray-900 w-full lg:w-1/2">
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
                  <div className={`text-[10px] sm:text-xs px-2 py-1 rounded-md ${camera.status.toLowerCase() === "maintenance" ? "bg-yellow-400/40 text-yellow-800" :
                      camera.status.toLowerCase() === "degraded" ? "bg-red-400/40 text-red-800" :
                        "bg-green-400/40 text-green-800"
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

          {/* Second Column */}
          <div className="bg-white shadow-sm rounded-md p-3 sm:p-5 dark:bg-gray-900 w-full lg:w-1/2">
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
                  <div className={`text-[10px] sm:text-xs px-2 py-1 rounded-md ${camera.status.toLowerCase() === "maintenance" ? "bg-yellow-400/40 text-yellow-800" :
                      camera.status.toLowerCase() === "degraded" ? "bg-red-400/40 text-red-800" :
                        "bg-green-400/40 text-green-800"
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
        </div>
      </div>
    </div>
  )
}

export default Ecam
