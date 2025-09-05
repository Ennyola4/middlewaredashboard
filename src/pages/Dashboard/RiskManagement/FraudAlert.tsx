import { TriangleAlert } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import FraudAlertCards from "../../../components/Dashboard/RiskManagement/FraudAlertCards"
import AlertCategoriesCard from "../../../components/Dashboard/RiskManagement/AlertCategoriesCard"

const FraudAlert = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
        <TriangleAlert className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-red-500 font-semibold font-serif">
          Fraud Alerts 
        </h1>
      </div>
      <FraudAlertCards/>
      <AlertCategoriesCard/>
    </div>
  )
}

export default FraudAlert
