import { Lock } from "lucide-react";
import { Activity } from "lucide-react";
import { Eye } from "lucide-react";
import { CircleAlert } from 'lucide-react';
import { Layers } from 'lucide-react';
import { Database } from 'lucide-react'
import { Shield } from 'lucide-react'



const recentAuthEvents = [
    {
        event: "Failed login attempt",
        icon: <CircleAlert className="w-5 h-5" />,
        authId: "temitope@gmail.com",
        eventId: "192.168.1.105",
        time: "2 mins ago",
        status: "blocked",
    },
    {
        event: "Token Refresh",
        authId: "system.service",
        eventId: "10.0.0.15",
        time: "2 mins ago",
        status: "success",
    },
    {
        event: "Multi-Device Login",
        authId: "admin@alertgroup.com",
        eventId: "203.45.67.89",
        time: "5 mins ago",
        status: "Flagged",
    },
];

const logAndmon = [
    {
        log: "API Call Tracking",
        status: "Active",
        icon: <Layers className="w-5 h-5" />
    },
    {
        log: "Performance Monitoring",
        status: "Active",
        icon: <Database className="w-5 h-5" />
    },
    {
        log: "Error Tracking",
        status: "Active",
        icon: <Shield className="w-5 h-5" />
    },

]

const SecondMonitor = () => {
    return (
        <div className="p-4 dark:bg-gray-950 space-y-6">
            {/* Main container */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/*AUTHENTICATION AND AUTHORIZATION*/}
                <div className="flex-1">

                    <div className="shadow-sm p-5 bg-gray-300 dark:bg-gray-800 rounded-3xl">

                        <h1 className="text-xl sm:text-lg p-2 font-bold text-black dark:text-white mb-4">Authentication & Authorization</h1>
                        <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-gray-50 dark:bg-gray-950 dark:text-white rounded-2xl shadow-lg">

                            <div className="flex flex-col items-center col-span-1">
                                <h1 className="text-xl font-extrabold text-green-400">154,234</h1>
                                <p className="text-[10px] font-serif">Authenticated</p>
                            </div>
                            <div className="flex flex-col items-center col-span-1">
                                <h1 className="text-xl font-extrabold text-red-500">2,555</h1>
                                <p className="text-[10px] font-serif">Failed</p>
                            </div>


                            <div className="flex flex-col items-center col-span-1">
                                <h1 className="text-xl font-extrabold text-blue-400">12,450</h1>
                                <p className="text-[10px] font-serif">Active Tokens</p>
                            </div>
                            <div className="flex flex-col items-center col-span-1">
                                <h1 className="text-xl font-extrabold">98.37%</h1>
                                <p className="text-[10px] font-serif">Success Rate</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-1 sm:p-4">
                            <div className="flex items-center gap-2">
                                <Lock  className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                                <h1 className="font-bold text-base sm:text-lg dark:text-white">
                                    Recent Auth Events
                                </h1>
                            </div>

                        </div>

                        <div className="space-y-4 mt-1">
                            {recentAuthEvents.map((event, index) => (
                                <div
                                    key={`event-${index}`}
                                    className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 border-l-4 border-blue-400"
                                >
                                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap">

                                                <p className="font-semibold text-sm text-gray-700 dark:text-white flex items-center gap-2">
                                                    <CircleAlert className="h-4 w-4 text-red-500" />
                                                    {event.event}
                                                </p>

                                                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${event.status === 'blocked' ? 'border-[0.5px] text-red-600  dark:text-red-400' :
                                                    event.status === 'success' ? 'border-[0.5px] text-green-700  dark:text-green-400' :
                                                        'border-[0.5px] text-yellow-700 dark:text-yellow-400'
                                                    }`}>
                                                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                                </span>
                                            </div>

                                            <div className="mt-2 space-y-1">
                                                <p className="text-gray-500 w-22 dark:text-gray-400 p-1  text-xs">
                                                    {event.authId}
                                                </p>
                                                
                                            </div>
                                            <span className="inline-block bg-gray-300/55 dark:bg-gray-900/50 text-gray-700 dark:text-blue-200 text-xs px-2 py-1 rounded-md">
                                                    IP: {event.eventId}
                                                </span>
                                        </div>

                                        <div className="flex flex-col items-end sm:items-start md:items-end">
                                            <p className="font-bold text-sm md:text-lg dark:text-white">
                                                {event.event.split(' ')[0]} {/* Show first word of event */}
                                            </p>
                                            <p className="text-[10px] text-gray-500 dark:text-gray-400">
                                                {event.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*LOGGING AND MONITORING */}
                <div className="flex-1 h-fit">
                    <div className="shadow-sm p-5 bg-gray-300 dark:bg-gray-800 rounded-3xl">

                        <h1 className=" text-xl p-2 font-semibold text-black dark:text-white mb-4">Logging & Monitoring</h1>
                        <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-gray-50 dark:bg-gray-950 dark:text-white rounded-2xl shadow-lg">

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
                        <div className="w-full space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Log Storage Usage</span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white">78.5%</span>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                                <div
                                    className="bg-blue-600 h-1 rounded-full"
                                    style={{ width: '78.5%' }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                            <div className="flex items-center gap-2">
                                <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                                <h1 className="font-bold text-base sm:text-lg dark:text-white">
                                    Event Logs
                                </h1>
                            </div>

                        </div>

                        <div className="space-y-4 w-full">
                            {logAndmon.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                >
            
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                            {item.icon}
                                        </div>
                                        <p className="font-serif text-sm text-gray-800 dark:text-gray-100">
                                            {item.log}
                                        </p>
                                    </div>

                                    
                                    <span className={`px-2 py-1 text-[10px] font-serif rounded-md ${item.status === 'Active'
                                        ? 'border-[0.5px] text-green-500 dark:text-green-500'
                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                            <button className="flex items-center gap-2  bg-white dark:bg-gray-200 px-4 py-2 rounded-md text-sm font-serif cursor-pointer shadow-sm hover:bg-gray-500 hover:text-white dark:hover:bg-gray-600 transition-colors">
                                <Eye className="w-4 h-4" />
                                View Full Logs
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondMonitor;