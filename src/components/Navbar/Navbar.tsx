import { useState, useEffect } from 'react';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex overflow-hidden flex-col  shadow-sm dark:bg-gray-900 dark:text-white p-3 sm:p-5 md:p-6 lg:p-7 ">
      <div className="flex  sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left side - Title, status, and clock */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <h3 className="text-2xl xs:text-2xl sm:text-[28px] text-gray-600 font-semibold dark:text-white font-serif">
            Dashboard
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2">
              <span className="px-4 py-1 xs:px-3 xs:py-1 text-xs text-green-700 font-serif bg-green-300/45 rounded-full dark:text-green-100 whitespace-nowrap dark:bg-green-900">
                Operational
              </span>

            </div>
            <div className="text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap ">
              {currentTime.toLocaleDateString()}
            </div>
            <div className="text-xs  rounded-md">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
          </div>
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
          {/* Notification icon */}
          <button
            className="bg-blue-300 p-2 dark:bg-gray-300 shadow-sm cursor-pointer text-black rounded-full 
             transition-all duration-300 ease-in-out
             hover:bg-gray-400 dark:hover:bg-gray-700
             hover:scale-110 active:scale-95
             hover:shadow-md hover:ring-6 hover:ring-gray-400/30
             dark:hover:ring-gray-600/30 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 hover:rotate-42"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          {/* Settings button */}
          <button
            className="flex shadow-lg items-center justify-center sm:gap-2 p-2  text-black rounded-full 
             bg-blue-300 dark:bg-gray-300 dark:text-black
             transition-all duration-300 ease-out
             hover:bg-gray-400 dark:hover:bg-gray-700
             hover:scale-[1.03] active:scale-[0.98]
             hover:shadow-sm hover:border-gray-400
             dark:hover:border-gray-600
             group cursor-pointer hover:ring-6 hover:ring-gray-400/30 dark:hover:ring-gray-600/30 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 
               transition-transform duration-500 ease-in-out
               group-hover:rotate-85"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="hidden xs:inline whitespace-nowrap text-xs sm:text-sm
                   transition-all duration-200
                   group-hover:font-medium group-hover:text-gray-800
                   dark:group-hover:text-gray-200">
              Settings
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;