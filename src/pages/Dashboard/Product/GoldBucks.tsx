import Navbar from "../../../components/Navbar/Navbar"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Tablets } from "lucide-react"
import SummaryCard from "../../../components/Dashboard/GoldBucksCards/GBSummaryCard";
import RCU from "../../../components/Dashboard/GoldBucksCards/RCU"
import RecentGoldbucksAct from "../../../components/Dashboard/GoldBucksCards/RecentGoldbucksAct";


const GoldBucks = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); 

  return (
    <div>
      <div className="bg-white dark:bg-black">
        <Navbar />
        {/* Header */}
        <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
          <Tablets className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-yellow-500" />
          <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-700 dark:text-yellow-500 font-semibold font-serif">
            Gold Bucks
          </h1>
        </div>
        <SummaryCard/>
        <RCU/>
        <RecentGoldbucksAct/>
      </div>
    </div>
  )
}

export default GoldBucks
