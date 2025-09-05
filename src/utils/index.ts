import {
    CircleAlert,
    DollarSign,
    Shield,
    Activity,
    CircleDollarSign,
    TrendingUp,
    User2,
    Users,
    BanknoteArrowDown,
    Layers,
    Database,
    Video,
    TriangleAlert,
    Sparkles,
    Gift,
    CreditCard,
    Download,
    Store,
    Wifi,
    Bell,
    CircleCheckBig
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
        icon: CircleDollarSign,
        value: "₦2450.0M",
        textColor: "text-blue-500"
    },
    {
        title: "Active Users",
        icon: User2,
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
        status: "success",
        bgColor: "bg-green-500/30 dark:bg-green-500/20",
        textColor: "text-green-800 dark:text-green-500"

    },
    {
        id: "TXN-89013",
        number: "****44948",
        timeStamp: " 20 seconds ago",
        value: "₦30,000",
        status: "success",
        bgColor: "bg-green-500/30 dark:bg-green-500/20",
        textColor: "text-green-800 dark:text-green-500"

    },
    {
        id: "TXN-89014",
        number: "****54321",
        timeStamp: " just now",
        value: "₦520,000",
        status: "success",
        bgColor: "bg-green-500/30 dark:bg-green-500/20",
        textColor: "text-green-800 dark:text-green-500"

    },
    {
        id: "TXN-89015",
        number: "****56789",
        timeStamp: " 2 mins ago",
        value: "₦20,000",
        status: "pending",
        bgColor: "bg-yellow-500/30 dark:bg-yellow-500/20",
        textColor: "text-yellow-800 dark:text-yellow-500"

    },
    {
        id: "TXN-89016",
        number: "****564730",
        timeStamp: " 20 mins ago",
        value: "₦450,000",
        status: "success",
        bgColor: "bg-green-500/30 dark:bg-green-500/20",
        textColor: "text-green-800 dark:text-green-500"

    },
    {
        id: "TXN-89017",
        number: "****43554",
        timeStamp: " 25 seconds ago",
        value: "₦440,000",
        status: "failed",
        bgColor: "bg-red-500/30 dark:bg-red-500/20",
        textColor: "text-red-800 dark:text-red-500"

    },
]

export const bBanking = [
    {
        title: "Total Accounts",
        icon: Users,
        value: "15,420",
        textColor: "text-blue-500"
    },
    {
        title: "Active Users",
        icon: Activity,
        value: "12,450",
        textColor: "text-green-500"
    },
    {
        title: "Daily Transactions",
        icon: BanknoteArrowDown,
        value: "8,923",
        textColor: "text-purple-500"
    },
    {
        title: "Monthly Volume",
        icon: TrendingUp,
        value: "₦2.3B",
        textColor: "text-green-500"
    },
]

export const systemHealthAndPerfomance = [
    {
        barTitle: "System Uptime",
        barValue: "99.98%"
    },
    {
        barTitle: "Error Rate",
        barValue: "5.9%"
    },
]

export const systemPerformance = [
    {
        log: "API Response Time",
        status: "120ms",
        icon: Layers,
        textColor: "text-blue-500"
    },
    {
        log: "Database Performance",
        status: "Optimal",
        icon: Database,
        textColor: "text-blue-500"
    },
    {
        log: "Security Status",
        status: "Secure",
        icon: Shield
    }
]

export const recentHighValueTransaction = [
    {
        id: "BB-001",
        idType: "Tech Solutions Ltd",
        transactionType: "Wire Transfer",
        amount: "₦2,500,000",
        status: "completed",

    },
    {
        id: "BB-002",
        idType: "Manufacturing Corp",
        transactionType: "Bulk Payment",
        amount: "₦1,800,000",
        status: "pending",

    },
    {
        id: "BB-003",
        idType: "Trading Co",
        transactionType: "International",
        amount: "₦3,200,000",
        status: "completed"

    }
]

export const eCam = [
    {
        title: "Active Cameras",
        value: "156/180",
        icon: Video,
        textColor: "text-green-500"
    },
    {
        title: "Recording Hours (24h)",
        value: "3240",
        icon: TrendingUp,
        textColor: "text-blue-500"
    },
    {
        title: "Alerts Today",
        value: "55",
        icon: TriangleAlert,
        textColor: "text-red-500"
    },
    {
        title: "System Uptime",
        value: "99.99%",
        icon: Shield,
        textColor: "text-blue-500"
    },
]

