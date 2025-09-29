import { useState } from 'react';
import { productFeatureControls } from '../../utils';
import { Settings, Shield } from 'lucide-react';
import EmergencyActions from './EmergencyActions';

const systemControl = [
    {
        title: "Fraud Detection",
        desc: "Rate limiting for API calls"
    },
    {
        title: "Auto Alerts",
        desc: "Automatic SMS/Email alerts"
    },
    {
        title: "API Throttling",
        desc: "Rate limiting for API calls"
    },
    {
        title: "Maintenance Mode",
        desc: "System-wide maintenance mode"
    },
];

// Toggle Switch Component
const ToggleSwitch = ({ isOn, onToggle, id }: { isOn: boolean, onToggle: () => void, id: string }) => {
    return (
        <div className="flex items-center">
            <label htmlFor={id} className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        id={id}
                        className="sr-only"
                        checked={isOn}
                        onChange={onToggle}
                    />
                    <div className={`block w-10 sm:w-12 h-5 sm:h-6 rounded-full transition-colors duration-300 ease-in-out ${isOn ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}></div>
                    <div className={`absolute left-1 top-1 bg-white w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-transform duration-300 ease-in-out transform ${isOn ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                        }`}></div>
                </div>
            </label>
        </div>
    );
};

const ControlCenter = () => {
    // State to manage toggle states for each control
    const [toggleStates, setToggleStates] = useState<Record<number, boolean>>({
        0: true,  // Fraud Detection - default on
        1: false, // Auto Alerts - default off
        2: true,  // API Throttling - default on
        3: false, // Maintenance Mode - default off
    });

    // State to manage feature toggle states
    const [featureToggleStates, setFeatureToggleStates] = useState<Record<string, boolean>>({});

    const handleToggle = (index: number) => {
        setToggleStates(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleFeatureToggle = (key: string) => {
        setFeatureToggleStates(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div>
            <div className="p-2 sm:p-3">
                <div className="mb-6">
                    <div className="flex items-center gap-3  sm:p-5">
                        <Settings className="w-8 h-8 sm:w-8 sm:h-8 text-green-500" />
                        <h1 className=" lg:text-2xl sm:text-sm md:text-sm text-gray-600 dark:text-gray-200 font-semibold font-serif">
                            Service Status Monitor
                        </h1>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {systemControl.map((control, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex-1 min-w-0 pr-4">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 capitalize">
                                    {control.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {control.desc}
                                </p>
                                <div className="mt-2">
                                    <span className={`inline-flex animate-pulse items-center px-2 py-1 rounded-full text-xs font-medium ${toggleStates[index]
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                        }`}>
                                        <div className={`w-2 h-2 rounded-full mr-1 ${toggleStates[index] ? 'bg-green-500' : 'bg-gray-400'
                                            }`}></div>
                                        {toggleStates[index] ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-shrink-0">
                                <ToggleSwitch
                                    isOn={toggleStates[index]}
                                    onToggle={() => handleToggle(index)}
                                    id={`toggle-${index}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="mt-6 p-4 mb-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-2">
                        System Status Summary
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-blue-700 dark:text-blue-300">
                            Active: {Object.values(toggleStates).filter(Boolean).length} controls
                        </span>
                        <span className="text-blue-700 dark:text-blue-300">
                            Inactive: {Object.values(toggleStates).filter(state => !state).length} controls
                        </span>
                    </div>
                </div>
            </div>

            {/* Product Feature Controls Section */}
            <div className="mb-6">
                <div className="flex items-centergap-3  sm:p-5">
                    <Shield className="w-8 h-8 sm:w-8 sm:h-8 text-green-500" />
                    <h1 className=" lg:text-2xl sm:text-sm md:text-sm text-gray-600 dark:text-gray-200 font-semibold font-serif">
                        Product Feature Controls

                    </h1>
                </div>

            </div>
            <div className="p-2 sm:p-3 mt-1">
                {productFeatureControls.map((features, index) => (
                    <div key={index} className="mb-8 shadow-sm p-2 rounded-md dark:bg-gray-900 dark:border-gray-600 dark:border-1">
                        {/* Product Title */}
                        <div className="mb-4 ">
                           <div className='flex items-center gap-1'>
                             <features.icon className={`${features.textColor} w-6 h-6 inline-block mr-2`} />
                            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white capitalize">
                                {features.product}
                            </h2>
                           </div>
                        
                        </div>

                        {/* Feature Controls Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            {/* Feature One */}
                            <div className="flex justify-between items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                                <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white capitalize flex-1 min-w-0 pr-3">
                                    {features.featureOne}
                                </span>
                                <div className="flex-shrink-0">
                                    <ToggleSwitch
                                        isOn={featureToggleStates[`${index}-0`] || false}
                                        onToggle={() => handleFeatureToggle(`${index}-0`)}
                                        id={`feature-toggle-${index}-0`}
                                    />
                                </div>
                            </div>

                            {/* Feature Two */}
                            <div className="flex justify-between items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                                <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white capitalize flex-1 min-w-0 pr-3">
                                    {features.featureTwo}
                                </span>
                                <div className="flex-shrink-0">
                                    <ToggleSwitch
                                        isOn={featureToggleStates[`${index}-1`] || false}
                                        onToggle={() => handleFeatureToggle(`${index}-1`)}
                                        id={`feature-toggle-${index}-1`}
                                    />
                                </div>
                            </div>

                            {/* Feature Three */}
                            <div className="flex justify-between items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                                <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white capitalize flex-1 min-w-0 pr-3">
                                    {features.featureThree}
                                </span>
                                <div className="flex-shrink-0">
                                    <ToggleSwitch
                                        isOn={featureToggleStates[`${index}-2`] || false}
                                        onToggle={() => handleFeatureToggle(`${index}-2`)}
                                        id={`feature-toggle-${index}-2`}
                                    />
                                </div>
                            </div>

                            {/* Feature Four */}
                            <div className="flex justify-between items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                                <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white capitalize flex-1 min-w-0 pr-3">
                                    {features.featureFour}
                                </span>
                                <div className="flex-shrink-0">
                                    <ToggleSwitch
                                        isOn={featureToggleStates[`${index}-3`] || false}
                                        onToggle={() => handleFeatureToggle(`${index}-3`)}
                                        id={`feature-toggle-${index}-3`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           <EmergencyActions />
        </div>
    );
};

export default ControlCenter;