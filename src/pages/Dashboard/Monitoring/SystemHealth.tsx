import { Monitor } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import SystemHealthSummaryCard from "../../../components/Dashboard/Monitoring/SystemHealthSummaryCard"
import ServiceStatusMonitor from "../../../components/Dashboard/Monitoring/ServiceStatusMonitor"
import StorageOverviewAndDBhealth from "../../../components/Dashboard/Monitoring/StorageOverviewAndDBhealth"

const SystemHealth = () => {
     return (
        <div className="bg-white dark:bg-black min-h-screen">
          <Navbar />
          {/* Header */}
          <div className="flex items-center gap-3 p-4 sm:p-5">
            <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
            <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-orange-500 font-semibold font-serif">
              System Health Overview
            </h1>
          </div>
          <SystemHealthSummaryCard/>
          <ServiceStatusMonitor/>
          <StorageOverviewAndDBhealth/>
        </div>
      )
}

export default SystemHealth