export const cameraZonesStatus = [
    {
        title: "ATM Areas",
        event: "45/50 Active",
        status: "operational",
        bar: "99%"
    },
    {
        title: "Banking Hall",
        event: "38/40 Active",
        status: "operational",
        bar: "95%"
    },
    {
        title: "Vault Areas",
        event: "28/30 Active",
        status: "maintainance",
        bar: "70%"
    },
    {
        title: "Parking Lots",
        event: "25/30 Active",
        status: "operational",
        bar: "90%"
    },
    {
        title: "Perimeter",
        event: "20/30  Active",
        status: "degraded",
        bar: "10%"
    },

]

export const systemResourse = [
    {
        title: "Storage Usage",
        value: "78.5%"
    },
    {
        title: "Bandwidth Usage",
        value: "2.3GB/s"
    }
]

export const recentSecurityAlerts = [
    {
        id: "EC-001",
        title: "ATM Zone A",
        titleStatus: "mediun",
        time: "12 min ago",
        action: "Motion Detection",
        button: "View Feed"

    },
    {
        id: "EC-002",
        title: "Banking Hall",
        titleStatus: "low",
        time: "12 min ago",
        action: "crowd Detection",
        button: "View Feed"

    },
    {
        id: "EC-003",
        title: "Vault Area",
        titleStatus: "high",
        time: "12 min ago",
        action: "Unauthorized Access",
        button: "View Feed"

    },
]

export const gBucks = [
    {
        title: "Total Members",
        icon: Users,
        textColor: "text-blue-500",
        value: "23,100"
    },
    {
        title: "Points Earned",
        icon: Sparkles,
        textColor: "text-green-500",
        value: "45.7M"
    },
    {
        title: "Points Redeemed",
        icon: Gift,
        textColor: "text-green-500",
        value: "23.4M"
    },
    {
        title: "Conversion Rate",
        icon: TrendingUp,
        textColor: "text-green-500",
        value: "15.2%"
    },
]

export const rewardCategoryUsage = [
    {
        title: "Airtime/Data",
        titlePoint: "8.9M pts",
        totalRedemptions: "45% Total Redemptions"
    },
    {
        title: "Bill Payment",
        titlePoint: "6.2M pts",
        totalRedemptions: "30% Totoal Redemptions"
    },
    {
        title: "Shopping Vouchers",
        titlePoint: "3.1M pts",
        totalRedemptions: "15% Total Redemptions"
    },
    {
        title: "Cash Back",
        titlePoint: "2.0M pts",
        totalRedemptions: "10% Redemptions"
    }
]

export const systemPreference = [
    {
        title: "System Uptime",
        titleRate: "89.87"
    },
    {
        title: " Error Rate",
        titleRate: "14.77%"
    },
]

export const recentGoldBucksActivities = [
    {
        id: "GB-001",
        title: "Lamine Yamal",
        idStatus: "Earned",
        points: "50 pts",
        event: "Transaction Bonus",
        status: "completed"
    },
    {
        id: "GB-002",
        title: "Lionel Messi",
        idStatus: "Redeemed",
        points: "500 pts",
        event: "Airtime Purcahse",
        status: "completed"
    },
    {
        id: "GB-003",
        title: "Ajayi Enitan",
        idStatus: "Earned",
        points: "750 pts",
        event: "Referral Bonus",
        status: "Pending"
    },
]

export const mBanking = [
    {
        title: "Total Users",
        icon: Users,
        textColor: "text-green-500",
        value: "89,432",
    },
    {
        title: "Active Users (24h)",
        icon: Activity,
        textColor: "text-blue-500",
        value: "67,890"
    },
    {
        title: "Daily Transactions",
        icon: CreditCard,
        textColor: "text-blue-500",
        value: "34,567"
    },
    {
        title: "App Downloads",
        icon: Download,
        textColor: "text-blue-300",
        value: "245,680"
    },
]

export const featureUsageAnalytics = [
    {
        title: "Fund Transfer",
        value: "85%"
    },
    {
        title: "Bill Payment",
        value: "72%"
    },
    {
        title: "Airtime/Data",
        value: "68%"
    },
    {
        title: "Account Balance",
        value: "95%"
    },
    {
        title: "Transaction History",
        value: "58%"
    },
]

export const systemPerformances = [
    {
        title: "App Uptime",
        rate: "99.95%"
    },
    {
        title: "Error Rate",
        rate: "1.5%"
    },
]

export const recentMobileTransanction = [
    {
        id: "MB-1",
        name: "Sarah Banks",
        type: "Fund Transfer",
        value: "₦250,000",
        status: "Completed"
    },
    {
        id: "MB-2",
        name: "Abel Bammy",
        type: "Bill Payment",
        value: "₦75,000",
        status: "Completed"
    },
    {
        id: "MB-3",
        name: " Diogo Jota",
        type: "Airtime Purchase",
        value: "₦250,00",
        status: "Pending"
    },
]

