import { FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa'

const WeatherAlert = ({ message, type = 'info' }) => {
  const bgColor = type === 'error' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-blue-50 dark:bg-blue-900/20'
  const textColor = type === 'error' ? 'text-red-800 dark:text-red-200' : 'text-blue-800 dark:text-blue-200'
  const borderColor = type === 'error' ? 'border-red-300 dark:border-red-800' : 'border-blue-300 dark:border-blue-800'
  const Icon = type === 'error' ? FaExclamationTriangle : FaInfoCircle
  const iconColor = type === 'error' ? 'text-red-500' : 'text-blue-500'

  return (
    <div className={`rounded-lg border ${borderColor} ${bgColor} p-6 animate-fade-in glass-effect dark:dark-glass-effect`}>
      <div className="flex items-center">
        <Icon className={`h-5 w-5 ${iconColor} mr-3`} />
        <p className={`text-sm ${textColor}`}>{message}</p>
      </div>
    </div>
  )
}

export default WeatherAlert