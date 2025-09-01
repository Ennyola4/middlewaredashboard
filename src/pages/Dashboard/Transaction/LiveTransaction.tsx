import { Activity } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import LiveTransactionCard from "../../../components/Dashboard/Transactions/LiveTransactionCard"
import HourlyTransactionVolume from "../../../components/Dashboard/Transactions/HourlyTransactionVolume"
import LiveTransactionStream from "../../../components/Dashboard/Transactions/LiveTransactionStream"



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
      <LiveTransactionCard />
      <HourlyTransactionVolume/>
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
      {/* Live Transaction Stream Section */}
      <LiveTransactionStream/>
    </div>
  )
}

export default LiveTransaction
