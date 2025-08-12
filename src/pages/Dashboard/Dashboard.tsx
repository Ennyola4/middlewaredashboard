import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard.js"
import { Charts } from "../../components/charts/Charts.js"
import LastMonitor from "../../components/Monitors/LastMonitor.js"
import Monitor from "../../components/Monitors/Monitor.js"
import SecondMonitor from "../../components/Monitors/SecondMonitor.js"
import ThirdMonitor from "../../components/Monitors/ThirdMonitor.js"
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
            <SecondMonitor/>
            <LastMonitor/>
            <ThirdMonitor/>
           
        </div>
    )
}

export default Dashboard
