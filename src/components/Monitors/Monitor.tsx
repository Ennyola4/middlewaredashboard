import { Users } from "lucide-react";
import { Shield } from "lucide-react";
import { Eye } from 'lucide-react';




const Monitor = () => {
    const highRiskUser = [
        {
            usr: "USR-2024-001",
            usrName: "John Doe",
            status: "flagged",
            hru: "Multiple device logins",
            hruStatus: "Risk: 85%",
            time: "2 mins ago",
        },
        {
            usr: "USR-2024-002",
            usrName: "Jane Smith",
            status: "monitoring",
            hru: "High value transactions",
            hruStatus: "Risk: 78%",
            time: "5 mins ago",
        },
        {
            usr: "USR-2024-003",
            usrName: "Enitan Ajayi",
            status: "blocked",
            hru: "Foreign IP + High amount",
            hruStatus: "Risk: 92%",
            time: "8 mins ago",
        },
    ];

    const highRiskTransaction = [
        {
            usrTwo: "TXN-RISK-001",
            usrStatus: "pending review",
            value: "₦2,500,000",
            valuePurpose: "Wire Transfer",
            name: "Diogo Jota",
            firstNameStatus: "High Amount",
            secondNameStatus: "Off Hours",
            time: "2 mins ago",
        },
        {
            usrTwo: "TXN-RISK-002",
            usrStatus: "flagged",
            value: "₦1,800,000",
            valuePurpose: "Int'l Transfer",
            name: "Mohammed Salah",
            firstNameStatus: "Foreign Recipient",
            secondNameStatus: "New Payee",
            time: "7 mins ago",
        },
        {
            usrTwo: "TXN-RISK-003",
            usrStatus: "blocked",
            value: "₦3,200,000",
            valuePurpose: "Business payment",
            name: "Temitope Ogunleye",
            firstNameStatus: "Unusual Pattern",
            secondNameStatus: "High Frequency",
            time: "12 mins ago",
        },
    ]

    // Status color mapping
    const statusColors = {
        flagged: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
        monitoring: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        blocked: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };

    return (
        <div className='w-full grid grid-cols-1 bg-white dark:bg-gray-950'>
            {/* Parent Container */}
            <div className="flex flex-col p-4 lg:flex-row gap-9">

                {/* High Risk Users*/}
                <div className="flex-1">
                    <div className=" grid-cols-1 md:grid-cols-2 shadow-sm p-5  dark:bg-gray-800 rounded-3xl lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        <div className="flex items-center justify-between gap-2 p-3">
                            <div className="flex items-center gap-2">
                                <Users className="h-6 w-6 text-red-500" />
                                <h1 className="font-bold text-lg dark:text-white">High Risk Users</h1>
                            </div>
                            <p className="bg-red-500/70 text-white rounded-md px-3 py-1 text-[12px] font-medium">
                                3 Active
                            </p>
                        </div>
                        {highRiskUser.map((user, index) => (
                            <div key={`left-${index}`} className="bg-white dark:bg-gray-700 rounded-lg shadow-md mb-4 p-4 border-l-4 border-red-400/70">

                                <div className="flex justify-between items-start">
                                    <div className="flex items-center text-xs">
                                        <p className="text-gray-700 dark:text-gray-400 rounded-md shadow-sm p-1 bg-gray-200 dark:bg-gray-900 mr-1">{user.usr}</p>
                                        <h3 className="font-bold text-sm dark:text-white">{user.usrName}</h3>
                                    </div>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${statusColors[user.status as keyof typeof statusColors]}`}>
                                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                    </span>
                                </div>

                                <div className="mt-1">

                                    <div className="flex justify-left items-center mt-1">
                                        <p className="text-gray-800 text-xs font-serif dark:text-gray-300">{user.hru}</p>

                                        <span className="ml-2 text-xs font-medium text-red-500 dark:text-red-400">
                                            {user.hruStatus}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-1 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                                    <span>{user.time}</span>
                                </div>
                            </div>
                        ))}
                        <button className="flex items-center gap-2 dark:text-gray-900  bg-gray-800 text-white dark:bg-gray-200 px-4 py-2 rounded-md text-sm font-serif cursor-pointer shadow-sm hover:bg-gray-500 hover:text-white dark:hover:bg-gray-600 transition-colors">
                            <Eye className="w-4 h-4" />
                            View all Risk Users
                        </button>
                    </div>

                </div>

                {/* High Risk Transactions */}
                <div className="flex-1">
                    <div className=" md:grid-cols-2 shadow-sm p-5 bg-white dark:bg-gray-800 rounded-3xl lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        <div className="flex items-center justify-between gap-2 p-3 sm:p-4 col-span-full">
                            <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                                <h1 className="font-bold text-base sm:text-lg dark:text-white">
                                    High Risk Transactions
                                </h1>
                            </div>
                            <p className="bg-red-500/70 text-white rounded-md px-3 py-1 text-[12px] font-medium">
                                3 Active
                            </p>
                        </div>

                        {highRiskTransaction.map((transaction, index) => (
                            <div
                                key={`transaction-${index}`}
                                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-3 mb-5 border-l-4 border-blue-400/70"
                            >
                                <div className="flex justify-between text-[10px] items-start">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <p className="text-gray-700 dark:text-gray-400 rounded-md shadow-sm p-1 bg-gray-200 dark:bg-gray-900 text-[10px]">
                                                {transaction.usrTwo}
                                            </p>
                                            <span className={`text-[9px] px-1.5 py-0.5 rounded-md ${statusColors[transaction.usrStatus as keyof typeof statusColors] ||
                                                'border shadow-sm text-purple-700 dark:text-purple-300'
                                                }`}>
                                                {transaction.usrStatus.charAt(0).toUpperCase() + transaction.usrStatus.slice(1)}
                                            </span>
                                        </div>



                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <p className="font-semibold text-sm text-gray-400 dark:text-white mt-1">by {transaction.name}</p>
                                            <span className="bg-red-300/45 dark:bg-red-900/20 text-red-700 dark:text-red-200 text-xs px-2 py-1 rounded-md">
                                                {transaction.firstNameStatus}
                                            </span>
                                            <span className="bg-red-300/45 shadow-sm  dark:bg-red-900/20 text-red-700 dark:text-red-200 text-xs px-2 py-1 rounded-md">
                                                {transaction.secondNameStatus}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end">
                                        <div className="flex flex-col items-end gap-0">
                                            <p className="font-bold text-lg dark:text-white">{transaction.value}</p>
                                            <p className="text-[10px] text-gray-500 dark:text-gray-400">{transaction.valuePurpose}</p>
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            {transaction.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className="flex items-center  gap-2 bg-gray-800 text-white dark:text-gray-900 dark:bg-gray-200 px-4 py-2 rounded-md cursor-pointer text-sm font-serif shadow-sm hover:bg-gray-500 hover:text-white dark:hover:bg-gray-600 transition-colors">
                            <Eye className="w-4 h-4" />
                            View all Risk Transactions
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Monitor;