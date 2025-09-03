import {
  Building2
} from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import BBScard from "../../../components/Dashboard/BusinessBankingCards/BBScard"
import SHAP from "../../../components/Dashboard/BusinessBankingCards/SHAP"
import RHVTcard from "../../../components/Dashboard/BusinessBankingCards/RHVTcard"




const BusinessBanking = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-blue-500 font-semibold font-serif">
          Business Banking
        </h1>
      </div>
      <BBScard />
      <SHAP />
      <RHVTcard />
    </div>
  )
}

export default BusinessBanking