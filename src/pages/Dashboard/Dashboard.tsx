import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard.js"
import { Charts } from "../../components/charts/Charts.js"
import Monitor from "../../components/Monitors/Monitor.js"
import Navbar from "../../components/Navbar/Navbar.js"
import Pagination from "../../components/Paginate/Pagination.js"

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <AnalyticsCard />
            <Pagination />
            <Charts/>
            <Monitor/>
        </div>
    )
}

export default Dashboard
