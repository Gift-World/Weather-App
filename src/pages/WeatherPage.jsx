import { useEffect } from 'react'
import { useWeather } from '../context/WeatherContext'
import WeatherInfo from '../components/WeatherInfo'

const WeatherPage = () => {
  const { weatherData, getWeatherBackground } = useWeather()
  
  useEffect(() => {
    // Set the page title based on weather data
    if (weatherData) {
      document.title = `${weatherData.name} Weather - SkyView`
    } else {
      document.title = 'Weather Forecast - SkyView'
    }
  }, [weatherData])
  
  return (
    <div className={`min-h-screen pt-6 pb-12 weather-transition ${getWeatherBackground()}`}>
      <div className="container mx-auto px-4">
        <WeatherInfo />
      </div>
    </div>
  )
}

export default WeatherPage