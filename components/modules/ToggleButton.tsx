'use client'
import { useEffect, useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

const ToggleButton = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newTheme = isDark ? 'light' : 'dark'

    html.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-8 flex items-center rounded-full p-1 transition-all duration-500 relative
        ${isDark
          ? 'bg-gradient-to-r from-gray-800 to-gray-600 shadow-inner'
          : 'bg-gradient-to-r from-yellow-200 to-yellow-100 shadow-md'}
      `}
    >
      <span
        className={`absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500
          ${isDark
            ? 'translate-x-6 bg-blue-500'
            : 'translate-x-0 bg-yellow-400'}
        `}
      >
        {isDark ? (
          <LuMoon className="text-white text-base" />
        ) : (
          <LuSun className="text-white text-base" />
        )}
      </span>
    </button>
  )
}

export default ToggleButton
