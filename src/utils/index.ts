import {
    CircleAlert,
    DollarSign,
    Shield,
    Activity,
    CircleDollarSign,
    TrendingUp,
    User2
} from "lucide-react"

export const highRiskTransaction = [
    {
        title: "High Risk Detected",
        icon: CircleAlert,
        value: "1,234",
        textColor: "text-green-500"
    },
    {
        title: "Blocked Today",
        icon: Shield,
        value: "45",
        textColor: "text-blue-500"
    },
    {
        title: "Risk Amount",
        icon: DollarSign,
        value: "₦450M",
        textColor: "text-purple-500"
    },
    {
        title: "Block Success Rate",
        icon: TrendingUp,
        value: "98.7%",
        textColor: "text-blue-500"
    },
]

export const riskCategoryDistribution = [
    {
        title: "Amount Anomalies",
        value: "345",
        bar: "20%"
    },
    {
        title: "Geographic Risk",
        value: "345",
        bar: "25%"
    },
    {
        title: "Velocity Patterns",
        value: "345",
        bar: "35%"
    },
    {
        title: "Recipient Risk",
        value: "345",
        bar: "15%"
    },
    {
        title: "Timing Anomalies",
        value: "345",
        bar: "35%"
    },

]

export const riskScoreDistribution = [
    {
        title: "Critical (90-100)",
        transaction: "234 transactions",
    },

    {
        title: "High (80-89)",
        transaction: "456 transactions",
    },
    {
        title: "Medium (70-79)",
        transaction: "544 transactions",
    },
]

export const highRiskTransactionQueue = [
    {
        id: "HRT-001",
        riskScore: "Risk Score:",
        riskScoreStatusOne: "95%",
        riskScoreStatusTwo: "Blocked",
        event: "Transaction Details:",
        value: "₦5,000,000",
        account: "****8901 → Account-****2345",
        riskFactor: "Risk Factors:",
        riskFactorStatusOne: "Unusual Amount",
        riskFactorStatusTwo: "Cross-Border",
        riskFcatorStatusThree: "New Recipient",
        location: "Lagos → London ",
        time: "2024-01-15 14:30",
        firstButton: "REVIEW",
        secondButton: "BLOCK"
    },
    {
        id: "HRT-002",
        riskScore: "Risk Score:",
        riskScoreStatusOne: "87%",
        riskScoreStatusTwo: "Under REVIEW",
        event: "Transaction Details:",
        value: "₦2,500,000",
        account: "-****5678 → Account-****9012",
        riskFactor: "Risk Factors:",
        riskFactorStatusOne: "High Velocity",
        riskFactorStatusTwo: "Round Number",
        location: "Abuja → Dubai ",
        time: "2024-01-15 13:45",
        firstButton: "REVIEW",
        secondButton: "BLOCK"
    },
    {
        id: "HRT-003",
        riskScore: "Risk Score:",
        riskScoreStatusOne: "92%",
        riskScoreStatusTwo: "Flagged",
        event: "Transaction Details:",
        value: "₦1,800,000",
        account: "-****3456 → Account-****7890",
        riskFactor: "Risk Factors:",
        riskFactorStatusOne: "Blacklisted Recipient",
        riskFactorStatusTwo: "Unusual Time",
        location: "Port Harcourt → Unknown",
        time: "2024-01-15 12:20",
        firstButton: "REVIEW",
        secondButton: "BLOCK"
    },
    {
        id: "HRT-004",
        riskScore: "Risk Score:",
        riskScoreStatusOne: "92%",
        riskScoreStatusTwo: "Investigating",
        event: "Transaction Details:",
        value: "₦3,200,000",
        account: "-****2468 → Account-****1357",
        riskFactor: "Risk Factors:",
        riskFactorStatusOne: "Pattern Matching",
        riskFactorStatusTwo: "High Amount",
        location: "Kano → Singapore ",
        time: "2024-01-15 11:10",
        firstButton: "REVIEW",
        secondButton: "BLOCK"
    },
]




export const liveTransaction = [
    {
        title: "Transactions Today",
        icon: Activity,
        value: "156,780",
        textColor: "text-green-500"
    },
    {
        title: "Total Volume",
        icon: CircleDollarSign ,
        value: "₦2450.0M",
        textColor: "text-blue-500"
    },
    {
        title: "Active Users",
        icon: User2 ,
        value: "8,934",
        textColor: "text-purple-500"
    },
    {
        title: "Success Rate",
        icon: TrendingUp, 
        value: "98.7%",
        textColor: "text-blue-500"
    },
]

export const hourlyTransactionVolume = [
    {
        time: "12AM",
        volume: "234 txnx",
        value: "₦12.5M"
    },
    {
        time: "2AM",
        volume: "145 txnx",
        value: "₦10.5M"
    },
    {
        time: "10AM",
        volume: "134 txnx",
        value: "₦2.5M"
    },
    {
        time: "4AM",
        volume: "200 txnx",
        value: "₦40.2M"
    },
    {
        time: "6AM",
        volume: "504 txnx",
        value: "₦34M"
    },
    {
        time: "9AM",
        volume: "349 txnx",
        value: "₦1M"
    },

]

export const liveTransactionStream = [
    {
        id: "TXN-89012",
        number: "****78988",
        timeStamp: " 2 seconds ago",
        value: "₦50,000",
        status: "success"

    },
    {
        id: "TXN-89013",
        number: "****44948",
        timeStamp: " 20 seconds ago",
        value: "₦30,000",
        status: "success"

    },
    {
        id: "TXN-89014",
        number: "****54321",
        timeStamp: " just now",
        value: "₦520,000",
        status: "success"

    },
    {
        id: "TXN-89015",
        number: "****56789",
        timeStamp: " 2 mins ago",
        value: "₦20,000",
        status: "pending"

    },
    {
        id: "TXN-89016",
        number: "****564730",
        timeStamp: " 20 mins ago",
        value: "₦450,000",
        status: "success"

    },
    {
        id: "TXN-89017",
        number: "****43554",
        timeStamp: " 25 seconds ago",
        value: "₦440,000",
        status: "failed"

    },
]

