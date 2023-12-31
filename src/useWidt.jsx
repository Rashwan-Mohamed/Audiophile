import { useState, useEffect } from 'react'

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    console.log('resizedd')
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return width
}
