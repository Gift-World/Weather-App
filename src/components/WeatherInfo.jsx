import { useWeather } from '../context/WeatherContext'
import CurrentWeather from './CurrentWeather'
import SearchBar from './SearchBar'
import WeatherAlert from './WeatherAlert'
import LoadingSpinner from './LoadingSpinner'

const WeatherInfo = () => {
  const { weatherData, loading, error } = useWeather()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <SearchBar className="mb-6" />
        
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <WeatherAlert message={error} type="error" />
        ) : weatherData ? (
          <CurrentWeather />
        ) : (
          <WeatherAlert 
            message="Search for a city to see the weather forecast" 
            type="info"
          />
        )}
      </div>
    </div>
  )
}

export default WeatherInfo