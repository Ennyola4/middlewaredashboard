import { recentSecurityAlerts } from "../../../utils"

const RSA = () => {
  return (
    <div>
        <div className="m-3 p-5 dark:bg-gray-900 bg-white shadow-sm rounded-md">
          <h2 className="text-lg p-2 font-semibold mb-4 text-gray-700 dark:text-white">
            Recent Security Alert
          </h2>
          {recentSecurityAlerts.map((alerts, index) => (
            <div key={index} className="mb-4 shadow-sm  dark:bg-gray-950 p-1 rounded-md last:mb-0">
              <div className="flex  justify-between gap-2 px-2 py-1">
                <div className="space-x-2 p-2">
                  <span className="px-2 py-1 rounded-md bg-gray-400/40 dark:text-white text-xs">
                    {alerts.id}
                  </span>
                  <span className="dark:text-white font-medium text-sm">
                    {alerts.title}
                  </span>
                  <span className="px-2 py-1 text-xs bg-green-400/20 text-green-600 rounded-full">
                    {alerts.titleStatus}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-xs text-gray-500">
                    {alerts.time}
                  </span>
                </div>
              </div>
              <div className="flex px-3 py-2 justify-between">
                <span className=" p-1 text-[12px] text-gray-400 items-center">
                  {alerts.action}
                </span>
                <span className="px-2 hover:bg-gray-400 text-white cursor-pointer bg-gray-500 py-1 rounded-md text-[12px] " >
                  {alerts.button}
                </span>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default RSA
