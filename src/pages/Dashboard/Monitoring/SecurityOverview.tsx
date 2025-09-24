import { Lock } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import SecurityOverviewSummaryCard from "../../../components/Dashboard/Monitoring/SecurityOverviewSummaryCard"
import SecurityModulesAndCompliance from "../../../components/Dashboard/Monitoring/SecurityModulesAndCompliance"
import RecentSecurityEvent from "../../../components/Dashboard/Monitoring/RecentSecurityEvent"

const SecurityOverview = () => {
   return (
        <div className="bg-white dark:bg-black min-h-screen">
          <Navbar />
          {/* Header */}
          <div className="flex items-center gap-3 p-4 sm:p-5">
            <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
            <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-purple-500 font-semibold font-serif">
              Security Overview
            </h1>
          </div>
          <SecurityOverviewSummaryCard/>
          <SecurityModulesAndCompliance/>
          <RecentSecurityEvent/>
        </div>
      )
}

export default SecurityOverview
