import { useState, useEffect } from 'react'
import { useWeather } from '../context/WeatherContext'
import { 
  FaTemperatureHigh, 
  FaWind, 
  FaTint, 
  FaCompass,
  FaEye,
  FaCloudSun
} from 'react-icons/fa'

const CurrentWeather = () => {
  const { weatherData } = useWeather()
  const [timeString, setTimeString] = useState('')
  
  useEffect(() => {
    if (weatherData) {
      // Update time based on timezone offset
      const updateTime = () => {
        const localTime = new Date()
        const utcTime = localTime.getTime() + (localTime.getTimezoneOffset() * 60000)
        const cityTime = new Date(utcTime + (1000 * weatherData.timezone))
        
        setTimeString(cityTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }))
      }
      
      updateTime()
      const interval = setInterval(updateTime, 60000) // Update every minute
      
      return () => clearInterval(interval)
    }
  }, [weatherData])
  
  if (!weatherData) return null
  
  const {
    name,
    main: { temp, feels_like, humidity, pressure },
    weather,
    wind,
    visibility,
    sys: { country }
  } = weatherData
  
  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 glass-effect dark:dark-glass-effect animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {name}, {country}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{timeString}</p>
          <div className="mt-2">
            <p className="text-5xl font-bold text-gray-900 dark:text-white">
              {Math.round(temp)}°C
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Feels like {Math.round(feels_like)}°C
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src={weatherIcon} 
            alt={weather[0].description} 
            className="w-24 h-24 md:w-28 md:h-28"
          />
          <p className="text-lg font-medium text-gray-800 dark:text-white capitalize">
            {weather[0].description}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="flex items-center p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
          <FaTemperatureHigh className="text-weather-primary w-5 h-5 mr-2" />
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Pressure</p>
            <p className="font-medium dark:text-white">{pressure} hPa</p>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
          <FaTint className="text-blue-500 w-5 h-5 mr-2" />
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Humidity</p>
            <p className="font-medium dark:text-white">{humidity}%</p>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
          <FaWind className="text-weather-secondary w-5 h-5 mr-2" />
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Wind Speed</p>
            <p className="font-medium dark:text-white">{wind.speed} m/s</p>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
          <FaCompass className="text-weather-accent w-5 h-5 mr-2" />
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Wind Direction</p>
            <p className="font-medium dark:text-white">{wind.deg}°</p>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
          <FaEye className="text-gray-500 w-5 h-5 mr-2" />
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Visibility</p>
            <p className="font-medium dark:text-white">{(visibility / 1000).toFixed(1)} km</p>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
          <FaCloudSun className="text-weather-warning w-5 h-5 mr-2" />
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Clouds</p>
            <p className="font-medium dark:text-white">{weatherData.clouds.all}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather