import { Activity, TrendingUp, Eye, BellRing } from "lucide-react";
import { aiRecommendation } from "../../utils";

const transactionMonitor = [
    {
        id: "TXN-2kmyw14t8",
        status: "success",
        via: "Business Banking",
        action: "withdrawal",
        amount: "₦85,319",
        time: "21:53:35",
        risk: "20%"
    },
    {
        id: "TXN-2kmyw14t9",
        status: "success",
        via: "Gold Bucks",
        action: "withdrawal",
        amount: "₦85,319",
        time: "21:53:35",
        risk: "56%"
    },
    {
        id: "TXN-2kmyw14t0",
        status: "success",
        via: "E-cam",
        action: "Transfer",
        amount: "₦85,319",
        time: "21:53:35",
        risk: "76%"
    },
    {
        id: "TXN-2kmyw14t1",
        status: "success",
        via: "POS",
        action: "Transfer",
        amount: "₦85,319",
        time: "21:53:35",
        risk: "56%"
    },
    {
        id: "TXN-2kmyw14t2",
        status: "success",
        via: "POS",
        action: "Transfer",
        amount: "₦35,319",
        time: "21:53:35",
        risk: "56%"
    },
    {
        id: "TXN-2kmyw14t1",
        status: "success",
        via: "POS",
        action: "Transfer",
        amount: "₦85,319",
        time: "21:53:35",
        risk: "56%"
    },
    {
        id: "TXN-2kmyw14t2",
        status: "success",
        via: "POS",
        action: "Transfer",
        amount: "₦35,319",
        time: "21:53:35",
        risk: "56%"
    },
    {
        id: "TXN-2kmyw14t1",
        status: "success",
        via: "POS",
        action: "Transfer",
        amount: "₦85,319",
        time: "21:53:35",
        risk: "56%"
    },
    {
        id: "TXN-2kmyw14t2",
        status: "success",
        via: "POS",
        action: "Transfer",
        amount: "₦35,319",
        time: "21:53:35",
        risk: "56%"
    },
    {
        id: "TXN-2kmyw14t1",
        status: "success",
        via: "POS",
        action: "Transfer",
        amount: "₦85,319",
        time: "21:53:35",
        risk: "56%"
    },
    {
        id: "TXN-2kmyw14t2",
        status: "success",
        via: "POS",
        action: "Transfer",
        amount: "₦35,319",
        time: "21:53:35",
        risk: "56%"
    },

];





