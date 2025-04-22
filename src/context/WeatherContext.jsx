import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const WeatherContext = createContext()

export const useWeather = () => useContext(WeatherContext)

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches')
    return saved ? JSON.parse(saved) : []
  })

  const fetchWeather = async (city) => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await axios.get(`https://weather-backend-2-4qft.onrender.com/weather?city=${city}`)
      setWeatherData(response.data)
      
      // Update recent searches
      const searches = [...recentSearches]
      // Remove if already exists
      const existingIndex = searches.findIndex(search => search.toLowerCase() === city.toLowerCase())
      if (existingIndex !== -1) {
        searches.splice(existingIndex, 1)
      }
      // Add to beginning of array
      searches.unshift(city)
      // Keep only the 5 most recent searches
      const updatedSearches = searches.slice(0, 5)
      setRecentSearches(updatedSearches)
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches))
    } catch (err) {
      console.error('Error fetching weather data:', err)
      setError(
        err.response?.data?.error || 
        'Failed to fetch weather data. Please try again.'
      )
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  // Get weather description based background class
  const getWeatherBackground = () => {
    if (!weatherData) return 'bg-gradient-to-br from-blue-400 to-blue-600'
    
    const weatherId = weatherData.weather[0].id
    
    // Clear sky
    if (weatherId === 800) {
      return 'bg-clear-sky bg-cover bg-center'
    }
    // Clouds
    else if (weatherId >= 801 && weatherId <= 804) {
      return 'bg-cloudy-sky bg-cover bg-center'
    }
    // Rain, drizzle
    else if ((weatherId >= 300 && weatherId <= 321) || (weatherId >= 500 && weatherId <= 531)) {
      return 'bg-rainy-sky bg-cover bg-center'
    }
    // Snow
    else if (weatherId >= 600 && weatherId <= 622) {
      return 'bg-snowy-sky bg-cover bg-center'
    }
    // Thunderstorm
    else if (weatherId >= 200 && weatherId <= 232) {
      return 'bg-stormy-sky bg-cover bg-center'
    }
    // Atmosphere (fog, mist, etc)
    else {
      return 'bg-cloudy-sky bg-cover bg-center'
    }
  }

  const value = {
    weatherData,
    loading,
    error,
    fetchWeather,
    recentSearches,
    getWeatherBackground
  }

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}