export const posSystem = [
    {
        title: "Total Users",
        icon: Store,
        textColor: "text-green-500",
        value: "89,432"
    },
    {
        title: "Active Users (24h)",
        icon: Activity,
        textColor: "text-blue-500",
        value: "67,890"
    },
    {
        title: "Daily Transactions",
        icon: TrendingUp,
        textColor: "text-blue-500",
        value: "34,567"
    },
    {
        title: "App Downloads",
        icon: Wifi,
        textColor: "text-blue-300",
        value: "245,680"
    },
]

export const terminalStatusRegion = [
    {
        title: "Lagos Island",
        titleStatus: "operational",
        status: "Active: 2340/2500",
        label: "Offline: 45",
        bar: "95%"
    },
    {
        title: "Victoria Island",
        titleStatus: "operational",
        status: "Active: 1890/2000",
        label: "Offline: 28",
        bar: "93%"
    },
    {
        title: "Ikeja",
        titleStatus: "operational",
        status: "Active: 1540/1700",
        label: "Offline: 22",
        bar: "96%"
    },
    {
        title: "Lekki",
        titleStatus: "degraded",
        status: "Active: 1650/1800",
        label: "Offline: 35",
        bar: "98%"
    },
    {
        title: "Mainland",
        titleStatus: "critical",
        status: "Active: 1500/2500",
        label: "Offline: 15",
        bar: "70%"
    },
    {
        title: "Ikorodu",
        titleStatus: "operational",
        status: "Active: 1500/2500",
        label: "Offline: 15",
        bar: "70%"
    },
]

export const PosSystem = [
    {
        title: "Total Users",
        icon: Store,
        textColor: "text-green-500",
        value: "89,432"
    },
    {
        title: "Active Users (24h)",
        icon: Activity,
        textColor: "text-blue-500",
        value: "67,890"
    },
    {
        title: "Daily Transactions",
        icon: TrendingUp,
        textColor: "text-purple-500",
        value: "34,567"
    },
    {
        title: "App Downloads",
        icon: Wifi,
        textColor: "text-blue-300",
        value: "245,680"
    },
]

export const systemStats = {
    totalTerminals: 10500,
    activeTerminals: 8920,
    offlineTerminals: 145,
    errorRate: 1.88,
    transactionsToday: 245832,
    avgResponseTime: "0.8s"
}

export const alerts = [
    { id: 1, message: "Mainland region experiencing connectivity issues", severity: "high" },
    { id: 2, message: "Transaction volume higher than usual in Victoria Island", severity: "medium" },
    { id: 3, message: "Scheduled maintenance tonight at 2:00 AM", severity: "low" }
]

export const recentPosTransactions = [
    {
        id: "POS-001",
        title: "SuperMart Plaza",
        idStatus: "TRM-3401",
        points: "₦45,000",
        event: "Card Payment",
        status: "completed"
    },
    {
        id: "POS-002",
        title: "Gas Station 24/7",
        idStatus: "TRM-2108",
        points: "₦12,500",
        event: "Contactless",
        status: "Failed"
    },
    {
        id: "POS-003",
        title: "Restaurant Delight",
        idStatus: "TRM-5629",
        points: "₦8,900",
        event: "Chip & PIN",
        status: "Completed"
    },
]

export const riskUsers = [
    {
        name: "Jack Bauer",
        icon: Users,
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
        name: "Tony Amelda",
        icon: Users,
        email: "tonyalmelda@gmail.com",
        id: "USR-2024-002",
        amount: " ₦3,500,000",
        joined: "sep 25, 2021",
        devices: "2",
        lastLogin: "2023-12-11 11:40",
        location: "Abuja, Nigeria",
        status: "High Risk (78%)",
        riskLevel: "Flagged",
        riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
        actionButtons: ["View Details", "Review Risk", "Block User"]

    },

    {
        name: "Chloe O' Brian",
        icon: Users,
        email: "Chloe45@gmail.com",
        id: "USR-2024-003",
        amount: " ₦22,500,000",
        joined: "Jun 15, 2024",
        devices: "8",
        lastLogin: "2023-13-03 12:10",
        location: "Kano, Nigeria",
        status: "High Risk (88%)",
        riskLevel: "Flagged",
        riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
        actionButtons: ["View Details", "Review Risk", "Block User"]

    },

    {
        name: "Kimberly Bauer",
        icon: Users,
        email: "kimbauer45@gmail.com",
        id: "USR-2024-004",
        amount: " ₦11,500,000",
        joined: "Dec 20, 2019",
        devices: "1",
        lastLogin: "2021-12-03 14:50",
        location: "Oyo, Nigeria",
        status: "High Risk (95%)",
        riskLevel: "Flagged",
        riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
        actionButtons: ["View Details", "Review Risk", "Block User"]

    },
    {
        name: "Kimberly Bauer",
        icon: Users,
        email: "kimbauer45@gmail.com",
        id: "USR-2024-004",
        amount: " ₦11,500,000",
        joined: "Dec 20, 2019",
        devices: "1",
        lastLogin: "2021-12-03 14:50",
        location: "Oyo, Nigeria",
        status: "High Risk (95%)",
        riskLevel: "Flagged",
        riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
        actionButtons: ["View Details", "Review Risk", "Block User"]

    },
    {
        name: "Kimberly Bauer",
        icon: Users,
        email: "kimbauer45@gmail.com",
        id: "USR-2024-004",
        amount: " ₦11,500,000",
        joined: "Dec 20, 2019",
        devices: "1",
        lastLogin: "2021-12-03 14:50",
        location: "Oyo, Nigeria",
        status: "High Risk (95%)",
        riskLevel: "Flagged",
        riskFactors: ["Multiple device logins", "Unusual transaction pattern", "Foreign IP access"],
        actionButtons: ["View Details", "Review Risk", "Block User"]

    },

]

