import { RefreshCcw } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import RecurringSummaryCard from "../../../components/Dashboard/RiskManagement/RecurringSummaryCard"
import RecurringCards from "../../../components/Dashboard/RiskManagement/RecurringCards"
import REP from "../../../components/Dashboard/RiskManagement/REP"

const RecurringExceptions = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
         <Navbar />
         <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
           <RefreshCcw className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
           <h1 className="text-xl sm:text-2xl md:text-[28px] text-purple-600 dark:text-purple-500 font-semibold font-serif">
             Recurring Exceptions 
           </h1>
         </div>
         <RecurringSummaryCard/>
         <RecurringCards/>
         <REP/>
       </div>
  )
}

export default RecurringExceptions
