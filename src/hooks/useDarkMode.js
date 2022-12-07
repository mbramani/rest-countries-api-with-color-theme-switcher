import { useEffect, useState } from 'react'

function useDarkMode() {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    if ((theme = 'dark')) {
      setTheme('light')
      localStorage.theme = 'light'
    } else {
      setTheme('dark')
      localStorage.theme = 'dark'
    }
  }

  return { theme, toggleTheme }
}

export default useDarkMode
