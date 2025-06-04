"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("system") // Default to system
  const [resolvedTheme, setResolvedTheme] = useState("light") // The actual theme being used
  const [mounted, setMounted] = useState(false)

  // Function to get system theme
  const getSystemTheme = () => {
    if (typeof window === "undefined") return "light"
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  // Function to resolve theme (system -> actual theme)
  const resolveTheme = (currentTheme) => {
    if (currentTheme === "system") {
      return getSystemTheme()
    }
    return currentTheme
  }

  // Apply theme to DOM
  const applyTheme = (themeToApply) => {
    if (typeof document === "undefined") return

    const root = document.documentElement
    console.log("Applying theme:", themeToApply)

    if (themeToApply === "dark") {
      root.classList.add("dark")
      root.style.colorScheme = "dark"
    } else {
      root.classList.remove("dark")
      root.style.colorScheme = "light"
    }

    // Force a repaint to ensure styles are applied
    document.body.style.display = "none"
    document.body.offsetHeight // Trigger a reflow
    document.body.style.display = ""

    console.log("HTML classes after applying theme:", root.className)
  }

  // Initialize theme on mount
  useEffect(() => {
    console.log("ThemeProvider: Initializing...")

    // Get saved theme preference (default to system)
    const savedTheme = localStorage.getItem("theme") || "system"
    console.log("ThemeProvider: Saved theme preference:", savedTheme)

    // Get current system theme
    const systemTheme = getSystemTheme()
    console.log("ThemeProvider: Current system theme:", systemTheme)

    setTheme(savedTheme)

    // Resolve the actual theme to use
    const actualTheme = resolveTheme(savedTheme)
    console.log("ThemeProvider: Resolved theme:", actualTheme)

    setResolvedTheme(actualTheme)
    applyTheme(actualTheme)

    setMounted(true)
  }, [])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleSystemThemeChange = (e) => {
      const newSystemTheme = e.matches ? "dark" : "light"
      console.log("System theme changed to:", newSystemTheme)

      // If theme is set to system, update the resolved theme
      if (theme === "system") {
        console.log("Theme is set to system, updating resolved theme to:", newSystemTheme)
        setResolvedTheme(newSystemTheme)
        applyTheme(newSystemTheme)

        // Force update all components
        document.dispatchEvent(new Event("themechange"))
      }
    }

    // Add listener for system theme changes
    mediaQuery.addEventListener("change", handleSystemThemeChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [mounted, theme])

  // Save theme preference when it changes
  useEffect(() => {
    if (!mounted) return

    console.log("Theme preference changed to:", theme)
    localStorage.setItem("theme", theme)

    // Update resolved theme when theme preference changes
    const newResolvedTheme = resolveTheme(theme)
    console.log("New resolved theme:", newResolvedTheme)

    if (newResolvedTheme !== resolvedTheme) {
      setResolvedTheme(newResolvedTheme)
      applyTheme(newResolvedTheme)

      // Force update all components
      document.dispatchEvent(new Event("themechange"))
    }
  }, [theme, mounted, resolvedTheme])

  const setLightMode = () => {
    console.log("ThemeProvider: Setting light mode")
    setTheme("light")
  }

  const setDarkMode = () => {
    console.log("ThemeProvider: Setting dark mode")
    setTheme("dark")
  }

  const setSystemMode = () => {
    console.log("ThemeProvider: Setting system mode")
    setTheme("system")
  }

  const toggleDarkMode = () => {
    console.log("ThemeProvider: Toggle called, current theme:", theme, "resolved:", resolvedTheme)

    if (theme === "system") {
      // If currently on system, toggle to opposite of current resolved theme
      const newTheme = resolvedTheme === "light" ? "dark" : "light"
      console.log("ThemeProvider: Switching from system to:", newTheme)
      setTheme(newTheme)
    } else {
      // Toggle between light and dark
      const newTheme = theme === "light" ? "dark" : "light"
      console.log("ThemeProvider: Toggling to:", newTheme)
      setTheme(newTheme)
    }
  }

  const value = {
    theme, // The theme preference (light, dark, system)
    resolvedTheme, // The actual theme being used
    isDarkMode: resolvedTheme === "dark",
    isSystemMode: theme === "system",
    toggleDarkMode,
    setLightMode,
    setDarkMode,
    setSystemMode,
    setTheme,
    mounted,
  }

  console.log("ThemeProvider: Rendering with theme:", theme, "resolved:", resolvedTheme, "mounted:", mounted)

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
