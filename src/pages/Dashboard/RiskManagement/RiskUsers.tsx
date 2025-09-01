import { Users } from "lucide-react"
import Navbar from "../../../components/Navbar/Navbar"

const riskUsers = [
  {
    name: "Jack Bauer",
    icon: <Users className="w-8 h-8" />,
    email: "jackbauer45@gmail.com",
    id: "USR-2024-001",
    amount: " ₦2,500,000",
    joined: "Jan 15, 2024",
    devices: "5",
    lastLogin: "2024-10-01 14:30",
    location: "Lagos, Nigeria",
    status: "High Risk (85%)",
    riskLevel: "Flagged",
    riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
    actionButtons: ["View Details", "Review Risk", "Block User"]

  },

  {
    name: "Jack Bauer",
    icon: <Users className="w-8 h-8" />,
    email: "jackbauer45@gmail.com",
    id: "USR-2024-001",
    amount: " ₦2,500,000",
    joined: "Jan 15, 2024",
    devices: "5",
    lastLogin: "2024-10-01 14:30",
    location: "Lagos, Nigeria",
    status: "High Risk (85%)",
    riskLevel: "Flagged",
    riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
    actionButtons: ["View Details", "Review Risk", "Block User"]

  },

  {
    name: "Jack Bauer",
    icon: <Users className="w-8 h-8" />,
    email: "jackbauer45@gmail.com",
    id: "USR-2024-001",
    amount: " ₦2,500,000",
    joined: "Jan 15, 2024",
    devices: "5",
    lastLogin: "2024-10-01 14:30",
    location: "Lagos, Nigeria",
    status: "High Risk (85%)",
    riskLevel: "Flagged",
    riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
    actionButtons: ["View Details", "Review Risk", "Block User"]

  },

  {
    name: "Jack Bauer",
    icon: <Users className="w-8 h-8" />,
    email: "jackbauer45@gmail.com",
    id: "USR-2024-001",
    amount: " ₦2,500,000",
    joined: "Jan 15, 2024",
    devices: "5",
    lastLogin: "2024-10-01 14:30",
    location: "Lagos, Nigeria",
    status: "High Risk (85%)",
    riskLevel: "Flagged",
    riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
    actionButtons: ["View Details", "Review Risk", "Block User"]

  },
]

const RiskUsers = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center bg-white dark:bg-black gap-3 p-4 sm:p-5">
        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-gray-600 dark:text-blue-500 font-semibold font-serif">
          Risk Users Management
        </h1>
      </div>

      <div className="p-5 shadow-sm dark:text-white bg-white dark:bg-black">
        {riskUsers.map((user, index) => (
          <div key={index} className="shadow-sm p-4 dark:bg-gray-800 rounded-md mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 p-2 dark:bg-gray-950  text-gray-500 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                {user.icon}
              </div>
              <div className="flex flex-col mt-10">
                <span className="mb-1">{user.name}</span>
                <div className="text-[12px] text-gray-500 mb-2">{user.email}</div>
                <div className="text-[10px] text-gray-500 dark:text-gray-300 bg-gray-200 dark:bg-gray-500 rounded-md px-2 py-1 w-fit mb-2">{user.id}</div>
              </div>
            </div>
            <div className="p-2">
              <p className="text-gray-400">Account Details:</p>
              <div className=" grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-mono text-[10px] text-gray-500 dark:text-gray-400 mt-2">
                <div>Balance -<span className="text-[12px] text-green-500">{user.amount}</span></div>
                <span>Joined - {user.joined}</span>
                <br />
                <span>Devices - {user.devices}</span>
                <br />
                <span>Last Login - {user.lastLogin}</span>
              </div>
            </div>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default RiskUsers
