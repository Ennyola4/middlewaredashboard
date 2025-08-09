import { Monitor } from "lucide-react";
import { Database } from 'lucide-react'
import { Activity } from "lucide-react";
import { AlertTriangle } from "lucide-react"
import { BellRing } from 'lucide-react';
import { Eye } from 'lucide-react';





const systemHealth = [
    {
        name: "Business Banking API",
        icon: <Database className="w-4 h-4" />,
        status: "HEALTHY",
        uptime: "Uptime",
        uptimeRate: "99.98%",
        cpu: "CPU",
        cpuRate: "45%",
        memory: "memory",
        memoryRate: "67%",
        response: "Response",
        responseRate: "120ms"
    },
    {
        name: "Mobile Banking API",
        status: "HEALTHY",
        uptime: "Uptime",
        uptimeRate: "99.95%",
        cpu: "CPU",
        cpuRate: "52%",
        memory: "memory",
        memoryRate: "71%",
        response: "Response",
        responseRate: "98ms"
    },
    {
        name: "Gold Bucks System",
        status: "WARNING",
        uptime: "Uptime",
        uptimeRate: "99.87%",
        cpu: "CPU",
        cpuRate: "78%",
        memory: "memory",
        memoryRate: "85%",
        response: "Response",
        responseRate: "245ms"
    },
    {
        name: "E-Cam Service",
        status: "HEALTHY",
        uptime: "Uptime",
        uptimeRate: "99.99%",
        cpu: "CPU",
        cpuRate: "34%",
        memory: "memory",
        memoryRate: "45%",
        response: "Response",
        responseRate: "87ms"
    },
    {
        name: "POS Integration",
        status: "CRITICAL",
        uptime: "Uptime",
        uptimeRate: "98.12%",
        cpu: "CPU",
        cpuRate: "92%",
        memory: "memory",
        memoryRate: "94%",
        response: "Response",
        responseRate: "1200ms"
    },
    {
        name: "Core Database",
        status: "HEALTHY",
        uptime: "Uptime",
        uptimeRate: "99.99%",
        cpu: "CPU",
        cpuRate: "56%",
        memory: "memory",
        memoryRate: "62%",
        response: "Response",
        responseRate: "45ms"
    },



]

const activeAlerts = [
    {
        action: "High Risk Transaction Detected",
        actionStatus: "CRITICAL",
        desc: "Transaction TXN-002-2024 flagged for manual review - ₦1.5M withdrawal from new device",
        descStatus: "Active",
        source: "Mobile Banking",
        time: "15:38:10",
        buttonOne: "Acknowlegdge",
        buttonTwo: "Resolve"
    },
    {
        action: "POS System Performance Degraded",
        actionStatus: "WARNING",
        desc: "Response times exceeding 1000ms threshold, CPU usage at 92%",
        descStatus: "Active",
        source: "POS integration",
        time: "15:32:10",
        buttonOne: "Acknowlegdge",
        buttonTwo: "Resolve"
    },
    {
        action: "Multiple Failed Login Attempts",
        actionStatus: "MEDIUM",
        desc: "15 failed login attempts detected from IP 197.xxx.xxx.xxx in 5 minutes",
        descStatus: "investigating",
        source: "Business Banking",
        time: "15:25:10",
    },
    {
        action: "Third-Party API Timeout",
        actionStatus: "WARNING",
        desc: "Gold Bucks external payment gateway experiencing intermittent timeouts",
        descStatus: "resolved",
        source: "Gold Bucks",
        time: "15:18:10",
    },
     {
        action: "Multiple Failed Login Attempts",
        actionStatus: "MEDIUM",
        desc: "15 failed login attempts detected from IP 197.xxx.xxx.xxx in 5 minutes",
        descStatus: "investigating",
        source: "Business Banking",
        time: "15:25:10",
    },
    {
        action: "Third-Party API Timeout",
        actionStatus: "WARNING",
        desc: "Gold Bucks external payment gateway experiencing intermittent timeouts",
        descStatus: "resolved",
        source: "Gold Bucks",
        time: "15:18:10",
    },
     {
        action: "Multiple Failed Login Attempts",
        actionStatus: "MEDIUM",
        desc: "15 failed login attempts detected from IP 197.xxx.xxx.xxx in 5 minutes",
        descStatus: "investigating",
        source: "Business Banking",
        time: "15:25:10",
    },
    {
        action: "Third-Party API Timeout",
        actionStatus: "WARNING",
        desc: "Gold Bucks external payment gateway experiencing intermittent timeouts",
        descStatus: "resolved",
        source: "Gold Bucks",
        time: "15:18:10",
    }
]

