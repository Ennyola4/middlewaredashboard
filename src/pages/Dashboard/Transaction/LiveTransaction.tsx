import {
  Activity,
  CircleAlert,
  CircleDollarSign,
  TrendingUp,
  User2
}
  from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"

const liveTransaction = [
  {
    title: "Transactions Today",
    icon: <Activity className="text-green-500" size={30} />,
    value: "156,780"
  },
  {
    title: "Total Volume",
    icon: <CircleDollarSign className="text-blue-500" size={30} />,
    value: "₦2450.0M"
  },
  {
    title: "Active Users",
    icon: <User2 className="text-purple-500" size={30} />,
    value: "8,934"
  },
  {
    title: "Success Rate",
    icon: <TrendingUp className="text-blue-300" size={30} />,
    value: "98.7%"
  },
]

const hourlyTransactionVolume = [
  {
    time: "12AM",
    volume: "234 txnx",
    value: "₦12.5M"
  },
  {
    time: "2AM",
    volume: "145 txnx",
    value: "₦10.5M"
  },
  {
    time: "10AM",
    volume: "134 txnx",
    value: "₦2.5M"
  },
  {
    time: "4AM",
    volume: "200 txnx",
    value: "₦40.2M"
  },
  {
    time: "6AM",
    volume: "504 txnx",
    value: "₦34M"
  },
  {
    time: "9AM",
    volume: "349 txnx",
    value: "₦1M"
  },

]

const liveTransactionStream = [
  {
    id: "TXN-89012",
    number: "****78988",
    timeStamp: " 2 seconds ago",
    value: "₦50,000",
    status: "success"

  },
  {
    id: "TXN-89013",
    number: "****44948",
    timeStamp: " 20 seconds ago",
    value: "₦30,000",
    status: "success"

  },
  {
    id: "TXN-89014",
    number: "****54321",
    timeStamp: " just now",
    value: "₦520,000",
    status: "success"

  },
  {
    id: "TXN-89015",
    number: "****56789",
    timeStamp: " 2 mins ago",
    value: "₦20,000",
    status: "pending"

  },
  {
    id: "TXN-89016",
    number: "****564730",
    timeStamp: " 20 mins ago",
    value: "₦450,000",
    status: "success"

  },
  {
    id: "TXN-89017",
    number: "****43554",
    timeStamp: " 25 seconds ago",
    value: "₦440,000",
    status: "failed"

  },
]


const LiveTransaction = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      {/* Header */}
      <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
        <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-700 dark:text-green-500 font-semibold font-serif">
          Live Transactions
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 mb-5">
        {liveTransaction.map((item, index) => (
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
      <div className="flex justify-between items-center bg-white dark:bg-black gap-2 p-4 sm:p-5">
        <div>

          <h1 className=" sm:text-sm md:text-[18px] text-gray-700 dark:text-white font-semibold font-serif">
            Live Transaction Stream
          </h1>
        </div>
        <div>
          <button className="px-2 text-sm py-1 bg-gray-700 hover:bg-gray-400 dark:bg-gray-100 rounded-md dark:text-gray-700 cursor-pointer text-white">Pause Strem</button>
        </div>
      </div>

      <div className="p-2 dark:text-white ">
        {liveTransactionStream.map((stream, index) => (
          <div key={index} className="p-2 ">
            <div className="shadow-sm dark:bg-gray-900 rounded-md p-3 mb-2 gap-2 flex justify-between">
              <div>
                <div className="font-semibold">{stream.id}</div>
                <span className="text-xs">{stream.number}</span>
                <div>
                  <span className="text-xs">{stream.timeStamp}</span>
                </div>
              </div>
              <div >
                <div>
                  <span className="text-[13px] px-2 py-1 text-green-600 dark:text-green-500 rounded-full bg-green-400/40 ">{stream.status}</span>
                </div>
                <span className="text-xs ml-3">{stream.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiveTransaction
