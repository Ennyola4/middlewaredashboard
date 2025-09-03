import { recentGoldBucksActivities } from "../../../utils"

const RecentGoldbucksAct = () => {
  return (
    <div>
        <div className="m-3 p-5 dark:bg-gray-800/90 shadow-sm rounded-md">
          <h2 className="text-lg p-2 font-semibold mb-4 text-gray-700 dark:text-white">
            Recent Gold Bucks Activities
          </h2>
          {recentGoldBucksActivities.map((bonus, index) => (
            <div key={index} className="mb-4 shadow-sm  dark:bg-gray-900/90 p-1 rounded-md last:mb-0">
              <div className="flex  justify-between gap-2 px-2 py-1">
                <div className="space-x-2">
                  <span className="px-2 py-1 rounded-md bg-gray-400/40 dark:text-white text-xs">
                    {bonus.id}
                  </span>
                  <span className="dark:text-white font-medium text-sm">
                    {bonus.title}
                  </span>
                  <span className="px-2 py-1 text-[10px] bg-green-400/20 text-green-600 dark:text-green-400 rounded-md">
                    {bonus.idStatus}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-xs dark:text-white">
                    {bonus.points}
                  </span>
                </div>
              </div>
              <div className="flex p-1 justify-between">
                <span className=" p-1 text-[12px] text-gray-400 items-center">
                  {bonus.event}
                </span>
                <span className="px-2 text-[12px] text-gray-400 " >
                  {bonus.status}
                </span>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default RecentGoldbucksAct
