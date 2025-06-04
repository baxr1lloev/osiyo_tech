"use client"

import { ArrowRight, Play } from "lucide-react"
import AreaChart from "./AreaChart"
import { motion } from "framer-motion"
import Counter from "./Counter"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Listen for theme changes
  useEffect(() => {
    // Check initial theme
    setIsDarkMode(document.documentElement.classList.contains("dark"))

    // Create a mutation observer to watch for class changes on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"))
        }
      })
    })

    // Start observing
    observer.observe(document.documentElement, { attributes: true })

    // Listen for theme change events
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"))
    }

    document.addEventListener("themechange", handleThemeChange)

    return () => {
      observer.disconnect()
      document.removeEventListener("themechange", handleThemeChange)
    }
  }, [])

  return (
    <section
      id="home"
      className={`pt-20 min-h-screen flex items-center transition-all duration-300 ${
        isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-blue-50 to-indigo-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                IT Solutions for
                <span className={`${isDarkMode ? "text-blue-400" : "text-blue-600"}`}> Modern Business</span>
              </h1>
              <p className={`text-xl leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Transform your business with cutting-edge technology solutions. We provide comprehensive IT consulting,
                development, and support services to drive your success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2.0, ease: "easeOut" }}
                className={`text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold ${
                  isDarkMode ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
              <button
                className={`border-2 px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                    : "border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                  <Counter targetNumber={500} suffix="+" />
                </div>
                <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                  <Counter targetNumber={98} suffix="%" />
                </div>
                <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>24/7</div>
                <div className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className={`w-full h-[500px] rounded-2xl p-8 shadow-2xl ${
                isDarkMode ? "bg-gray-800 shadow-gray-900/50" : "bg-white"
              }`}
            >
              <AreaChart />
            </div>

            <div
              className={`absolute -top-4 -right-4 text-white p-4 rounded-xl shadow-lg ${
                isDarkMode ? "bg-blue-700" : "bg-blue-600"
              }`}
            >
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
