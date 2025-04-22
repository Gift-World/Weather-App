const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-weather-primary animate-spin"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Loading weather data...</p>
    </div>
  )
}

export default LoadingSpinner