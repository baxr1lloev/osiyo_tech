import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"

export const metadata = {
  title: "OsiyoTech",
  description: "Technology solutions and services",
}

export default  function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                
                const savedTheme = localStorage.getItem('theme');
                
            
                if (!savedTheme || savedTheme === 'system') {
                  
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (systemDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } else {
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                }
                
               
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                mediaQuery.addEventListener('change', (e) => {
                  
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