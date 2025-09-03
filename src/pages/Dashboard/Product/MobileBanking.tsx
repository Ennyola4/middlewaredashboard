import Navbar from "../../../components/Navbar/Navbar"
import { TabletSmartphoneIcon,} from "lucide-react"
import MBSummaryCard from "../../../components/Dashboard/MobileBankingCards/MBSummaryCard";
import ACVolume from "../../../components/Dashboard/MobileBankingCards/ACVolume";
import RMT from "../../../components/Dashboard/MobileBankingCards/RMT";


const MobileBanking = () => {



  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <TabletSmartphoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 dark:text-green-400" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] dark:text-green-500  text-gray-700 font-semibold font-serif">
          Mobile Banking
        </h1>
      </div>
      <MBSummaryCard/>
      <ACVolume/>
      <RMT/>
    </div>
  )
}

export default MobileBanking