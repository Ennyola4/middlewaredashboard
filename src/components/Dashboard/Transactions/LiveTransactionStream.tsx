import { liveTransactionStream } from "../../../utils"

const LiveTransactionStream = () => {
  return (
    <div>
       <div className="p-2 dark:text-white ">
        {liveTransactionStream.map((stream, index) => (
          <div key={index} className="p-2 ">
            <div className="shadow-sm dark:bg-gray-900 rounded-md p-3 mb-2 gap-2 flex justify-between">
              <div>
                <div className="font-semibold">{stream.id}</div>
                <span className="text-xs">{stream.number}</span>
                <div>
                  <span className="text-xs">{stream.timeStamp}</span>
                </div>
              </div>
              <div >
                <div>
                  <span className="text-[11px] px-2 py-1 text-green-800 dark:text-green-500 rounded-md bg-green-400/20 ">{stream.status}</span>
                </div>
                <span className="text-xs ml-3">{stream.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiveTransactionStream
