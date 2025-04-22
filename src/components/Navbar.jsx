import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useWeather } from '../context/WeatherContext'
import { FaSun, FaMoon, FaBars, FaTimes, FaSearch } from 'react-icons/fa'

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const { fetchWeather } = useWeather()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      fetchWeather(searchQuery.trim())
      navigate('/weather')
      setSearchQuery('')
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-weather-dark shadow-md glass-effect dark:dark-glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-weather-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"/>
              </svg>
              <span className="font-bold text-xl text-weather-dark dark:text-white">SkyView</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-weather-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-300" />
            </form>
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Home
            </Link>
            <Link to="/weather" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Weather
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <FaMoon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
              aria-label="Main menu"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-weather-dark shadow-lg px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:glass-effect">
          <form onSubmit={handleSearch} className="relative mb-3">
            <input
              type="text"
              placeholder="Search city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-weather-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-300" />
          </form>
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/weather"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Weather
          </Link>
          <button
            onClick={toggleTheme}
            className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? (
              <>
                <FaSun className="h-5 w-5 mr-2 text-yellow-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FaMoon className="h-5 w-5 mr-2 text-gray-700" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar