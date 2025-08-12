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


const GoldBucks = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  )
}

export default GoldBucks
