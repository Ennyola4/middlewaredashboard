import { NotebookText } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import TRSummaryCard from "../../../components/Dashboard/Management/TRSummaryCard"
import TransactionChannels from "../../../components/Dashboard/Management/TransactionChannels"
import ScheduledReports from "../../../components/Dashboard/Management/ScheduledReports"


const TransactionReport = () => {
   return (
     <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <NotebookText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-blue-500 font-semibold font-serif">
          Transaction Report
        </h1>
      </div>
      <TRSummaryCard/>
      <TransactionChannels/>
      <ScheduledReports/>
     
    </div>
  )
}

export default TransactionReport