export const riskTransaction = [
    {
        title: "Total Transactions",
        icon: Activity,
        textColor: "text-blue-500",
        value: "245,890"
    },
    {
        title: "Flagged Transactions",
        icon: TriangleAlert,
        textColor: "text-red-500",
        value: "3,456"
    },
    {
        title: "Resolved Today",
        icon: TrendingUp,
        textColor: "text-green-500",
        value: "89"
    },
    {
        title: "Avg Resolution Time",
        icon: Shield,
        textColor: "text-green-500",
        value: "2.3h"
    },
]

export const riskLevelDistribution = [
    {
        title: "High Risk",
        value: "234",
        bar: "25%"
    },
    {
        title: "Medium Risk",
        value: "456",
        bar: "35%"
    },
    {
        title: "Low Risk",
        value: "544",
        bar: "40%"
    },
]

export const riskPatternAnalysis = [
    {
        title: "Multiple Small Transfers",
        value: "45",
        bar: "15%"
    },
    {
        title: "High Velocity Transactions",
        value: "32",
        bar: "20%"
    },
    {
        title: "Cross-Border Transfers",
        value: "33",
        bar: "40%"
    },
    {
        title: "Round Number Amounts",
        value: "67",
        bar: "10%"
    },
]

export const recentRiskTransactions = [
    {
        id: "RT-001",
        status: "High",
        value: "₦2,500,000",
        account: "Account-****8901 → Account-****2345",
        action: "Unusual Amount ",
        time: "2024-01-15 14:30",
        button: "Investigate"

    },
    {
        id: "RT-002",
        status: "Medium",
        value: "₦20,500,000",
        account: "Account-****5678 → Account-****9012",
        action: " Frequent Transfers ",
        time: "2024-01-15 13:45",
        button: "Investigate"

    },
    {
        id: "RT-003",
        status: "High",
        value: "₦12,500,000",
        account: "Account-****3456 → Account-****7890",
        action: " Blacklisted Recipient",
        time: "2024-01-15 12:20",
        button: "Investigate"

    },
    {
        id: "RT-004",
        status: "High",
        value: "₦7,500,000",
        account: "Account-****3876 → Account-****7987",
        action: " Blacklisted Recipient",
        time: "2024-01-15 12:20",
        button: "Investigate"

    },
]

export const fraudAlertSummaryCard = [
    {
        title: "Total Alerts",
        icon: Bell,
        value: "156",
        textColor: "text-orange-500"
    },
    {
        title: "Critical Alerts",
        icon: TriangleAlert,
        value: "23",
        textColor: "text-red-500"
    },
    {
        title: "Resolved Today",
        icon: CircleCheckBig,
        value: "34",
        textColor: "text-green-500"
    },
    {
        title: "Avg Response Time",
        icon: TrendingUp,
        value: "15m",
        textColor: "text-blue-500"
    },
]

export const alertCategoriesCard = [
    {
        title: "Account Takeover",
        status: "+12%",
        value: "23 Alerts",
        textColor: "text-red-500"
    },
    {
        title: "Card Fraud",
        status: "-8%",
        value: "45 Alerts",
        textColor: "text-green-500"
    },
    {
        title: "Identity Theft",
        status: "+25%",
        value: "18 Alerts",
        textColor: "text-red-500"
    },
    {
        title: "Money Laundering",
        status: "-15%",
        value: "12 Alerts",
        textColor: "text-green-500"
    },
    {
        title: "Phishing Attack",
        status: "+5%",
        value: "34 Alerts",
        textColor: "text-red-500"
    },
    {
        title: "Transaction Fraud",
        status: "-3%",
        value: "23 Alerts",
        textColor: "text-green-500"
    },
]