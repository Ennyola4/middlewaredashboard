import { riskCategoryDistribution, riskScoreDistribution } from '../../../utils'

const RiskCategoryDistrubution = () => {
  return (
    <div>
       <div className="flex flex-col lg:flex-row bg-white dark:bg-black gap-4 sm:gap-6 p-3 sm:p-4">
        {/* Risk Category Distribution Section */}
        <div className="flex-1 p-3 shadow-sm dark:bg-gray-800 sm:p-5 bg-white rounded-lg">
          <h2 className="text-lg font-bold mb-4 dark:text-white">Risk Category Distribution</h2>
          <div className="space-y-4 ">
            {riskCategoryDistribution.map((riskDistribution, index) => {
              const progressBar = parseFloat(riskDistribution.bar)
              const barColor = progressBar < 40 ? "bg-blue-500" : progressBar > 20 ? "bg-green-500" : "bg-red-500"

              return (
                <div key={index} className="dark:text-white dark:bg-gray-950  shadow-sm p-3 rounded-md">
                  <div className="flex flex-col  xs:flex-row xs:justify-between xs:items-center gap-2 mb-3">
                    <span className="font-semibold text-sm sm:text-base">
                      {riskDistribution.title}
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      {riskDistribution.value}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-2 sm:h-2.5">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${barColor}`}
                      style={{ width: `${progressBar}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Risk Score Distribution Section */}
        <div className="flex-1 p-3 dark:bg-gray-800 shadow-sm sm:p-5 bg-white  rounded-lg">
          <h2 className="text-lg font-bold mb-4 dark:text-white">Risk Score Distribution</h2>
          <div className="space-y-3 sm:space-y-4">
            {riskScoreDistribution.map((riskScore, index) => (
              <div
                key={index}
                className="flex dark:bg-gray-950 flex-col xs:flex-row xs:justify-between xs:items-center gap-2 p-3 shadow-sm rounded-md border-l-4 border-blue-400 dark:text-white"
              >
                <span className="font-semibold text-sm sm:text-base">
                  {riskScore.title}
                </span>
                <span className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400">
                  {riskScore.transaction}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiskCategoryDistrubution
