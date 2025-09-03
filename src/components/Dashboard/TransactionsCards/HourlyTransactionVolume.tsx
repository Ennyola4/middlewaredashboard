import { hourlyTransactionVolume } from "../../../utils"

const HourlyTransactionVolume = () => {
  return (
    <div>
       <div className="flex flex-col lg:flex-row bg-white dark:bg-black gap-4 sm:gap-6 p-3 sm:p-4">
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 rounded-lg shadow p-3 sm:p-4">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-[23px] mb-3 sm:mb-4 md:mb-5 text-gray-600 dark:text-white font-semibold">
            Hourly Transaction Volume
          </h1>
          {hourlyTransactionVolume.map((transaction, index) => (
            <div key={index} className="flex justify-between shadow-sm p-4 mb-4 rounded-md  dark:text-white dark:bg-gray-950">
              <div>
                <span className="font-semibold">
                  {transaction.time}
                </span>
              </div>
              <div>
                <span>
                  {transaction.volume}
                  <p className="text-[10px] ml-7">{transaction.value}</p>
                </span>
              </div>
            </div>
          ))

          }
        </div>

        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 rounded-lg shadow p-3 sm:p-4">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-[23px] mb-3 sm:mb-4 md:mb-5 text-gray-600 dark:text-white font-semibold">
            Transaction Statistics
          </h1>
          <div className="space-y-4 dark:text-white font-semibold">
            <div className="flex justify-between p-4 shadow-sm rounded-md dark:bg-gray-950">
              <span>Average Amount</span>
              <span>₦15,640</span>
            </div>
            <div className="flex justify-between p-4 shadow-sm rounded-md dark:bg-gray-950">
              <span>Peak Hour</span>
              <span>2:30PM</span>
            </div>
            <div className="flex justify-between p-4 shadow-sm rounded-md dark:bg-gray-950">
              <span>Success Rate</span>
              <span className="text-green-500">98.8%</span>
            </div>
            <div className="flex justify-between p-4 shadow-sm rounded-md dark:bg-gray-950">
              <span>Fail Rate</span>
              <span className="text-red-500">1.09%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HourlyTransactionVolume