const LastMonitor = () => {
    return (
        <div className="w-full p-2 bg-white dark:bg-gray-950">
            {/* Main container with responsive flex layout */}
            <div className="flex flex-col lg:flex-row gap-4 w-full">
                {/* Transaction Monitor Container */}
                <div className="w-full lg:w-1/2 space-y-4 p- sm:p-6 rounded-md  dark:bg-gray-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Activity className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                            <h2 className="text-lg font-semibold dark:text-white">Transaction Monitor</h2>
                        </div>
                        <div className="flex bg-green-400/20 px-2 py-1 rounded-md items-center gap-1">
                            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <p className="text-sm text-green-600 text-[12px] dark:text-gray-300">+42.8B vol</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-3 dark:bg-gray-900 dark:text-white rounded-md shadow-sm">
                        <div className="flex flex-col items-center col-span-1">
                            <h1 className="text-xl font-extrabold text-green-400">2,449,877</h1>
                            <p className="text-[10px] font-serif">Info Logs</p>
                        </div>
                        <div className="flex flex-col items-center col-span-1">
                            <h1 className="text-xl font-extrabold text-yellow-500">5,678</h1>
                            <p className="text-[10px] font-serif">Warnings</p>
                        </div>
                        <div className="flex flex-col items-center col-span-1">
                            <h1 className="text-xl font-extrabold text-red-400">1,234</h1>
                            <p className="text-[10px] font-serif">Errors</p>
                        </div>
                        <div className="flex flex-col items-center col-span-1">
                            <h1 className="text-xl font-extrabold">145ms</h1>
                            <p className="text-[10px] font-serif">Average Response</p>
                        </div>
                    </div>

                    {/* Transactions List */}
                    <div className="max-h-[400px] overflow-y-auto pr-2">
                        {transactionMonitor.map((transaction, index) => (
                            <div
                                key={`transaction-${index}`}
                                className="bg-white dark:bg-gray-900 p-3 sm:p-4 rounded-md shadow-sm border-l-2 border-blue-400 mb-3"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-medium px-2 py-1 bg-gray-200 shadow-sm rounded-md text-gray-700 dark:text-gray-400 dark:bg-gray-800">
                                            {transaction.id}
                                        </span>
                                        <span className={`px-2 py-1 text-[10px] rounded-md ${transaction.status.trim() === 'success'
                                            ? 'bg-green-400/20 text-green-900 dark:bg-green-900/30 dark:text-green-400'
                                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                            }`}>
                                            {transaction.status.trim()}
                                        </span>
                                    </div>
                                    <span className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                                        {transaction.amount}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                                            {transaction.via.trim()} • {transaction.action}
                                        </span>
                                        <span className={`px-2 py-1 text-[10px] rounded-md ${parseFloat(transaction.risk) > 50
                                            ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                            }`}>
                                            Risk: {transaction.risk}
                                        </span>
                                    </div>
                                    <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                                        {transaction.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Recommendations Container */}
                <div className="w-full lg:w-1/2 space-y-4 p-4 sm:p-6 rounded-xl  dark:bg-gray-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <BellRing className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <h2 className="text-lg font-semibold dark:text-white">AI Recommendations</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-[10px] border-[0.5px] rounded-md text-blue-600 px-2 py-1 dark:text-blue-400">
                                3 Pendings
                            </p>
                        </div>
                    </div>

                    {/* Recommendations List */}
                    <div className="max-h-[500px] overflow-y-auto pr-2">
                        {aiRecommendation.map((ai, index) => (
                            <div
                                key={`alert-${index}`}
                                className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border-l-4 mb-3 ${
                                          ai.actionStatus === 'CRITICAL' ? 'border-red-500' :
                                          ai.actionStatus === 'WARNING' ? 'border-yellow-500' :
                                          ai.actionStatus === 'MEDIUM' ? 'border-orange-500' : 'border-blue-400/50'
                                        }"
                            >
                                {/* Action and Status */}
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-800 dark:text-white">{ai.action}</h3>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${ai.actionStatus === 'CRITICAL' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                                        ai.actionStatus === 'WARNING' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                            ai.actionStatus === 'MEDIUM' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                                                'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                                        }`}>
                                        {ai.actionStatus}
                                    </span>
                                </div>

                                {/* Description and Status */}
                                <div className="flex justify-between items-start mb-3">
                                    <p className="text-[12px] text-gray-600 dark:text-gray-300">{ai.desc}</p>
                                    <span className={`px-2 py-1 rounded-md text-[10px] border ${ai.descStatus === 'Active' ? 'text-green-500 border-green-300 dark:bg-green-900/50 dark:text-green-400' :
                                        ai.descStatus === 'investigating' ? 'text-blue-500 border-blue-300 dark:bg-blue-900/50 dark:text-blue-400' :
                                            ai.descStatus === 'resolved' ? 'text-gray-500 border-gray-300 dark:bg-gray-600 dark:text-gray-300' :
                                                'text-purple-500 border-purple-300 dark:bg-purple-900/50 dark:text-purple-400txt text-[8px]'
                                        }`}>
                                        {ai.descStatus}
                                    </span>
                                </div>

                                <div className="flex justify-between items-start mb-3">
                                    <p className="text-[11px] text-sm text-gray-600 dark:text-gray-300">Impact: {ai.impact}</p>
                                    <p className="text-[11px] text-sm text-gray-600 dark:text-gray-300">Action: {ai.action}</p>

                                </div>

                                {/* Buttons */}
                                {(ai.buttonOne || ai.buttonTwo) && (
                                    <div className="flex gap-3 mt-3">
                                        {ai.buttonOne && (
                                            <button className="flex-1 py-2 px-4 cursor-pointer dark:text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 rounded text-sm font-medium transition-colors">
                                                {ai.buttonOne}
                                            </button>
                                        )}
                                        {ai.buttonTwo && (
                                            <button className="flex-1 py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors">
                                                {ai.buttonTwo}
                                            </button>
                                        )}
                                    </div>
                                )}

                                {/* Source and Time */}
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-3">
                                    <span>Source: {ai.source}</span>
                                    <span>{ai.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className=" flex items-center justify-center gap-2 bg-blue-600 text-white dark:text-gray-900 dark:bg-gray-200 px-4 py-2 rounded-md text-sm font-serif cursor-pointer shadow-sm hover:bg-gray-500 hover:text-white dark:hover:bg-gray-600 transition-colors mt-4">
                        <Eye className="w-4 h-4" />
                        View Full Logs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LastMonitor;