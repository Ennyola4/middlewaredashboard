import Navbar from "../../../components/Navbar/Navbar"
import { Tablets, Users, Sparkles, Gift, TrendingUp } from "lucide-react"


const gBucks = [
  {
    title: "Total Members",
    icon: <Users className="text-blue-500" size={30} />,
    value: "23,100"
  },
  {
    title: "Points Earned",
    icon: <Sparkles className="text-green-500" size={30} />,
    value: "45.7M"
  },
  {
    title: "Points Redeemed",
    icon: <Gift className="text-purple-500" size={30} />,
    value: "23.4M"
  },
  {
    title: "Conversion Rate",
    icon: <TrendingUp className="text-green-500" size={30} />,
    value: "15.2%"
  },
]

const rewardCategoryUsage = [
  {
    title: "Airtime/Data",
    titlePoint: "8.9M pts",
    totalRedemptions: "45% Total Redemptions"
  },
  {
    title: "Bill Payment",
    titlePoint: "6.2M pts",
    totalRedemptions: "30% Totoal Redemptions"
  },
  {
    title: "Shopping Vouchers",
    titlePoint: "3.1M pts",
    totalRedemptions: "15% Total Redemptions"
  },
  {
    title: "Cash Back",
    titlePoint: "2.0M pts",
    totalRedemptions: "10% Redemptions"
  }
]

const systemPreference = [
  {
    title: "System Uptime",
    titleRate: "89.87"
  },
  {
    title: " Error Rate",
    titleRate: "14.77%"
  },
]

const recentGoldBucksActivities = [
  {
    id: "GB-001",
    title: "Yamin Lamal",
    idStatus: "Earned",
    points: "50 pts",
    event: "Transaction Bonus",
    status: "completed"
  },
  {
    id: "GB-002",
    title: "Lionel Messi",
    idStatus: "Redeemed",
    points: "500 pts",
    event: "Airtime Purcahse",
    status: "completed"
  },
  {
    id: "GB-003",
    title: "Ajayi Enitan",
    idStatus: "Earned",
    points: "750 pts",
    event: "Referral Bonus",
    status: "Pending"
  },
]


const GoldBucks = () => {
  return (
    <div>
      <div className="bg-white dark:bg-black">
        <Navbar />
        {/* Header */}
        <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
          <Tablets className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-yellow-500" />
          <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-700 dark:text-yellow-500 font-semibold font-serif">
            Gold Bucks
          </h1>
        </div>

        <div className="grid grid-cols-1 bg-white dark:bg-black sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4">
          {gBucks.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="p-2">
                {item.icon}
              </div>
              <div className="ml-auto text-right">
                <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row bg-white dark:bg-black gap-4 sm:gap-6 p-3 sm:p-4">
          {/* First Container - Redemption Stats */}
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800/90 rounded-lg shadow p-3 sm:p-4">
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
                <div key={index} className="mb-3 sm:mb-4 shadow-sm p-2 sm:p-3 dark:bg-gray-900/100 rounded-md last:mb-0">
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
          <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800/90 rounded-lg shadow p-3 sm:p-4">
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
              <div className="shadow-sm p-3 sm:p-5 w-full dark:bg-gray-900/100 rounded-md">
                <p className="text-[11px] sm:text-[12px] text-gray-500 dark:text-gray-300">Active Members</p>
                <span className="font-semibold text-sm sm:text-[16px] dark:text-white">18,450</span>
              </div>
              <div className="shadow-sm p-3 sm:p-5 w-full dark:bg-gray-900/100 rounded-md">
                <p className="text-[11px] sm:text-[12px] text-gray-500 dark:text-gray-300">Avg Points/User</p>
                <span className="font-semibold text-sm sm:text-[16px] dark:text-white">1,980</span>
              </div>
            </div>
          </div>
        </div>
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
                  <span className="px-2 py-1 text-xs bg-green-400/20 text-green-600 rounded-full">
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
    </div>
  )
}

export default GoldBucks
