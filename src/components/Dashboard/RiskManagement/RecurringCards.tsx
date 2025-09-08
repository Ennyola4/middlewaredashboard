import { recurringCard } from "../../../utils"

const RecurringCards = () => {
    return (
        <div className="w-full bg-white dark:bg-black p-2 sm:p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 dark:bg-gray-900 shadow-sm  rounded-md">
                    <div>
                        <h3 className="text-[20px] p-5 font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                            Exception Categories
                        </h3>
                    </div>
                    {recurringCard.map((item, index) => (
                        <div key={index} >
                            <div className=" mb-3 p-5 shadow-sm rounded-md bg-white dark:bg-gray-950">
                                <div className="flex justify-between items-center dark:text-white ">
                                    <span>{item.title}</span>
                                    <span className={`text-[10px] mb-2 border rounded-full px-1 py-1 ${item.textColor}`}>{item.total}</span>
                                </div>
                                <div className="flex justify-between items-center dark:text-white ">
                                    <span className="text-[12px] text-gray-400">{item.event}</span>
                                    <span className={`text-xs text-gray-400 ${item.textColorTwo}`}>{item.status}</span>
                                </div>
                            </div>

                        </div>
                    ))

                    }
                </div>
                <div className="p-4 dark:bg-gray-900 shadow-sm  rounded-md">

                    <h3 className="text-[20px] p-5 font-semibold text-gray-600 dark:text-gray-300  border-gray-200 dark:border-gray-700 pb-2">
                        Resolution Statistics
                    </h3>
                    <div>
                        <div className="w-full flex flex-col justify-center items-center dark:text-white mt-5">
                            <h1 className="font-extrabold text-6xl text-green-500 mb-5 ">51%</h1>
                        </div>
                        <p className="flex flex-col text-lg justify-center items-center dark:text-white">
                            Auto-Resolution Rate
                        </p>
                    </div>
                    <div className="flex justify-around items-center gap-3 mt-15">
                        <span className="dark:text-white dark:bg-gray-950 p-3 rounded-md shadow-sm  w-full">
                            <div className="w-full flex flex-col justify-center items-center dark:text-white mt-2">
                                <h1 className="font-semibold text-lg ">8%</h1>
                            </div>
                            <p className="flex flex-col text-sm justify-center items-center dark:text-white">
                                Criticl pattern
                            </p>
                        </span>
                        <span className="dark:text-white dark:bg-gray-950 p-3 rounded-md shadow-sm w-full">
                            <div className="w-full flex flex-col justify-center items-center dark:text-white mt-2">
                                <h1 className="font-semibold text-lg ">23</h1>
                            </div>
                            <p className="flex flex-col text-sm justify-center items-center dark:text-white">
                                Resolved This Week
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecurringCards
