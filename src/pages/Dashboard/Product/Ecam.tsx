import { Camera } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"

const Ecam = () => {
  return (
    <div>
      <div>
        <Navbar/>
         {/* Header */}
        <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
          <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-blue-300" />
          <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-700 dark:text-blue-300 font-semibold font-serif">
           E-Cam Security Dashboard
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Ecam
