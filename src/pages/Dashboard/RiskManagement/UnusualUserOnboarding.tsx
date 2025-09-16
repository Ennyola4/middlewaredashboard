import { UserPlus } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import UUOSummaryCard from "../../../components/Dashboard/RiskManagement/UUOSummaryCard"
import UnusualPatterDetected from "../../../components/Dashboard/RiskManagement/UnusualPatterDetected"
import FlaggedUserOnboardings from "../../../components/Dashboard/RiskManagement/FlaggedUserOnboardings"

const UnusualUserOnboarding = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
        <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-red-400 font-semibold font-serif">
          Unusual User Onboarding
        </h1>
      </div>
      <UUOSummaryCard/>
      <UnusualPatterDetected/>
      <FlaggedUserOnboardings/>
    </div>
  )
}

export default UnusualUserOnboarding
