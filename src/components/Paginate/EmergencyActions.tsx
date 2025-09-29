import { Shield, AlertTriangle, Power, RefreshCw, Activity } from 'lucide-react';

const EmergencyActions = () => {
    const emergencyButtons = [
        {
            icon: <Power size={18} />,
            label: "Emergency Shutdown",
            description: "Immediate system shutdown",
            severity: "critical" // red
        },
        {
            icon: <Activity size={18} />,
            label: "Freeze All Transactions",
            description: "Halt all transaction processing",
            severity: "warning" // yellow
        },
        {
            icon: <RefreshCw size={18} />,
            label: "Enable Read-Only Mode",
            description: "Switch to read-only operations",
            severity: "moderate" // orange
        }
    ];

    const getSeverityStyles = (severity: string) => {
        switch (severity) {
            case 'critical':
                return {
                    button: 'bg-red-500/50 text-white cursor-pointer hover:bg-red-400 border-red-200 hover:border-red-300 text-white-700 hover:text-white dark:bg-red-900/20 dark:hover:bg-red-900/30 dark:border-red-800 dark:hover:border-red-700 dark:text-red-400 dark:hover:text-red-300',
                    icon: 'text-red-500 dark:text-red-400 hover:text-red hover:bg-white'
                };
            case 'warning':
                return {
                    button: 'bg-yellow-500/40 cursor-pointer hover:bg-yellow-500/60 border-yellow-200 hover:border-yellow-300 text-yellow-700 hover:text-yellow-800 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/30 dark:border-yellow-800 dark:hover:border-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300',
                    icon: 'text-yellow-500 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 hover:text-yellow-800 hover:bg-yellow-200'
                };
            case 'moderate':
                return {
                    button: 'bg-gray-500/40 cursor-pointer hover:bg-gray-500/60 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-800 dark:bg-gray-900/20 dark:hover:bg-gray-900/30 dark:border-gray-800 dark:hover:border-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
                    icon: 'text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800/30 hover:text-gray-800 hover:bg-gray-200'
                };
            default:
                return {
                    button: 'bg-gray-50 cursor-pointer hover:bg-gray-100 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-300 dark:hover:text-gray-200',
                    icon: 'text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800/30 hover:text-gray-800 hover:bg-gray-200'
                };
        }
    };

    return (
        <div className="w-full p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full">
                    <Shield size={20} className="text-red-500 dark:text-red-400" />
                </div>
                <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        Emergency Actions
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        Critical system controls - use with caution
                    </p>
                </div>
            </div>

            {/* Emergency Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {emergencyButtons.map((button, index) => {
                    const styles = getSeverityStyles(button.severity);
                    return (
                        <button
                            key={index}
                            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-900 ${styles.button}`}
                        >
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className={`p-2 rounded-full bg-white/50 dark:bg-gray-800/50 ${styles.icon}`}>
                                    {button.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm sm:text-base">
                                        {button.label}
                                    </h3>
                                    <p className="text-xs opacity-80 mt-1">
                                        {button.description}
                                    </p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Warning Message */}
            <div className="mt-6 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-md">
                <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                        <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200 font-medium">
                            Warning: Emergency Actions
                        </p>
                        <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                            These actions will immediately affect system operations. Ensure all users are notified before proceeding.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmergencyActions;