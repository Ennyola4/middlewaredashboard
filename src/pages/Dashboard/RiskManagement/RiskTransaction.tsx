import RiskLevelDistribution from "../../../components/Dashboard/RiskManagement/RiskLevelDistribution"
import RiskTransactionCard from "../../../components/Dashboard/RiskManagement/RiskTransactionCard"
import Navbar from "../../../components/Navbar/Navbar"

const RiskTransaction = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar />
      <RiskTransactionCard />
      <RiskLevelDistribution/>
    </div>
  )
}

export default RiskTransaction
