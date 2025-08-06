import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard"
import { Charts } from "../../components/charts/Charts"
import Monitor from "../../components/Monitors/Monitor"
import Navbar from "../../components/Navbar/Navbar"
import Pagination from "../../components/Paginate/Pagination"

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