const ThirdMonitor = () => {
    return (
        <div className="flex max-h-[630px] flex-col lg:flex-row gap-4 lg:gap-5 p-2 dark:bg-black sm:p-4">
            {/* First Column */}
            <div className="space-y-3 sm:space-y-4 w-full p-4 sm:p-6 rounded-2xl shadow-sm bg-gray-300 dark:bg-gray-800 mt-1">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <Monitor className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                    <h1 className="font-bold text-base sm:text-lg dark:text-white">System Health</h1>
                </div>

                {/* Scrollable Cards Container */}
                <div className="max-h-[500px] overflow-y-auto pr-2">
                    {systemHealth.map((service, index) => (
                        <div
                            key={`service-${index}`}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-3 sm:p-4 border-l-4 border-blue-400 mb-3"
                        >
                            <div className="flex flex-col gap-3">
                                {/* Header - Service name and Status */}
                                <div className="flex xs:flex-row justify-between items-center gap-1 w-full">
                                    <div className="flex items-center gap-1">
                                        <Database className="text-gray-400" />
                                        <p className="font-semibold text-sm sm:text-base text-gray-700 dark:text-white">
                                            {service.name}
                                        </p>
                                    </div>
                                    <span
                                        className={`px-1 py-1 rounded-md w-fit text-[10px] ${service.status === 'HEALTHY'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                            : service.status === 'WARNING'
                                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                : service.status === 'CRITICAL'
                                                    ? 'bg-red-200 text-red-900 dark:bg-red-900/50 dark:text-red-300 font-bold'
                                                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                            }`}
                                    >
                                        {service.status}
                                    </span>
                                </div>

                                {/* Critical Warning Message - Only for POS Integration */}
                                {service.name === "POS Integration" && service.status === "CRITICAL" && (
                                    <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-md flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-red-500 dark:text-red-300  flex-shrink-0" />
                                        <p className="text-xs text-red-800 dark:text-red-200">
                                            Service experiencing critical issues. High latency and resource usage detected.
                                        </p>
                                    </div>
                                )}

                                {/* Metrics grid - Responsive columns */}
                                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3">
                                    {/* Uptime */}
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-500 dark:text-white">{service.uptime}</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-white">
                                                <div
                                                    className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${parseFloat(service.uptimeRate)}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs dark:text-white whitespace-nowrap">{service.uptimeRate}</span>
                                        </div>
                                    </div>

                                    {/* CPU */}
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-500 dark:text-white">{service.cpu}</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-600">
                                                <div
                                                    className={`h-2 rounded-full transition-all duration-300 ${parseFloat(service.cpuRate) > 70 ? 'bg-red-400' : 'bg-green-500'
                                                        }`}
                                                    style={{ width: service.cpuRate }}
                                                ></div>
                                            </div>
                                            <span className="text-xs dark:text-white whitespace-nowrap">{service.cpuRate}</span>
                                        </div>
                                    </div>

                                    {/* Memory */}
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{service.memory}</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-600">
                                                <div
                                                    className={`h-2 rounded-full transition-all duration-300 ${parseFloat(service.memoryRate) > 70 ? 'bg-red-400' : 'bg-green-500'
                                                        }`}
                                                    style={{ width: service.memoryRate }}
                                                ></div>
                                            </div>
                                            <span className="text-xs dark:text-white whitespace-nowrap">{service.memoryRate}</span>
                                        </div>
                                    </div>

                                    {/* Response */}
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{service.response}</p>
                                        <div className="flex items-center gap-1">
                                            <Activity size={12} className="text-gray-800 dark:text-gray-300" />
                                            <p className="text-sm font-medium dark:text-white">{service.responseRate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4 w-full p-6 rounded-2xl bg-gray-300 dark:bg-gray-800">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <BellRing className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                        <h1 className="font-bold text-base sm:text-lg dark:text-white">Active Alerts</h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <p className="text-[10px]  bg-red-400/40 rounded-md text-white px-2 py-1 dark:text-white">1 Critical</p>
                        <p className="text-[11px] bg-yellow-400/40 rounded-md px-2 py-1 text-white dark:text-white">2 Alerts</p>
                    </div>
                </div>

                {/* Scrollable container with fixed height */}
                <div className="max-h-[500px] overflow-y-auto pr-2"> {/* Adjust height as needed */}
                    {activeAlerts.map((alert, index) => (
                        <div
                            key={`alert-${index}`}
                            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow border-l-4 mb-3 ${
                                       alert.actionStatus === 'CRITICAL' ? 'border-red-500' :
                                       alert.actionStatus === 'WARNING' ? 'border-yellow-500' :
                                       alert.actionStatus === 'MEDIUM' ? 'border-orange-500' : 'border-blue-400/50'
                                        }"
                        >
                            {/* Action and Status */}
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-gray-800 dark:text-white">{alert.action}</h3>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${alert.actionStatus === 'CRITICAL' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                                    alert.actionStatus === 'WARNING' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                        alert.actionStatus === 'MEDIUM' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                                            'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                                    }`}>
                                    {alert.actionStatus}
                                </span>
                            </div>

                            {/* Description and Status */}
                            <div className="flex justify-between items-start mb-3">
                                <p className="text-[13px] text-gray-600 dark:text-gray-300">{alert.desc}</p>
                                <span className={`px-2 py-1 rounded-md text-[10px] border ${alert.descStatus === 'Active' ? 'text-green-500 border-green-300 dark:bg-green-900/50 dark:text-green-400' :
                                    alert.descStatus === 'investigating' ? 'text-blue-500 border-blue-300 dark:bg-blue-900/50 dark:text-blue-400' :
                                        alert.descStatus === 'resolved' ? 'text-gray-500 border-gray-300 dark:bg-gray-600 dark:text-gray-300' :
                                            'text-purple-500 border-purple-300 dark:bg-purple-900/50 dark:text-purple-400'
                                    }`}>
                                    {alert.descStatus}
                                </span>
                            </div>

                            {/* Source and Time */}
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                                <span>Source: {alert.source}</span>
                                <span>{alert.time}</span>
                            </div>

                            {/* Conditionally render buttons only if they exist */}
                            {(alert.buttonOne || alert.buttonTwo) && (
                                <div className="flex gap-3">
                                    {alert.buttonOne && (
                                        <button className="flex-1 py-2 px-4 cursor-pointer dark:text-white bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 rounded text-sm font-medium transition-colors">
                                            {alert.buttonOne}
                                        </button>
                                    )}
                                    {alert.buttonTwo && (
                                        <button className="flex-1 py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors">
                                            {alert.buttonTwo}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="flex items-center gap-2  bg-white dark:bg-gray-200 px-4 py-2 rounded-md text-sm font-serif cursor-pointer shadow-sm hover:bg-gray-500 hover:text-white dark:hover:bg-gray-600 transition-colors">
                        <Eye className="w-4 h-4" />
                        View Full Logs
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ThirdMonitor