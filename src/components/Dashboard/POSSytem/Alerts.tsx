import { AlertCircle, CheckCircle2 } from "lucide-react"
import { alerts } from "../../../utils"

const Alerts = () => {
  return (
    <div>
       <div className="space-y-4">
              {alerts.map(alert => (
                <div key={alert.id} className={`p-3 rounded-lg text-sm ${alert.severity === 'high'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  : alert.severity === 'medium'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                  <div className="flex items-start gap-2">
                    {alert.severity === 'high'
                      ? <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                      : <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                    }
                    <span>{alert.message}</span>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Alerts
