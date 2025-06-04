"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("system")
  const [resolvedTheme, setResolvedTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  const getSystemTheme = () => {
    if (typeof window === "undefined") return "light"
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  const resolveTheme = (currentTheme) => {
    if (currentTheme === "system") {
      return getSystemTheme()
    }
    return currentTheme
  }

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

  
    document.body.style.display = "none"
    document.body.offsetHeight 
    document.body.style.display = ""

    console.log("HTML classes after applying theme:", root.className)
  }


  useEffect(() => {
    console.log("ThemeProvider: Initializing...")


    const savedTheme = localStorage.getItem("theme") || "system"
    console.log("ThemeProvider: Saved theme preference:", savedTheme)


    const systemTheme = getSystemTheme()
    console.log("ThemeProvider: Current system theme:", systemTheme)

    setTheme(savedTheme)


    const actualTheme = resolveTheme(savedTheme)
    console.log("ThemeProvider: Resolved theme:", actualTheme)

    setResolvedTheme(actualTheme)
    applyTheme(actualTheme)

    setMounted(true)
  }, [])


  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleSystemThemeChange = (e) => {
      const newSystemTheme = e.matches ? "dark" : "light"
      console.log("System theme changed to:", newSystemTheme)

    
      if (theme === "system") {
        console.log("Theme is set to system, updating resolved theme to:", newSystemTheme)
        setResolvedTheme(newSystemTheme)
        applyTheme(newSystemTheme)


        document.dispatchEvent(new Event("themechange"))
      }
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [mounted, theme])

  useEffect(() => {
    if (!mounted) return

    console.log("Theme preference changed to:", theme)
    localStorage.setItem("theme", theme)

  
    const newResolvedTheme = resolveTheme(theme)
    console.log("New resolved theme:", newResolvedTheme)

    if (newResolvedTheme !== resolvedTheme) {
      setResolvedTheme(newResolvedTheme)
      applyTheme(newResolvedTheme)


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
      const newTheme = resolvedTheme === "light" ? "dark" : "light"
      console.log("ThemeProvider: Switching from system to:", newTheme)
      setTheme(newTheme)
    } else {
      const newTheme = theme === "light" ? "dark" : "light"
      console.log("ThemeProvider: Toggling to:", newTheme)
      setTheme(newTheme)
    }
  }

  const value = {
    theme, 
    resolvedTheme,
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
