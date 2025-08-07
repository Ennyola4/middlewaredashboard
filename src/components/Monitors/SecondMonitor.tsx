import { Lock } from "lucide-react";
import { Activity } from "lucide-react";

const recentAuthEvents = [
    {
        event: "Failed login attempt",
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

const SecondMonitor = () => {
    return (
        <div className="p-4 dark:bg-gray-950 space-y-6">
            {/* Main container with flex layout */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* First card - takes full width on mobile, half on larger screens */}
                <div className="flex-1">

                    <div className="shadow-sm p-5 bg-gray-300 dark:bg-gray-800 rounded-3xl">

                        <h1 className="text-xl sm:text-lg p-2 font-bold text-black dark:text-white mb-4">Authentication & Authorization</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 justify-center align-center p-7 bg-gray-50 dark:bg-gray-950 dark:text-white rounded-2xl shadwo-lg">
                            <div>
                                <h1 className="text-xl font-extrabold text-green-400">154,234</h1>

                                <p className="text-[10px] justify-center align-center font-serif">Authenticated</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-extrabold text-red-400">2,555</h1>
                                <p className="text-[10px] justify-center align-center  font-serif">Failed</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-extrabold text-blue-400">12,450</h1>
                                <p className="text-[10px] justify-center align-center  font-serif">Access Token</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-extrabold text-green-400">98.37%</h1>
                                <p className="text-[10px] justify-center align-center  font-serif">Success Rate</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                            <div className="flex items-center gap-2">
                                <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                                <h1 className="font-bold text-base sm:text-lg dark:text-white">
                                    Recent Auth Events
                                </h1>
                            </div>
                            {/* <p className="bg-red-500 text-white rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium">
                                {recentAuthEvents.length} Events
                            </p> */}
                        </div>

                        <div className="space-y-4 mt-4">
                            {recentAuthEvents.map((event, index) => (
                                <div
                                    key={`event-${index}`}
                                    className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 border-l-4 border-blue-400"
                                >
                                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap">

                                                <p className="font-semibold text-sm text-gray-700 dark:text-white">
                                                    {event.event}
                                                </p>

                                                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${event.status === 'blocked' ? 'bg-red-500/35 text-red-700 dark:bg-red-800/10 dark:text-red-300' :
                                                    event.status === 'success' ? 'bg-green-500/35 text-green-700 dark:bg-green-800/10 dark:text-green-300' :
                                                        'bg-yellow-500/35 text-yellow-700 dark:bg-yellow-800/10 dark:text-yellow-300'
                                                    }`}>
                                                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                                </span>
                                            </div>

                                            <div className="mt-2 space-y-1">
                                                <p className="text-gray-500 w-22 dark:text-gray-400 rounded-md shadow-sm p-1  text-xs">
                                                    {event.authId}
                                                </p>
                                                <span className="inline-block bg-blue-300/55 dark:bg-blue-900/20 text-blue-700 dark:text-blue-200 text-xs px-2 py-1 rounded-md">
                                                    IP: {event.eventId}
                                                </span>
                                            </div>
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

                {/* Second card - same as first but you can customize differently */}
                <div className="flex-1">
                    <div className="shadow-sm p-5 bg-gray-300 dark:bg-gray-800 rounded-3xl">

                        <h1 className=" text-2xl p-2 font-semibold text-black dark:text-white mb-4">Logging & Monitoring</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 justify-center align-center p-7 bg-gray-50 dark:bg-gray-950 dark:text-white rounded-2xl shadwo-lg">
                            <div>
                                <h1 className="text-xl font-extrabold text-green-400">154,234</h1>

                                <p className="text-[10px] justify-center align-center font-serif">Authenticated</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-extrabold text-red-400">2,555</h1>
                                <p className="text-[10px] justify-center align-center  font-serif">Failed</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-extrabold text-blue-400">12,450</h1>
                                <p className="text-[10px] justify-center align-center  font-serif">Access Token</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-extrabold text-green-400">98.37%</h1>
                                <p className="text-[10px] justify-center align-center  font-serif">Success Rate</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
                            <div className="flex items-center gap-2">
                                <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                                <h1 className="font-bold text-base sm:text-lg dark:text-white">
                                    Event Logs
                                </h1>
                            </div>
                            {/* <p className="bg-red-500 text-white rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium">
                                {recentAuthEvents.length} Logs
                            </p> */}
                        </div>

                        <div className="space-y-4 mt-4">
                            {recentAuthEvents.map((event, index) => (
                                <div
                                    key={`log-${index}`}
                                    className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 border-l-4 border-green-400"
                                >
                                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <p className="text-gray-500 dark:text-gray-400 rounded-md shadow-sm p-1 bg-gray-200 dark:bg-gray-900 text-xs">
                                                    {event.authId}
                                                </p>
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${event.status === 'blocked' ? 'bg-red-500/35 text-red-700 dark:bg-red-800/10 dark:text-red-300' :
                                                    event.status === 'success' ? 'bg-green-500/35 text-green-700 dark:bg-green-800/10 dark:text-green-300' :
                                                        'bg-yellow-500/35 text-yellow-700 dark:bg-yellow-800/10 dark:text-yellow-300'
                                                    }`}>
                                                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                                </span>
                                            </div>

                                            <div className="mt-2 space-y-1">
                                                <p className="font-semibold text-sm text-gray-700 dark:text-white">
                                                    {event.event}
                                                </p>
                                                <span className="inline-block bg-purple-300/55 dark:bg-purple-900/20 text-purple-700 dark:text-purple-200 text-xs px-2 py-1 rounded-md">
                                                    Source: {event.eventId}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end sm:items-start md:items-end">
                                            <p className="font-bold text-sm md:text-lg dark:text-white">
                                                {event.time}
                                            </p>
                                            <p className="text-[10px] text-gray-500 dark:text-gray-400">
                                                {event.status}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondMonitor;