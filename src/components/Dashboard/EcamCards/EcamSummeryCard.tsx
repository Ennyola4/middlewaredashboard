import { eCam } from "../../../utils"

const ECamSummeryCard = () => {
  return (
    <div>
       <div className="grid grid-cols-1 bg-white dark:bg-black  sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-4">

          {eCam.map((cam, index) => (
            <div
              key={index}
              className="flex items-center p-4 sm:p-5 bg-white dark:bg-gray-900  rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="p-2">
                {<cam.icon className={`${cam.textColor}`} size={30}/>}
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
    </div>
  )
}

export default ECamSummeryCard
