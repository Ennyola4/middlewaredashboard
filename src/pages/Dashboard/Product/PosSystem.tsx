import {
  CreditCard,
  TriangleAlert,
  Activity,
  AlertCircle,
} from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import PosSummaryCard from "../../../components/Dashboard/POSSytem/PosSummaryCard"
import PosSystemStats from "../../../components/Dashboard/POSSytem/PosSystemStats"
import Alerts from "../../../components/Dashboard/POSSytem/Alerts"
import TerminalStatusRegion from "../../../components/Dashboard/POSSytem/TerminalStatusRegion"
import RecentPosTrans from "../../../components/Dashboard/POSSytem/RecentPosTrans"


const PosSystem = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />

      {/* Header Section */}
      <div className="flex items-center gap-3 p-4 sm:p-6">
        <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 dark:text-purple-400" />
        <h1 className="text-xl sm:text-2xl md:text-3xl dark:text-purple-500 text-gray-700 font-semibold font-serif">
          POS System
        </h1>
      </div>
      <PosSummaryCard/>

      {/* Alert Banner */}
      <div className="flex mx-4 sm:mx-6 rounded-md bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 items-center gap-2 p-3 sm:p-4 mb-6">
        <TriangleAlert size={20} className="text-red-500 dark:text-red-400 flex-shrink-0" />
        <p className="text-sm sm:text-base dark:text-red-300 text-red-700 font-medium">
          High Error Rate Detected: 1.88% - Immediate attention required
        </p>
      </div>

      {/* Main Content - Two Columns */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 pb-6">
        {/* Left Column - Terminal Status Cards */}
        <div className="w-full lg:w-2/3">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Terminal Status</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Activity size={16} />
              <span>Last updated: 5 min ago</span>
            </div>
          </div>

       <TerminalStatusRegion/>
        </div>

        {/*Stats and Alerts */}
        <div className="w-full lg:w-1/3">
          {/* System Overview Card */}
         <PosSystemStats/>

          {/* Alerts Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <AlertCircle size={20} />
              Recent Alerts
            </h2>

           <Alerts/>
          </div>
        </div>
      </div>

     <div className="m-3 p-4 sm:p-5 bg-white dark:bg-gray-800/90 shadow-sm rounded-lg border border-gray-100 dark:border-gray-700">
  <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
    <CreditCard className="w-5 h-5 mr-2" />
    Recent POS Transactions
  </h2>
  
<RecentPosTrans/>
</div>
    </div>
  )
}

export default PosSystem