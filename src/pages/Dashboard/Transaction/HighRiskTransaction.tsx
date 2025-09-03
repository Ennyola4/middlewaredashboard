import Navbar from "../../../components/Navbar/Navbar"
import RiskSummaryCard from "../../../components/Dashboard/TransactionsCards/RiskSummaryCard"
import RiskCategoryDistrubution from "../../../components/Dashboard/TransactionsCards/RiskCategoryDistrubution"
import HighRiskTransactionQueue from "../../../components/Dashboard/TransactionsCards/HighRiskTransactionQueue"





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
