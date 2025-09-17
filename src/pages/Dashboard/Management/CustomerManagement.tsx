import { User2 } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"
import CMSummaryCard from "../../../components/Dashboard/Management/CMSummaryCard"
import AccountTypeDist from "../../../components/Dashboard/Management/AccountTypeDist"
import CustomerDatabase from "../../../components/Dashboard/Management/CustomerDatabase"

const CustomerManagement = () => {
  return (
     <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      {/* Header */}
      <div className="flex items-center gap-3 p-4 sm:p-5">
        <User2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-blue-500 font-semibold font-serif">
          Customer Management
        </h1>
      </div>
      <CMSummaryCard/>
      <AccountTypeDist/>
      <CustomerDatabase/>
    </div>
  )
}

export default CustomerManagement
