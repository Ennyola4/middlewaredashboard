import {  Users } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"

const RiskUsers = () => {
  return (
    <div>
      <Navbar/>
       <div className="flex items-center gap-3 p-4 sm:p-5">
        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-blue-500 font-semibold font-serif">
          Risk Users Management
        </h1>
      </div>
    </div>
  )
}

export default RiskUsers
