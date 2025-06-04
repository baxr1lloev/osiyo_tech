import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"

export const metadata = {
  title: "OsiyoTech",
  description: "Technology solutions and services",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add script to detect and apply system theme immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check if user has a saved preference
                const savedTheme = localStorage.getItem('theme');
                
                // If user prefers system or has no preference, check system
                if (!savedTheme || savedTheme === 'system') {
                  // Check system preference
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  // Apply theme immediately to prevent flash
                  if (systemDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } else {
                  // Apply saved preference
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                }
                
                // Set up listener for system changes
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                mediaQuery.addEventListener('change', (e) => {
                  // Only apply if user prefers system
                  if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'system') {
                    if (e.matches) {
                      document.documentElement.classList.add('dark');
                      document.documentElement.style.colorScheme = 'dark';
                    } else {
                      document.documentElement.classList.remove('dark');
                      document.documentElement.style.colorScheme = 'light';
                    }
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}