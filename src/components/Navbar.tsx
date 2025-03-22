import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import BottomNavigationComponent from './BottomNavigationComponent'
import DrawerComponent from './DrawerComponent'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav>{isMobile ? <BottomNavigationComponent /> : <DrawerComponent />}</nav>
  )
}

export default Navbar
