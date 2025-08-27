import { CircleAlert, DollarSign, Shield, TrendingUp } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"

const highRiskTransaction = [
  {
    title: "High Risk Detected",
    icon: <CircleAlert className="text-green-500" size={30} />,
    value: "1,234"
  },
  {
    title: "Blocked Today",
    icon: <Shield className="text-blue-500" size={30} />,
    value: "45"
  },
  {
    title: "Risk Amount",
    icon: <DollarSign className="text-purple-500" size={30} />,
    value: "₦450M"
  },
  {
    title: "Block Success Rate",
    icon: <TrendingUp className="text-blue-300" size={30} />,
    value: "98.7%"
  },
]

const riskCategoryDistribution = [
  {
    title: "Amount Anomalies",
    value: "345",
    bar: "20%"
  },
  {
    title: "Amount Anomalies",
    value: "345",
    bar: "25%"
  },
  {
    title: "Amount Anomalies",
    value: "345",
    bar: "35%"
  },
  {
    title: "Amount Anomalies",
    value: "345",
    bar: "15%"
  },
  {
    title: "Amount Anomalies",
    value: "345",
    bar: "35%"
  },

]

const HighRiskTransaction = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-700 dark:text-green-500 font-semibold font-serif">
          Live Transactions
        </h1>
      </div>

      <div className="grid grid-cols-1 dark:bg-black bg-white sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 mb-5">
        {highRiskTransaction.map((item, index) => (
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

     <div className="flex  flex-col lg:flex-row bg-white dark:bg-black gap-4 sm:gap-6 p-3 sm:p-4">
       <div className="p-5 bg-white dark:bg-black"> 
        {riskCategoryDistribution.map((riskDistribution, index) => {
          const progressBar = parseFloat(riskDistribution.bar)
          const barColor = progressBar < 40 ? "bg-blue-500" : progressBar > 20 ? "bg-green-500" : "bg-red-500"

          return (
            <div key={index} className="dark:text-white">
              <div className="flex justify-between mb-3 p-3">
                <div>
                  <span className="font-semibold">{riskDistribution.title}</span>
                </div>
                <div>
                  <span>{riskDistribution.value}</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-600 rounded-full h-1.5 sm:h-2">
                <div
                  className={`h-full rounded-full ${barColor}`}
                  style={{ width: `${progressBar}%` }}
                ></div>
              </div>
            </div>
          )
        })

        }
      </div>
      
     </div>

    </div>
  )
}

export default HighRiskTransaction
