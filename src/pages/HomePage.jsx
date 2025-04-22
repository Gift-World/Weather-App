import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import { useWeather } from '../context/WeatherContext'
import { FaSun, FaCloud, FaCloudRain, FaCloudShowersHeavy, FaSnowflake, FaWind } from 'react-icons/fa'

const HomePage = () => {
  const navigate = useNavigate()
  const { recentSearches, fetchWeather } = useWeather()

  const handleRecentSearch = (search) => {
    fetchWeather(search)
    navigate('/weather')
  }

  const features = [
    {
      icon: <FaSun className="h-8 w-8 text-weather-secondary" />,
      title: "Real-time Weather",
      description: "Get up-to-date weather information for any location worldwide."
    },
    {
      icon: <FaCloud className="h-8 w-8 text-weather-primary" />,
      title: "Detailed Conditions",
      description: "View comprehensive weather data including temperature, humidity, and wind."
    },
    {
      icon: <FaCloudRain className="h-8 w-8 text-blue-500" />,
      title: "Weather Forecasts",
      description: "Plan ahead with accurate weather predictions for your location."
    },
    {
      icon: <FaWind className="h-8 w-8 text-gray-500" />,
      title: "Global Coverage",
      description: "Access weather data for cities and locations around the world."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-weather-primary to-blue-600 dark:from-blue-800 dark:to-gray-900 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Your Personalized <span className="text-weather-secondary">Weather Forecast</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Get accurate, real-time weather information for any location around the world
            </p>
            <SearchBar large={true} className="max-w-xl mx-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Everything You Need to Know About the Weather
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 glass-effect dark:dark-glass-effect"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Searches Section */}
      {recentSearches.length > 0 && (
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Recent Searches
            </h2>
            <div className="flex flex-wrap gap-4">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearch(search)}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-weather-primary hover:text-white dark:hover:bg-weather-primary transition-colors duration-300"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-weather-secondary to-weather-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to check the weather?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stay prepared for any weather condition, anywhere in the world
          </p>
          <button
            onClick={() => navigate('/weather')}
            className="px-8 py-3 bg-white text-weather-accent rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-md"
          >
            Check Weather Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage