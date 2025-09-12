import { TriangleAlert, UserX } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import UserActivitySummaryCard from "../../../components/Dashboard/RiskManagement/UserActivitySummaryCard"
import APAandResolutionCard from "../../../components/Dashboard/RiskManagement/APAandResolutionCard"

const UnusualUserActivity = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
        <UserX className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-red-400 font-semibold font-serif">
          Unusual User Activities
        </h1>
      </div>
      <UserActivitySummaryCard/>
      <APAandResolutionCard/>
    </div>
  )
}

export default UnusualUserActivity
