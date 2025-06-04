"use client"

import { Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, resolvedTheme, toggleDarkMode, mounted } = useTheme()
  const [isSystemDark, setIsSystemDark] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(0)

  // Track system theme changes for better visual feedback
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const updateSystemTheme = () => {
      setIsSystemDark(mediaQuery.matches)
      // Force re-render when system theme changes
      setForceUpdate((prev) => prev + 1)
    }

    // Set initial state
    updateSystemTheme()

    // Listen for changes
    mediaQuery.addEventListener("change", updateSystemTheme)

    // Listen for theme changes from other components
    const handleThemeChange = () => {
      setForceUpdate((prev) => prev + 1)
    }

    document.addEventListener("themechange", handleThemeChange)

    return () => {
      mediaQuery.removeEventListener("change", updateSystemTheme)
      document.removeEventListener("themechange", handleThemeChange)
    }
  }, [mounted])

  // Show a simple loading state
  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-200 rounded-full animate-pulse">
        <div className="w-4 h-4 bg-white rounded-full m-1"></div>
      </div>
    )
  }

  const handleToggle = () => {
    console.log("Toggle button clicked, current theme:", theme, "resolved:", resolvedTheme)
    toggleDarkMode()
  }

  // Determine which icon to show based on resolved theme
  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="w-2.5 h-2.5 text-blue-600" />
    }
    return resolvedTheme === "dark" ? (
      <Moon className="w-2.5 h-2.5 text-gray-700" />
    ) : (
      <Sun className="w-2.5 h-2.5 text-yellow-500" />
    )
  }

  // Determine toggle position based on resolved theme
  const getTogglePosition = () => {
    if (theme === "system") {
      return "translate-x-3" // Middle position
    }
    return resolvedTheme === "dark" ? "translate-x-6" : "translate-x-0"
  }

  // Determine background color based on resolved theme (not theme preference)
  const getBackgroundColor = () => {
    return resolvedTheme === "dark" ? "bg-gray-700" : "bg-gray-200"
  }

  // Determine toggle knob color based on resolved theme
  const getKnobColor = () => {
    return resolvedTheme === "dark" ? "bg-gray-200" : "bg-white"
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleToggle}
        className={`relative inline-flex items-center justify-center w-12 h-6 ${getBackgroundColor()} rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800`}
        aria-label={
          theme === "system"
            ? `System mode (currently ${resolvedTheme})`
            : resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
        }
        title={
          theme === "system"
            ? `Following system (${resolvedTheme} mode)`
            : `${resolvedTheme === "dark" ? "Dark" : "Light"} mode`
        }
        key={`toggle-${forceUpdate}-${resolvedTheme}`} // Force re-render when theme changes
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 ${getKnobColor()} rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${getTogglePosition()}`}
        >
          {getIcon()}
        </span>
      </button>

      {/* Optional: Show current mode text */}
      <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
        {theme === "system" ? `Auto (${resolvedTheme})` : theme}
        {theme === "system" && <span className="ml-1">{isSystemDark ? "🌙" : "☀️"}</span>}
      </span>
    </div>
  )
}
