import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import WeatherPage from './pages/WeatherPage'
import { WeatherProvider } from './context/WeatherContext'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<WeatherPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </WeatherProvider>
  )
}

export default App