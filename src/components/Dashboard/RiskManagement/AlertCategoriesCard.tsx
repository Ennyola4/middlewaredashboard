import { alertCategoriesCard } from "../../../utils"

const AlertCategoriesCard = () => {
    return (
        <div className="bg-white dark:bg-black p-4 sm:p-5 mt-4">
            <div className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
                {alertCategoriesCard.map((item, index) => (
                    <div key={index}>
                        <div className="p-4 flex justify-between sm:p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow mb-3">
                            <div>
                                <div>
                                    {item.title}
                                </div>
                                <span className="text-xs text-gray-500 font-extralight">{item.value}</span>
                            </div>
                            <div className={`${item.textColor}`} >
                                <span className="px-2 py-1 border text-[10px] rounded-full">{item.status}</span>
                            </div>
                        </div>

                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default AlertCategoriesCard
