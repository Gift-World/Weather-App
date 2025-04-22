import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeather } from '../context/WeatherContext'
import { FaSearch, FaHistory, FaTimes } from 'react-icons/fa'

const SearchBar = ({ large = false, className = "" }) => {
  const [city, setCity] = useState('')
  const [showRecent, setShowRecent] = useState(false)
  const { fetchWeather, recentSearches } = useWeather()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeather(city.trim())
      setCity('')
      navigate('/weather')
    }
  }

  const handleRecentSearch = (search) => {
    fetchWeather(search)
    setShowRecent(false)
    navigate('/weather')
  }

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onFocus={() => setShowRecent(true)}
          className={`w-full ${large ? 'pl-12 pr-4 py-4 text-lg' : 'pl-10 pr-4 py-2'} rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-weather-primary shadow-md dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
        />
        <button
          type="submit"
          className={`absolute ${large ? 'left-4 top-4' : 'left-3 top-2.5'} text-gray-500 dark:text-gray-300 hover:text-weather-primary focus:outline-none`}
          aria-label="Search"
        >
          <FaSearch className={large ? 'h-5 w-5' : 'h-4 w-4'} />
        </button>
        {city && (
          <button
            type="button"
            onClick={() => setCity('')}
            className={`absolute ${large ? 'right-4 top-4' : 'right-3 top-2.5'} text-gray-500 dark:text-gray-300 hover:text-weather-primary focus:outline-none`}
            aria-label="Clear search"
          >
            <FaTimes className={large ? 'h-5 w-5' : 'h-4 w-4'} />
          </button>
        )}
      </form>
      
      {showRecent && recentSearches.length > 0 && (
        <div 
          className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
          onMouseLeave={() => setShowRecent(false)}
        >
          <div className="p-2 flex items-center border-b border-gray-200 dark:border-gray-700">
            <FaHistory className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Searches</span>
          </div>
          <ul>
            {recentSearches.map((search, index) => (
              <li key={index}>
                <button
                  onClick={() => handleRecentSearch(search)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
                >
                  {search}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar