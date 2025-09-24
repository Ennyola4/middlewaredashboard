import { Globe } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import ThirdPartySummaryCard from "../../../components/Dashboard/Management/ThirdPartySummaryCard"
import IntegrationCategories from "../../../components/Dashboard/Management/IntegrationCategories"
import IntegrationStatus from "../../../components/Dashboard/Management/IntegrationStatus"

const ThirdPartyIntegrations = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-blue-500 font-semibold font-serif">
          Third Party Integrations
        </h1>
      </div>
      <ThirdPartySummaryCard/>
      <IntegrationCategories/>
      <IntegrationStatus/>
    </div>
  )
}

export default ThirdPartyIntegrations
