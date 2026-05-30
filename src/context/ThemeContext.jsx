import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const nextTheme = { dark: 'light', light: 'system', system: 'dark' }

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system')

  useEffect(() => {
    const COLORS = {
      dark:  { bg: '8 11 18',     text: '248 250 252' },
      light: { bg: '248 250 252', text: '15 23 42' },
    }

    const applyTheme = () => {
      const resolved =
        theme === 'system'
          ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          : theme

      const root = document.documentElement
      root.setAttribute('data-theme', resolved)

      // Directly set CSS variables so Vite cache can never stale them
      const c = COLORS[resolved]
      root.style.setProperty('--color-primary', c.bg)
      root.style.setProperty('--color-text-primary', c.text)
      root.style.setProperty('--color-overlay', resolved === 'dark' ? '255 255 255' : '0 0 0')
    }

    applyTheme()
    localStorage.setItem('theme', theme)

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', applyTheme)
      return () => mq.removeEventListener('change', applyTheme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, nextTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
