import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-weather-dark shadow-inner py-8 mt-auto glass-effect dark:dark-glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-weather-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                <path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"/>
              </svg>
              <span className="font-semibold text-lg text-weather-dark dark:text-white">SkyView</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Get accurate weather forecasts for any location
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-500 hover:text-weather-primary dark:text-gray-400 dark:hover:text-weather-primary transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-weather-primary dark:text-gray-400 dark:hover:text-weather-primary transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-weather-primary dark:text-gray-400 dark:hover:text-weather-primary transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} SkyView. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer