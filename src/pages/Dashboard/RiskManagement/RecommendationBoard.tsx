import { Brain } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"

const RecommendationBoard = () => {
  return (
   <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
        <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-blue-400 dark:text-blue-400 font-semibold font-serif">
         AI Recommendation Board
        </h1>
      </div>
      
    </div>
  )
}

export default RecommendationBoard
