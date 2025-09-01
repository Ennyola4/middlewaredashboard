import Navbar from "../../../components/Navbar/Navbar"
import RiskSummaryCard from "../../../components/Dashboard/Transactions/RiskSummaryCard"
import RiskCategoryDistrubution from "../../../components/Dashboard/Transactions/RiskCategoryDistrubution"
import HighRiskTransactionQueue from "../../../components/Dashboard/Transactions/HighRiskTransactionQueue"





const HighRiskTransaction = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <RiskSummaryCard />
      <RiskCategoryDistrubution/>
      <HighRiskTransactionQueue/>
    </div>
  )
}

export default HighRiskTransaction
