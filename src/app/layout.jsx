import { Inter } from "next/font/google"
import { ThemeProvider } from "./contexts/theme-context"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "OsiyoTech - Your IT Solutions Partner",
  description: "Leading IT solutions provider in Uzbekistan",
  icons: {
    icon: "./osiyi.jpg", 
    apple: "./osiyi.jpg",
    shortcut: "./osiyi.jpg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="/osiyi.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
